<!-- {#if ...} {/if} -->
<!-- 조건부로 렌더링 된 내용을 조작 -->

<script>

    let ifFlag = true;
    const text = '참!!';
    const text2 = '거짓!!';

</script>

<div>
    <button on:click={()=>ifFlag = !ifFlag}>
        toggle
    </button>
</div>

{#if ifFlag}
    <div>
        {text}
    </div>
{:else}
    <div>
{text2}
    </div>
{/if}