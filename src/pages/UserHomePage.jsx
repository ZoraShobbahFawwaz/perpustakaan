import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import ara from "../asset/ara.jpg";

export const UserHomePage = () => {
  const [token, setToken] = useState()

  const [username, setUsername] = useState()

  const navigate = useNavigate()

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

  const logout = async () => {
    await localStorage.clear()

    navigate('/')
  }

  useEffect(() => {
    const ayi = async () => {
      const tiket = await localStorage.getItem('token')
      const nama = await localStorage.getItem('username')
      setUsername(nama)
      setToken(tiket)
    }
  
    ayi()
  },[])

  if(!token) return <p>Harus Login dulu</p>

  return (

    <div className="" style={fullBackgroundStyle}>
      <header className="text-center">
          <button onClick={logout} className="btn btn-danger">LogOut</button>
        <h1>Selamat Datang Di Web Perpustakaan kami</h1>
        <p className="lead">Budayakan Membaca Walaupun Hanya Sebentar</p>
        <NavLink to={"/bookuser"}>
          <button type="Submit" className="btn btn-dark">Daftar Buku</button>
        </NavLink>
      </header>
    </div>
  );
};

