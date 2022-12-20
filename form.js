let numOfSlAdult = document.getElementById("sladult");
let numOfSlChild = document.getElementById("slchild");
let numOfFadult = document.getElementById("fadult");
let numOfFchild = document.getElementById("fchild");
let numOfInfant = document.getElementById("Infant");

let slAdult = numOfSlAdult.value;
let slChild = numOfSlChild.value;
let fAdult = numOfFadult.value;
let fChild = numOfFchild.value;
let infant = numOfInfant.value;

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
    slAdult++;
    numOfSlAdult.value = slAdult;
})

substraction.addEventListener('click', function () {
    event.preventDefault(event);
    if (slAdult > 0) {
        slAdult--;
        numOfSlAdult.value = slAdult;
    }
})

add1.addEventListener('click', function () {
    event.preventDefault(event);
    slChild++;
    numOfSlChild.value = slChild;
})

substraction1.addEventListener('click', function () {
    event.preventDefault(event);
    if (slChild > 0) {
        slChild--;
        numOfSlChild.value = slChild;
    }
})

add2.addEventListener('click', function () {
    event.preventDefault(event);
    fAdult++;
    numOfFadult.value = fAdult;
})

substraction2.addEventListener('click', function () {
    event.preventDefault(event);
    if (fAdult > 0) {
        fAdult--;
        numOfFadult.value = fAdult;
    }
})

add3.addEventListener('click', function () {
    event.preventDefault(event);
    fChild++;
    numOfFchild.value = fChild;
})

substraction3.addEventListener('click', function () {
    event.preventDefault(event);
    if (fChild > 0) {
        fChild--;
        numOfFchild.value = fChild;
    }
})

add4.addEventListener('click', function () {
    event.preventDefault(event);
    infant++;
    numOfInfant.value = infant;
})

substraction4.addEventListener('click', function () {
    event.preventDefault(event);
    if (infant > 0) {
        infant--;
        numOfInfant.value = infant;
    }
})

// Chanka's code
const theForm = document.getElementById("form");
const btnCalculate = document.getElementById("calculate");
const btnOrder = document.getElementById("placeorder");
const txtOutput = document.getElementById("output");
const sladult1 = document.getElementById("sladultamount");
const slchild1 = document.getElementById("slchildamount");
const fadult1 = document.getElementById("fadultamount");
const fchild1 = document.getElementById("fchildamount");
const infant1 = document.getElementById("infantamount");
let txtvisit = document.getElementById("visit");
let txtOrder = document.getElementById("order");
let txtOrderNum = document.getElementById("ordernum");
let txtOrder1 = document.getElementById("order1");
let txtOrderNum1 = document.getElementById("ordernum1");
let txtOrder2 = document.getElementById("order2");
let txtOrderNum2 = document.getElementById("ordernum2");
const btnAddToFav = document.getElementById("addFave");
const btnOrderFav = document.getElementById("orderFave");
const txtFavOrder = document.getElementById("favOrder");
const txtSubtotal = document.getElementById("subtotal");
const btnPlaceOrder = document.getElementById("placeorder");
const btnLoyalty = document.getElementById("loyalty");

btnCalculate.addEventListener("click", calculate);
let count = 0;
function calculate() {
    if (theForm.checkValidity()) {
        event.preventDefault(event);
        let sladult = parseInt(input.value);
        let slchild = parseInt(input1.value);
        let fadult = parseInt(input2.value);
        let fchild = parseInt(input3.value);
        let infant = parseInt(input4.value);
        let visit = txtvisit.value;
        //Calculate total cost of tickets

        if (visit == "half") {
            total = (sladult * 1550) + (slchild * 1050) + (fadult * 5950) + (fchild * 3150) + (infant * 0)
        }
        else if (visit == "full") {
            total = (sladult * 1800) + (slchild * 1300) + (fadult * 6300) + (fchild * 3500) + (infant * 0);
        }
        else {
            total = (sladult * 1200) + (slchild * 700) + (fadult * 5500) + (fchild * 2700) + (infant * 0)
        }

        //Output breakdown of tickets
        txtOutput.innerText = total;
        sladult1.innerText = `${sladult}`;
        slchild1.innerText = `${slchild}`;
        fadult1.innerText = `${fadult}`;
        fchild1.innerText = `${fchild}`;
        infant1.innerText = `${infant}`;
        txtOutput.innerText = `LKR ${total.toFixed(2)} `;
        // btnCalculate.addEventListener("click",dataObj );
        //function dataObj(){
        var inputData = [{ slAdult: sladult, slChild: slchild, fAdult: fadult, fChild: fchild, infantTicket: infant, totalValue: total }];

        var html = "<table>"

        setTimeout(() => {

            for (let i = 0; i < inputData.length; i++) {
                html += '<tr>';
                html += '<th>SL Adult</th>';
                html += '<th>SL Child</th>';
                html += '<th>Foreign Adult</th>';
                html += '<th>Foreign Child</th>';
                html += '<th>Infant</th>';
                html += '<th>Total</th>';
                html += '</tr>';
                html += '<tr>';
                html += '<td>' + inputData[i].slAdult + '</td>';
                html += '<td>' + inputData[i].slChild + '</td>';
                html += '<td>' + inputData[i].fAdult + '</td>';
                html += '<td>' + inputData[i].fChild + '</td>';
                html += '<td>' + inputData[i].infantTicket + '</td>';
                html += '<td> LKR' + inputData[i].totalValue + '</td>';
                html += '</tr>';


            }

            function addOrder() {
                event.preventDefault(event)
                inputData.push({ slAdult: sladult, slChild: slchild, fAdult: fadult, fChild: fchild, infantTicket: infant, totalValue: total });
                addEventListener();
            }
            document.getElementById("testTable").innerHTML = html;
        })

        //}


        count++;

    }

    btnCalculate.addEventListener("click", addOrder);
    function addOrder() {
        event.preventDefault(event)
        inputData.push({ slAdult: sladult, slChild: slchild, fAdult: fadult, fChild: fchild, infantTicket: infant, totalValue: total });

    }
    let numberOfTickets = sladult + slchild + fadult + fchild + infant;

    btnLoyalty.addEventListener("click", checkLoyalty);
    function checkLoyalty() {
        event.preventDefault(event);
        if (numberOfTickets > 3) {
            let loyalty = numberOfTickets * 15;
            alert(`You have earned ${loyalty} points`);
            localStorage.setItem('Loyalty', loyalty);
        }
        else {
            alert(`You havent earned any loyalty points`);
        }

    }

    for (let i = 1; i <= count; i++) {
        txtOrder.innerText = `Order ${i}`;
        for (let j = 1; j <= count; j++) {
            txtOrderNum.innerText = `LKR ${total.toFixed(2)}`;
        }

        btnPlaceOrder.addEventListener("click", placeOrder);
        function placeOrder() {
            event.preventDefault(event);

        }

        btnAddToFav.addEventListener("click", favorite);
        function favorite() {
            event.preventDefault(event);
            localStorage.setItem(`Order`, `LKR ${total.toFixed(2)}`)
        }
        btnOrderFav.addEventListener("click", orderFav)
        function orderFav() {
            event.preventDefault(event);
            let Order = localStorage.getItem("Order")
            txtFavOrder.innerText = `${Order}`
        }


    }
}