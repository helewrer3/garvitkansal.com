// import adapter from '@sveltejs/adapter-static';
// import preprocess from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	preprocess: [
// 		preprocess({
// 			postcss: true
// 		})
// 	],
// 	kit: {
// 		adapter: adapter({
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: null
// 		}),
// 		prerender: {
// 			entries: [
// 				'/',
// 				'/achievements',
// 				'/education',
// 				'/projects',
// 				'/responsibilities',
// 				'/workExperience'
// 			]
// 		}
// 	}
// };

// export default config;

import azure from 'svelte-adapter-azure-swa';

export default {
	kit: {
		adapter: azure()
	}
};
