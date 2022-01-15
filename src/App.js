import Login from "./Login";
import Country from "./Country";
import { getToken } from "./sessions";
import GlobalStyle from "./styledComponents/GlobalStyle";

function App() {
  return (
    <div>
      {getToken() === null ? <Login /> : <Country />}
      <GlobalStyle />
    </div>
  );
}

export default App;
