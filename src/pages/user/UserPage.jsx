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

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">nama</th>
                        <th scope="col">email</th>
                        <th scope="col">username</th>
                        <th scope="col">jenis_kelamin</th>
                        <th scope="col">nim</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(({ email, nama, jenis_kelamin, nim, password, username, userID }, index) => (<tr>
                            <th scope="row">{index + 1}</th>
                            <td>{nama}</td>
                            <td>{email}</td>
                            <td>{username}</td>
                            <td>{jenis_kelamin}</td>
                            <td>{nim}</td>
                            <td><form onSubmit={() => deleteUserUser(userID)} ><button type="submit" class="btn btn-danger">Delete</button></form></td>
                            <td><NavLink to={"/updateuseer"}>
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