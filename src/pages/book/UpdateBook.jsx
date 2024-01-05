import { useState } from "react";
import { updateBook } from "../../api";

export function UpdateBook() {
    const [judul_buku, setJudul_buku] = useState("");
    const [pengarang, setPengarang] = useState("");
    const [penerbit, setPenerbit] = useState("");
    const [tahun_terbit, setTahun_terbit] = useState("");
    const [stock_buku, setStock_buku] = useState("");

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        // Add validation logic here if needed

        const hasil = await updateBook(judul_buku, pengarang, penerbit, tahun_terbit, stock_buku);
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
        </>
    )
}