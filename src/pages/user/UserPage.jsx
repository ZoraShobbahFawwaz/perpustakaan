import React, { useEffect, useState } from "react";
import { getAllUser } from "../../api";

export function UserPage() {
    const [users, setUsers] = useState([])

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
        <>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                        <th scope="col">nama</th>
                        <th scope="col">email</th>
                        <th scope="col">username</th>
                        <th scope="col">jenis_kelamin</th>
                        <th scope="col">nim</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(({ email, nama, jenis_kelamin, nim, password, username, userID }, index) => (<tr>
                            <th scope="row">{index+1}</th>
                            <td>{nama}</td>
                            <td>{email}</td>
                            <td>{username}</td>
                            <td>{jenis_kelamin}</td>
                            <td>{nim}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}