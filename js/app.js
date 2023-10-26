import usedCars from "./usedCars.js";

const carListingsContainer = document.getElementById("carListings");

function displayCars(cars) {
  const carListingsContainer = document.getElementById("carListings");
  carListingsContainer.innerHTML = "";

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";
    carCard.innerHTML = `
        <img src="${car.img}" alt="${car.make} ${car.model} Image">
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

function filterCars() {
  const minYear = parseInt(document.getElementById("minYear").value) || 2005;
  const maxYear =
    parseInt(document.getElementById("maxYear").value) || Infinity;

  const filteredCars = usedCars.filter(
    (car) => car.year >= minYear && car.year <= maxYear
  );

  if (filteredCars.length === 0) {
    carListingsContainer.innerHTML =
      "<p>No cars match the filter criteria.</p>";
  } else {
    displayCars(filteredCars);
  }
}

function resetFilters() {
  document.getElementById("minYear").value = "";
  document.getElementById("maxYear").value = "";

  displayCars(usedCars);
}
console.log("Used Cars data:", usedCars);
displayCars(usedCars);
