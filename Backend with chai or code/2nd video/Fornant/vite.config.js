import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
server:{
port:4000,
proxy:{
  "/api":"http://localhost:4000"
}
},

  plugins: [react()],
})
