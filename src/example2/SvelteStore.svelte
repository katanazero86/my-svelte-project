<script>
    import {storeNum} from '../store/store.js';
    import {get} from 'svelte/store';

    const storeNumSet = (value = 1, event) => {
        storeNum.set(value);
    };

    const storeNumUpdate = (event) => {
        storeNum.update((value) => {
            return value+1;
        });
    };

    let storeNumTemp = 0;
    const getStoreNum = () => {
      storeNumTemp = get(storeNum);
    };


</script>

<div>
    <button on:click={(event) => storeNumSet(1, event)}>
        storeNum set(1)
    </button>

    <button on:click={storeNumUpdate}>
        storeNum update(increase)
    </button>

    <p>
        최신값 가지고 오기
        <button on:click={getStoreNum}>
            getStoreNum
        </button>
        get : {storeNumTemp}
    </p>
</div>


<style>
    button {
        border: none;
        outline: none;
        padding: 8px;
        background-color: #1abc9c;
        border-radius: 8px;
        font-size: 14px;
        color: white;
    }
</style>