import React, { useEffect, useState } from "react";
import { deleteReport, getAllreport } from "../../api";
import { NavLink } from "react-router-dom";

export function ReportPage() {
    const [report, setReport] = useState([])

    const [role, setRole] = useState("");

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
            const pipop = async () => {
                const hasil = await  localStorage.getItem("role")
            setRole(hasil)
            }
            pipop()
        };
        

        getData();
    }, []);

    if (!report) return <p>masih loading</p>
    if (role!="admin")return   <h1>bukan admin</h1>
    return (
        <header>
            <NavLink to={"/report/create"}>
                <button type="Submit" className="btn btn-warning">Tambahkan</button>
            </NavLink>
            <NavLink to={"/adminhomepage"}>
                <button type="Submit" className="btn btn-success">Home</button>
            </NavLink>

            <table class="table">
                <thead>
                    <tr>
                        <th className="table-danger" scope="col">No</th>
                        <th className="table-danger" scope="col">No ID</th>
                        <th className="table-danger" scope="col">Bulan</th>
                        <th className="table-danger" scope="col">Buku Terlaris</th>
                        <th className="table-danger" scope="col">Denda</th>
                        <th className="table-danger" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        report.map(({ reportID, bulan, buku_terlaris, total_denda }, index) => (<tr>
                            <th scope="row">{index + 1}</th>
                            <td className="table-light">{reportID}</td>
                            <td className="table-light">{bulan}</td>
                            <td className="table-light">{buku_terlaris}</td>
                            <td className="table-light">{total_denda}</td>
                            <td><form onSubmit={() => deleteReportReport(reportID)} ><button type="submit" class="btn btn-danger">Delete</button></form></td>
                            <td><NavLink to={`/report/update/${reportID}`}>
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