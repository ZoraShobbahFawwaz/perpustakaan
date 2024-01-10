import { useEffect, useState } from "react";
import { createBorrowing, getOneByBookId } from "../../api";
import { useNavigate,  useParams } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import daftar from "../../asset/daftar.jpg"

export function AddBorrowing() {
    const [nama, setNama] = useState("");
    const [judul_buku, setJudul_buku] = useState("");
    const [tanggal_peminjaman, setTanggal_peminjaman] = useState("");
    const [tanggal_pengembalian, setTanggal_pengembalian] = useState("");
    const [status, setStatus] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate()
    const {bookID} = useParams()
    
    useEffect(() => {
        
        const pipop = async () => {
            const hasil = await  localStorage.getItem("role")
        setRole(hasil)
        }
        pipop()
    const getData= async () => {
        const bukuPilihan = await getOneByBookId(bookID)
        setJudul_buku(bukuPilihan.judul_buku)
    }
    getData()
    }, [])

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        // Add validation logic here if needed

        const hasil = await createBorrowing(nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status);
        console.log(hasil);

        // Optionally, you can reset the form fields after submission
        setNama("");
        setJudul_buku("");
        setTanggal_peminjaman("");
        setTanggal_pengembalian("");
        setStatus("");

       if(role==='admin') navigate('/borrowing')
       if(role==='user') navigate('/bookuser')
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



    return (

        <div className="" style={fullBackgroundStyle}>
            <div className="container mt-5">
                <div className="row justify-content-center ">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body"></div>
                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Nama</label>
                                    <input type="text" onChange={ev => setNama(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Judul Buku</label>
                                    <input type="text" value={judul_buku} onChange={ev => setJudul_buku(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Tanggal Peminjaman</label>
                                    <input type="text" onChange={ev => setTanggal_peminjaman(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Tanggal Pengembalian</label>
                                    <input type="text" onChange={ev => setTanggal_pengembalian(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Status</label>
                                    <input type="text" onChange={ev => setStatus(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}