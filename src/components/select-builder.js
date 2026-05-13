const carBrand = [
    'Toyota',
    'Mercedes',
    'BMW',
    'Honda',
    'Mazda',
    'BYD',
    'Audi',
    'Bentley',
    'Buick',
    'Chevrolet',
    'Chrysler',
    'GMC',
    'HUMMER',
];

const allSelects = document.querySelectorAll('.custom_select');

allSelects.forEach(select => {

    const dropdown = select.querySelector('.select_dropdown');
    const label = select.querySelector('.select_label');
    const header = select.querySelector('.select_header');
    const selectedValue = select.querySelector('.selected_value');
    const hiddenInput = select.querySelector('.hidden_input');

    // RENDER OPTIONS
    const renderSelectBuilder = () => {

        if (label.textContent.trim() === 'Car brand') {

            return carBrand.map(brand => {
                return `
          <div class="options_select" data-value="${brand}">
            ${brand}
          </div>
        `;
            }).join('');

        } else {

            return `
        <div class="options_select">30$</div>
        <div class="options_select">40$</div>
        <div class="options_select">50$</div>
      `;

        }

    };

    dropdown.innerHTML = renderSelectBuilder();

    // OPEN/CLOSE
    header.addEventListener('click', () => {
        select.classList.toggle('active');
    });

    // OPTIONS
    const options = dropdown.querySelectorAll('.options_select');

    options.forEach(option => {

        option.addEventListener('click', () => {

            const value = option.dataset.value || option.textContent;

            selectedValue.textContent = value;

            hiddenInput.value = value;

            options.forEach(item => {
                item.classList.remove('active_option');
            });

            option.classList.add('active_option');

            select.classList.remove('active');

        });

    });

});


// CLOSE OUTSIDE
document.addEventListener('click', event => {

    allSelects.forEach(select => {

        if (!select.contains(event.target)) {
            select.classList.remove('active');
        }

    });

});