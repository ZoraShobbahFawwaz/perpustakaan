import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import ara from "../asset/ara.jpg";

export const UserHomePage = () => {
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
        <h1>Selamat Datang Di Web Perpustakaan kami</h1>
        <p className="lead">Budayakan Membaca Walaupun Hanya Sebentar</p>
        {/* <NavLink to={"/create/user"}>
          <button type="Submit" className="btn btn-dark">Daftar</button>
        </NavLink>
        <NavLink className="ms-5" to={"/login"}>
          <button type="Submit" className="btn btn-dark">Login</button>
        </NavLink> */}
        <NavLink className="" to={"/bookuser"}>
          <button type="Submit" className="btn btn-success">Daftar Buku</button>
        </NavLink>
      </header>
    </div>
  );
};

