import React, { useEffect, useState } from "react";
import { deleteBuku, getAllbooks } from "../../api";
import { NavLink } from "react-router-dom";

export function BookPage() {
    const [books, setBooks] = useState([]);

    const deleteBukuBuku = async (id) => {
        await deleteBuku(id)
    }
    
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
        <header>
            <NavLink to={"/addbook"}>
                   <button type="Submit" className="btn btn-dark">Tambahkan</button>
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
                            <td><form onSubmit={() => deleteBukuBuku(bookID)} ><button type="submit" class="btn btn-danger">Delete</button></form></td>
                            <td><NavLink to={"/updatebook"}>
                                <button type="submit" className="btn btn-dark">Update</button>
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </header>
    );
}
