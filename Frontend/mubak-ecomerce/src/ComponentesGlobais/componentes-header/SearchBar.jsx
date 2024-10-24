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
        className="border border-gray-300 rounded-2 px-2 py-2 w-[500px]"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white "
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
