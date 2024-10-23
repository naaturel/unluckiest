import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	server: {
		host: '0.0.0.0',
		port: 3000,
	},
	preview: {
		host: '0.0.0.0',
		port: 3000, // Change this to your desired port
	},
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});