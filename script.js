const promoCodeInput = document.getElementById("input-promo-code");
const couponBtn = document.getElementById("coupon-btn");
const allItems = document.querySelectorAll(".all-items");
const selectedItems = document.getElementById("items-selected");
const total = document.getElementById("total-price");
const allTotal = document.getElementById("total");

const makePurchaseBtn = document.getElementById("make-purchase-btn");
const discount = document.getElementById("discount");
const purchaseModal = document.getElementById("purchase-confirm");
const close = document.getElementById("close");
const allSection = document.getElementById("all-section");
let allTotalPrice = Number(allTotal.innerText);
let totalPrice = Number(total.innerText);

const discountPercentage = 0.2;

for (let i = 0; i < allItems.length; i++) {
  allItems[i].addEventListener("click", function () {
    // console.log(allItems.length);

    const price = document.getElementsByClassName("price");
    const productName = document.getElementsByClassName("product-name");

    totalPrice += Number(price[i].innerText);
    total.innerText = Number(totalPrice).toFixed(2);

    allTotalPrice += Number(price[i].innerText);
    allTotal.innerText = Number(allTotalPrice).toFixed(2);
    if (totalPrice >= 200) {
      couponBtn.removeAttribute("disabled", true);
      couponBtn.classList.add("opacity-100");
      couponBtn.addEventListener("click", function () {
        if (promoCodeInput.value === "SELL200") {
          let discountValue = discountPercentage * totalPrice;
          discount.innerText = Number(discountValue).toFixed(2);
          let newTotal = Number(totalPrice) - discountValue;
          allTotalPrice += Number(price[i].innerText);

          return (allTotal.innerText = Number(newTotal).toFixed(2));
        } else {
          return alert("not correct");
        }
      });
    } else {
      couponBtn.setAttribute("disabled", true);
      couponBtn.classList.add("opcity-25");
    }

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
  purchaseModal.classList.add("hidden");
  allSection.classList.add("opacity-100");
  allSection.classList.remove("opacity-0");
});
