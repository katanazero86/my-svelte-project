// rollup.config.js input 에 시작점

import App from './App.svelte';

const app = new App({
	target: document.querySelector('#app'),
	// props: {
	// 	name: 'world'
	// }
});

export default app;