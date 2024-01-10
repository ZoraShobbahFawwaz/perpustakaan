import React, { useEffect, useState } from "react";
import { deleteBorrowing, getAllborrowing } from "../../api";
import { NavLink } from "react-router-dom";


export function BorrowingPage() {
    const [borrowing, setBorrowing] = useState([]);

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

        getData();
    }, []);

    if (!borrowing) return <p>Still loading</p>;

    return (
        
        <>
        <NavLink to={"/borrowing/create"}>
                <button type="Submit" className="btn btn-dark">Tambahkan</button>
            </NavLink>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">No ID</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Judul Buku</th>
                        <th scope="col">Tanggal Peminjaman</th>
                        <th scope="col">Tanggal Pengembalian</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {borrowing.map(({ ID_Peminjaman, nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status }, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{ID_Peminjaman}</td>
                            <td>{nama}</td>
                            <td>{judul_buku}</td>
                            <td>{tanggal_peminjaman}</td>
                            <td>{tanggal_pengembalian}</td>
                            <td>{status}</td>
                            <td><form onSubmit={() => deleteBorrowingBook(ID_Peminjaman)} ><button type="submit" class="btn btn-danger">Delete</button></form></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
