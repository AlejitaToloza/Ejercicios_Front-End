const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", async () => {    
  btn.disabled = true
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  
  btn.disabled = false
  text.textContent = data.slip.advice;
});
