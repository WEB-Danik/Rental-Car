export const getDataCars = (page, brand) => {
   return fetch(`https://car-rental-api.goit.global/cars?page=${page}&brand=${brand}`)
       .then(response => {
           if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
           }
           return response.json()
       })
       .then(data => {
           return data;
       })
       .catch(error => {
           console.error('Error while executing fetch request:', error);
       });
};

// getDataCars();