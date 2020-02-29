<script>
    export let name = null;
    export let age = null;

    export const readOnly = 'readOnly!!'; // const 로 선언하면 무조건 읽기 전용
</script>

<div>
    <p>난 부모에게 값을 받았어요!</p>
    <p>
        name : {name} / age : {age}
    </p>
    <p>
        readOnly : {readOnly}
    </p>

    <div>
        <button on:click={() => name = '변경이름'}>변경</button>
    </div>
</div>