import { useEffect, useState } from "react";
import { SalePage } from "../../types/sale";
import axios from "axios";
import { BASE_URL } from "../../utils/requests";
import { formatLocalDate } from "../../utils/format";
import Pagination from "../Pagination";

export default function DataTable()
{

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalPages: 0,
        totalElements: 0,
    });

    const [activePage, setActivePage] = useState<number>(0)

    useEffect(() =>
    {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=saleDate,desc`)
            .then(response => 
            {
                setPage(response.data)
            })
    }, [activePage])

    function handlePageChange(newPageNumber : number){
        setActivePage(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onPageChange={handlePageChange} />
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            page.content?.map(item => (
                                <tr key={item.id}>
                                    <td>{formatLocalDate(item.saleDate, "dd/MM/yyyy")}</td>
                                    <td>{item.seller.name}</td>
                                    <td>{item.visited}</td>
                                    <td>{item.deals}</td>
                                    <td>{item.amount.toFixed(2)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div >
        </>
    );
}