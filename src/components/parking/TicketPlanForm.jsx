import Header from '../commons/Header';

function TicketPlanForm() {
    function handleSubmit() {
        alert('SAVE TICKET PLAN');
    }

    return (
        <>
            <Header />
            <div className='flex justify-center items-center'>
                <div className="bg-white p-6 pl-6 block shadow-md w-96">
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' />
                        <input type='number' placeholder='Price' />
                        <input type='number' placeholder='Hours' />
                        <input type='number' placeholder='Penalty per hour' />
                        <textarea placeholder='Description' />
                        <button>Save</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default TicketPlanForm