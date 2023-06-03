import React from "react";

const SearchBar = ({
  className,
  value,
  onChange,
  onSubmit,
}: {
  className?: any;
  value?: any;
  onChange?: any;
  onSubmit?: any;
}) => {
  return (
    <div className="lg:sticky  flex flex-wrap gap-4 bg-white shadow-lg rounded-lg p-8 mb-8">
              
      <form
        onSubmit={onSubmit}
        className="input-group relative flex flex-row gap-1 items-stretch"
      >
        <input
          type="search"
          className="form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Search"
          aria-describedby="button-addon2"
          value={value}
          onChange={onChange}
          placeholder="Find something here..."
        />
        <button
          className="btn px-2 mr-1 py-1.5  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
          type="submit"
          id="button-addon2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
