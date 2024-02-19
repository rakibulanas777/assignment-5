const A1 = document.getElementById("A1");
const A2 = document.getElementById("A2");
const A3 = document.getElementById("A3");
const A4 = document.getElementById("A4");
const B1 = document.getElementById("B1");
const B2 = document.getElementById("B2");
const B3 = document.getElementById("B3");
const B4 = document.getElementById("B4");
const C1 = document.getElementById("C1");
const C2 = document.getElementById("C2");
const C3 = document.getElementById("C3");
const C4 = document.getElementById("C4");
const D1 = document.getElementById("D1");
const D2 = document.getElementById("D2");
const D3 = document.getElementById("D3");
const D4 = document.getElementById("D4");
const E1 = document.getElementById("E1");
const E2 = document.getElementById("E2");
const E3 = document.getElementById("E3");
const E4 = document.getElementById("E4");
const F1 = document.getElementById("F1");
const F2 = document.getElementById("F2");
const F3 = document.getElementById("F3");
const F4 = document.getElementById("F4");
const G1 = document.getElementById("G1");
const G2 = document.getElementById("G2");
const G3 = document.getElementById("G3");
const G4 = document.getElementById("G4");
const H1 = document.getElementById("H1");
const H2 = document.getElementById("H2");
const H3 = document.getElementById("H3");
const H4 = document.getElementById("H4");
const I1 = document.getElementById("I1");
const I2 = document.getElementById("I2");
const I3 = document.getElementById("I3");
const I4 = document.getElementById("I4");
const J1 = document.getElementById("J1");
const J2 = document.getElementById("J2");
const J3 = document.getElementById("J3");
const J4 = document.getElementById("J4");
const coupon_input = document.getElementById("coupon_input");
const btn_coupon = document.getElementById("btn_coupon");
const count_seat = document.getElementById("count_seat");
const selected_seat = document.getElementById("selected_seat");
const total_price = document.getElementById("total_price");
const select_seat = document.querySelectorAll(".kbd");
const grand = document.getElementById("grand");
const dicount = document.getElementById("dicount");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const next_btn = document.getElementById("next_btn");
let seat = 40;
let bookSeat = 0;
const remaining_seat = document.getElementById("remaining_seat");
remaining_seat.innerText = seat;
const seatList = [];

const coupon20 = "couple20";
const coupon15 = "new15";

let totalPrice = 0;
const changeColor = (id, val) => {
  id.addEventListener("click", () => {
    const currentClass = id.classList[id.classList.length - 1];
    if (currentClass === "bg-green-600") {
      id.classList.remove("bg-green-600");
      seat = seat + 1;
      bookSeat = bookSeat - 1;
      remaining_seat.innerText = seat;
      const indexToRemove = seatList.indexOf(val);
      if (indexToRemove !== -1) {
        seatList.splice(indexToRemove, 1);
      }
    } else {
      id.classList.add("bg-green-600");
      seat = seat - 1;
      bookSeat = bookSeat + 1;
      remaining_seat.innerText = seat;
      seatList.push(val);
    }
    count_seat.innerText = seatList.length;
    selected_seat.innerHTML = "";
    seatList.forEach((element, index) => {
      const node = document.createElement("div");
      node.innerHTML = `
    <div class="flex justify-between">
      <div class="text-xl text-gray-900">${element}</div>
      <div class="text-xl text-gray-900">economy</div>
      <div class="text-xl text-gray-900">$550</div>
    </div>
  `;

      selected_seat.appendChild(node);

      // Add a space after each seat value, except for the last one
      if (index < seatList.length - 1) {
        const space = document.createElement("span");
        space.textContent = " ";
        space.style.whiteSpace = "pre"; // Preserve spaces
        selected_seat.appendChild(space);
      }
    });
    if (seatList.length >= 4) {
      coupon_input.removeAttribute("disabled");
      btn_coupon.removeAttribute("disabled");
      select_seat.forEach((ele) => {
        const elemClass = ele.classList[ele.classList.length - 1];
        if (elemClass === "bg-green-600") {
          ele.removeAttribute("disabled");
        } else {
          ele.setAttribute("disabled", false);
        }
      });
    } else {
      select_seat.forEach((ele) => {
        ele.removeAttribute("disabled");
      });
    }
    totalPrice = seatList.length * 550;
    total_price.innerText = totalPrice;

    grand.innerText = totalPrice;

    if (seatList.length >= 1 && phone.value) {
      next_btn.removeAttribute("disabled");
    } else {
      next_btn.setAttribute("disabled", false);
    }
  });
};

changeColor(A1, "A1");
changeColor(A2, "A2");
changeColor(A3, "A3");
changeColor(A4, "A4");
changeColor(B1, "B1");
changeColor(B2, "B2");
changeColor(B3, "B3");
changeColor(B4, "B4");
changeColor(C1, "C1");
changeColor(C2, "C2");
changeColor(C3, "C3");
changeColor(C4, "C4");
changeColor(D1, "D1");
changeColor(D2, "D2");
changeColor(D3, "D3");
changeColor(D4, "D4");
changeColor(E1, "E1");
changeColor(E2, "E2");
changeColor(E3, "E3");
changeColor(E4, "E4");
changeColor(F1, "F1");
changeColor(F2, "F2");
changeColor(F3, "F3");
changeColor(F4, "F4");
changeColor(G1, "G1");
changeColor(G2, "G2");
changeColor(G3, "G3");
changeColor(G4, "G4");
changeColor(H1, "H1");
changeColor(H2, "H2");
changeColor(H3, "H3");
changeColor(H4, "H4");
changeColor(I1, "I1");
changeColor(I2, "I2");
changeColor(I3, "I3");
changeColor(I4, "I4");
changeColor(J1, "J1");
changeColor(J2, "J2");
changeColor(J3, "J3");
changeColor(J4, "J4");

let count = 0;

btn_coupon.addEventListener("click", () => {
  const input_value = coupon_input.value;

  if (count == 0) {
    if (input_value === coupon20) {
      count = count + 1;
      totalPrice = totalPrice - totalPrice * 0.2;
      grand.innerText = totalPrice;
      dicount.innerHTML = ` <div class="flex justify-between">
                  <div class="text-xl text-green-700">
                    <span id="percent">20%</span> discount
                  </div>
                  <div class="text-xl text-green-700">${totalPrice * 0.2}</div>
                </div>`;
      coupon_input.value = "Already applied";
      coupon_input.setAttribute("disabled", false);
    } else if (input_value === coupon15) {
      count = count + 1;
      totalPrice = totalPrice - totalPrice * 0.15;
      grand.innerText = totalPrice;
      dicount.innerHTML = ` <div class="flex justify-between">
                  <div class="text-xl text-green-700">
                    <span id="percent">15%</span> discount
                  </div>
                  <div class="text-xl text-green-700">${totalPrice * 0.15}</div>
                </div>`;
      coupon_input.value = "Already applied";
      coupon_input.setAttribute("disabled", false);
    } else {
      total_price.innerText = totalPrice;
    }
  }
});

phone.addEventListener("change", () => {
  console.log(seatList.length);
  if (seatList.length >= 1 && phone.value) {
    next_btn.removeAttribute("disabled");
  } else {
    next_btn.setAttribute("disabled", false);
  }
});


next_btn.addEventListener('click', () => {
  
})