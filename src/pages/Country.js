import React, { useEffect, useState } from "react";
import logo from "./../assets/logo.svg";
import closeIcon from "../assets/CloseIcon.svg";
import { getcountry, getcities } from "../get-country";
import { Logo, Header } from "../styledComponents/ContryDistancePage";
import { Input } from "../styledComponents/ContryDistancePage";
import { List } from "../styledComponents/ContryDistancePage";
import { ListElement } from "../styledComponents/ContryDistancePage";
import { Distance } from "../styledComponents/ContryDistancePage";
import { City } from "../styledComponents/ContryDistancePage";
import { Result } from "../styledComponents/ContryDistancePage";
import { Content } from "../styledComponents/ContryDistancePage";
import { sortItems } from "../function";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([])
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
        country.name.toLowerCase().startsWith(text.toLowerCase()),
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
    getcities(sugest.id).then((data) => sortItems(data));
    
  };

  const cleanInputHandler = () => {
    setInput("");
    setShowSugestions(false);
  };

  return (
    <>
      <Header>
        <Logo alt="logo" src={logo} />
        <div>
          <div className="input-container">
            <Input
              type="text"
              onChange={(e) => onChangeHandler(e.target.value)}
              value={input}
            />
            <img
              onClick={() => cleanInputHandler()}
              alt="eye"
              src={closeIcon}
              className="input-icon"
            />
          </div>
          {showSugestions && (
            <List>
              {filterdSugestion.map((sugestion) => (
                <ListElement
                  onClick={() => onSuggestHandler(sugestion)}
                  key={sugestion.id}
                >
                  {sugestion.name}
                </ListElement>
              ))}
            </List>
          )}
        </div>
      </Header>
      <Content>
        <Result>
          <p>{`Closes city in ` + input}</p>
          <City>Kiel - Lubeck</City>
          <Distance>{"Distance 147km"}</Distance>
        </Result>
        <Result>
          <p>{`Furthest cities apart in ` + input}</p>
          <City>Kiel - Lubeck</City>
          <Distance>{"Distance 673km"}</Distance>
        </Result>
      </Content>
    </>
  );
};

export default Country;
