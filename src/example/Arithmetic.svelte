<script>
  let inputNum1 = 0;
  let inputNum2 = 0;

  let selected = '';
  const a = 'a';
  const b = 'b';
  const c = 'c';


  $: divide = (num1, num2) => {
      if (num1 == 0) {
          return 0;
      }
      if(num2 == 0) {
          return 0
      }

      return num1 / num2;
  }

</script>

<input type="number" bind:value={inputNum1} min="0">
<input type="number" bind:value={inputNum2} min="0">

<div>
    <div>
        <p>덧셈</p>
        <p>{inputNum1} + {inputNum2} = {inputNum1 + inputNum2}</p>
    </div>
    <div>
         <p>뺄셈</p>
         <p>{inputNum1} - {inputNum2} = {inputNum1 - inputNum2}</p>
     </div>
     <div>
         <p>나눗셈</p>
         <p>{inputNum1} / {inputNum2} = {divide(inputNum1, inputNum2)}</p>
     </div>
     <div>
         <p>곱하기</p>
         <p>{inputNum1} * {inputNum2} = {inputNum1 * inputNum2}</p>
     </div>
</div>

<div>
<select bind:value={selected}>
	<option value={a}>a</option>
	<option value={b}>b</option>
	<option value={c}>c</option>
</select>
<p> selected : {selected}</p>
</div>

<style>

</style>