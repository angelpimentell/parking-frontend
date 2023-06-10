import Main from './components/common/Main';
import LoginForm from './components/common/LoginForm';

import TicketPlanForm from './components/parking/ticketPlan/TicketPlanForm';
import TicketPlanTable from './components/parking/ticketPlan/TicketPlanTable';
import TicketPlanFormView from './components/parking/ticketPlan/TicketPlanFormView';
import TicketPlanService from './services/TicketPlanService';

import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/ticket-plan",
    element: <TicketPlanForm />,
  },
  {
    path: "/ticket-plans",
    element: <TicketPlanTable />,
  },
  {
    path: "/ticket-plans/:ticketPlanId",
    element: <TicketPlanFormView />,
    loader: TicketPlanService.ticketPlanLoader
  },
]);

export default router;