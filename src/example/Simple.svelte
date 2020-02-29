<script>

    let count = 0;
    let count2 = 100;

    const addCount = () => {
        count2++
    }


</script>

<button on:click={() => count += 1}>
    {count}
</button>

<button on:click={addCount}>
    {count2}
</button>

<style>

    button {
        background-color: #4287f5; /* Green */
        border: none;
        outline: none;
        color: white;
        padding: 8px;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        display: inline-block;
    }

</style>