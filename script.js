const boxs = document.querySelectorAll('.box');

// function generateRandomColor(){
//     const hexColor = '0123456789abcdef';
//     let color = '#';
//     for(let i = 0; i < 6; i++){
//         color += hexColor[Math.floor(Math.random()*hexColor.length)];
//     }
//     return color;
// }
function setRandomColor(){
    boxs.forEach((item) =>{
        const isLock = item.querySelector('i').classList.contains('fa-lock');
        const text = item.querySelector('h2');
        const color = chroma.random();
        if(isLock){
            return;
        }
        item.style.backgroundColor = color;
        text.innerHTML = color;
        setTextColor(text, color);
        const btn = item.querySelector('button');
        setTextColor(btn, color);
    })
}
 document.addEventListener('keydown', function(e){
    e.preventDefault();
    if(e.code.toLowerCase() == 'space')
        setRandomColor();
 });
function setTextColor(text, color){
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? 'black' : 'white';
}
function copyText(text){
    return navigator.clipboard.writeText(text);
}
document.addEventListener('click', function(e){
    const type = e.target.dataset.type;
    if(type == 'lock'){
        const node = e.target.tagName.toLowerCase() == 'i' ? e.target : e.target.children[0];
        node.classList.toggle('fa-lock-open');
        node.classList.toggle('fa-lock');
    } else if(type == 'copy'){
        copyText(e.target.textContent);
    }
    
});

setRandomColor();