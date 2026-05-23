import data from '../assets/data/data-cars.json';

const catalog = document.querySelector('.container_catalog_cars');

const renderCatalog = () => {

    console.log('Cars', data)

    const carsList = data.map(car => {
        return `
            <div class="card_container">
              <img src="${car.img}" class="card-image" alt="${car.model}" />
              <span class="card_title">
               <h4 class="brand">${car.brand}</h4>
               <h4 class="model">${car.model},</h4>
               <h4 class="year">${car.year}</h4>
               <h4 class="price">$ ${car.rentalPrice}</h4>
              </span>
              <span class="car_description">
                <p>${car.address.split(',')[1]}</p>
                <div class="line"></div>
                <p>${car.address.split(',')[2]}</p>
                <div class="line"></div>
                <p class="company_car">${car.rentalCompany}</p>
                <div class="line"></div>
                <p class="type_car">${car.type}</p>
                <div class="line"></div>
                <p>${car.mileage} km</p>
              </span>
               <button type="submit" id="read_more_car">Read more</button>
            </div>
        `;
    }).join('');

    catalog.innerHTML = carsList;
};

renderCatalog();