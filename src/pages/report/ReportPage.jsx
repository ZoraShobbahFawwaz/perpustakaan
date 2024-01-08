import React, { useEffect, useState } from "react";
import { getAllreport } from "../../api";
import { NavLink } from "react-router-dom";

export function ReportPage() {
    const [report, setReport] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await getAllreport()
            setReport(data)

            console.log(data)
        }
        getData()
    }, [])

    if (!report) return <p>masih loading</p>

    return (
        <header>
            <NavLink to={"/create/user"}>
                <button type="Submit" className="btn btn-dark">Tambahkan</button>
            </NavLink>

            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                        <th scope="col">bulan</th>
                        <th scope="col">total_denda</th>
                        <th scope="col">buku_terlaris</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        report.map(({ bulan, total_denda, buku_terlaris}, index) => (<tr>
                            <th scope="row">{index+1}</th>
                            <td>{bulan}</td>
                            <td>{total_denda}</td>
                            <td>{buku_terlaris}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </header>
    )
}