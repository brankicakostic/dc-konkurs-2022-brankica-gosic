import { getListCities } from "../helpers/getListCities";
import { List, ListElement } from "../styledComponents/ContryDistancePage";

const ListSuggestions=({
  filteredSuggestion,
  activeSuggestion,
  setShowSuggestions,
  setInput,
  setResults}
 )=> {
  const onSuggestHandler = (sugest) => {
    setInput(sugest.name);
    setShowSuggestions(false);
    getListCities(sugest,setResults);
  };


  return (
    <List>
      {filteredSuggestion.map((sugestion, index) => (
        <ListElement
          onClick={() => onSuggestHandler(sugestion)}
          key={sugestion.id}
          className={index === activeSuggestion ? "suggestion-active" : ""}
        >
          {sugestion.name}
        </ListElement>
      ))}
    </List>
  );
}

export default ListSuggestions;
