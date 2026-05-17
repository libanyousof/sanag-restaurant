const menuBar = document.querySelector("#menu-bar");
const closeNav = document.querySelector("#close");
const nav = document.querySelector("#nav");
const navLink = document.querySelectorAll(".nav-link");

if (menuBar) {
  menuBar.addEventListener("click", () => {
    menuBar.style.display = "none";
    nav.style.display = "block";
  });

  closeNav.addEventListener("click", () => {
    menuBar.style.display = "block";
    nav.style.display = "none";
  });

  navLink.forEach((link) => {
    link.addEventListener("click", () => {
      menuBar.style.display = "block";
      nav.style.display = "none";
    });
  });
}

// Culinary

/*
              <div class="culinary-card">
                <div class="culinary-card-cover cv1"></div>
                <div class="culinary-card-content">
                  <h3 class="culinary-card-content-title">
                    Spiced Rice Platter
                  </h3>
                  <p class="culinary-card-content-descript">
                    Aromatic rice served with tender meat and vegetables
                  </p>
                </div>
              </div>
*/

const cardData = [
  {
    category: "biryani",
    title: "Spiced Rice Platter",
    desc: "Aromatic rice served with tender meat and vegetables",
  },
  {
    category: "burger",
    title: "Fresh Grilled Burger",
    desc: "Juicy patties perfectly seasoned and grilled to perfection",
  },
  {
    category: "butter-chicken",
    title: "Spiced Lamb",
    desc: "Tender lamb slow-cooked with traditional spices",
  },
  {
    category: "dosa",
    title: "Fresh Flatbreads",
    desc: "Homemade canjeero and sabaayad breads",
  },
  {
    category: "rice",
    title: "Traditional Breakfast",
    desc: "A hearty start to your day with Somali flavors",
  },
  {
    category: "dessert",
    title: "Sweets & Desserts",
    desc: "Indulgent treats to end your meal on a high note",
  },
];

const container = document.querySelector(".culinary-cards");

cardData.forEach((item) => {
  axios
    .get(`https://foodish-api.com/api/images/${item.category}`)
    .then((res) => {
      container.innerHTML += `
      <div class="culinary-card">
        <div class="culinary-card-cover" style="background-image: url('${res.data.image}');"></div>
        <div class="culinary-card-content">
          <h3 class="culinary-card-content-title">${item.title}</h3>
          <p class="culinary-card-content-descript">${item.desc}</p>
        </div>
      </div>
    `;
    });
});

// menu
const menuData = {
  mainDishes: [
    {
      name: "Hilib Ari",
      price: "$15.99",
      desc: "Tender goat meat served with spiced rice",
    },
    {
      name: "Bariis iyo Hilib",
      price: "$14.99",
      desc: "Somali-style rice with braised beef",
    },
    {
      name: "Suqaar",
      price: "$13.99",
      desc: "Diced meat sautéed with vegetables",
    },
    {
      name: "Sabaayad",
      price: "$11.99",
      desc: "Flatbread served with curry sauce",
    },
  ],

  appetizers: [
    {
      name: "Sambusa",
      price: "$2.99",
      desc: "Crispy pastry filled with spiced meat",
    },
    {
      name: "Bajiye",
      price: "$4.99",
      desc: "Bean fritters with green chilies",
    },
    {
      name: "Malawah",
      price: "$3.99",
      desc: "Sweet pancake-like bread",
    },
  ],

  drinks: [
    {
      name: "Shaah",
      price: "$2.99",
      desc: "Somali spiced tea",
    },
    {
      name: "Qaxwo",
      price: "$2.99",
      desc: "Traditional Somali coffee",
    },
    {
      name: "Mango Juice",
      price: "$3.99",
      desc: "Fresh mango juice",
    },
  ],
};

function displayMenu(items, elementId) {
  const container = document.getElementById(elementId);

  items.forEach((item) => {
    const li = document.createElement("li");

    li.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-price">${item.price}</span>
            <div class="item-desc">${item.desc}</div>
        `;

    container.appendChild(li);
  });
}

// Load menu items
displayMenu(menuData.mainDishes, "main-dishes");
displayMenu(menuData.appetizers, "appetizers");
displayMenu(menuData.drinks, "drinks");
