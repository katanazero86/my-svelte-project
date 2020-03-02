<script>

    import {storeNum, storeString} from './store/store.js';
    import {fade} from 'svelte/transition'

    // import component
    import Arithmetic from './example/Arithmetic.svelte';
    import Simple from "./example/Simple.svelte";
    import BindGroup from "./example/BindGroup.svelte";
    import BindThis from "./example/BindThis.svelte";
    import IfStatement from "./example/IfStatement.svelte";
    import PropsExample from "./example/PropsExample.svelte";
    import SvelteStore from "./example2/SvelteStore.svelte";
    import SvelteLifecycle from "./example2/SvelteLifecycle.svelte";

    let inputText = '';

    export let params = {};


    // tutorial
    export let bar = 'optional default value';
    export const hello = 'hello svelte world!';

    export const format = n => n.toFixed(2);

    export function test(name) {
        alert(`hello ${name}!`);
        return '';
    }

    let num = 0;
    const increaseNum = () => num++;

    let person = {
        name: 'nameProp',
        age: 100
    }


    let storeNumValue = 0;
    let storeStringValue = null;

    storeNum.subscribe(value => {
        storeNumValue = value;
    });

    storeString.subscribe(value => {
        storeStringValue = value;
    });


</script>

<main in:fade="{{duration: 300}}">
    <h1>Hello world!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

    <hr>
    <p>{hello}</p>
    <p>{bar}</p>
    <p>{format(3.5555)}</p>
    {test('스벨트')}

    <button on:click={increaseNum}>값 증가 시키기</button>
    <h3>{num}</h3>
    <input type="text" bind:value="{inputText}">
    <div>
        {inputText}
    </div>
</main>
<hr>
<div class="example-wrap">
    <Arithmetic/>
</div>
<hr>
<div class="example-wrap">
    <Simple/>
</div>
<hr>
<div class="example-wrap">
    <BindGroup/>
</div>
<hr>
<div class="example-wrap">
    <BindThis/>
</div>
<hr>
<div class="example-wrap">
    <IfStatement/>
</div>
<hr>
<div class="example-wrap">
    <PropsExample name="{person.name}" age="{person.age}" />
</div>
<div class="example-wrap">
    <p>
        index 컴포넌트에서 스토어 값 출력
    </p>
    {`storeNumValue : ${storeNumValue}`}<br>
    {`storeStringValue : ${storeStringValue}`}<br>
    <hr>
    <SvelteStore/>
</div>
<div class="example-wrap">
    <SvelteLifecycle/>
</div>


<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    .example-wrap {
        border: 1px dotted cadetblue;
        padding: 8px;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

</style>