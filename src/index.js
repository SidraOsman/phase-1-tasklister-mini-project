document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    createToDo(e.target.new-task-description.value)
    form.reset()
  })
});

 
function createToDo(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click' , deleteTask)
  btn.textContent = 'x'
  li.textContent = ' ${todo} '
  p.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}

function deleteTask(e){
  e.target.parentNode.remove()
}