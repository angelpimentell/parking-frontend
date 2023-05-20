import { useNavigate } from "react-router-dom";


function Main() {
    const navigate = useNavigate();

    function registerTicket(e) {
        navigate('/ticket-plan');
    }

    function viewTicketPlan(e) {
        navigate('/ticket-plans');
    }

    return (
        <>
            <div>
                <form>
                    <h1>PARKING</h1>
                    <button className="confirm-button">Register ticket</button>
                    <button className="confirm-button" onClick={registerTicket}>Register ticket plan</button>
                    <button className="confirm-button" onClick={viewTicketPlan}>View Ticket Plan</button>
                </form>
            </div>
        </>
    );
}

export default Main