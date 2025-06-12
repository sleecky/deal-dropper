
const products = [
  { name: "Wireless Headphones", price: 45, category: "Electronics", image: "assets/product1.jpg", link: "https://www.amazon.com/dp/B0CFXBCL5N?tag=dealdropper01-20" },
  { name: "Smart Coffee Maker", price: 85, category: "Home", image: "assets/product2.jpg", link: "https://www.amazon.com/dp/B09NBLXQD4?tag=dealdropper01-20" },
  { name: "Comfy Hoodie", price: 30, category: "Fashion", image: "assets/product3.jpg", link: "https://www.amazon.com/dp/B08QF82F6X?tag=dealdropper01-20" }
];

const productList = document.getElementById("productList");

function displayProducts(filtered = products) {
  productList.innerHTML = "";
  filtered.forEach(product => {
    productList.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <a href="${product.link}" target="_blank">Buy Now</a>
      </div>
    `;
  });
}

displayProducts();

document.getElementById("searchBar").addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  displayProducts(filtered);
});

document.getElementById("priceFilter").addEventListener("change", e => {
  const val = e.target.value;
  let filtered = [...products];
  if (val === "low") filtered = filtered.filter(p => p.price < 25);
  else if (val === "medium") filtered = filtered.filter(p => p.price >= 25 && p.price <= 100);
  else if (val === "high") filtered = filtered.filter(p => p.price > 100);
  displayProducts(filtered);
});
