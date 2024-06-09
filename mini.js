const wrapper=document.querySelector('.wrapper')
const loginlink=document.querySelector('.login_link')
const registerlink=document.querySelector('.register_link')
const btnlink=document.querySelector('.btn')
const ionclose=document.querySelector('.ion')
const container=document.querySelector('.container')
const btnlinki=document.querySelector('.btn-pop')
const iconclose=document.querySelector('.element')
registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnlink.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});


ionclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

btnlinki.addEventListener('click',()=>{
    container.classList.add('active-pop');
});

iconclose.addEventListener('click',()=>{
    container.classList.remove('active-pop');
});
