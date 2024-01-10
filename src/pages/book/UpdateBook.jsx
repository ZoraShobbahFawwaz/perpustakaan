import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getOneByBookId,updateBook } from "../../api";
import "bootstrap/dist/css/bootstrap.min.css"

export function UpdateBook() {
    const { bookID } = useParams()
    const [judul_buku, setJudul_buku] = useState("");
    const [pengarang, setPengarang] = useState("");
    const [penerbit, setPenerbit] = useState("");
    const [tahun_terbit, setTahun_terbit] = useState("");
    const [stock_buku, setStock_buku] = useState("");

    useEffect(() => {
        const dapetData = async () => {
            const data = await getOneByBookId(bookID)
            setJudul_buku(data.judul_buku)
            setPengarang(data.pengarang)
            setPenerbit(data.penerbit)
            setTahun_terbit(data.tahun_terbit)
            setStock_buku(data.stock_buku)
            console.log(data)
        }
        dapetData()
    }, [])

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        // Add validation logic here if needed

        const hasil = await updateBook(bookID, judul_buku, pengarang, penerbit, tahun_terbit, stock_buku);
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
                    <label for="exampleInputEmail1" class="form-label">judul_buku</label>
                    <input type="text" value={judul_buku} onChange={ev => setJudul_buku(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">pengarang</label>
                    <input type="text" value={pengarang} onChange={ev => setPengarang(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">penerbit</label>
                    <input type="text" value={penerbit} onChange={ev => setPenerbit(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">tahun_terbit</label>
                    <input type="text" value={tahun_terbit} onChange={ev => setTahun_terbit(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">stock_buku</label>
                    <input type="text" value={stock_buku} onChange={ev => setStock_buku(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}