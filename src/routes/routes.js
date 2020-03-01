import Index from '../Index.svelte'
import RouteParams from '../example2/RouterParams.svelte'

const routes = {
    '/': Index,
    '/route-params/:id' : RouteParams
};

export default routes;