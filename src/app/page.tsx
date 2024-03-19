// Componente de React para la página de inicio de SITAS.
'use client';
import { useRouter } from 'next/navigation';

export default function Page() {
  // Hook de Next.js para manejar rutas.
  const router = useRouter();

  const handleSearchClick = () => {
    // Redirecciona a la página de búsqueda.
    router.push('/search');
  };

  // Renderiza un botón centrado en la pantalla para iniciar una búsqueda de vuelos.
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-rose-700 mb-12">SITAS</h1>
      <button
        onClick={handleSearchClick}
        className="hover:bg-rose-400 rounded-3xl bg-rose-500 px-10 py-2 text-zinc-100 font-semibold transition duration-300 ease-in-out"
        type="button"
      >
        Search a flight
      </button>
    </div>
  );
}
