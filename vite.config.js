import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import envCompatible from 'vite-plugin-env-compatible'

// Cargar variables de entorno desde el archivo .env

// https://vitejs.dev/config/
export default defineConfig({
    envPrefix: 'WEATHER_APP',
    plugins: [react(), envCompatible()],
})
