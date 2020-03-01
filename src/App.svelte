<script>

    // router
    import Router from 'svelte-spa-router';
    import routes from './routes/routes.js';

    import {fade} from 'svelte/transition'

    import Header from "./components/header/Header.svelte";

</script>

<Header/>
<div in:fade="{{delay: 250, duration: 300}}">
    <Router {routes} />
</div>

<style>

	div {
        position: absolute;
        top: 48px;
        left: 0;
        right: 0;
	}

</style>
