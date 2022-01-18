import { getListCities } from "../helpers/getListCities";
import { Input } from "../styledComponents/ContryDistancePage";
import closeIcon from "../assets/CloseIcon.svg";
import { useEffect, useState } from "react";
import { getcountry } from "../helpers/api-call";

function AutocompleteInput({
  input,
  setInput,
  filteredSuggestion,
  setFilteredSuggestion,
  setShowSuggestions,
  setResults,
  activeSuggestion,
  setActiveSuggestion,
}) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getcountry().then((data) => setCountries(data));
  }, []);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = countries.filter((country) =>
        country.name.toLowerCase().startsWith(text.toLowerCase()),
      );
    }
    setInput(text);
    setFilteredSuggestion(matches);
    setShowSuggestions(true);
  };

  const cleanInputHandler = () => {
    setInput("");
    setShowSuggestions(false);
    setResults([]);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setInput(filteredSuggestion[activeSuggestion].name);
      getListCities(filteredSuggestion[activeSuggestion], setResults);
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestion.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  return (
    <div className="input-container">
      <Input
        type="text"
        onChange={(e) => onChangeHandler(e.target.value)}
        onKeyDown={onKeyDown}
        value={input}
      />
      <img
        onClick={() => cleanInputHandler()}
        alt="eye"
        src={closeIcon}
        className="input-icon"
      />
    </div>
  );
}

export default AutocompleteInput;
