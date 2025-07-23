import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig( {
	plugins: [ react() ],
	build: {
		lib: {
			entry: './react/index.js',
			name: 'SnippoUI',
			formats: [ 'es', 'cjs' ],
			fileName: ( format ) => {
				if ( format === 'es' ) {
					return 'snippo-ui.es.js';
				}
				if ( format === 'cjs' ) {
					return 'snippo-ui.cjs.js';
				}
				return `snippo-ui.${ format }.js`;
			},
		},
		rollupOptions: {
			external: [ 'react', 'react-dom' ],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
	test: {
		environment: 'jsdom',
		setupFiles: [ '@testing-library/jest-dom' ],
		globals: true,
		coverage: {
			reporter: [ 'text', 'json', 'html' ],
		},
	},
} );
