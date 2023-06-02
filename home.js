const productContainer = document.querySelector(".products-container");

let html = "";
products.forEach((product) => {
  html += `
        <div class="products">
        <img src="${product.productImage}" alt="" class="product-img">
        <p class="product-title">${product.name}</p>
        <div class="ratings">
        <img src="images/rating-${
          product.ratings.stars * 10
        }.png" alt="" class="rating">
        <p class="count">${product.ratings.count}</p>
        </div> 
        <p class="price">$${(product.priceInCent / 100).toFixed(2)}</p>
        <div class="sucess"></div>
        <select class="value" name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        <button class="add" data-product-id = "${
          product.id
        }">Add to cart</button>
        </div>
   `;
});

productContainer.innerHTML = html;

const addToCart = document.querySelectorAll(".add");
const quantity = 1;
addToCart.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    let matchingItem;

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId,
        quantity,
      });
    }
    let cartLength = 0;
    cart.forEach((item)=> {
     cartLength +=  item.quantity;
    });
    document.querySelector('.cart-quan').innerHTML = cartLength;
  });
});
