
function SearchBar({ search, setSearch }) {

  return (
    <input
      type="text"
      placeholder="Search employee..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
