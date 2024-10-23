import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para lidar com a busca
    console.log('Buscando:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Aperte o K e busque aqui"
        className="border border-gray-300 rounded-l px-4 py-1 w-[500px]"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-r px-4 py-2"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
