const btnPromoCode = document.getElementById("btn-promo-code");
const couponBtn = document.getElementById("coupon-btn");
const allItems = document.querySelectorAll(".all-items");
for (let i = 0; i < allItems.length; i++) {
  allItems[i].addEventListener("click", function () {
    // console.log(allItems.length);
    const price = document.getElementsByClassName("price");
    const productName = document.getElementsByClassName("product-name");
    // console.log(price[i].innerText);
    console.log(price[i].innerText, productName[i].innerText);
  });
}
