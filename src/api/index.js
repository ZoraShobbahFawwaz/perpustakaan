import axios from "axios"

const url = "http://localhost:3001"


export const login = ( username,password) => {
    return axios
            .post(`${url}/auth/login`, { username,password})
            .then(response => response.data)
            .catch(error => error)
} 

// export const createAdmin = (userID,jenis_kelamin, nama, nim, username, password, email, no_hp) => {
//     return axios
//             .post(`${url}/admin/create`, { userID,nama, nim, username, password, jenis_kelamin, email, no_hp })
//             .then(response => response.data)
//             .catch(error => error)
// }
//user
export const getAllUser = () => {
    return axios
            .get(`${url}/user`)
            .then(response => response.data)
            .catch(error => error)
}

export const createUser = (userID,jenis_kelamin, nama, nim, username, password, email, no_hp) => {
    return axios
            .post(`${url}/user/create`, { userID,nama, nim, username, password, jenis_kelamin, email, no_hp })
            .then(response => response.data)
            .catch(error => error)
}

//buku
export const getAllbooks= () => {
    return axios
            .get(`${url}/books`)
            .then(response => response.data)
            .catch(error => error)
}
//tambah buku
export const createBook = (judul_buku, pengarang, penerbit, tahun_terbit, stock_buku) => {
    return axios
            .post(`${url}/books`, { judul_buku, pengarang, penerbit, tahun_terbit, stock_buku })
            .then(response => response.data)
            .catch(error => error)
}
// delete buku
export const deleteBuku = (idBuku) => {
    return axios
            .delete(`${url}/books/${idBuku}`)
            .then(response => console.log(response))
            .catch(err => console.log(err))
}

export const updateBook= (idBuku) => {
    return axios
            .patch(`${url}/books/${idBuku}`)
            .then(response => console.log(response))
            .catch(err => console.log(err))
}

export const getAllborrowing = () => {
    return axios
            .get(`${url}/borrowing`)
            .then(response => response.data)
            .catch(error => error)
}            
export const createBorrowing = (nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status) => {
    return axios
            .post(`${url}/borrowing/create`, { nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status })
            .then(response => response.data)
            .catch(error => error)
}
export const getAllpengembalian = () => {
    return axios
            .get(`${url}/pengembalian`)
            .then(response => response.data)
            .catch(error => error)
}

export const getAllreport = () => {
    return axios
            .get(`${url}/report`)
            .then(response => response.data)
            .catch(error => error)
}

export const createReport = (bulan, buku_terlaris, total_denda) => {
    return axios
            .post(`${url}/report`, { bulan, buku_terlaris, total_denda })
            .then(response => response.data)
            .catch(error => error)

}

export const createPengembalian = (nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status) => {
    return axios
            .post(`${url}/pengembalian`, { nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status })
            .then(response => response.data)
            .catch(error => error)
}
