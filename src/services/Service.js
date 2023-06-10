
const Service = class Service {
    static url = null;

    static async readMany(data, filterColumns = false, page = 1, perPage = 25) {
        var urlRequest = new URL(process.env.REACT_APP_BACKEND_URI + this.url);
    
        if (data) {
            urlRequest.searchParams.set('id', null);
    
            if (!Array.isArray(data)) {
                Object.keys(data).forEach(key => {
                    urlRequest.searchParams.set(key, data[key]);
                });
    
            } else {
                data.forEach(key => {
                    urlRequest.searchParams.set(key, null);
                });
    
            }
        }
    
        if (filterColumns) {
            urlRequest.searchParams.set('filter_columns', '1');
        }
    
        if (page) {
            urlRequest.searchParams.set('page', page);
        }
        if (perPage) {
            urlRequest.searchParams.set('per_page', perPage);
        }
    
        const response = await fetch(urlRequest.href);
        const jsonResponse = await response.json();
        return jsonResponse;
    }
    
    static async readOne(ticketPlanId) {
        const response = await fetch(process.env.REACT_APP_BACKEND_URI + this.url + ticketPlanId);
        const jsonResponse = await response.json();
        return jsonResponse.data;
    }
    
    static async create(ticketPlan) {
        const response = await fetch(process.env.REACT_APP_BACKEND_URI + "ticket-plans", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticketPlan)
        });
    
        const jsonResponse = await response.json();
    
        return jsonResponse.data;
    }
    
    static async edit(ticketPlan) {
        const response = await fetch(process.env.REACT_APP_BACKEND_URI + this.url + ticketPlan.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticketPlan)
        });
    
        const jsonResponse = await response.json();
    
        return jsonResponse.data;
    }
    
    static async delete(ticketPlanId) {
        const response = await fetch(process.env.REACT_APP_BACKEND_URI + this.url + ticketPlanId, {
            method: "DELETE"
        });
        const jsonResponse = await response.json();
        return jsonResponse;
    }

}


export default Service;