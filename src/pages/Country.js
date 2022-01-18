import React, { useState } from "react";
import logo from "./../assets/logo.svg";
import { Logo, Header } from "../styledComponents/ContryDistancePage";
import CalculationResults from "../components/CalculationResults";
import ListSuggestions from "../components/ListSuggestions";
import AutocompleteInput from "../components/AutocompleteInput";

const Country = () => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestion, setFilteredSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  return (
    <>
      <Header>
        <Logo alt="logo" src={logo} />
        <div>
          <AutocompleteInput
            input={input}
            setInput={setInput}
            filteredSuggestion={filteredSuggestion}
            setFilteredSuggestion={setFilteredSuggestion}
            setShowSuggestions={setShowSuggestions}
            setResults={setResults}
            activeSuggestion={activeSuggestion}
            setActiveSuggestion={setActiveSuggestion}
          />
          {showSuggestions && filteredSuggestion.length && (
            <ListSuggestions
              filteredSuggestion={filteredSuggestion}
              activeSuggestion={activeSuggestion}
              setShowSuggestions={setShowSuggestions}
              setInput={setInput}
              setResults={setResults}
            />
          )}
        </div>
      </Header>
      {results && results.length !== 0 && (
        <CalculationResults results={results[0]} input={input} />
      )}
    </>
  );
};

export default Country;
