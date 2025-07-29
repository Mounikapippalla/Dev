const gradientCode=document.getElementById("pcolour");
const generateBtn=document.getElementById("bcolour");

function getRandomColor(){
    const hex=Math.floor(Math.random()* 16777215).toString(16);
    return `#${hex.padStart(6, "0")}`;
}


function generateGradient(){
    const colour1= getRandomColor();
    const colour2= getRandomColor();
    const gradient =`linear-gradient(to right, ${colour1}, ${colour2})`;

    document.body.style.background=gradient;
    pcolour.textContent= gradient;

}

bcolour.addEventListener("click",generateGradient);
generateGradient();

