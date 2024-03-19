// Configuración de Axios para llamadas a la API de vuelos.

import axios from 'axios';

// Crea una instancia de Axios con la URL base de la API de vuelos.
const api = axios.create({
  baseURL: 'http://localhost:8080/flights',
});

export default api;
