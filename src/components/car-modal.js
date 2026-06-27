const icons = {
    location: '/src/assets/icons/location.svg',
    year: '/src/assets/icons/brand-calendar.svg',
    type: '/src/assets/icons/brand-car.svg',
    fuel: '/src/assets/icons/brand-fuel_pump.svg',
    engine: '/src/assets/icons/gear.svg',
    check: '/src/assets/icons/check-circle.svg',
};

const carsMap = new Map();
let modalElement = null;

const escapeHtml = value => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const formatMileage = mileage => Number(mileage).toLocaleString('uk-UA').replace(/\s/g, ' ');

const getAddressParts = address => {
    const parts = address.split(',').map(part => part.trim());

    return {
        city: parts[1] || '',
        country: parts[2] || '',
    };
};

const renderIconItem = (text, icon = icons.check) => `
    <li class="modal_item">
        <img src="${icon}" alt="" aria-hidden="true">
        <span>${escapeHtml(text)}</span>
    </li>
`;

const renderCarModal = car => {
    const {city, country} = getAddressParts(car.address);
    const features = [...car.accessories, ...car.functionalities];

    return `
        <div class="car_modal_dialog" role="dialog" aria-modal="true" aria-labelledby="car_modal_title">
            <button type="button" class="car_modal_close" aria-label="Close modal">x</button>
            <div class="car_modal_left">
                <img class="car_modal_image" src="${car.img}" alt="${escapeHtml(`${car.brand} ${car.model}`)}">
                <form class="booking_form">
                    <h3>Book your car now</h3>
                    <p>Stay connected! We are always ready to help you.</p>
                    <input type="text" name="name" placeholder="Name*" required>
                    <input type="email" name="email" placeholder="Email*" required>
                    <input type="text" name="bookingDate" placeholder="Booking date">
                    <textarea name="comment" placeholder="Comment"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div class="car_modal_info">
                <div class="car_modal_heading">
                    <h2 id="car_modal_title">${escapeHtml(car.brand)} ${escapeHtml(car.model)}, ${car.year}</h2>
                    <span>Id: ${escapeHtml(car.id.slice(0, 4))}</span>
                </div>
                <div class="car_modal_meta">
                    <span><img src="${icons.location}" alt="" aria-hidden="true">${escapeHtml(city)}, ${escapeHtml(country)}</span>
                    <span>Mileage: ${formatMileage(car.mileage)} km</span>
                </div>
                <strong class="car_modal_price">$${escapeHtml(car.rentalPrice)}</strong>
                <p class="car_modal_description">${escapeHtml(car.description)}</p>

                <section class="car_modal_section">
                    <h3>Rental Conditions:</h3>
                    <ul>
                        ${car.rentalConditions.map(condition => renderIconItem(condition)).join('')}
                    </ul>
                </section>

                <section class="car_modal_section">
                    <h3>Car Specifications:</h3>
                    <ul>
                        ${renderIconItem(`Year: ${car.year}`, icons.year)}
                        ${renderIconItem(`Type: ${car.type}`, icons.type)}
                        ${renderIconItem(`Fuel Consumption: ${car.fuelConsumption}`, icons.fuel)}
                        ${renderIconItem(`Engine Size: ${car.engineSize}`, icons.engine)}
                    </ul>
                </section>

                <section class="car_modal_section">
                    <h3>Accessories and functionalities:</h3>
                    <ul>
                        ${features.map(feature => renderIconItem(feature)).join('')}
                    </ul>
                </section>
            </div>
        </div>
    `;
};

const createModalElement = () => {
    const element = document.createElement('div');
    element.className = 'car_modal';
    element.hidden = true;
    document.body.append(element);

    element.addEventListener('click', event => {
        if (event.target === element || event.target.closest('.car_modal_close')) {
            closeCarModal();
        }
    });

    element.addEventListener('submit', event => {
        if (event.target.classList.contains('booking_form')) {
            event.preventDefault();
            closeCarModal();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !element.hidden) {
            closeCarModal();
        }
    });

    return element;
};

export const setModalCars = (cars, shouldAppend = false) => {
    if (!shouldAppend) {
        carsMap.clear();
    }

    cars.forEach(car => carsMap.set(car.id, car));
};

export const openCarModal = carId => {
    const car = carsMap.get(carId);

    if (!car) {
        return;
    }

    if (!modalElement) {
        modalElement = createModalElement();
    }

    modalElement.innerHTML = renderCarModal(car);
    modalElement.hidden = false;
    document.body.classList.add('modal_open');
};

export const closeCarModal = () => {
    if (!modalElement) {
        return;
    }

    modalElement.hidden = true;
    document.body.classList.remove('modal_open');
};

export const initCarModal = catalog => {
    catalog.addEventListener('click', event => {
        const button = event.target.closest('.read_more_car');

        if (button) {
            openCarModal(button.dataset.carId);
        }
    });
};
