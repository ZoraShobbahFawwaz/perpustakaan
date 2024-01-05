import React, { useEffect, useState } from "react";
import { getAllpengembalian } from "../../api";

export function PengembalianPage() {
    const [pengembalian, setPengembalian] = useState([]);

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
                        <th scope="col">denda</th>
                    </tr>
                </thead>
                <tbody>
                    {pengembalian.map(({ nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status, denda }, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{nama}</td>
                            <td>{judul_buku}</td>
                            <td>{tanggal_peminjaman}</td>
                            <td>{tanggal_pengembalian}</td>
                            <td>{status}</td>
                            <td>{denda}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
