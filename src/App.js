import LoginForm from "./components/common/LoginForm";
import TicketPlanForm from "./components/parking/ticketPlan/TicketPlanForm";

import { useContext } from 'react'

import { GeneralContext } from "./contexts/GeneralContext";


function App() {
  const { isLogged } = useContext(GeneralContext)

  return (
    <main className="bg-gray-100 h-screen">
      {isLogged ? <LoginForm /> : <TicketPlanForm />}
    </main>
  );
}

export default App;
