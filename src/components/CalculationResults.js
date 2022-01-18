import { City, Content, Distance, Result } from "../styledComponents/ContryDistancePage";

function CalculationResults({input,results}) {
    return <Content>
      <Result>
        <p>{`Closes city in ` + input}</p>
        <City>{results.closes.cities}</City>
        <Distance>
          {"Distance " + results.closes.distance + "km"}
        </Distance>
      </Result>
      <Result>
        <p>{`Furthest cities apart in ` + input}</p>
        <City>{results.furthest.cities}</City>
        <Distance>
          {"Distance " + results.furthest.distance + "km"}
        </Distance>
      </Result>
    </Content>;
  }
  export default CalculationResults