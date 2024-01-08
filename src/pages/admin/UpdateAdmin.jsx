import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOneByAdminId, updateAdmin } from "../../api"
import "bootstrap/dist/css/bootstrap.min.css"
import daftar from "../../asset/daftar.jpg"

export function UpdateAdmin() {
    const {adminID } = useParams()
    const [nama, setNama] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [np, setNp] = useState('')
    const [noHp, setNoHp] = useState('')

    useEffect(() => {
        const dapetData = async () => {
            const data = await getOneByAdminId(adminID)
            setNama(data.nama)
            setUsername(data.username)
            setPassword(data.password)
            setNp(data.np)
            setNoHp(data.no_hp)
            console.log(data)
        }
        dapetData()
    }, [])

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        // console.log("password", password)
        const hasil = await updateAdmin(adminID, nama, username, password, np, noHp)
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
                                        <label for="exampleInputEmail1" class="form-label">Username</label>
                                        <input type="text" value={username} onChange={ev => setUsername(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Nama</label>
                                        <input type="text" value={nama} onChange={ev => setNama(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Np</label>
                                        <input type="text" value={np} onChange={ev => setNp(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Password</label>
                                        <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">No HP</label>
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