<script>
    import {location, querystring} from 'svelte-spa-router'
    import {fade} from 'svelte/transition'

    export let params = {};
</script>

<div in:fade="{{duration: 300}}">
    <p>
        location : {$location}
    </p>
    <p>
        querystring : {$querystring}
    </p>
    <p>
        {params.id}
    </p>
</div>