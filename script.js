const btnPromoCode = document.getElementById("btn-promo-code");
const couponBtn = document.getElementById("coupon-btn");
const allItems = document.querySelectorAll(".all-items");
const selectedItems = document.getElementById("items-selected");
for (let i = 0; i < allItems.length; i++) {
  allItems[i].addEventListener("click", function () {
    // console.log(allItems.length);
    const price = document.getElementsByClassName("price");
    const productName = document.getElementsByClassName("product-name");
    // console.log(price[i].innerText);
    console.log(price[i].innerText, productName[i].innerText);

    const count = selectedItems.childElementCount;
    console.log(count);
    const p = document.createElement("p");

    p.classList.add("font-bold", "text-gray-400");
    p.innerHTML = `<p>
    ${count + 1} ${productName[i].innerText}
    </p>
   
    
    `;
    selectedItems.appendChild(p);
  });
}
