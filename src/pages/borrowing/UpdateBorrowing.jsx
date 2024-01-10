import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getOneByIDpeminjaman, updateBorrowing } from "../../api";
import { useNavigate} from "react-router-dom"

export function UpdateBorrowing() {
    const { ID_peminjaman } = useParams()
    const [nama, setNama] = useState("");
    const [judul_buku, setJudul_buku] = useState("");
    const [tanggal_peminjaman, setTanggal_peminjaman] = useState("");
    const [tanggal_pengembalian, setTanggal_pengembalian] = useState("");
    const [status, setStatus] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate()


    useEffect(() => {
        const dapetData = async () => {
            const data = await getOneByIDpeminjaman(ID_peminjaman)
            setNama(data.nama)
            setJudul_buku(data.judul_buku)
            setTanggal_peminjaman(data.tanggal_peminjaman)
            setTanggal_pengembalian(data.tanggal_pengembalian)
            setStatus(data.status)
            console.log(data)
        }

        const pipop = async () => {
            const hasil = await  localStorage.getItem("role")
        setRole(hasil)
        }
        pipop()
        
        dapetData()
    }, [])

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        // Add validation logic here if needed

        const hasil = await updateBorrowing(ID_peminjaman, nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status);
        console.log(hasil);
        navigate('/borrowing')

        // Optionally, you can reset the form fields after submission
        // setJudul_buku("");
        // setPengarang("");
        // setPenerbit("");
        // setTahun_terbit("");
        // setStock_buku("");
    };
    if (role!="admin")return   <h1>bukan admin</h1>
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nama</label>
                    <input type="text" value={nama} onChange={ev => setNama(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">judul_buku</label>
                    <input type="text" value={judul_buku} onChange={ev => setJudul_buku(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Tanggal Peminjaman</label>
                    <input type="text" value={tanggal_peminjaman} onChange={ev => setTanggal_peminjaman(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Tanggal Pengembalian</label>
                    <input type="text" value={tanggal_pengembalian} onChange={ev => setTanggal_pengembalian(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Status</label>
                    <input type="text" value={status} onChange={ev => setStatus(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}