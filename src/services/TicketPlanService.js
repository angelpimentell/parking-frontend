import Service from "./Service";


const TicketPlanService = class TicketPlanService extends Service {
    static url = "ticket-plans/";

    static async ticketPlanLoader({ params }) {
        return { ticketPlanData: await TicketPlanService.readOne(params.ticketPlanId) };
    }

}

export default TicketPlanService;