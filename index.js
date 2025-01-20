document.querySelector('body').addEventListener('click', ()=>{
    document.querySelector('.menu').classList.remove('active');
})
document.querySelector('.share-icon').addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.menutwo').classList.toggle('active');
    document.querySelector('.profile').classList.toggle('active');
    document.querySelector('.face').classList.toggle('active');
    document.querySelector('.account').classList.toggle('active');
});





