// generate random color 

const randomColor = ()=>{
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalId;
const startChangeColor = ()=>{
    const changeColor = ()=>{
        document.body.style.backgroundColor = randomColor();
    };
    intervalId = setInterval(changeColor, 1000);


};
const stopChangeColor = ()=>{
    clearInterval(intervalId);
};
document.querySelector('#start').addEventListener('click',startChangeColor)
document.querySelector('#stop').addEventListener('click',stopChangeColor)