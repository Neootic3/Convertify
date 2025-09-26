const btn = document.getElementById('convert-btn');
const input = document.getElementById('input-box');
const output = document.getElementById('output-box')
let result = "";

btn.addEventListener('click', () => {
  let text = input.value
    // Step 1: Get All Letters of The input
    for (let i = 0; i < input.value.length; i++) {
// Code To Run Each time
      let char = text[i]
      let code = char.charCodeAt(0)
      let encoded = code.toString(2)
      result += encoded + " ";
      
    }
console.log(result)
output.value = result;
});