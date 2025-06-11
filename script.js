const products = [
  {
    name: "Bluetooth Headphones",
    price: 49.99,
    category: "Electronics",
    image: "assets/headphones.jpg",
    source: "Amazon",
    link: "#"
  },
  {
    name: "Smart Coffee Maker",
    price: 89.99,
    category: "Home",
    image: "assets/coffee.jpg",
    source: "Best Buy",
    link: "#"
  },
  {
    name: "Stylish Hoodie",
    price: 29.99,
    category: "Fashion",
    image: "assets/hoodie.jpg",
    source: "eBay",
    link: "#"
  },
  {
    name: "LEGO Building Set",
    price: 59.99,
    category: "Kids",
    image: "assets/lego.jpg",
    source: "Walmart",
    link: "#"
  },
  {
    name: "Gift Box Set",
    price: 24.99,
    category: "Gifts",
    image: "assets/giftbox.jpg",
    source: "Target",
    link: "#"
  },
  {
    name: "Gaming Mouse",
    price: 39.99,
    category: "Recommended",
    image: "assets/mouse.jpg",
    source: "AliExpress",
    link: "#"
  }
];

const productList = document.getElementById("productList");
const searchBar = document.getElementById("searchBar");
const priceFilter = document.getElementById("priceFilter");
const categoryItems = document.querySelectorAll(".categories li");

function renderProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach(product => {
    const item = document.createElement("div");
    item.classList.add("product");
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p class="price">$${product.price}</p>
      <p class="source">From: ${product.source}</p>
      <a href="${product.link}" target="_blank">
        <button>Buy Now</button>
      </a>
    `;
    productList.appendChild(item);
  });
}

function filterProducts() {
  const search = searchBar.value.toLowerCase();
  const price = priceFilter.value;
  const activeCategory = document.querySelector(".categories li.active")?.textContent;

  const filtered = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    const matchesCategory = !activeCategory || product.category === activeCategory;
    let matchesPrice = true;

    if (price === "low") matchesPrice = product.price < 25;
    else if (price === "medium") matchesPrice = product.price >= 25 && product.price <= 100;
    else if (price === "high") matchesPrice = product.price > 100;

    return matchesSearch && matchesPrice && matchesCategory;
  });

  renderProducts(filtered);
}

searchBar.addEventListener("input", filterProducts);
priceFilter.addEventListener("change", filterProducts);
categoryItems.forEach(item => {
  item.addEventListener("click", () => {
    categoryItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    filterProducts();
  });
});

renderProducts(products);
