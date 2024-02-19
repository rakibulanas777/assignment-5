const A1 = document.getElementById("A1");
const A2 = document.getElementById("A2");
const A3 = document.getElementById("A3");
const A4 = document.getElementById("A4");
const B1 = document.getElementById("B1");
const B2 = document.getElementById("B2");
const B3 = document.getElementById("B3");
const B4 = document.getElementById("B4");
const coupon_input = document.getElementById("coupon_input");
const btn_coupon = document.getElementById("btn_coupon");
const count_seat = document.getElementById("count_seat");
const selected_seat = document.getElementById("selected_seat");
const total_price = document.getElementById("total_price");
const select_seat = document.querySelectorAll(".kbd");
let seat = 40;
let bookSeat = 0;
const remaining_seat = document.getElementById("remaining_seat");
remaining_seat.innerText = seat;
const seatList = [];

const coupon = "get20";

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

let count = 0;

btn_coupon.addEventListener("click", () => {
  const input_value = coupon_input.value;

  if (count == 0) {
    if (input_value === coupon) {
      count = count + 1;
      totalPrice = totalPrice - totalPrice * 0.05;
      total_price.innerText = totalPrice;
      coupon_input.value = "Already applied";
      coupon_input.setAttribute("disabled", false);
    } else {
      total_price.innerText = totalPrice;
    }
  }
});
