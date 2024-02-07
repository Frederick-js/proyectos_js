const newMemberAddBtn = document.querySelector(".addMemberBtn"),
  darkBg = document.querySelector(".dark_bg"),
  popupForm = document.querySelector(".popup"),
  crossBtn = document.querySelector(".closeBtn");

newMemberAddBtn.addEventListener("click", () => {
  darkBg.classList.add("active");
  popupForm.classList.add("active");
});
