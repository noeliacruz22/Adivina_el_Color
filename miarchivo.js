/*let colores = ["rgb(192, 57, 43)", "rgb(142, 68, 173)", "rgb(3, 49, 183)", "rgb(39, 174, 96)", "rgb(244, 208, 63)", "rgb(211, 84, 0)"];
*/

let numCuadrados=6
let colores=[]
let pickedColor
let cuadrados=document.querySelectorAll(".square")
let colorDisplay=document.getElementById("colorDisplay")
let mensajeDisplay= document.querySelector("#message")
let h1= document.querySelector("h1")
let resetBtn=document.querySelector("#reset")
let modeBtn= document.querySelectorAll(".mode")

inicio()

function inicio(){
    setUpModeBtns();
    setUpCuadrado();
    reset();
};

function setUpModeBtns(){
    for (let i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function(){
        modeBtn[0].classList.remove("selected")
        modeBtn[1].classList.remove("selected")
        this.classList.add("selected")
            numCuadrados= (this.textContent==="Facil");
        reset()
        })
    }
};

function setUpCuadrado(){
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].addEventListener("click", function(){
        let clickedColor=this.style.background
        if(clickedColor===pickedColor){
            mensajeDisplay.textContent="Acertaste!"
            resetBtn.textContent="Juega de Nuevo!"
            cambiarColores(clickedColor)
            h1.style.background=clickedColor
        }else{
            this.style.background="#f9ebf2"
            mensajeDisplay.textContent="Intentalo de Nuevo!"
        }
        })
    }
};

function reset(){
    colores= generateRandomColors(numCuadrados)
        pickedColor=pickColor()
        colorDisplay.textContent=pickedColor
        for (let i = 0; i < cuadrados.length; i++) {
            if(colores[i]){
            cuadrados[i].style.background=colores[i]
            cuadrados[i].style.display="block"
        }else{
            cuadrados[i].style.display="none"
        }
        }
        h1.style.background="#76234d"
        mensajeDisplay.textContent=""
        resetBtn.textContent="Nuevos Colores"
};




resetBtn.addEventListener("click", function(){
        reset()
    });



function cambiarColores(color){
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.background=color
    }
};

function pickColor(){
    let random=Math.floor(Math.random()*colores.length)
    return colores[random]
};
function generateRandomColors(num){
    let array1=[]
        for (let i = 0; i <num ; i++) {
            array1[i]=randomColor()
        }
    return array1
};

function randomColor(){
    let r=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    return "rgb("+r+", "+g+", "+b+")"
};