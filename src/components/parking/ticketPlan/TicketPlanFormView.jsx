import { useState } from 'react';
import { useLoaderData, useNavigate } from "react-router-dom";

import TicketPlanForm from "./TicketPlanForm";
import TicketPlanService from '../../../services/TicketPlanService';


function TicketPlanFormView() {
    const navigate = useNavigate();
    const { ticketPlanData } = useLoaderData();
    const [editMode, setEditMode] = useState(false);
    const [ticketPlan, setTicketPlan] = useState(ticketPlanData);

    function deleteHandle(e) {
        e.preventDefault();

        TicketPlanService.delete(ticketPlan.id).then(() => navigate('/ticket-plans'));
    }

    function editHandle(e) {
        e.preventDefault();

        setEditMode(true);
    }

    return !editMode ? (
        <>
            <div className='flex justify-center items-center'>
                <div className="form">
                    <label className="form-title">Ticket Plan</label>
                    <div className="field">
                        <label>Name</label>
                        <p>{ticketPlan.name} </p>
                    </div>
                    <div className="field">
                        <label>Price</label>
                        <p>{ticketPlan.price}</p>
                    </div>
                    <div className="field">
                        <label>Hours</label>
                        <p>{ticketPlan.hours}</p>
                    </div>
                    <div className="field">
                        <label>Penalty per hour</label>
                        <p>{ticketPlan.penalty_per_hour}</p>
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <p>{ticketPlan.description} </p>
                    </div>
                    <button className='confirm-button w-full' onClick={editHandle}>Edit</button>
                    <button className='confirm-button w-full' onClick={deleteHandle}>Delete</button>
                </div>
            </div>
        </>
    ) : <TicketPlanForm
        editMode={editMode}
        setEditMode={setEditMode}
        ticketPlan={ticketPlan}
        setTicketPlan={setTicketPlan} />;
}

export default TicketPlanFormView