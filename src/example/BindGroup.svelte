<!-- bind:group -->
<!-- bind:group={variable} -->
<!-- bind:group={variable} 은 여러입력이 있는 경우, value 속성과 함께 사용이 가능-->

<script>
    let radioValue = 'Plain';
    let checkboxValue = [];
</script>

<div>

        <label>
            <input type="radio" bind:group={radioValue} value="Plain">
            <span>Plain</span>
        </label>
    <label>
        <input type="radio" bind:group={radioValue} value="Whole wheat">
        <span>Whole wheat</span>
    </label>
    <label>
        <input type="radio" bind:group={radioValue} value="Spinach">
        <span>Spinach</span>
    </label>
</div>

<div>
    <input type="checkbox" bind:group={checkboxValue} value="Rice">
    <input type="checkbox" bind:group={checkboxValue} value="Beans">
    <input type="checkbox" bind:group={checkboxValue} value="Cheese">
    <input type="checkbox" bind:group={checkboxValue} value="Guac (extra)">
</div>

<div>
    {radioValue} <br>
    {checkboxValue}
</div>

