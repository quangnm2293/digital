"use client";
import { useEffect, useState } from "react";
import { fetchAPI } from "../api/apis";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchAPI("projects").then((res) => setProducts(res.results));
  }, []);

  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th>ID</th>
          <th>project_domain</th>
          <th>project_name</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.project_domain}</td>
            <td>{product.project_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListProduct;
