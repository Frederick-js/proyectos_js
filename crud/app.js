const newMemberAddBtn = document.querySelector(".addMemberBtn"),
  darkBg = document.querySelector(".dark_bg"),
  popupForm = document.querySelector(".popup"),
  crossBtn = document.querySelector(".closeBtn"),
  submitBtn = document.querySelector(".submitBtn"),
  modalTitle = document.querySelector(".modalTitle"),
  popupFooter = document.querySelector(".popupFooter"),
  imgInput = document.querySelector(".img"),
  form = document.querySelector("form"),
  uploadimg = document.querySelector("#uploadimg"),
  fName = document.getElementById("fName"),
  lName = document.getElementById("lName"),
  age = document.getElementById("age"),
  city = document.getElementById("city"),
  position = document.getElementById("position"),
  salary = document.getElementById("salary"),
  sDate = document.getElementById("sDate"),
  email = document.getElementById("email"),
  phone = document.getElementById("phone")


let originalData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : [];
let getData = [...originalData];

let isEdit = false, edit

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

uploadimg.onchange = function (){
    if (uploadimg.files[0].size < 1000000) {  // 1MB = 1000000
        var fileReader = new FileReader();
        
        fileReader.onload = function(e){
            var imgUrl = e.target.result;
            imgInput.src = imgUrl;
        }

        fileReader.readAsDataURL(uploadimg.files[0]);
    }
    else{
        alert("Thist file is too large!")
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const information = {
        id: Date.now();
        picture: imgInput.src == undefined ? "./img/pic1.png" :imgInput.src,
        fName: fName.value,
        lName: lName.value, 
        ageVal: ageVal.value, 
        cityVa: cityVa.value, 
        positionVa: positionVa.value, 
        salaryVa: salaryVa.value, 
        sDateVa: sDateVa.value, 
        phoneVAl: phoneVAl.value
       
    }
})

if (!isEdit) {
    originalData.unshift(information);
}
else{
    originalData[editId] = information;
}

getData = [...originalData];
localStorage.setItem('userProfile', JSON.stringify(originalData));