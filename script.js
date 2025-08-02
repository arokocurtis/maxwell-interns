
document.addEventListener("DOMContentLoaded", function () {
  const cars = [
    {
      brand: "Toyota",
      model: "Corolla",
      year: "2020",
      price: "$15,000",
      mileage: "25,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      condition: "Used",
      location: "Douala",
      image: "https://images.unsplash.com/photo-1615732421943-f7b4b35a63a1"
    },
    {
      brand: "Toyota",
      model: "Camry",
      year: "2022",
      price: "$22,000",
      mileage: "10,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      condition: "New",
      location: "Yaoundé",
      image: "https://images.unsplash.com/photo-1585238341984-ea2316b2b51b"
    },
    {
      brand: "Mercedes",
      model: "C-Class",
      year: "2019",
      price: "$30,000",
      mileage: "30,000 km",
      fuel: "Diesel",
      transmission: "Automatic",
      condition: "Used",
      location: "Douala",
      image: "https://images.unsplash.com/photo-1616745309825-e917f5e20dc4"
    }
  ];

  const carsGrid = document.getElementById("carsGrid");
  const brandNav = document.getElementById("brandNav");

  function renderCars(filterBrand = null) {
    if (!carsGrid) return;
    carsGrid.innerHTML = "";
    const filteredCars = filterBrand ? cars.filter(c => c.brand === filterBrand) : cars;

    filteredCars.forEach((car) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${car.image}" alt="${car.brand} ${car.model}">
        <div class="card-content">
          <h3>${car.brand} ${car.model}</h3>
          <p><strong>Year:</strong> ${car.year}</p>
          <p><strong>Price:</strong> ${car.price}</p>
          <p><strong>Mileage:</strong> ${car.mileage}</p>
          <p><strong>Fuel:</strong> ${car.fuel}</p>
          <p><strong>Transmission:</strong> ${car.transmission}</p>
          <p><strong>Condition:</strong> ${car.condition}</p>
          <p><strong>Location:</strong> ${car.location}</p>
          <a class="btn" href="https://wa.me/237000000000" target="_blank">Contact to Buy</a>
        </div>
      `;
      carsGrid.appendChild(card);
    });
  }

  if (carsGrid) {
    renderCars();
  }

  if (brandNav) {
    brandNav.addEventListener("change", function () {
      renderCars(this.value);
    });
  }

  const parts = [
    {
      name: "Brake Pad",
      compatible: "Toyota, Honda",
      price: "$25",
      available: "In Stock",
      description: "High-performance ceramic brake pads for smooth braking.",
      image: "https://images.unsplash.com/photo-1581389380400-b5d35e12f807"
    },
    {
      name: "Air Filter",
      compatible: "Mercedes, BMW",
      price: "$15",
      available: "In Stock",
      description: "Durable air filter to boost engine efficiency.",
      image: "https://images.unsplash.com/photo-1581093588401-58e88a13c6b3"
    },
    {
      name: "Oil Filter",
      compatible: "Hyundai, Kia",
      price: "$10",
      available: "Out of Stock",
      description: "Ensure clean engine oil with this reliable filter.",
      image: "https://images.unsplash.com/photo-1617303271139-235dd1733c8e"
    },
    {
      name: "Car Battery",
      compatible: "All Models",
      price: "$85",
      available: "In Stock",
      description: "Long-lasting maintenance-free battery for all vehicles.",
      image: "https://images.unsplash.com/photo-1606157422785-e6a4b206bc3f"
    }
  ];

  const partsGrid = document.getElementById("partsGrid");

  if (partsGrid) {
    parts.forEach((part) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${part.image}" alt="${part.name}">
        <div class="card-content">
          <h3>${part.name}</h3>
          <p><strong>Compatible with:</strong> ${part.compatible}</p>
          <p><strong>Price:</strong> ${part.price}</p>
          <p><strong>Availability:</strong> ${part.available}</p>
          <p>${part.description}</p>
          <a class="btn" href="https://wa.me/237000000000" target="_blank">Order Now</a>
        </div>
      `;
      partsGrid.appendChild(card);
    });
  }
});



