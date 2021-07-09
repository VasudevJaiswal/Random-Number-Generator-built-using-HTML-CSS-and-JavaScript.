let generate = document.getElementById('generate');
generate.addEventListener('click',()=>{
  let min = document.getElementById('min').value;
  let max = document.getElementById('max').value;
  let random_num = Math.random() * (max - min) + +min;
  document.getElementById('output').innerHTML=`${Math.floor(random_num)}`;
})