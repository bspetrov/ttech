import React from "react";

interface props {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchArea: React.FC<props> = ({ showSearch, setShowSearch }) => {
  return (
    <div className={`search-popup ${showSearch ? "search-active" : ""}`}>
      <span className="search-back-drop"></span>
      <div className="search-inner">
        <div className="container">
          <div className="upper-text">
            <div className="text">Search for anything.</div>
            <button
              onClick={() => setShowSearch((p) => !p)}
              className="close-search"
            >
              <span className="la la-times"></span>
            </button>
          </div>

          <form>
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                placeholder="Search..."
                required
              />
              <button type="submit">
                <i className="la la-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
