import Login from "./pages/Login";
import Country from "./pages/Country";
import { getToken } from "./helpers/sessions";
import GlobalStyle from "./styledComponents/GlobalStyle";

function App() {
  return (
    <>
      {getToken() === null ? <Login /> : <Country />}
      <GlobalStyle />
    </>
  );
}

export default App;
