// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: 'https://hongzaopaomo.github.io/aiea.github.io/',
  build: {
    outDir: 'docs'
  }
})