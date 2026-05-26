import {getDataCars} from "./api/fetch-api-cars.js";
import {createListCatalog} from "./build-car-cards.js";
import {refs} from "./refs.js";

const renderCatalog  = async () => {
    let page = 1;
    let carBrand = '';
    const carsData = await getDataCars(page, carBrand);
    const cars = carsData.cars;

    const markup = createListCatalog(cars)

    refs.catalog.innerHTML = markup;
};

renderCatalog();