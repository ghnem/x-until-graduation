import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import process from 'process';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: '/x-until-graduation',
			assets: '/x-until-graduation'
		},
		target: '#svelte',
		
	}
};

export default config;
