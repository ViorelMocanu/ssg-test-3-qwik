import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';

export default extendConfig(baseConfig, () => {
	return {
		build: {
			ssr: true,
			rollupOptions: {
			input: ['@qwik-city-plan'],
			},
		},
		plugins: [
			staticAdapter({
				origin: 'https://ssg-test-3-qwik.netlify.app', // @TODO: change this if required
			}),
		],
	};
});
