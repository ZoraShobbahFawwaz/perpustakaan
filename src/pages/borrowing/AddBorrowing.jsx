import { useState } from "react";
import { createBorrowing } from "../../api";

export function AddBorrowing() {
    const [nama, setNama] = useState("");
    const [judul_buku, setJudul_buku] = useState("");
    const [tanggal_peminjaman, setTanggal_peminjaman] = useState("");
    const [tanggal_pengembalian, setTanggal_pengembalian] = useState("");
    const [status, setStatus] = useState("");

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
    };

    return (
        <>
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
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}