'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import SearchForm from '../../components/SearchForm';

// Crea una instancia de QueryClient, que se utilizará para configurar react-query
// y manejar el estado de las queries y mutaciones en toda la aplicación.
const queryClient = new QueryClient(); 

/**
 * Página de búsqueda que proporciona una interfaz para buscar vuelos.
 * Envuelve el formulario de búsqueda con QueryClientProvider para que 
 * react-query pueda manejar el estado de los datos de la aplicación.
 *
 */
export default function SearchPage() {
  return (
    <>
      {/* QueryClientProvider proporciona el contexto de react-query para los componentes dentro de él.
          Esto es necesario para que los hooks de react-query funcionen correctamente. */}
      <QueryClientProvider client={queryClient}> 
        <div className="parent flex justify-center mb-5 mt-2">
          <h1 className='text-2xl text-rose-800 font-semibold'>Search for Flights</h1>
        </div>      
        <SearchForm />
      </QueryClientProvider>
    </>
  );
}
