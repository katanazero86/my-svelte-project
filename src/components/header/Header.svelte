<script>

    import {push, pop, replace} from 'svelte-spa-router'

</script>

<div class="header-wrap">
    <div class="header-body">
        <div class="header-body-item" on:click={() => push('/')}>
            Home
        </div>
        <div class="header-body-item" on:click={() => push('/route-params/1000?name=test')}>
            Router params example
        </div>
        <div class="header-body-item">
            Store example
        </div>
    </div>
</div>

<style type="text/scss">

    .header-wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0 6px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 48px;
        background-color: #1abc9c;
        z-index: 1;

        .header-body {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        .header-body-item {
            font-size: 15px;
            font-weight: 700;
            padding: 0 6px;
            cursor: pointer;
            height: 100%;
            display: flex;
            align-items: center;
            margin: -6px 0;
        }

        .header-body-item:hover {
            background-color: #159d82;
        }

    }




</style>