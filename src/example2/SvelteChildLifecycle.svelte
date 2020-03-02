<script>

    import {onMount, beforeUpdate, afterUpdate, onDestroy, tick} from 'svelte'

    // onMount
    onMount(() => {
        console.log('child onMount..');
    });

    // beforeUpdate
    beforeUpdate(() => {
        console.log('child beforeUpdate..');
    });

    // afterUpdate
    afterUpdate(() => {
        console.log('child afterUpdate..');
    });

    // onDestroy
    onDestroy(() => {
        console.log('child onDestroy..');
    });

    // tick


</script>