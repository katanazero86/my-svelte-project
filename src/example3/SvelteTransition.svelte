<script>

    import { fade, blur, fly, slide, scale, draw } from 'svelte/transition';

    let fadeCondition = false;
    let blurCondition = false;
    let flyCondition = false;
    let slideCondition = false;
    let scaleCondition = false;
    let drawCondition = false;
    let inOutCondition =false;

</script>


<div class="transition-example-wrap">
    <div>
        <p class="example-title">
            fade
        </p>
        <button on:click={() => fadeCondition = !fadeCondition}>
            fade action
        </button>
        {#if fadeCondition}
            <div transition:fade>
                transition:fade : transition 디렉티브 사용
            </div>
        {/if}
    </div>
    <div>
        <p class="example-title">
            blur
        </p>
        <button on:click={() => blurCondition = !blurCondition}>
            blur action
        </button>
        {#if blurCondition}
            <div transition:blur>
                transition:blur : transition 디렉티브 사용
            </div>
        {/if}
    </div>
    <div>
        <p class="example-title">
            fly
        </p>
        <button on:click={() => flyCondition = !flyCondition}>
            fly action
        </button>
        {#if flyCondition}
            <div transition:fly={{ y: 100, duration: 1500 }}>
                transition:fly : transition 디렉티브 사용
            </div>
        {/if}
    </div>
    <div>
        <p class="example-title">
            slide
        </p>
        <button on:click={() => slideCondition = !slideCondition}>
            slide action
        </button>
        {#if slideCondition}
            <div transition:slide>
                transition:slide : transition 디렉티브 사용
            </div>
        {/if}
    </div>
    <div>
        <p class="example-title">
            scale
        </p>
        <button on:click={() => scaleCondition = !scaleCondition}>
            scale action
        </button>
        {#if scaleCondition}
            <div transition:scale>
                transition:scale : transition 디렉티브 사용
            </div>
        {/if}
    </div>
    <div>
        <p class="example-title">
            draw
        </p>
        <button on:click={() => drawCondition = !drawCondition}>
            draw action
        </button>
        {#if drawCondition}
            <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
            <path transition:draw="{{duration: 3000, delay: 300}}"
                  d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
                  fill="none"
                  stroke="cornflowerblue"
                  stroke-width="0.1px"
                  stroke-linejoin="round"
            />
            </svg>
        {/if}
    </div>
    <div>
        <p class="example-title">
            in / out
        </p>
        <button on:click={() => inOutCondition = !inOutCondition}>
            in / out action
        </button>
        {#if inOutCondition}
            <div in:fade={{delay: 0, duration : 1000}} out:fly={{x : 300, delay : 500}}>
                in:fade : in 디렉티브 사용 <br>
                out:fly : out 디렉티브 사용
            </div>
        {/if}
    </div>
</div>


<style type="text/scss">

    .transition-example-wrap {
        padding: 8px;

        > div {
            border: 1px dotted #666666;
            padding: 8px;
            margin: 4px 0;

            .example-title {
                margin: 0;
                padding: 0;
                font-size: 15px;
                font-weight: 600;
            }

        }

        button {
            border: none;
            outline: none;
            display: inline-block;
            padding: 8px;
            color: white;
            background-color: #1abc9c;
            cursor: pointer;
        }

        button:hover {
            background-color: #159d82;
        }

    }

</style>