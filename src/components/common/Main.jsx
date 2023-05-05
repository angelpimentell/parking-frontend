import { useNavigate } from "react-router-dom";

import '../../styles/common/ConfirmButton.css';


function Main() {
    const navigate = useNavigate();

    function registerTicket(e) {
        e.preventDefault();
        navigate('/ticket');
    }

    return (
        <>
            <div>
                <form>
                    <h1>PARKING</h1>
                    <button className="confirm-button" onClick={registerTicket}>Register ticket</button>
                    <button>Register ticket plan</button>
                </form>
            </div>
        </>
    );
}

export default Main