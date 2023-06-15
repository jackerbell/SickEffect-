
let label = document.querySelectorAll('label').forEach(label => {
  label.innerHTML = label.innerHTML.split('').map((letters,i)=>`<span style="transition-delay:${i * 50}ms">${letters}</span>`).join('');
});