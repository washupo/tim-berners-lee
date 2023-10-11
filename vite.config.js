import path from "path";
import { resolve } from "path";
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/tim-berners-lee/',
	  root: path.resolve(__dirname),
  	build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
      },
    },
	server: {
    port: 8080,
    hot: true
	},
  },
})

