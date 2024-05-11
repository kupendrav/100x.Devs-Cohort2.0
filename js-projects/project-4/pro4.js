// generate random color 

const randomColor = ()=>{
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const startChangeColor = ()=>{
    document.body.style.backgroundColor = randomColor();
    setInterval(startChangeColor, 1000);

}
const stopChangeColor = ()=>{
    clearInterval(startChangeColor);
}
document.querySelector('#start').addEventListener('click',startChangeColor)
document.getElementById('#stop').addEventListener('click',stopChangeColor)