import React from "react";
import Button from "../Button";
import styles from "./style.module.css";
import { TiShoppingCart } from "react-icons/ti";

type Props = {};

function NavUser({}: Props) {
  const icono = <TiShoppingCart />;

  return (
    <nav className={`navbar ${styles.navColorRewear}`}>
      <div className="container-fluid">
        <a className="navbar-brand">
          <a href="">
            <TiShoppingCart />
          </a>
        </a>
        <div className="d-flex">
          <div className=" mx-1">
            <a href="">Inicio</a>
          </div>

          <div className=" mx-1">
            <a href="">Mis Compras</a>
          </div>
          <div className=" mx-1">
            <a href="">Mi Perfil</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavUser;
