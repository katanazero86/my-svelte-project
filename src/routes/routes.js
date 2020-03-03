import Index from '../Index.svelte'
import RouteParams from '../example2/RouterParams.svelte'
import SvelteTransition from '../example3/SvelteTransition.svelte';

const routes = {
    '/': Index,
    '/route-params/:id' : RouteParams,
    '/transition' : SvelteTransition,
};

export default routes;