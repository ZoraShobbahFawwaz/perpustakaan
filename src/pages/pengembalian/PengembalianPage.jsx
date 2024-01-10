import React, { useEffect, useState } from "react";
import { deletePengembalian, getAllpengembalian } from "../../api";
import { NavLink } from "react-router-dom";

export function PengembalianPage() {
    const [pengembalian, setPengembalian] = useState([]);

    const [role, setRole] = useState("");


    const deletePengembalianPengembalian = async (ev, id) => {
        // ev.preventDefault()
        const hasil = await deletePengembalian(id)
        console.log(hasil)
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getAllpengembalian();
                setPengembalian(data);
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

    if (!pengembalian) return <p>Still loading</p>;
    if (role!="admin")return   <h1>bukan admin</h1>

    return (
        <header>
            <NavLink to={"/pengembalian/create"}>
                <button type="Submit" className="btn btn-warning">Tambahkan</button>
            </NavLink>
            <NavLink to={"/adminhomepage"}>
                <button type="Submit" className="btn btn-success">Home</button>
            </NavLink>

            <table className="table">
                <thead>
                    <tr>
                        <th className="table-danger"scope="col">No</th>
                        <th className="table-danger"scope="col">No ID</th>
                        <th className="table-danger"scope="col">nama</th>
                        <th className="table-danger"scope="col">judul_buku</th>
                        <th className="table-danger"scope="col">tanggal_peminjaman</th>
                        <th className="table-danger"scope="col">tanggal_pengembalian</th>
                        <th className="table-danger"scope="col">status</th>
                        <th className="table-danger"scope="col">denda</th>
                        <th className="table-danger"scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pengembalian.map(({ ID_Pengembalian, nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status, denda }, index) => (<tr>
                            <th scope="row">{index + 1}</th>
                            <td className="table-light">{ID_Pengembalian}</td>
                            <td className="table-light">{nama}</td>
                            <td className="table-light">{judul_buku}</td>
                            <td className="table-light">{tanggal_peminjaman}</td>
                            <td className="table-light">{tanggal_pengembalian}</td>
                            <td className="table-light">{status}</td>
                            <td className="table-light">{denda}</td>
                            <td><form onSubmit={(ev) => deletePengembalianPengembalian(ev, ID_Pengembalian)} ><button type="submit" className="btn btn-danger">Delete</button></form></td>
                            <td><NavLink to={`/pengembalian/update/${ID_Pengembalian}`}>
                                <button type="submit" className="btn btn-dark">Update</button>
                            </NavLink>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </header>
    );
}
