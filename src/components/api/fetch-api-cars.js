export const getDataCars = (page) => {
   return fetch(`https://car-rental-api.goit.global/cars?page=${page}`)
       .then(response => {
           if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
           }
           return response.json()
       })
       .then(data => {
           console.log('Cars with API', data);
           return data;
       })
       .catch(error => {
           console.error('Error while executing fetch request:', error);
       });
};

// getDataCars();