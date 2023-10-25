import usedCars from "./usedCars";

const carListingsContainer = document.getElementById("carListings");

function displayCars(cars) {
  const carListingsContainer = document.getElementById("carListings");
  carListingsContainer.innerHTML = "";

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";
    carCard.innerHTML = `
        <strong>${car.year} ${car.make} ${car.model}</strong>
        <p>Price: $${car.price}</p>
        <p>Mileage: ${car.mileage} miles</p>
        <p>Color: ${car.color}</p>
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

  displayCars(cars);
}

displayCars(cars);
