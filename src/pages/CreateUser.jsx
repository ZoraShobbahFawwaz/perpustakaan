import { useState } from "react"
import { createUser } from "../api"

export function CreateUser() {
    const [userid,setUserID] = useState('')
    const [nama, setNama] = useState('')
    const [nim, setNim] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [noHp, setNoHp] = useState('')
    const [jenis_kelamin, setJenis_kelamin] = useState('')
  
    const handleSubmit = async (ev) => {
      ev.preventDefault()
      const hasil = await createUser(userid,nama, nim, username, password, email, noHp, jenis_kelamin)
      console.log(hasil)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">userid</label>
                    <input type="text" onChange={ev => setUserID(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">username</label>
                    <input type="text" onChange={ev => setUsername(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">nama</label>
                    <input type="text" onChange={ev => setNama(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">nim</label>
                    <input type="text" onChange={ev => setNim(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">password</label>
                    <input type="password" onChange={ev => setPassword(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">email</label>
                    <input onChange={ev => setEmail(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">jenis_kelamin</label>
                    <input onChange={ev => setJenis_kelamin(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">no hp</label>
                    <input onChange={ev => setNoHp(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}