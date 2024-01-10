import React, { useEffect, useState } from "react";
import { deleteReport, getAllreport } from "../../api";
import { NavLink } from "react-router-dom";

export function ReportPage() {
    const [report, setReport] = useState([])

    const deleteReportReport = async (id) => {
        await deleteReport(id)
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getAllreport()
                setReport(data)
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getData();
    }, []);

    if (!report) return <p>masih loading</p>

    return (
        <header>
            <NavLink to={"/report/create"}>
                <button type="Submit" className="btn btn-dark">Tambahkan</button>
            </NavLink>
            <NavLink to={"/adminhomepage"}>
                <button type="Submit" className="btn btn-dark">Home</button>
            </NavLink>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Bulan</th>
                        <th scope="col">Buku Terlaris</th>
                        <th scope="col">Denda</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        report.map(({ reportID, bulan, buku_terlaris, total_denda }, index) => (<tr>
                            <th scope="row">{index + 1}</th>
                            <td>{bulan}</td>
                            <td>{buku_terlaris}</td>
                            <td>{total_denda}</td>
                            <td><form onSubmit={() => deleteReportReport(reportID)} ><button type="submit" class="btn btn-danger">Delete</button></form></td>
                            <td><NavLink to={"/report/update"}>
                                <button type="submit" className="btn btn-dark">Update</button>
                            </NavLink>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </header>
    )
}