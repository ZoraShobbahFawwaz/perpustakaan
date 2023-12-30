import { useState } from "react";
import { createBook } from "../../api";

export function AddBook() {
    const [judul_buku, setJudul_buku] = useState("");
    const [pengarang, setPengarang] = useState("");
    const [penerbit, setPenerbit] = useState("");
    const [tahun_terbit, setTahun_terbit] = useState("");
    const [stock_buku, setStock_buku] = useState("");

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