import { resolve } from 'path'
import { defineConfig } from "vite";
export default defineConfig({
    base:"/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                main1: resolve(__dirname, 'inside/main.html'),
                about: resolve(__dirname, 'inside/about.html'),
                animations: resolve(__dirname, 'inside/animations.html'),
                coding: resolve(__dirname, 'inside/coding.html'),
                illustrations: resolve(__dirname, 'inside/illustrations.html'),
                
            },
        },
    },
})