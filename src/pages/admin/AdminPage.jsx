import React, { useEffect, useState } from "react";
import { deleteAdmin, getAlladmin } from "../../api";
import { NavLink } from "react-router-dom";

export function AdminPage() {
    const [admin, setAdmin] = useState([]);

    const deleteAdminAdmin = async (id) => {
        await deleteAdmin(id)
    }
    
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getAlladmin();
                setAdmin(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getData();
    }, []);

    if (!admin) return <p>Still loading</p>;

    return (
        <header>
            <NavLink to={"/admin/create"}>
                   <button type="Submit" className="btn btn-warning">Tambahkan</button>
            </NavLink>
            <NavLink to={"/"}>
                   <button type="Submit" className="btn btn-success">Home</button>
            </NavLink>
            <table className="table">
                <thead>
                    <tr>
                        <th className="table-danger"scope="col">No</th>
                        <th className="table-danger"scope="col">nama</th>
                        <th className="table-danger"scope="col">username</th>
                        <th className="table-danger"scope="col">np</th>
                        <th className="table-danger"scope="col">no_hp</th>
                        <th className="table-danger"scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {admin.map(({ adminID, nama, username, np, no_hp }, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td className="table-light">{nama}</td>
                            <td className="table-light">{username}</td>
                            <td className="table-light">{np}</td>
                            <td className="table-light">{no_hp}</td>
                            <td><form onSubmit={() => deleteAdminAdmin(adminID)} ><button type="submit" class="btn btn-danger">Delete</button></form></td>
                            <td><NavLink to={"/updateadmin/"}>
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
