const switcher = document.querySelector('#switcher');
function themeToggler(turnItOn){
  if(turnItOn){
    document.body.classList.remove('light')
    document.body.classList.add('dark')
    switcher.nextElementSibling.classList.add('dark')
    return 
  }
  switcher.nextElementSibling.classList.remove('dark')
  document.body.classList.remove('dark') 
  document.body.classList.add('light')
}

switcher.addEventListener('change',()=>{
  themeToggler(switcher.checked)
})
window.addEventListener('DOMContentLoaded',()=>{
  const matches = window.matchMedia('(prefers-color-scheme:dark)');
  themeToggler(matches)
  switcher.checked = matches
}) 