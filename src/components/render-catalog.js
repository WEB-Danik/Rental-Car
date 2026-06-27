import {getDataCars} from "./api/fetch-api-cars.js";
import {createListCatalog} from "./build-car-cards.js";
import {refs} from "./refs.js";
import {initCarModal, setModalCars} from "./car-modal.js";

export const catalogState = {
    page: 1,
    brand: '',
    totalPages: 0,
};

const renderCatalog  = async () => {
    const carsData = await getDataCars(catalogState.page, catalogState.brand);
    const cars = carsData.cars;
    catalogState.totalPages = carsData.totalPages;

    const markup = createListCatalog(cars)

    refs.catalog.innerHTML = markup;
    refs.loadMore.hidden = catalogState.page >= catalogState.totalPages;
    setModalCars(cars);
};

initCarModal(refs.catalog);
renderCatalog();
