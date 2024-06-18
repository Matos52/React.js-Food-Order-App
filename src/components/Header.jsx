import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import React from "react";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="React food logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart(0)</Button>
      </nav>
    </header>
  );
}
