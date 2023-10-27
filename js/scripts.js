import usedCars from "./usedCars.js";

// button
document.getElementById("appFiltersBtn").onclick = function () {
  applyFilters();
};
document.getElementById("resetFilterBtn").onclick = function () {
  resetFilters();
};

// applying filters
function applyFilters() {
  var id;
  const yearFilter = Number(document.getElementById("yearFilter").value);
  const priceFilter = Number(document.getElementById("priceFilter").value);
  const mileageFilter = Number(document.getElementById("mileageFilter").value);

  usedCars.forEach((car) => {
    id = `${car.model} - ${car.make}`;

    car.classname = "carCard";
    if (car.year > yearFilter) {
      car.classname = "carCard filterhidden";
    }
    if (car.price > priceFilter) {
      car.classname = " carCard filterhidden";
    }
    if (car.mileage > mileageFilter) {
      car.classname = "carCard filterhidden";
    }
    //if (car.make !== makeFilter) {
    //  car.className = "carCard filterhidden";
    //}
    document.getElementById(id).className = car.classname;
  });
}
//reset filter
function resetFilters() {
  var id;
  usedCars.forEach((car) => {
    id = `${car.model} - ${car.make}`;
    document.getElementById(id).className = "carCard";
  });
}
