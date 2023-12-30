import React, { useEffect, useState } from "react";
import { getAllbooks } from "../api";

export function BookPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getAllbooks();
                setBooks(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getData();
    }, []);

    if (!books) return <p>Still loading</p>;

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">judul_buku</th>
                        <th scope="col">pengarang</th>
                        <th scope="col">penerbit</th>
                        <th scope="col">tahun_terbit</th>
                        <th scope="col">stock_buku</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(({ judul_buku, pengarang, penerbit, tahun_terbit, stock_buku }, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{judul_buku}</td>
                            <td>{pengarang}</td>
                            <td>{penerbit}</td>
                            <td>{tahun_terbit}</td>
                            <td>{stock_buku}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
