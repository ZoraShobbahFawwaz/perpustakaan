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
                <div className="mb-3">
                    <label htmlFor="judul_buku" className="form-label">
                        Judul Buku
                    </label>
                    <input
                        type="text"
                        onChange={(ev) => setJudul_buku(ev.target.value)}
                        className="form-control"
                        id="judul_buku"
                        aria-describedby="judulBukuHelp"
                        value={judul_buku}
                    />
                </div>
                {/* Repeat similar changes for other input fields */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
}