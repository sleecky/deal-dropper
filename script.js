const products = [{'name': 'Bluetooth Headphones', 'price': 49.99, 'filename': 'product1.jpg', 'link': 'https://www.amazon.com/dp/B08N5WRWNW/?tag=dealdropper01-20'}, {'name': 'Smart Coffee Maker', 'price': 89.99, 'filename': 'product2.jpg', 'link': 'https://www.amazon.com/dp/B07PGL2ZSL/?tag=dealdropper01-20'}, {'name': 'Stylish Hoodie', 'price': 39.99, 'filename': 'product3.jpg', 'link': 'https://www.amazon.com/dp/B084Z5TVFQ/?tag=dealdropper01-20'}];

function displayProducts(productArray) {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  productArray.forEach(p => {
    list.innerHTML += `
      <div class="product">
        <img src="assets/${p.filename}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p class="price">$${p.price}</p>
        <p class="source">Source: Amazon</p>
        <a href="${p.link}" target="_blank"><button>Buy Now</button></a>
      </div>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
});
