const products = [
  {
    name: "Bluetooth Headphones",
    price: 49.99,
    image: "assets/product1.jpg",
    source: "Amazon",
    link: "#"
  },
  {
    name: "Smart Coffee Maker",
    price: 89.99,
    image: "assets/product2.jpg",
    source: "Walmart",
    link: "#"
  },
  {
    name: "Stylish Hoodie",
    price: 39.99,
    image: "assets/product3.jpg",
    source: "eBay",
    link: "#"
  }
];

function displayProducts(productArray) {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  productArray.forEach(p => {
    list.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p class="price">$${p.price}</p>
        <p class="source">Source: ${p.source}</p>
        <button>Buy Now</button>
      </div>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
});
