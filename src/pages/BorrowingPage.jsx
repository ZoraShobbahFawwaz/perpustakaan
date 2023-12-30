import React, { useEffect, useState } from "react";
import { getAllborrowing } from "../api";

export function BorrowingPage() {
    const [borrowing, setBorrowing] = useState([]);

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
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">nama</th>
                        <th scope="col">judul_buku</th>
                        <th scope="col">tanggal_peminjaman</th>
                        <th scope="col">tanggal_pengembalian</th>
                        <th scope="col">status</th>
                    </tr>
                </thead>
                <tbody>
                    {borrowing.map(({ nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status }, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{nama}</td>
                            <td>{judul_buku}</td>
                            <td>{tanggal_peminjaman}</td>
                            <td>{tanggal_pengembalian}</td>
                            <td>{status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
