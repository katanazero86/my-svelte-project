<script>

    import {onMount, beforeUpdate, afterUpdate, onDestroy, tick} from 'svelte'
    import SvelteChildLifecycle from "./SvelteChildLifecycle.svelte";

    import {updatedValue} from '../store/store.js';

    // onMount
    // 컴포넌트가 DOM 에 마운트되면 콜백이 실행
    onMount(() => {
        console.log('parent onMount..');
    });

    // beforeUpdate
    // 상태 변경 후 컴포넌트가 업데이트되기 직전에 콜백이 실행(여기서 상태값을 업데이트 하면 무한루프에는 빠지지 않는듯?)
    // The first time the callback runs will be before the initial onMount
    // 처음에 초기화될때 onMount() 보다 먼저 실행이 됩니다
    beforeUpdate(async () => {
        console.log('parent beforeUpdate..');
        await tick(); // tick : 언제든지 호출가능 + 컴포넌트에 변경사항이 완료가 되었을때 Promise() 반환
        console.log('tick()..');
    });

    // afterUpdate
    // 컴포넌트가 업데이트가 완료 후 콜백이 실행(여기서 상태값을 업데이트 하면 무한루프에는 빠지지 않는듯?)
    afterUpdate(async () => {
        console.log('parent afterUpdate..');
    });

    // onDestroy
    // 컴포넌트가 DOM 에서 마운트가 해제되면 호출이 됩니다
    onDestroy(() => {
        console.log('parent onDestroy..');
    });

    // tick

    function updateValue() {
        $updatedValue++;
    }


</script>

<div>
    <button on:click={() => updateValue()}>
        {$updatedValue}
    </button>
</div>

<SvelteChildLifecycle/>