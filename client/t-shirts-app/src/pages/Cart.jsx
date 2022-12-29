// import React from "react";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Badge from "@material-ui/core/Badge";
// // import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Button from "@material-ui/core/Button";
// // import AddIcon from "@material-ui/icons/Add";
// // import RemoveIcon from "@material-ui/icons/Remove";

// export default function Cart() {
//   const [itemCount, setItemCount] = React.useState(1);

//   return (
//     <div style={{ display: "block", padding: 30 }}>
//       <h4>Shopping Cart</h4>
//       <div>
//         <Badge color="secondary" badgeContent={itemCount}>
//           <span>Cart</span>{" "}
//         </Badge>
//         <ButtonGroup>
//           <Button
//             onClick={() => {
//               setItemCount(Math.max(itemCount - 1, 0));
//             }}
//           >
//             {" - "}

//           </Button>
//           <Button
//             onClick={() => {
//               setItemCount(itemCount + 1);
//             }}
//           >
//             {" + "}
//             {/* <AddIcon fontSize="small" /> */}
//           </Button>
//         </ButtonGroup>
//       </div>
//     </div>
//   );
// }

import React from "react";
import styled from "styled-components";
import IncDec from "./products/productDetails/ui";

const Container = styled.div`
  padding: 20px;
`;
const Wrapper = styled.div``;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  dispaly: flex;
`;
const Image = styled.img`
  width: 400px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const ProductPrice = styled.div`
  font-size: 24px;
  margin: 5px;
  padding: 10px;
`;

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>

          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Basic Shirt{" "}
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>9797789881
                  </ProductId>
                  <ProductColor color="Orange" />
                  <ProductSize>
                    <b>Size:</b> Medium{" "}
                  </ProductSize>
                  <IncDec />
                  <PriceDetail>
                    <ProductPrice>30$</ProductPrice>
                  </PriceDetail>
                </Details>
              </ProductDetail>
            </Product>
          </Info>
        </Bottom>
      </Wrapper>
    </Container>
  );
};
export default Cart;
