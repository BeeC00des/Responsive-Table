var monthBtn= document.getElementById("switchMonthly"),
    yearBtn = document.getElementById("switchYearly"),
    t = document.getElementById("switch"),
    monthlyCard = document.getElementById("monthlyCard"),
    yearlyCard = document.getElementById("yearlyCard");


    console.log(monthlyCard);

monthBtn.addEventListener("click", function(){
  monthBtn.checked = true;
  console.log('hi')
  console.log(monthlyCard);
  monthlyCard.classList.remove("hide");
  yearlyCard.classList.add("show");
//   monthBtn.classList.add("hide");
//   yearBtn.classList.remove("hide"); 
});



// testimonal carousel

const btn = document.getElementsByClassName("btn");
const slide = document.getElementById("slide");

btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

btn[1].onclick = function () {
  slide.style.transform = "translateX(-800px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

btn[2].onclick = function () {
  slide.style.transform = "translateX(-1600px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

btn[3].onclick = function () {
  slide.style.transform = "translateX(-2400px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

