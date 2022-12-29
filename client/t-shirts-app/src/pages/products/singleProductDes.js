import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../Styles/products";
import ProductMeta from "./productMeta";
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import FitScreenIcon from "@mui/icons-material/FitScreen"
import { useState } from "react";
import useDialog from "../../hooks/UseDialog";
import ProductDetails from "./productDetails/details";


export default function SingleProductDes({product , matches}){

    const [showOptions, setShowOptions] = useState(false);

    const handleMouseEnter = () => {
        setShowOptions(true);
    }

    const handleMouseLeave = () => {
        setShowOptions(false);
    }

    const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog]
    = useDialog(ProductDetails);
   
 
    return(
        <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProductImage src={product.image}/> 
            <ProductFavButton isFav={1}>
              <FavoriteIcon/>
                </ProductFavButton>
            {
                (showOptions && <ProductAddToCart show={ showOptions} variant="contained">
                    Add to cart 
                </ProductAddToCart>)
            }
            
            <ProductActionsWrapper show={showOptions}>
                <Stack direction="column">
<ProductActionButton>
    <ShareIcon color="primary"/>
</ProductActionButton>
<ProductActionButton onClick={() => showProductDetailDialog( )}>
    <FitScreenIcon color="primary"/>
</ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
    <ProductMeta product = {product} matches = {matches}/>
    <ProductDetailDialog product={product}/> 
        </>
        
    );
}