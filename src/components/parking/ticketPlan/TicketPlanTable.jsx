import { useState, useEffect } from 'react';

import ReactPaginate from 'react-paginate';

import TicketPlanService from '../../../services/TicketPlanService';


function TicketPlanTable() {
    const [posts, setPosts] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const searchBody = [
            'name',
            'price',
            'hours',
            'penalty_per_hour'
        ];

        TicketPlanService.readMany(searchBody, true).then((data) => {
            setPageCount(data.last_page);
            setPosts(data.data)
        });
    }, []);

    const handlePageClick = (event) => {
        TicketPlanService.readMany(event.selected + 1).then((data) => {
            setPosts(data.data)
        });
    };

    const searchTicketPlan = (event) => {
        const searchBody = {
            name: event.target.value,
            price: null,
            hours: null,
            penalty_per_hour: null
        };

        TicketPlanService.readMany(searchBody, true).then((data) => {
            setPosts(data.data)
        });
    }

    return (
        <>
            <h1>TICKET PLANS</h1>
            <input type='text' placeholder='Name' onChange={searchTicketPlan} />
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hours
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Penalty per hour
                            </th>
                        </tr>
                    </thead>

                    {posts.map(post => (
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href={"ticket-plans/" + post.id}>{post.name}</a>
                                </th>
                                <td className="px-6 py-4">
                                    {post.price}
                                </td>
                                <td className="px-6 py-4">
                                    {post.hours}
                                </td>
                                <td className="px-6 py-4">
                                    ${post.penalty_per_hour}
                                </td>
                            </tr>
                        </tbody>
                    ))}

                </table>
            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />

        </>
    )
}

export default TicketPlanTable