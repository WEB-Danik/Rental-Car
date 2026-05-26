import {getDataCars} from "./api/fetch-api-cars.js";
import {createListCatalog} from "./build-car-cards.js";
import {refs} from "./refs.js";

let page = 1;

const handleLoadMore = async () => {
    page += 1;

    const carsData = await getDataCars(page);
    const cars = carsData.cars;
    console.log('Cars handle', cars);

    if (page >= carsData.totalPages) {
        refs.loadMore.hidden = true;
    }

    const markup = createListCatalog(cars)

    refs.catalog.insertAdjacentHTML('beforeend', markup);
};

refs.loadMore.addEventListener('click', handleLoadMore);