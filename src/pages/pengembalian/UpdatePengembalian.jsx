import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getOneByIDpengembalian,updatePengembalian } from "../../api";
import "bootstrap/dist/css/bootstrap.min.css"

export function UpdatePengembalian() {
    const { ID_Pengembalian } = useParams()
    const [ nama, setNama] = useState("");
    const [ judul_buku, setJudul_buku] = useState("");
    const [ tanggal_pengembalian, setTanggal_pengembalian] = useState("");
    const [ tanggal_peminjaman, setTanggal_peminjaman] = useState("");
    const [ status, setStatus] = useState("");
    const [ denda, setDenda] = useState("");

    useEffect(() => {
        const dapetData = async () => {
            const data = await getOneByIDpengembalian(ID_Pengembalian)
            setNama(data.nama)
            setJudul_buku(data.judul_buku)
            setTanggal_peminjaman(data.tanggal_peminjaman)
            setTanggal_pengembalian(data.tanggal_pengembalian)
            setStatus(data.status)
            setDenda(data.denda)
            console.log(data)
        }
        dapetData()
    }, [])

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        // Add validation logic here if needed

        const hasil = await updatePengembalian(ID_Pengembalian,nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status, denda);
        console.log(hasil);

        // Optionally, you can reset the form fields after submission
        // setJudul_buku("");
        // setPengarang("");
        // setPenerbit("");
        // setTahun_terbit("");
        // setStock_buku("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nama</label>
                    <input type="text" value={nama} onChange={ev => setNama(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Judul Buku</label>
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
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Denda</label>
                    <input type="text" value={denda} onChange={ev => setDenda(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}