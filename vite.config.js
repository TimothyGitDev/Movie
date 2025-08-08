import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react()],
    server: {
        // Настройка сервера
        port: 3000, 
        cors: true,
    },
    build: {
        outDir: 'dist', // Папка для вывода
        // Добавьте другие настройки, если необходимо
    }
});