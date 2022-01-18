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
import { haversine, sortItems } from "../function";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filterdSugestion, setFilterdSugestion] = useState([]);
  const [showSugestions, setShowSugestions] = useState(false);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

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
    //console.log(sugest.id);
    getcities(sugest.id).then((data) => {
      let comparedCities = [];
      for (let i = 0; i < sortItems(data).length; i++) {
        for (let j = 0; j < sortItems(data).length; j++) {
          if (i == j) {
            //to do code here

            continue;
          }
          /*   console.log(
            data[i].name +
              "-" +
              data[j].name +
              " " +
              haversine(data[i].lat, data[i].lon, data[j].lat, data[j].lon),
          ); */
          comparedCities.push({
            cities: data[i].name + "-" + data[j].name,
            distance: haversine(
              data[i].lat,
              data[i].lon,
              data[j].lat,
              data[j].lon,
            ),
          });
        }
      }
      comparedCities.sort((a, b) => a.distance - b.distance);
      setResults([{
        closes: comparedCities[0],
        furthest: comparedCities[comparedCities.length - 1],
      }]);
      /* console.log(
        comparedCities[0] + " " + comparedCities[comparedCities.length - 1],
      ); */
    });
  };

  const cleanInputHandler = () => {
    setInput("");
    setShowSugestions(false);
    setResults([])
  };

  //console.log(results && results.length && JSON.stringify(results));
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
      {results && results.length !== 0 && (
        <Content>
          <Result>
            <p>{`Closes city in ` + input}</p>
            <City>{results[0].closes.cities}</City>
            <Distance>{"Distance " + results[0].closes.distance +"km"}</Distance>
          </Result>
          <Result>
            <p>{`Furthest cities apart in ` + input}</p>
            <City>{results[0].furthest.cities}</City>
            <Distance>{"Distance " + results[0].furthest.distance +"km"}</Distance>
          </Result>
        </Content>
      )}
    </>
  );
};

export default Country;
