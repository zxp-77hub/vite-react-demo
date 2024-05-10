import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import scss from 'vite-plugin-sass'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: '@import "@/styles/mixin.scss";',
      }
    }
  },
  server:{
    port:3000, // 端口
    open:true, // 项目运行时自动打开浏览器
    cors: true, //允许跨域
      // proxy:{
      //   '/api':{
      //       target:"http://localhost:8000",
      //       changeOrigin:true,
      //       rewrite:(path)=>path.replace(/^\/api/,''),
      //   }
      // }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 定义一个别名'@'指向项目src目录
      '@components': path.resolve(__dirname, './src/components'), // 定义别名'components'指向组件目录
    },
  }
})
