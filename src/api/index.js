import axios from "axios"

const url = "http://localhost:3001"
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

export const createBook = (judul_buku, pengarang, penerbit, tahun_terbit, stock_buku) => {
    return axios
            .post(`${url}/book/create`, { judul_buku, pengarang, penerbit, tahun_terbit, stock_buku })
            .then(response => response.data)
            .catch(error => error)
}

export const updateBook = (judul_buku, pengarang, penerbit, tahun_terbit, stock_buku) => {
    return axios
            .post(`${url}/book/create`, { judul_buku, pengarang, penerbit, tahun_terbit, stock_buku })
            .then(response => response.data)
            .catch(error => error)
}

export const deleteBook = (judul_buku, pengarang, penerbit, tahun_terbit, stock_buku) => {
    return axios
            .post(`${url}/book/create`, { judul_buku, pengarang, penerbit, tahun_terbit, stock_buku })
            .then(response => response.data)
            .catch(error => error)
}
//borrowing
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