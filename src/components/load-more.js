import {getDataCars} from "./api/fetch-api-cars.js";
import {createListCatalog} from "./build-car-cards.js";
import {refs} from "./refs.js";
import {setModalCars} from "./car-modal.js";
import {catalogState} from "./render-catalog.js";

const handleLoadMore = async () => {
    catalogState.page += 1;

    const carsData = await getDataCars(catalogState.page, catalogState.filters);
    const cars = carsData.cars;
    catalogState.totalPages = carsData.totalPages;

    if (catalogState.page >= carsData.totalPages) {
        refs.loadMore.hidden = true;
    }

    const markup = createListCatalog(cars)

    refs.catalog.insertAdjacentHTML('beforeend', markup);
    setModalCars(cars, true);
};

refs.loadMore.addEventListener('click', handleLoadMore);
