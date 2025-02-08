import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import NavUser from "../../components/NavUser";
import ProductForm from "../../components/ProductForm";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <Navbar />
      <NavUser />,
      <div className="container w-50">
        <ProductForm />
      </div>
    </>
  );
}

export default index;
