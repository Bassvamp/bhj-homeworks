const product = document.querySelectorAll(".product");
const productValue = document.querySelectorAll(".product__quantity-value");
const cartProducts = document.querySelector(".cart__products");
const productImage = document.querySelectorAll(".product__image");

product.forEach((item) =>
  item.addEventListener("click", (event) => {
    const index = item.getAttribute("data-id") - 1;
    if (
      productValue[index].textContent > 1 &&
      event.target.classList.contains("product__quantity-control_dec")
    ) {
      productValue[index].textContent--;
    }
    if (event.target.classList.contains("product__quantity-control_inc")) {
      productValue[index].textContent++;
    }

    if (event.target.classList.contains("product__add")) {
      const cart = document.querySelector(`.cart__product[data-id = "${index}"]`);
      const add = `<div class="cart__product" data-id="${index}">
                   <img class="cart__product-image" src="${productImage[index].src}">
                   <div class="cart__product-count">${productValue[index].textContent}</div>
                   </div>`;
      const cartProductCount = document.querySelectorAll(".cart__product-count");
      if (cart == null) {
        cartProducts.insertAdjacentHTML("beforeend", add);
      } else {
        cartProductCount[index].textContent = Number(cartProductCount[index].textContent) + Number(productValue[index].textContent);
      }
    }
  })
);
