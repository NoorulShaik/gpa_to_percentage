import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/gpa_to_percentage/', // 👈 Tells GitHub Pages where to find your app files
})