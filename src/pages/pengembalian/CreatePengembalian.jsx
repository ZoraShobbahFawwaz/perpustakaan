import { useEffect,useState } from "react";
import { createPengembalian } from "../../api";
import "bootstrap/dist/css/bootstrap.min.css"
import daftar from "../../asset/daftar.jpg"
import { useNavigate } from "react-router-dom"

export function CreatePengembalian() {
    const [nama, setNama] = useState("");
    const [judul_buku, setJudul_buku] = useState("");
    const [tanggal_peminjaman, setTanggal_peminjaman] = useState("");
    const [tanggal_pengembalian, setTanggal_pengembalian] = useState("");
    const [status, setStatus] = useState("");
    const [denda, setDenda] = useState("")
    const [role, setRole] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const pipop = async () => {
            const hasil = await  localStorage.getItem("role")
        setRole(hasil)
        }
        pipop()
    },[])

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        // Add validation logic here if needed

        const hasil = await createPengembalian(nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status, denda);
        console.log(hasil);

        // Optionally, you can reset the form fields after submission
        setNama("");
        setJudul_buku("");
        setTanggal_peminjaman("");
        setTanggal_pengembalian("");
        setStatus("");
        setDenda("");

        navigate('/pengembalian')
    };

    const fullBackgroundStyle = {
        backgroundImage: `url(${daftar})`, // Replace with the path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Set the height to 100% of the viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    if (role!="admin")return   <h1>bukan admin</h1>
    
        return(
        
        <div className="" style={fullBackgroundStyle}>
            <div className="container mt-5">
                <div className="row justify-content-center ">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">nama</label>
                                        <input type="text" onChange={ev => setNama(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">judul_buku</label>
                                        <input type="text" onChange={ev => setJudul_buku(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">tanggal_peminjaman</label>
                                        <input type="text" onChange={ev => setTanggal_peminjaman(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">tanggal_pengembalian</label>
                                        <input type="text" onChange={ev => setTanggal_pengembalian(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">status</label>
                                        <input type="text" onChange={ev => setStatus(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">denda</label>
                                        <input type="text" onChange={ev => setDenda(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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