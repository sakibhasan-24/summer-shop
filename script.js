const promoCodeInput = document.getElementById("input-promo-code");
const couponBtn = document.getElementById("coupon-btn");
const allItems = document.querySelectorAll(".all-items");
const selectedItems = document.getElementById("items-selected");
// only total price
const total = document.getElementById("total-price");
// include all total price
const allTotal = document.getElementById("total");
const makePurchaseBtn = document.getElementById("make-purchase-btn");
const discount = document.getElementById("discount");
const purchaseModal = document.getElementById("purchase-confirm");
const close = document.getElementById("close");
const allSection = document.getElementById("all-section");

let allTotalPrice = Number(allTotal.innerText);
let totalPrice = Number(total.innerText); //only total

const discountPercentage = 0.2;

for (let i = 0; i < allItems.length; i++) {
  allItems[i].addEventListener("click", function () {
    const price = document.getElementsByClassName("price");
    const productName = document.getElementsByClassName("product-name");
    totalPrice += Number(price[i].innerText);
    total.innerText = Number(totalPrice).toFixed(2);

    let discountValue = discountPercentage * Number(totalPrice).toFixed(2);
    let withDiscountAmount = Number(totalPrice).toFixed(2);
    let discountPreviousValue = Number(discount.innerText).toFixed(2);
    let totalDiscountValue = Number(
      discountValue + Number(discountPreviousValue)
    );
    let setDiscount =
      totalPrice < 200
        ? 0
        : Number(discountValue + Number(discountPreviousValue)).toFixed(2);
    if (totalPrice >= 200) {
      couponBtn.removeAttribute("disabled", true);
      couponBtn.classList.add("opacity-100");
    } else {
      couponBtn.setAttribute("disabled", true);
      couponBtn.classList.add("opcity-25");
    }

    allTotal.innerText =
      totalPrice < 200 ? Number(totalPrice).toFixed(2) : withDiscountAmount;
    couponBtn.addEventListener("click", function () {
      if (promoCodeInput.value === "SELL200") {
        discount.innerText = setDiscount;
        allTotal.innerText = withDiscountAmount - discountValue;
      } else {
        promoCodeInput.value = "";
        return (discount.innerText = "inValid Coupoun!! try Again");
      }
    });

    // allTotal.innerText = Number(totalPrice).toFixed(2);
    // button enable
    if (totalPrice > 0) {
      makePurchaseBtn.classList.add("opacity-100");
      makePurchaseBtn.removeAttribute("disabled", true);
      makePurchaseBtn.addEventListener("click", function () {
        allTotal.innerText = 0;
        total.innerText = 0;
        discount.innerText = 0;
        purchaseModal.classList.remove("hidden");
        purchaseModal.classList.add("visible");
        allSection.classList.add("opacity-0");
        return (selectedItems.innerText = "");
        // return alert("we received");
      });
    }

    const count = selectedItems.childElementCount;

    const p = document.createElement("p");

    p.classList.add("font-bold", "text-gray-400");
    p.innerHTML = `<p>
    ${count + 1} ${productName[i].innerText}
    </p>
   
    
    `;
    selectedItems.appendChild(p);
  });
}

close.addEventListener("click", function () {
  //   purchaseModal.classList.add("hidden");
  //   allSection.classList.add("opacity-100");
  //   allSection.classList.remove("opacity-0");

  //   couponBtn.classList.add("opacity-25");
  //   couponBtn.classList.remove("opacity-100");
  //   makePurchaseBtn.classList.add("opacity-25");
  //   makePurchaseBtn.classList.remove("opacity-100");
  couponBtn.setAttribute("disabled", true);
  makePurchaseBtn.setAttribute("disabled", true);
  styleAddRemove(purchaseModal, "hidden", "add");
  styleAddRemove(allSection, "opacity-100", "add");
  styleAddRemove(allSection, "opacity-0", "remove");
  styleAddRemove(couponBtn, "opacity-25", "add");
  styleAddRemove(couponBtn, "opacity-100", "remove");
  styleAddRemove(makePurchaseBtn, "opacity-25", "add");
  styleAddRemove(makePurchaseBtn, "opacity-100", "remove");
});

// add some function

function styleAddRemove(idOrClassName, styleName, removeOrAdd) {
  if (removeOrAdd === "add") {
    idOrClassName.classList.add(styleName);
  } else {
    idOrClassName.classList.remove(styleName);
  }
}

function setInnerTextValue(place, value) {
  place.innerText = value;
}
// console.log(totalPrice);
