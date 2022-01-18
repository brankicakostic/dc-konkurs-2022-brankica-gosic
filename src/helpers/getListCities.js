import { getcities } from "./api-call";
import { calculateDistance, sortItems } from "./function";

export const getListCities = (sugest, setResults) => {
    getcities(sugest.id).then((data) => {
      let comparedCities = [];
      for (let i = 0; i < sortItems(data).length; i++) {
        for (let j = 0; j < sortItems(data).length; j++) {
          if (i === j) {
            continue;
          }

          comparedCities.push({
            cities: data[i].name + "-" + data[j].name,
            distance: calculateDistance(
              data[i].lat,
              data[i].lon,
              data[j].lat,
              data[j].lon,
            ),
          });
        }
      }
      comparedCities.sort((a, b) => a.distance - b.distance);
      setResults([
        {
          closes: comparedCities[0],
          furthest: comparedCities[comparedCities.length - 1],
        },
      ]);
    });

  };