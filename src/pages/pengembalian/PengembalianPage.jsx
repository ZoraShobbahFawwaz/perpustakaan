import React, { useEffect, useState } from "react";
import { deletePengembalian, getAllpengembalian } from "../../api";
import { NavLink } from "react-router-dom";

export function PengembalianPage() {
    const [pengembalian, setPengembalian] = useState([]);

    const deleteDataPengembalian = async (id) => {
        await deletePengembalian(id)
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
        };

        getData();
    }, []);

    if (!pengembalian) return <p>Still loading</p>;

    return (
        <header>
            <NavLink to={"/pengembalian/create"}>
                <button type="Submit" className="btn btn-dark">Tambahkan</button>
            </NavLink>
            <NavLink to={"/adminhomepage"}>
                <button type="Submit" className="btn btn-success">Home</button>
            </NavLink>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">No ID</th>
                        <th scope="col">nama</th>
                        <th scope="col">judul_buku</th>
                        <th scope="col">tanggal_peminjaman</th>
                        <th scope="col">tanggal_pengembalian</th>
                        <th scope="col">status</th>
                        <th scope="col">denda</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pengembalian.map(({ ID_pengembalian, nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status, denda }, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{ID_pengembalian}</td>
                            <td>{nama}</td>
                            <td>{judul_buku}</td>
                            <td>{tanggal_peminjaman}</td>
                            <td>{tanggal_pengembalian}</td>
                            <td>{status}</td>
                            <td>{denda}</td>
                            <td><form onSubmit={() => deleteDataPengembalian(ID_pengembalian)} ><button type="submit" className="btn btn-danger">Delete</button></form></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </header>
    );
}
