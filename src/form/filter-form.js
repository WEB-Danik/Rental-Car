const form = document.querySelector('.filter_form');

form.addEventListener('submit', event => {

    event.preventDefault();

    const formData = new FormData(form);

    const data = Object.fromEntries(formData);

    console.log(data);

});