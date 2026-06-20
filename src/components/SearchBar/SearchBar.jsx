import "./SearchBar.css";

export function SearchBar({ city, onChange }) {
  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="Type a city..."
        value={city}
        onChange={(e) => onChange(e.target.value)}
        className="city-input"
      />
    </div>
  );
}