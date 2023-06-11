import { useRef } from 'react';
import { useNavigate } from "react-router-dom";

import TicketPlanService from '../../../services/TicketPlanService';

function TicketPlanForm({ setEditMode, editMode = false, ticketPlan, setTicketPlan }) {
    const navigate = useNavigate();
    const nameRef = useRef(null);
    const priceRef = useRef(null);
    const hoursRef = useRef(null);
    const penaltyPerHourRef = useRef(null);
    const descriptionRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault();

        var ticketPlanData = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            hours: hoursRef.current.value,
            penalty_per_hour: penaltyPerHourRef.current.value,
            description: descriptionRef.current.value
        }

        if (!editMode) {
            TicketPlanService.create(ticketPlan).then((data) => navigate('/ticket-plans/' + data.id));
        } else {
            ticketPlanData['id'] = ticketPlan.id

            TicketPlanService.edit(ticketPlanData).then((data) => {
                setTicketPlan(ticketPlanData);
                setEditMode(false);
            });
        }
    }

    return (
        <>
            <div className='flex justify-center items-center'>
                <div className="form">
                    <h1 className="form-title">Ticket Plan</h1>

                    <form>
                        <div>
                            <label>Name:</label>
                            {editMode ?
                                <input ref={nameRef} type='text' required defaultValue={ticketPlan.name} /> :
                                <input ref={nameRef} type='text' required />
                            }
                        </div>
                        <div>
                            <label>Price</label>
                            {editMode ?
                                <input ref={priceRef} type='number' step=".01" required defaultValue={ticketPlan.price} /> :
                                <input ref={priceRef} type='number' step=".01" required />}
                        </div>
                        <div>
                            <label>Hours</label>
                            {editMode ?
                                <input ref={hoursRef} type='number' defaultValue={ticketPlan.hours} /> :
                                <input ref={hoursRef} type='number' />}
                        </div>
                        <div>
                            <label>Penalty per hour</label>
                            {editMode ?
                                <input ref={penaltyPerHourRef} type='number' step=".01" required defaultValue={ticketPlan.penalty_per_hour} /> :
                                <input ref={penaltyPerHourRef} type='number' step=".01" required />}
                        </div>
                        <div>
                            <label>Description</label>
                            {editMode ?
                                <textarea ref={descriptionRef} defaultValue={ticketPlan.description} /> :
                                <textarea ref={descriptionRef} />}
                        </div>
                        <button onClick={handleSubmit} className='confirm-button w-full'>Save</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default TicketPlanForm