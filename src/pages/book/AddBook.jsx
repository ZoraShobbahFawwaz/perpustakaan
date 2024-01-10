import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { createBook } from "../../api";
import "bootstrap/dist/css/bootstrap.min.css"
import daftar from "../../asset/daftar.jpg"

export function AddBook() {
    const [judul_buku, setJudul_buku] = useState("");
    const [pengarang, setPengarang] = useState("");
    const [penerbit, setPenerbit] = useState("");
    const [tahun_terbit, setTahun_terbit] = useState("");
    const [stock_buku, setStock_buku] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const pipop = async () => {
            const hasil = await  localStorage.getItem("role")
        setRole(hasil)
        }
        pipop()


    }, [])

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        // Add validation logic here if needed

        const hasil = await createBook(judul_buku, pengarang, penerbit, tahun_terbit, stock_buku);
        console.log(hasil);

        // Optionally, you can reset the form fields after submission
        setJudul_buku("");
        setPengarang("");
        setPenerbit("");
        setTahun_terbit("");
        setStock_buku("");

        navigate('/book')
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
    return (
        <div className="" style={fullBackgroundStyle}>
            <div className="container mt-5">
                <div className="row justify-content-center ">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">judul_buku</label>
                                        <input type="text" onChange={ev => setJudul_buku(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">pengarang</label>
                                        <input type="text" onChange={ev => setPengarang(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">penerbit</label>
                                        <input type="text" onChange={ev => setPenerbit(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">tahun_terbit</label>
                                        <input type="text" onChange={ev => setTahun_terbit(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">stock_buku</label>
                                        <input type="text" onChange={ev => setStock_buku(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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

