<script>
    import {storeNum, storeNum2, storeNum3, derivedStateNumDouble, derivedStateNumDouble2, derivedStateNum} from '../store/store.js';
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

    const noWatchStoreNum = storeNum2.subscribe((value) => {
        // got a subscriber!! print
       console.log(value); // 100 &&
    });

    const noWatchStoreNum2 = storeNum2.subscribe((value) => {
        console.log(value); // 100
    });

    noWatchStoreNum2();
    noWatchStoreNum();

    // 해당 파생 상태값은 함수를 반환
    derivedStateNum.subscribe(callback => {
        callback();
    });

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

    <p>
        storeNum3 : <input type="text" bind:value={$storeNum3}> <br>
        derivedState : {$derivedStateNumDouble} <br>
        derivedState2 : {$derivedStateNumDouble2} <br>
        개발자 도구를 켜서, 콘솔창을 살펴보시오!
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