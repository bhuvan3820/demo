import{defineconfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineconfig({
    base:'/demo/',
    plugins:[react()]
})