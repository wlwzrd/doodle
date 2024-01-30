import axios from 'axios';

const predictService = (form) => {
    return axios.post('https://doodles234.azurewebsites.net/predictwithupload', form)
        .then(response => {
            // Hacer algo con la respuesta del servicio
            return response.data;
        })
        .catch(error => {
            // Manejar el error
            console.log(error);
        });
};

export default predictService;
