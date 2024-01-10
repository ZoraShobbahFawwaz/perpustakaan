import { useState } from "react"
import { useNavigate} from "react-router-dom"
import { createAdmin } from "../../api"
import "bootstrap/dist/css/bootstrap.min.css"
import daftar from "../../asset/daftar.jpg"

export function CreateAdmin() {

    const [nama, setNama] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [np, setNp] = useState('')
    const [no_hp, setNo_hp] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        const hasil = await createAdmin( nama, username, password, np, no_hp,)
        console.log(hasil)
    

    setNama("");
    setUsername("");
    setPassword("");
    setNp("");
    setNo_hp("");

    navigate('/admin')
};

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
                                        <input type="text" onChange={ev => setUsername(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">nama</label>
                                        <input type="text" onChange={ev => setNama(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">np</label>
                                        <input type="text" onChange={ev => setNp(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">password</label>
                                        <input type="password" onChange={ev => setPassword(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">no hp</label>
                                        <input onChange={ev => setNo_hp(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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