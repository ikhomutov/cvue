import { loadEnv } from 'vite'
import { resolve, isAbsolute } from 'node:path'
import { readFileSync, existsSync } from 'node:fs'

export default function localResume() {
  let localFilePath = null

  return {
    name: 'local-resume',

    config(config, { mode, command }) {
      const env = loadEnv(mode, config.root || process.cwd(), 'VITE_')
      const resumeUrl = env.VITE_RESUME_URL

      if (!resumeUrl || resumeUrl.startsWith('http://') || resumeUrl.startsWith('https://')) {
        return
      }

      const root = config.root || process.cwd()
      localFilePath = isAbsolute(resumeUrl) ? resumeUrl : resolve(root, resumeUrl)

      if (!existsSync(localFilePath)) {
        throw new Error(
          `[local-resume] File not found: ${localFilePath}\n` +
          `  VITE_RESUME_URL was set to "${resumeUrl}" but the file does not exist.`
        )
      }

      const servedPath = command === 'serve'
        ? '/__local-resume.yaml'
        : '/resume-data.yaml'

      return {
        define: {
          'import.meta.env.VITE_RESUME_URL': JSON.stringify(servedPath)
        }
      }
    },

    configureServer(server) {
      if (!localFilePath) return

      server.middlewares.use((req, res, next) => {
        if (req.url !== '/__local-resume.yaml') return next()
        const content = readFileSync(localFilePath, 'utf-8')
        res.setHeader('Content-Type', 'text/yaml')
        res.end(content)
      })
    },

    generateBundle() {
      if (!localFilePath) return

      this.emitFile({
        type: 'asset',
        fileName: 'resume-data.yaml',
        source: readFileSync(localFilePath, 'utf-8')
      })
    }
  }
}
