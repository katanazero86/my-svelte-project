<!-- bind:this -->
<!-- bind:this={dom_node} -->
<!-- bind:this={dom_node} 는 읽기전용으로 해당 엘리먼트 노드 참조값을 얻는다 -->

<script>

    import { onMount } from 'svelte';

    let aElement = null;

    onMount(() => {
        console.log(aElement);
        console.log(aElement.href);
    });

</script>


<div>
    console 창 확인
    bind:this
    <a bind:this={aElement} href="http://www.naver.com">www.naver.com</a>
</div>
