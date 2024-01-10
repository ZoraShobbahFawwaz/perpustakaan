import React, { useEffect, useState } from "react";
import { deleteBuku, getAllbooks } from "../../api";
import { NavLink } from "react-router-dom";

export function BookPage() {
    const [books, setBooks] = useState([]);

    const [role, setRole] = useState("");

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
        const pipop = async () => {
                const hasil = await  localStorage.getItem("role")
            setRole(hasil)
            }
            pipop()
        };

        getData();
    }, []);

    if (!books) return <p>Still loading</p>;
    if (role!="admin")return   <h1>bukan admin</h1>
    return (
            <header>
                <nav className="navbar" style={{backgroundColor: "#e3f2fd"}}>

                

                <NavLink to={"/addbook"}>
                    <button type="Submit" className="btn btn-warning">Tambahkan</button>
                </NavLink>
                <NavLink to={"/adminhomepage"}>
                    <button type="Submit" className="btn btn-success">Home</button>
                </NavLink>
</nav>


                <table className="table" >
                    <thead>
                        <tr>
                            <th className="table-danger" scope="col">No</th>
                            <th className="table-danger" scope="col">ID Buku</th>
                            <th className="table-danger" scope="col">judul_buku</th>
                            <th className="table-danger" scope="col">pengarang</th>
                            <th className="table-danger" scope="col">penerbit</th>
                            <th className="table-danger" scope="col">tahun_terbit</th>
                            <th className="table-danger" scope="col">stock_buku</th>
                            <th className="table-danger" scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(({ bookID, judul_buku, pengarang, penerbit, tahun_terbit, stock_buku }, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td className="table-light">{bookID}</td>
                                <td className="table-light">{judul_buku}</td>
                                <td className="table-light">{pengarang}</td>
                                <td className="table-light">{penerbit}</td>
                                <td className="table-light">{tahun_terbit}</td>
                                <td className="table-light">{stock_buku}</td>
                                <td><form onSubmit={() => deleteBukuBuku(bookID)} ><button type="submit" class="btn btn-danger">Delete</button></form></td>
                                <td><NavLink to={`/book/update/${bookID}`}>
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

<table class="table-success">...</table>