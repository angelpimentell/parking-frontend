import LoginForm from "./components/login/LoginForm";
import Main from "./components/main/Main";

import { useContext } from 'react'

import { GeneralContext } from "./contexts/GeneralContext";


function App() {

  const { isLogged } = useContext(GeneralContext)

  return isLogged ? (
    <div>
      <LoginForm />
    </div>
  ) : (
    <div>
      <Main />
    </div>
  );
}

export default App;
