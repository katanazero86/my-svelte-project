<script>

    import Arithmetic from './example/Arithmetic.svelte';

    let inputText = '';

	export let name;

	// tutorial
	export let bar = 'optional default value';
	export const hello = 'hello svelte world!';
	
	export const format = n => n.toFixed(2);

	export function test(name) {
		alert(`hello ${name}!`);
		return '';
	}
	
	let num = 0;
	const increaseNum = () => num++;

</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<hr>
	<p>{hello}</p>
	<p>{bar}</p>
	<p>{format(3.5555)}</p>
	{test('스벨트')}

	<button on:click={increaseNum}>값 증가 시키기</button>
	<h3>{num}</h3>
	<input type="text" bind:value="{inputText}">
    <div>
     {inputText}
    </div>
</main>
<hr>
<div>
    <Arithmetic/>
</div>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>