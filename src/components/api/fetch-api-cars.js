export const getDataCars = (page, brand) => {
   const params = new URLSearchParams({page});

   if (brand) {
       params.set('brand', brand);
   }

   return fetch(`https://car-rental-api.goit.global/cars?${params.toString()}`)
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
           return {cars: [], totalPages: 0};
       });
};

// getDataCars();
