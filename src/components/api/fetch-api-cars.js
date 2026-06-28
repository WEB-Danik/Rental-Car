export const getDataCars = (page, filters = {}) => {
   const params = new URLSearchParams({page});
   const normalizedFilters = typeof filters === 'string' ? {brand: filters} : filters;

   Object.entries(normalizedFilters).forEach(([key, value]) => {
       if (value) {
           params.set(key, value);
       }
   });

   if (normalizedFilters.rentalPrice) {
       params.set('rentalPrice', normalizedFilters.rentalPrice);
       params.delete('carPrice');
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
