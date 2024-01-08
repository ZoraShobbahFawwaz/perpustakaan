import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import ara from "../asset/ara.jpg";

export const AdminHomePage = () => {
  const fullBackgroundStyle = {
    backgroundImage: `url(${ara})`, // Replace with the path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Set the height to 100% of the viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // You can add more styles as needed
  };
  return (
    
    <div className="" style={fullBackgroundStyle}>
      <header className="text-center">
      <NavLink to={"/"}>
          <button type="Submit" className="btn btn-danger">LogOut</button>
        </NavLink>
        <h1>Selamat Datang Di Halaman Admin</h1>
        <p className="lead">Budayakan Membaca Walaupun Hanya Sebentar</p>
        <NavLink to={"/borrowing"}>
          <button type="Submit" className="btn btn-dark">Data Peminjaman Buku</button>
      </NavLink>
      <NavLink className="ms-5" to={"/book"}>
          <button type="Submit" className="btn btn-dark">Data Buku</button>
      </NavLink>
      <NavLink className="ms-5" to={"/pengembalian"}>
          <button type="Submit" className="btn btn-dark">Data Pengembalian Buku</button>
      </NavLink> 
      <NavLink className="ms-5" to={"/user"}>
          <button type="Submit" className="btn btn-dark">Data Anggota</button>
      </NavLink>
      <NavLink className="ms-5" to={"/report"}>
          <button type="Submit" className="btn btn-dark">Report</button>
      </NavLink>
      </header>
    </div>
  );
};

