// Formulario para buscar vuelos en la aplicación SITAS.

import React, { useState } from "react";
import { useFlights } from "@/hooks/useFlights";
import { IFlightSearchParams } from "@/types/IFlightSearchParams";
import { IFlight } from "@/types/IFlight";


/**
 * Componente SearchForm para la búsqueda de vuelos.
 * 
 * Este componente permite a los usuarios introducir los parámetros de búsqueda para encontrar vuelos.
 * Utiliza el estado local para mantener y actualizar los parámetros de búsqueda.
 * Al enviar el formulario, utiliza el hook `useFlights` para obtener datos basados en los parámetros proporcionados.
 * También muestra resultados de vuelos o mensajes de carga y error si corresponde.
 */
export default function SearchForm() {

  //Los parámetros son inicializados para incluirlos en el header.
  const [searchParams, setSearchParams] = useState<IFlightSearchParams>({
    airline: "",
    origin: "",
    destination: "",
    startDate: "",
    endDate: "",
    lowerPrice: "",
    highestPrice: "",
  });

  // Desestructura los datos necesarios del hook useFlights.
  const { data: flights, error, isLoading, refetch } = useFlights(searchParams);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  // Estado para saber si se ha buscado al menos una vez.
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearched(true);
    refetch();
  };

  const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "10px",
    maxWidth: "750px",
    margin: "auto",
  };

  const inputStyle: React.CSSProperties = {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    minWidth: "50px",
  };

  const cardStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "8px 0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div className="fieldgroup flex justify-center">
          <input
            name="origin"
            value={searchParams.origin || ""}
            onChange={handleChange}
            placeholder="Origin"
            style={inputStyle}
          />
          <input
            name="destination"
            value={searchParams.destination || ""}
            onChange={handleChange}
            placeholder="Destination"
            style={inputStyle}
          />
          <input
            className=" ml-3"
            name="airline"
            value={searchParams.airline || ""}
            onChange={handleChange}
            placeholder="Airline"
            style={inputStyle}
          />
        </div>
        <div className="fieldgroup flex justify-center">
          <input
            type="date"
            name="startDate"
            value={searchParams.startDate || ""}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="date"
            name="endDate"
            value={searchParams.endDate || ""}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            className=" ml-3"
            type="number"
            name="lowerPrice"
            value={searchParams.lowerPrice || ""}
            onChange={handleChange}
            placeholder="Lowest Price"
            style={inputStyle}
          />
          <input
            type="number"
            name="highestPrice"
            value={searchParams.highestPrice || ""}
            onChange={handleChange}
            placeholder="Highest Price"
            style={inputStyle}
          />
        </div>
        <div className="buttondiv flex justify-center">
          <button
            className=" hover:bg-rose-400 rounded-3xl bg-rose-500 min-w-44 max-w-48 h-10 text-zinc-100"
            type="submit"
          >
            Search Flights
          </button>
        </div>
      </form>
      {isLoading && <p>Loading flights...</p>}
      {error && <p>An error occurred: {error.message}</p>}
      {searched && !isLoading && flights && (
        <div className="container mx-auto px-4 pt-10">
          <h2 className = "text-xl pl-20 font-bold" > Vuelos encontrados:</h2>
          <div className="flex flex-col gap-4 items-center">
            {/* se mapea el array de vuelos para mostrarlos en tarjetas. */}
            {flights.map((flight) => (
              <div
                key={flight.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out w-full md:w-3/4"
              >
                <div className="p-5">
                  <h3 className="text-xl text-center font-bold text-rose-600 mb-2">
                    {flight.airline}
                  </h3>
                  <p className="text-gray-700 mb-1 pl-4">
                    <strong>Origin:</strong> {flight.origin}
                  </p>
                  <p className="text-gray-700 mb-1 pl-4">
                    <strong>Destination:</strong> {flight.destination}
                  </p>
                  <p className="text-gray-700 mb-1 pl-4">
                    <strong>Departure Date:</strong> {flight.departureDate}
                  </p>
                  <p className="text-gray-700 mb-1 pl-4">
                    <strong>Arrival Date:</strong> {flight.arrivalDate}
                  </p>
                  <p className="text-xl text-end font-medium text-rose-500 md:w-3/4">
                    <strong>Price:</strong> ${flight.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
