const newMemberAddBtn = document.querySelector(".addMemberBtn"),
  darkBg = document.querySelector(".dark_bg"),
  popupForm = document.querySelector(".popup"),
  crossBtn = document.querySelector(".closeBtn"),
  submitBtn = document.querySelector(".submitBtn"),
  modalTitle = document.querySelector(".modalTitle"),
  popupFooter = document.querySelector(".popupFooter"),
  imgInput = document.querySelector(".img"),
  form = document.querySelector("form")

newMemberAddBtn.addEventListener("click", () => {
  submitBtn.innerHTML = "Submit";
  modalTitle.innerHTML = 'Fill the Form';
  popupFooter.style.display = "block";
  imgInput.src = "./img/pic1.png";

  darkBg.classList.add("active");
  popupForm.classList.add("active");
});


crossBtn.addEventListener('click', ()=>{
  darkBg.classList.remove("active");
  popupForm.classList.remove("active");
  form.reset();
})