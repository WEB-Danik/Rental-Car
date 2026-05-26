import {getDataCars} from "../components/api/fetch-api-cars.js";
import {refs} from "../components/refs.js";
import {createListCatalog} from "../components/build-car-cards.js";

const form = document.querySelector('.filter_form');

form.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(form);

    const data = Object.fromEntries(formData);

    const carsData = await getDataCars(1, data.carBrand);

    const markup = createListCatalog(carsData.cars);

    refs.catalog.innerHTML = markup;

});