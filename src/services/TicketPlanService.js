const url = "ticket-plans/";

export async function readTicketPlans() {
    const response = await fetch(process.env.REACT_APP_BACKEND_URI + url);
    const jsonResponse = await response.json();
    return jsonResponse.data;
}

export async function readTicketPlansByPage(numberPage) {
    const response = await fetch(process.env.REACT_APP_BACKEND_URI + url + '?page=' + numberPage);
    const jsonResponse = await response.json();
    return jsonResponse;
}

export async function readTicketPlan(ticketPlanId) {
    const response = await fetch(process.env.REACT_APP_BACKEND_URI + url + ticketPlanId);
    const jsonResponse = await response.json();
    return jsonResponse.data;
}

export async function createTicketPlan(ticketPlan) {
    const response = await fetch(process.env.REACT_APP_BACKEND_URI + "ticket-plans", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: ticketPlan.name,
            price: ticketPlan.price,
            hours: ticketPlan.hours,
            penalty_per_hour: ticketPlan.penalty_per_hour,
            description: ticketPlan.description,
        })
    });

    const jsonResponse = await response.json();

    return jsonResponse.data;
}

export async function editTicketPlan(ticketPlan) {
    const response = await fetch(process.env.REACT_APP_BACKEND_URI + url + ticketPlan.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: ticketPlan.name,
            price: ticketPlan.price,
            hours: ticketPlan.hours,
            penalty_per_hour: ticketPlan.penalty_per_hour,
            description: ticketPlan.description,
        })
    });

    const jsonResponse = await response.json();

    return jsonResponse.data;
}

export async function deleteTicketPlan(ticketPlanId) {
    const response = await fetch(process.env.REACT_APP_BACKEND_URI + url + ticketPlanId, {
        method: "DELETE"
    });
    const jsonResponse = await response.json();
    return jsonResponse;
}

export async function ticketPlanLoader({ params }) {
    return { ticketPlanData: await readTicketPlan(params.ticketPlanId) };
}