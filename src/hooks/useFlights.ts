// Hook personalizado para obtener vuelos basado en parámetros de búsqueda utilizando react-query.

import { useQuery } from 'react-query';
import api from '../services/api';
import { IFlightSearchParams } from '../types/IFlightSearchParams';
import { IFlight } from '../types/IFlight';

/**
 * Utiliza el hook useFlights para realizar una búsqueda de vuelos.
 * 
 * @param {IFlightSearchParams} searchParams - Parámetros de búsqueda para consultar vuelos.
 * @returns La instancia de query de React Query que contiene la información de los vuelos y el estado de la solicitud.
 */
export const useFlights = (searchParams: IFlightSearchParams) => {
  // Utiliza useQuery para realizar la llamada a la API y obtener vuelos.
  // Los resultados no se cargan de inmediato, solo después de ciertos disparadores debido a `enabled: false`.
  return useQuery<IFlight[], Error>(
    // Las queries de React Query se identifican por una clave única; en este caso, es un array con 'searchFlights' y los searchParams.
    ['searchFlights', searchParams],
    // La función para obtener los datos, llamando a la API con los parámetros de búsqueda.
    () => api.get<IFlight[]>('/searchFlights', { params: searchParams })
             .then((res) => res.data),
    {
      enabled: false,
    }
  );
};
