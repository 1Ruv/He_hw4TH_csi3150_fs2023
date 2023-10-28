import usedCars from "./usedCars.js";

const carListingsContainer = document.getElementById("carListings");

function displayCars(cars) {
  const carListingsContainer = document.getElementById("carListings");
  carListingsContainer.innerHTML = "";

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className = "carCard";
    carCard.id = `${car.model} - ${car.make}`;
    carCard.innerHTML = `
        <img src="${car.make}.webp" alt="${car.make} ${car.model} Image">
        <hr>
        <strong>${car.year} ${car.make} ${car.model}</strong>
        <p>Price: $${car.price}</p>
        <p>Color: ${car.color}</p>
        <p>Mileage: ${car.mileage} miles</p>
        <p>MPG: ${car.gasMileage}</p>
        <button type="button" class="btn btn-outline-primary">More Details</button>
        `;
    carListingsContainer.appendChild(carCard);
  });
}

// Display of all cars
displayCars(usedCars);
