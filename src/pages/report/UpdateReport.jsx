import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getOneByreportID,updateReport } from "../../api";
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate} from "react-router-dom"

export function UpdateReport() {
    const { reportID } = useParams()
    const [ bulan, setBulan] = useState("");
    const [ buku_terlaris, setBuku_terlaris] = useState("");
    const [ total_denda, setTotal_denda] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const dapetData = async () => {
            const data = await getOneByreportID(reportID)
            setBulan(data.bulan)
            setBuku_terlaris(data.buku_terlaris)
            setTotal_denda(data.total_denda)
            console.log(data)
        }
        dapetData()
        const pipop = async () => {
            const hasil = await  localStorage.getItem("role")
        setRole(hasil)
        }
        pipop()
    }, [])

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        // Add validation logic here if needed

        const hasil = await updateReport(reportID,bulan, buku_terlaris, total_denda);
        console.log(hasil);
        navigate('/report')

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
                    <label for="exampleInputEmail1" class="form-label">bulan</label>
                    <input type="text" value={bulan} onChange={ev => setBulan(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Buku Terlaris</label>
                    <input type="text" value={buku_terlaris} onChange={ev => setBuku_terlaris(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Total Denda</label>
                    <input type="text" value={total_denda} onChange={ev => setTotal_denda(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}