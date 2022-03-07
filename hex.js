let colors = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F']

let colorName = document.getElementById('color')
let changeBtn =  document.getElementById('change')

changeBtn.addEventListener('click',function(){
    let HexColor ="#"
    for(i=0;i<6;i++){
        HexColor += colors[randomFunction1()]
    }
    document.body.style.backgroundColor= HexColor
    colorName.innerHTML = HexColor
})

function randomFunction1(){
    return Math.floor(Math.random()*colors.length)
}