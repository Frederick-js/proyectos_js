const newMemberAddBtn = document.querySelector('.addMemberBtn');
const darkBg = document.querySelector('.dark_bg');
const popupForm = document.querySelector('.popup');
const crossBtn = document.querySelector('.closeBtn');

newMemberAddBtn.addEventListener('click', ()=>{
    darkBg.classList.add('active')
    popupForm.classList.add('active')
})


