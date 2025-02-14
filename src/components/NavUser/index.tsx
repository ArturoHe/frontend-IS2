import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { TiShoppingCart } from "react-icons/ti";

type Props = {};

function NavUser({}: Props) {
  const userName = sessionStorage.getItem("username");

  return (
    <nav className={`navbar ${styles.navColorRewear} p-0`}>
      <div className="container-fluid">
        <Link
          className={`navbar-brand ${styles.s}`}
          style={{ fontSize: "1.5rem" }}
          to="/home"
        >
          <TiShoppingCart />
        </Link>

        <div className="d-flex">
          <div className=" mx-1">
            <Link className={`form-control ${styles.s}`} to="/home">
              Inicio
            </Link>
          </div>

          <div className=" mx-1">
            <Link className={`form-control ${styles.s}`} to="/home">
              Mis Compras
            </Link>
          </div>

          <div className=" mx-1">
            <Link
              className={`form-control ${styles.s}`}
              to={`/user/${userName}`}
            >
              Mi Perfil
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavUser;
