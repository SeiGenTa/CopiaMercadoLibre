import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LayoutInitPage from "../layouts/layoutInitPage";
import searchProduct from "../Conection/Conection";
import ContainerProduct from "../components/search/product";
import "./searcher.css";

const SearchPage = () => {
  const { name } = useParams();
  const navite = useNavigate();

  var filter: string | null;
  const [data, setData] = React.useState<[] | null>(null);
  useEffect(() => {
    setData(null);
    console.log(name);
    if (name === undefined) {
      navite("/index");
      return;
    }
    searchProduct(name).then((res) => {
      setData(res.results);

      console.log(data);
    });
  }, [navite]);

  return (
    <LayoutInitPage>
      <section id="search">
        {data === null ? (
          <p>Cargando ...</p>
        ) : (
          <div className="row" style={{ width: "100%" }}>
            <nav></nav>
            <ul id="area-products">
              {data.map((product: any) => (
                <ContainerProduct
                  name={product.title}
                  seller={product.seller.nickname}
                  original_price={product.original_price}
                  price={product.price}
                  image={product.thumbnail}
                  description={product.description}
                  shipping={product.shipping}
                />
              ))}
            </ul>
          </div>
        )}
      </section>
    </LayoutInitPage>
  );
};

export default SearchPage;
