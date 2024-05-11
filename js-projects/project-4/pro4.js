// generate random color 

const randomColor = ()=>{
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const startChangeColor = ()=>{}
const stopChangeColor = ()=>{}
document.getElementById('#start').addEventListener
('click',startChangeColor)
document.getElementById('#stop').addEventListener
('click',stopChangeColor)