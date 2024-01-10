import React, { useEffect, useState } from "react";
import { deleteUser,getAllUser } from "../../api";
import { NavLink } from "react-router-dom";

export function UserPage() {
    const [users, setUsers] = useState([])

    const deleteUserUser = async (id) => {
        await deleteUser(id)
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getAllUser()
            setUsers(data)

            console.log(data)
        }
        getData()
    }, [])

    if (!users) return <p>masih loading</p>

    return (
        <header>
            <NavLink to={"/create/user"}>
                <button type="Submit" className="btn btn-dark">Tambahkan</button>
            </NavLink>
            <NavLink to={"/"}>
                <button type="Submit" className="btn btn-success">LogOut</button>
            </NavLink>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">No ID </th>
                        <th scope="col">Nama</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">NIM</th>
                        <th scope="col">Jenis_kelamin</th>
                        <th scope="col">No HP</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(({ email, nama, jenis_kelamin, nim, username, no_hp, userID }, index) => (<tr>
                            <th scope="row">{index + 1}</th>
                            <td>{userID}</td>
                            <td>{nama}</td>
                            <td>{email}</td>
                            <td>{username}</td>
                            <td>{nim}</td>
                            <td>{jenis_kelamin}</td>
                            <td>{no_hp}</td>
                            <td><form onSubmit={() => deleteUserUser(userID)} ><button type="submit" class="btn btn-danger">Delete</button></form></td>
                            <td><NavLink to={"/user/update"}>
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