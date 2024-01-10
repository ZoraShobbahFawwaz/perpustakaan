import React, { useEffect, useState } from "react";
import { deleteUser,getAllUser } from "../../api";
import { NavLink } from "react-router-dom";

export function UserPage() {
    const [users, setUsers] = useState([])

    const [role, setRole] = useState("");

    const deleteUserUser = async (id) => {
        await deleteUser(id)
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getAllUser()
            setUsers(data)

            console.log(data)
        }
        const pipop = async () => {
            const hasil = await  localStorage.getItem("role")
        setRole(hasil)
        }
        pipop()
    
        getData()
    }, [])

    if (!users) return <p>masih loading</p>
    if (role!="admin")return   <h1>bukan admin</h1>

    return (
        <header>
            <NavLink to={"/create/user"}>
                <button type="Submit" className="btn btn-warning">Tambahkan</button>
            </NavLink>
            <NavLink to={"/adminhomepage"}>
                <button type="Submit" className="btn btn-success">Home</button>
            </NavLink>

            <table className="table">
                <thead>
                    <tr>
                        <th className="table-danger" scope="col">No</th>
                        <th className="table-danger" scope="col">No ID </th>
                        <th className="table-danger" scope="col">Nama</th>
                        <th className="table-danger" scope="col">Email</th>
                        <th className="table-danger" scope="col">Username</th>
                        <th className="table-danger" scope="col">NIM</th>
                        <th className="table-danger" scope="col">Jenis_kelamin</th>
                        <th className="table-danger" scope="col">No HP</th>
                        <th className="table-danger" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(({ email, nama, jenis_kelamin, nim, username, no_hp, userID }, index) => (<tr>
                            <th scope="row">{index + 1}</th>
                            <td className="table-light">{userID}</td>
                            <td className="table-light">{nama}</td>
                            <td className="table-light">{email}</td>
                            <td className="table-light">{username}</td>
                            <td className="table-light">{nim}</td>
                            <td className="table-light">{jenis_kelamin}</td>
                            <td className="table-light">{no_hp}</td>
                            <td><form onSubmit={() => deleteUserUser(userID)} ><button type="submit" class="btn btn-danger">Delete</button></form></td>
                            <td><NavLink to={`/user/update/${userID}`}>
                                <button type="submit" className="btn btn-dark">Update</button>
                            </NavLink>

                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </header>

    )
}