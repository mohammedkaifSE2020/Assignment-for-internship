import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy : {
      '/api' : {
        //target: 'https://employeemanagement-backend-0c7y.onrender.com', // Replace this with your backend's address (e.g., Express or FastAPI)
        target: 'https://assignment-for-internship-backend.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [react()],
})
