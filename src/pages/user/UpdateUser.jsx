import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOneById, updateUser } from "../../api"
import "bootstrap/dist/css/bootstrap.min.css"
import daftar from "../../asset/daftar.jpg"

export function UpdateUser() {
    const { userID } = useParams()
    const [nama, setNama] = useState('')
    const [nim, setNim] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [noHp, setNoHp] = useState('')
    const [jenis_kelamin, setJenis_kelamin] = useState('')

    useEffect(() => {
        const dapetData = async () => {
            const data = await getOneById(userID)
            setNama(data.nama)
            setNim(data.nim)
            setUsername(data.username)
            setPassword(data.password)
            setEmail(data.email)
            setNoHp(data.no_hp)
            setJenis_kelamin(data.jenis_kelamin)
            console.log(data)
        }
        dapetData()
    }, [])

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        // console.log("password", password)
        const hasil = await updateUser(userID, nama, nim, username, password, jenis_kelamin, email, noHp)
        console.log(hasil)
    }

    const fullBackgroundStyle = {
        backgroundImage: `url(${daftar})`, // Replace with the path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Set the height to 100% of the viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // You can add more styles as needed
    }
    return (
        <div className="" style={fullBackgroundStyle}>
            <div className="container mt-5">
                <div className="row justify-content-center ">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">username</label>
                                        <input type="text" value={username} onChange={ev => setUsername(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">nama</label>
                                        <input type="text" value={nama} onChange={ev => setNama(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">nim</label>
                                        <input type="text" value={nim} onChange={ev => setNim(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">password</label>
                                        <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">email</label>
                                        <input value={email} onChange={ev => setEmail(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">jenis_kelamin</label>
                                        <input value={jenis_kelamin} onChange={ev => setJenis_kelamin(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">no hp</label>
                                        <input value={noHp} onChange={ev => setNoHp(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}