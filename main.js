let btn=document.querySelector('button')
let h3=document.querySelector('h3')



btn.addEventListener('click',()=>{
    rgb1=Math.floor(Math.random()*299)
    rgb2=Math.floor(Math.random()*299)
    rgb3=Math.floor(Math.random()*299)
    document.body.style.backgroundColor=('rgb('+rgb1+','+rgb2+','+rgb3+')')

    h3.innerHTML=('rgb('+rgb1+','+rgb2+','+rgb3+')')
})

window.addEventListener('load',()=>{
    rgb1=Math.floor(Math.random()*299)
    rgb2=Math.floor(Math.random()*299)
    rgb3=Math.floor(Math.random()*299)
    document.body.style.backgroundColor=('rgb('+rgb1+','+rgb2+','+rgb3+')')

    h3.innerHTML=('rgb('+rgb1+','+rgb2+','+rgb3+')')
})