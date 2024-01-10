import axios from "axios"

const url = "http://localhost:3001"

export const login = (username, password) => {
    return axios
        .post(`${url}/auth/login`, { username, password })
        .then(response => response.data)
        .catch(error => error)

}
//buat admin
export const createAdmin = (nama, username, password, np, no_hp, role) => {
    return axios
        .post(`${url}/admin/create`, { nama, username, password, np, no_hp, role })
        .catch(error => error)
        .then(response => response.data)
}

//admin
export const getAlladmin = () => {
    return axios
        .get(`${url}/admin`)
        .then(response => response.data)
        .catch(error => error)
}
export const updateAdmin = (adminID, nama, username, password, np, no_hp) => {
    return axios
        .patch(`${url}/admin/${adminID}`, { nama, username, password, np, no_hp })
        .then(response => response.data)
        .catch(error => error)
}
export const getOneByAdminId = (adminID) => {
    return axios
        .get(`${url}/admin/${adminID}`)
        .then(reponse => reponse.data)
        .catch(error => error)
}

//delete admin
export const deleteAdmin = (idBuku) => {
    return axios
        .delete(`${url}/admin/${idBuku}`)
        .then(response => console.log(response))
        .catch(err => console.log(err))
}
//user
export const getAllUser = () => {
    return axios
        .get(`${url}/user`)
        .then(response => response.data)
        .catch(error => error)
}
export const getOneById = (userID) => {
    return axios
        .get(`${url}/user/${userID}`)
        .then(reponse => reponse.data)
        .catch(error => error)
}

//buat user
export const createUser = (nama, nim, username, password, jenis_kelamin, email, no_hp) => {
    return axios
        .post(`${url}/user/create`, { nama, nim, username, password, jenis_kelamin, email, no_hp })
        .then(response => response.data)
        .catch(error => error)
}

//update user
export const updateUser = (userID, nama, nim, username, password, jenis_kelamin, email, no_hp) => {
    return axios
        .patch(`${url}/user/${userID}`, { nama, nim, username, password, jenis_kelamin, email, no_hp })
        .then(response => response.data)
        .catch(error => error)
}

//delete user
export const deleteUser = (idUser) => {
    return axios
        .delete(`${url}/user/${idUser}`)
        .then(response => console.log(response))
        .catch(err => console.log(err))

}

//buku
export const getAllbookuser = () => {
    return axios
        .get(`${url}/books`)
        .then(response => response.data)
        .catch(error => error)
}
export const getAllbooks = () => {
    return axios
        .get(`${url}/books`)
        .then(response => response.data)
        .catch(error => error)
}
//updte buku
export const getOneByBookId = (bookID) => {
    return axios
        .get(`${url}/books/${bookID}`)
        .then(reponse => reponse.data)
        .catch(error => error)
}
//tambah buku
export const createBook = (judul_buku, pengarang, penerbit, tahun_terbit, stock_buku) => {
    return axios
        .post(`${url}/books`, { judul_buku, pengarang, penerbit, tahun_terbit, stock_buku })
        .then(response => response.data)
        .catch(error => error)
}

//update buku
export const updateBook = (bookID, judul_buku, pengarang, penerbit, tahun_terbit, stock_buku) => {
    return axios
        .patch(`${url}/books/${bookID}`, { judul_buku, pengarang, penerbit, tahun_terbit, stock_buku })
        .then(response => response.data)
        .catch(error => error)
}
export const deleteBuku = (idBuku) => {
    return axios
        .delete(`${url}/books/${idBuku}`)
        .then(response => console.log(response))
        .catch(err => console.log(err))
}

//borrowing
export const getAllborrowing = () => {
    return axios
        .get(`${url}/borrowing_book`)
        .then(response => response.data)
        .catch(error => error)
}
export const createBorrowing = (nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status) => {
    return axios
        .post(`${url}/borrowing_book`, { nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status })
        .then(response => response.data)
        .catch(error => error)
}
    export const deleteBorrowing = (idBorrowing) => {
        return axios
            .delete(`${url}/borrowing_book/${idBorrowing}`)
            .then(response => console.log(response))
            .catch(err => console.log(err))
}
export const updateBorrowing = (ID_Peminjaman,nama, judul_buku,tanggal_peminjaman,tanggal_pengembalian,status ) => {
    return axios
        .patch(`${url}/borrowing_book/${ID_Peminjaman}`, { nama,judul_buku,tanggal_peminjaman,tanggal_pengembalian,status})
        .then(response => response.data)
        .catch(error => error)
}
export const getOneByIDpeminjaman = (ID_peminjaman) => {
    return axios
        .get(`${url}/borrowing_book/${ID_peminjaman}`)
        .then(reponse => reponse.data)
        .catch(error => error)
}
    //pengembalian

export const getAllpengembalian = () => {
    return axios
        .get(`${url}/pengembalian/`)
        .then(response => response.data)
        .catch(error => error)
}
export const createPengembalian = (nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status, denda) => {
    return axios
        .post(`${url}/pengembalian`, { nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status, denda })
        .then(response => response.data)
        .catch(error => error)
}
    export const deletePengembalian = (idPengembalian) => {
        console.log(idPengembalian)
        return axios
          .delete(`${url}/pengembalian/${idPengembalian}`)
          .then(response => console.log(response))
          .catch(error => console.log(error))
}
export const getOneByIDpengembalian = (pengembalianID) => {
    return axios
        .get(`${url}/pengembalian/${pengembalianID}`)
        .then(reponse => reponse.data)
        .catch(error => error)
}

export const updatePengembalian = (pengembalianID , nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status, denda) => {
    return axios
        .patch(`${url}/pengembalian/${pengembalianID}`, { nama, judul_buku, tanggal_peminjaman, tanggal_pengembalian, status, denda })
        .then(response => response.data)
        .catch(error => error)
}
//report
export const getAllreport = () => {
    return axios
        .get(`${url}/report`)
        .then(response => response.data)
        .catch(error => error)
}
export const updateReport = (reportID, bulan, buku_terlaris, total_denda) => {
    return axios
        .patch(`${url}/report/${reportID}`, { bulan, buku_terlaris, total_denda })
        .then(response => response.data)
        .catch(error => error)
}
export const getOneByreportID = (reportID) => {
    return axios
        .get(`${url}/report/${reportID}`)
        .then(reponse => reponse.data)
        .catch(error => error)
}
export const createReport = (bulan, buku_terlaris, total_denda) => {
    return axios
        .post(`${url}/report`, { bulan, buku_terlaris, total_denda })
        .then(response => response.data)
        .catch(error => error)

}
export const deleteReport = (reportID) => {
    return axios
        .delete(`${url}/report/${reportID}`)
        .then(response => console.log(response))
        .catch(err => console.log(err))
}