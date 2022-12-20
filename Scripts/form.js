let numOfSlAdult = document.getElementById("sladult");
let numOfSlChild = document.getElementById("slchild");
let numOfFadult = document.getElementById("fadult");
let numOfFchild = document.getElementById("fchild");
let numOfInfant = document.getElementById("Infant");

let slAdults = numOfSlAdult.value;
let slChilds = numOfSlChild.value;
let fAdults = numOfFadult.value;
let fChilds = numOfFchild.value;
let infants = numOfInfant.value;

// const keeps a fixed value while let lets you change the value

let add = document.getElementById("plus");
let add1 = document.getElementById("plus1");
let add2 = document.getElementById("plus2");
let add3 = document.getElementById("plus3");
let add4 = document.getElementById("plus4");

let substraction = document.getElementById("minus");
let substraction1 = document.getElementById("minus1");
let substraction2 = document.getElementById("minus2");
let substraction3 = document.getElementById("minus3");
let substraction4 = document.getElementById("minus4");

add.addEventListener('click', function () {
    event.preventDefault(event);
    console.log("here");
    slAdults++;
    numOfSlAdult.value = slAdults;
})

substraction.addEventListener('click', function () {
    event.preventDefault(event);
    if (slAdults > 0) {
        slAdults--;
        numOfSlAdult.value = slAdults;
    }
})

add1.addEventListener('click', function () {
    event.preventDefault(event);
    slChilds++;
    numOfSlChild.value = slChilds;
})

substraction1.addEventListener('click', function () {
    event.preventDefault(event);
    if (slChilds > 0) {
        slChilds--;
        numOfSlChild.value = slChilds;
    }
})

add2.addEventListener('click', function () {
    event.preventDefault(event);
    fAdults++;
    numOfFadult.value = fAdults;
})

substraction2.addEventListener('click', function () {
    event.preventDefault(event);
    if (fAdults > 0) {
        fAdults--;
        numOfFadult.value = fAdults;
    }
})

add3.addEventListener('click', function () {
    event.preventDefault(event);
    fChilds++;
    numOfFchild.value = fChilds;
})

substraction3.addEventListener('click', function () {
    event.preventDefault(event);
    if (fChilds > 0) {
        fChilds--;
        numOfFchild.value = fChilds;
    }
})

add4.addEventListener('click', function () {
    event.preventDefault(event);
    infants++;
    numOfInfant.value = infants;
})

substraction4.addEventListener('click', function () {
    event.preventDefault(event);
    if (infants > 0) {
        infants--;
        numOfInfant.value = infants;
    }
})

// Chanka's code
const btnCalculate = document.getElementById("calculate");
const btnOrder = document.getElementById("placeorder");
const txtOutput = document.getElementById("output");
const sladult1 = document.getElementById("sladultsum");
const slchild1 = document.getElementById("slchildsum");
const fadult1 = document.getElementById("fadultsum");
const fchild1 = document.getElementById("fchildsum");
const infant1 = document.getElementById("infantsum");
let txtvisit = document.getElementById("duration");
let txtOrderNum = document.getElementById("ordernum");
const txtOrder = document.getElementById("orderprice");
const btnAddToFav = document.getElementById("addFave");
const btnOrderFav = document.getElementById("orderFave");
const txtFavOrder = document.getElementById("favOrder");
const txtSubtotal = document.getElementById("subtotal");
const btnPlaceOrder = document.getElementById("placeorder");
const loyalty = document.getElementById("loyalty");

btnCalculate.addEventListener("click", calculate);
let count = 0;
function calculate() {
    event.preventDefault(event);
    let sladult = parseInt(slAdults);
    let slchild = parseInt(slChilds);
    let fadult = parseInt(fAdults);
    let fchild = parseInt(fChilds);
    let infant = parseInt(infants);
    let totalTickets = sladult + slchild + fadult + fchild + infant;
    let duration = txtvisit.value;
    //Calculate total cost of tickets
    if (duration == "half") {
        total = (sladult * 1550) + (slchild * 1050) + (fadult * 5950) + (fchild * 3150) + (infant * 0)
    }
    else if (duration == "full") {
        total = (sladult * 1800) + (slchild * 1300) + (fadult * 6300) + (fchild * 3500) + (infant * 0);
    }
    else {
        total = (sladult * 1200) + (slchild * 700) + (fadult * 5500) + (fchild * 2700) + (infant * 0)
    }
    //Output breakdown of tickets
    sladult1.innerText = `${sladult}`;
    slchild1.innerText = `${slchild}`;
    fadult1.innerText = `${fadult}`;
    fchild1.innerText = `${fchild}`;
    infant1.innerText = `${infant}`;
    txtOutput.innerText = `LKR ${total.toFixed(2)} `;

    if (totalTickets >= 3) {
        loyalty.value += (totalTickets * 15)
        localStorage.setItem("loyalty", loyalty.value);
    }

    count++;
    for (let i = 1; i <= count; i++) {

        txtOrder.innerText = `Order ${i}`;

        for (let j = 1; j <= count; j++) {
            txtOrderNum.innerText = `LKR ${total.toFixed(2)}`;
        }
    }

}
btnPlaceOrder.addEventListener("click", placeOrder);
function placeOrder() {
    event.preventDefault(event);
    for (i = 1; i <= count; i++) {
        total = total
        txtSubtotal.innerText = `Total: LKR ${total}`;
    }
}
btnAddToFav.addEventListener("click", favorite);
function favorite() {
    event.preventDefault(event);
    let sladult = parseInt(slAdults);
    let slchild = parseInt(slChilds);
    let fadult = parseInt(fAdults);
    let fchild = parseInt(fChilds);
    let infant = parseInt(infants);
    localStorage.setItem("OrderPrice", total);
    localStorage.setItem("SLAdults", sladult);
    localStorage.setItem("SLChilds", slchild);
    localStorage.setItem("FAdults", fadult);
    localStorage.setItem("FChildren", fchild);
    localStorage.setItem("Infants", infant);

    txtFavOrder.innerText = `SL Adults: ${sladult}\n\t SL Children: ${slchild}\n\t Foreign Adults: ${fadult}\n\t Foreign Children: ${fchild} \n\t Infant: ${infant}`;

}
btnOrderFav.addEventListener("click", orderFav)
function orderFav() {
    event.preventDefault(event);
    let sladult = parseInt(slAdults);
    let slchild = parseInt(slChilds);
    let fadult = parseInt(fAdults);
    let fchild = parseInt(fChilds);
    let infant = parseInt(infants);
    console.log("Clicked")
    console.log(localStorage.getItem("SLAdults"))
    sladult = JSON.parse(localStorage.getItem("SLAdults"));
    slchild = localStorage.getItem("SLChilds");
    fadult = localStorage.getItem("FAdults");
    fchild = localStorage.getItem("FChildren");
    infant = localStorage.getItem("Infants");
}

loyalty.addEventListener("click", checkLoyalty)
function checkLoyalty(){
    alert("Loyalty points: " + localStorage.getItem("loyalty"))
}