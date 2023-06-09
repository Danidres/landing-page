let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function copyCoupon() {
    let copyTxt = document.getElementById("input1");
    let btnTxt = document.getElementById("btn1");

    copyTxt.select();
    copyTxt.setSelectionRange(0,99999);

    navigator.clipboard.writeText(copyTxt.value);

    if (btnTxt.innerHTML === "copiar cupon") {
        btnTxt.innerHTML = "cupon copiado";
    }
}

function canjearCoupon() {
    let canjearTxt = document.getElementById("input2").value;
    let canjearBtn = document.getElementById("btn2");

    let number = document.getElementById("number1").innerHTML;
    let discount = document.getElementById("discount");

    function getPercent(percent) { return number / 100 * percent; }
    let percentResult = getPercent(90); //VOY A OBTENER EL 90 PORCIENTO DE 200.

    if (canjearTxt === "54ldqwer23") {
        canjearBtn.innerHTML = "cupon canjeado";

        discount.innerHTML = `<h3 id="number2">${percentResult}</h3><h3>$</h3><span>${number}$</span>`;

    } else if (canjearTxt === "") {

        discount.innerHTML = '<h3 style="font-size: 15px; width: 300px;">aun no has pegado el codigo 🤔</h3>';
         
    } else if (canjearTxt !== "54ldqwer23") {
        discount.innerHTML = '<h3 style="font-size: 15px; width: 300px;">el coupon no es valido 🥲</h3>';
    } 
}
