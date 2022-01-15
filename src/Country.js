import React, { useEffect, useState } from "react";
import { getcountry, getcities } from "./get-country";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filterdSugestion, setFilterdSugestion] = useState([]);
  const [showSugestions, setShowSugestions] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    getcountry().then((data) => setCountries(data));
  }, []);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = countries.filter((country) =>
        country.name.toLowerCase().startsWith(text),
      );
    }

    setInput(text);
    setFilterdSugestion(matches);
    setShowSugestions(true);
  };

  const onSuggestHandler = (sugest) => {
    setInput(sugest.name);
    setShowSugestions(false);
    console.log(sugest.id);
    getcities(sugest.id).then(data=>console.log(data))
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={input}
      />
      {showSugestions &&
        filterdSugestion.map((sugestion) => (
          <div
            onClick={() => onSuggestHandler(sugestion)}
            key={sugestion.id}
          >
            {sugestion.name}
          </div>
        ))}
    </>
  );
};

export default Country;
