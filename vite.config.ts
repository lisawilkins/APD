import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // reactRouter() supplies the React transform, so @vitejs/plugin-react is not
  // needed alongside it. Tailwind must come first.
  plugins: [tailwindcss(), reactRouter()],
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    strictPort: !!process.env.PORT,
  },
})
