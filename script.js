const products = [
  {
    name: "Bluetooth Headphones",
    price: 49.99,
    image: "assets/product1.jpg",
    source: "Amazon",
    link: "https://www.amazon.com/dp/B08N5WRWNW/?tag=dealdropper01-20"
  },
  {
    name: "Smart Coffee Maker",
    price: 89.99,
    image: "assets/product2.jpg",
    source: "Amazon",
    link: "https://www.amazon.com/dp/B07PGL2ZSL/?tag=dealdropper01-20"
  },
  {
    name: "Stylish Hoodie",
    price: 39.99,
    image: "assets/product3.jpg",
    source: "Amazon",
    link: "https://www.amazon.com/dp/B084Z5TVFQ/?tag=dealdropper01-20"
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
        <a href="${p.link}" target="_blank"><button>Buy Now</button></a>
      </div>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
});
