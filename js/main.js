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

// Our Culinary
async function loadCulinaryCards() {
  const container = document.querySelector(".culinary-cards");
  container.innerHTML = "";

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];

  const { data } = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${randomLetter}`,
  );

  const meals = (data.meals || []).slice(0, 6);

  // If letter returned less than 6, retry with another letter
  if (meals.length < 6) {
    loadCulinaryCards();
    return;
  }

  meals.forEach((meal) => {
    const card = createCard({
      title: meal.strMeal,
      desc: meal.strCategory,
      imageUrl: meal.strMealThumb,
    });
    container.appendChild(card);
  });
}
