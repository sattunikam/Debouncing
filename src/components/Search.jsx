
import { useRef, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const timer = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Previous timer cancel
    if (timer.current) {
      clearTimeout(timer.current);
    }

    // New timer start
    timer.current = setTimeout(() => {
      console.log("API Call:", value);
    }, 500);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
