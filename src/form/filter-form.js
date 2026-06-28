import {getDataCars} from "../components/api/fetch-api-cars.js";
import {refs} from "../components/refs.js";
import {createListCatalog} from "../components/build-car-cards.js";
import {setModalCars} from "../components/car-modal.js";
import {catalogState} from "../components/render-catalog.js";
import {closeFilterModal} from "../components/filter-modal.js";

const form = document.querySelector('.filter_form');

form.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(form);

    const data = Object.fromEntries(formData);
    catalogState.page = 1;
    catalogState.filters = {
        brand: data.carBrand,
        rentalPrice: data.carPrice,
        minMileage: data.mileageFrom,
        maxMileage: data.mileageTo,
    };

    const carsData = await getDataCars(catalogState.page, catalogState.filters);
    catalogState.totalPages = carsData.totalPages;

    const markup = createListCatalog(carsData.cars);

    refs.catalog.innerHTML = markup;
    refs.loadMore.hidden = catalogState.page >= catalogState.totalPages;
    setModalCars(carsData.cars);
    closeFilterModal();

});
