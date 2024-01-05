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
                   <button type="Submit" className="btn btn-dark">Tambahkan</button>
            </NavLink>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">adminid</th>
                        <th scope="col">nama</th>
                        <th scope="col">username</th>
                        <th scope="col">np</th>
                        <th scope="col">password</th>
                        <th scope="col">no_hp</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {admin.map(({ adminID, nama, username, np, password, no_hp }, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{adminID}</td>
                            <td>{nama}</td>
                            <td>{username}</td>
                            <td>{np}</td>
                            <td>{password}</td>
                            <td>{no_hp}</td>
                            <td><form onSubmit={() => deleteAdminAdmin(adminID)} ><button type="submit" class="btn btn-danger">Delete</button></form></td>
                            <td><NavLink to={"/updateadmin"}>
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
