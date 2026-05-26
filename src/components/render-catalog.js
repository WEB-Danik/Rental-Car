import {getDataCars} from "./api/fetch-api-cars.js";
import {createListCatalog} from "./build-car-cards.js";
import {refs} from "./refs.js";

const renderCatalog  = async () => {
    let page = 1;
    const carsData = await getDataCars(page);
    const cars = carsData.cars;
    console.log('Cars', cars);

    const markup = createListCatalog(cars)

    refs.catalog.innerHTML = markup;
};

renderCatalog();