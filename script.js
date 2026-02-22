const products = [
  {
    name: "Wireless Headphones",
    price: "$59.99",
    image: "https://via.placeholder.com/300",
    link: "https://www.amazon.com/dp/PRODUCT-ID?tag=YOUR_AMAZON_AFFILIATE_LINK"
  },
  {
    name: "Mobile Phone",
    price: "$89.99",
    image: "https://via.placeholder.com/300",
    link: "https://amzn.to/46jAjT6"
  },
  {
    name: "Bluetooth Speaker",
    price: "$39.99",
    image: "https://via.placeholder.com/300",
    link: "https://www.amazon.com/dp/PRODUCT-ID?tag=YOUR_AMAZON_AFFILIATE_LINK"
  }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");

  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <div class="price">${product.price}</div>
    <a href="${product.link}" target="_blank">
      <button>Buy on Amazon</button>
    </a>
  `;

  productList.appendChild(div);

});
