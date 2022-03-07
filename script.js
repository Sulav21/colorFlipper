let colors = ['red','blue','purple','green','orange','yellow','grey']



let colorName = document.getElementById('color')
let changeBtn =  document.getElementById('change')

changeBtn.addEventListener('click',function(){
    let randNum= randomFunction()
  document.body.style.backgroundColor = colors[randNum]
  colorName.innerHTML = colors[randNum]
})

function randomFunction(){
return Math.floor(Math.random()*colors.length)
}
