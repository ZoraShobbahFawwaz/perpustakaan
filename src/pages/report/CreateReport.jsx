import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { createReport } from "../../api";
import "bootstrap/dist/css/bootstrap.min.css"
import daftar from "../../asset/daftar.jpg"

export function CreateReport() {
    const [bulan, setBulan] = useState("");
    const [buku_terlaris, setBuku_terlaris] = useState("");
    const [total_denda, setTotal_denda] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        // Add validation logic here if needed

        const hasil = await createReport( bulan, buku_terlaris, total_denda);
        console.log(hasil);

        // Optionally, you can reset the form fields after submission
        setBulan("");
        setBuku_terlaris("");
        setTotal_denda("");

        navigate('/report')

    };

    const fullBackgroundStyle = {
        backgroundImage: `url(${daftar})`, // Replace with the path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Set the height to 100% of the viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div className="" style={fullBackgroundStyle}>
            <div className="container mt-5">
                <div className="row justify-content-center ">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <form onSubmit={handleSubmit}>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Bulan</label>
                                            <input type="text" onChange={ev => setBulan(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Buku Terlaris</label>
                                            <input type="text" onChange={ev => setBuku_terlaris(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Denda Terkumpul</label>
                                            <input type="text" onChange={ev => setTotal_denda(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}