import React, { useEffect, useState } from "react";
import {  getAllbookuser } from "../../api";
import { NavLink } from "react-router-dom";

export function BookUser() {
    const [books, setBooks] = useState([]);

   
    
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getAllbookuser();
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
        <header>
            <NavLink to={"/addbook"}>
                   <button type="Submit" className="btn btn-dark">Tambahkan</button>
            </NavLink>
            <NavLink to={"/userhomepage"}>
                   <button type="Submit" className="btn btn-dark">Home</button>
            </NavLink>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">judul_buku</th>
                        <th scope="col">pengarang</th>
                        <th scope="col">penerbit</th>
                        <th scope="col">tahun_terbit</th>
                        <th scope="col">stock_buku</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(({ bookID, judul_buku, pengarang, penerbit, tahun_terbit, stock_buku }, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{judul_buku}</td>
                            <td>{pengarang}</td>
                            <td>{penerbit}</td>
                            <td>{tahun_terbit}</td>
                            <td>{stock_buku}</td>
                            {/* <td><form onSubmit={() => pinjam(bookID)} ><button type="submit" class="btn btn-danger">pinjamm</button></form></td> */}
                            <td><NavLink to={"/borrowing/create"}>
                                <button type="submit" className="btn btn-warning">Pinjamm</button>
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </header>
    );
}
