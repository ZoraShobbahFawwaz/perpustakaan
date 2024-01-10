import React, { useEffect, useState } from "react";
import { deleteBorrowing, getAllborrowing } from "../../api";
import { NavLink } from "react-router-dom";


export function BorrowingPage() {
    const [borrowing, setBorrowing] = useState([]);

    const [role, setRole] = useState("");

    const deleteBorrowingBook = async (id) => {
        await deleteBorrowing(id)
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getAllborrowing();
                setBorrowing(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        const pipop = async () => {
            const hasil = await  localStorage.getItem("role")
        setRole(hasil)
        }
        pipop()

        getData();
    }, []);

    if (!borrowing) return <p>Still loading</p>;
    if (role!="admin")return   <h1>bukan admin</h1>
    return (
        
        <>
        <NavLink to={"/borrowing/create"}>
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
                        <th className="table-danger"scope="col">Nama</th>
                        <th className="table-danger"scope="col">Judul Buku</th>
                        <th className="table-danger"scope="col">Tanggal Peminjaman</th>
                        <th className="table-danger"scope="col">Tanggal Pengembalian</th>
                        <th className="table-danger"scope="col">Status</th>
                        <th className="table-danger"scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {borrowing.map(({ ID_Peminjaman, nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status }, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td className="table-light">{ID_Peminjaman}</td>
                            <td className="table-light">{nama}</td>
                            <td className="table-light">{judul_buku}</td>
                            <td className="table-light">{tanggal_peminjaman}</td>
                            <td className="table-light">{tanggal_pengembalian}</td>
                            <td className="table-light">{status}</td>
                            <td><form onSubmit={() => deleteBorrowingBook(ID_Peminjaman)} ><button type="submit" class="btn btn-danger">Delete</button></form></td>
                            <td><NavLink to={`/borrowing/update/${ID_Peminjaman}`}>
                                    <button type="submit" className="btn btn-dark">Update</button>
                                </NavLink>
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
