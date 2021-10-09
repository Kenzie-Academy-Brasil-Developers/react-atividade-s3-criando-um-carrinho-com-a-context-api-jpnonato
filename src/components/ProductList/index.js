import Button from "../Button";

import { useContext } from "react";
import { CardMain, Sec } from "./styles";
import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";

const ProductList = ({ type }) => {
  // type determinará se nosso componente será do tipo "catalogue" ou "cart"
  // veremos melhor como isso irá funcionar quando formos para nosso App.js
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
      <div>
        <section>
          {
            type === "catalogue" && <p> Catalogue: </p>
          }
          <Sec>
            {
              type === "catalogue" &&
                catalogue.map((item, index) => (
                    <CardMain key={index}>
                      <p>{item.name}</p> 
                      <Button type={type} item={item} />
                    </CardMain>
                ))
            }
          </Sec>
          
          </section>

         <section>
          {
            type === "cart" && <p> Cart: </p>
          }
          <Sec>
            {
              type === "cart" &&
                cart.map((item, index) => (
                  <CardMain key={index}>
                    <p>{item.name}</p> 
                    <Button type={type} item={item} />
                  </CardMain>
                ))
            }
          </Sec>
         </section>
      </div>
  );
};

export default ProductList;