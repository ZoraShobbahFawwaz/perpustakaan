import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export const BookRentalLandingPage = () => {
  return (
    <div className="container mt-5">
      <header className="text-center">
        <NavLink to={"/createuser"}>
            masuk sini bro
        </NavLink>
        <h1>Welcome to BookRental</h1>
        <p className="lead">Explore, Read, Return - Your Literary Journey Starts Here</p>
      </header>
      <section className="mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>About Us</h2>
            <p>
              At BookRental, we believe in making books accessible to everyone.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Our Services</h2>
            <ul>
              <li>Wide Selection of Books</li>
              <li>Flexible Rental Plans</li>
              <li>Convenient Delivery and Returns</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <h2>Contact Us</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="john@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="How can we assist you with your literary needs?"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
      <footer className="text-center mt-5">
        <p>&copy; 2023 BookRental. All rights reserved.</p>
      </footer>
    </div>
  );
};

