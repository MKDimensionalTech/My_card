window.onload=function(){
    const menuSize = '250px';
    document.querySelector('#btnMenu').addEventListener('click', e=> {
        document.querySelector('#menu').style.marginLeft = 0;
    })
    document.querySelector('#btnclose').addEventListener('click', e=> {
        document.querySelector('#menu').style.marginLeft =`-${menuSize}`;
    })
}
