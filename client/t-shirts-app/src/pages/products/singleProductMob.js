import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../Styles/products";
import ProductMeta from "./productMeta";
import FavoritIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import FitScreenIcon from "@mui/icons-material/FitScreen"
import useDialog from "../../hooks/UseDialog";
import ProductDetails from "./productDetails/details";

export default function SingleProductMob({product , matches}){

 const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog]
 = useDialog(ProductDetails);

    return(
        <>
        <Product>
            <ProductImage src={product.image}/> 
            <ProductMeta product = {product} matches = {matches}/>
            <ProductActionsWrapper>
                <Stack direction="row">
<ProductFavButton isFav={1}>
    <FavoritIcon/>
</ProductFavButton>
<ProductActionButton>
    <ShareIcon color="primary"/>
</ProductActionButton>
<ProductActionButton onClick={() => showProductDetailDialog( )}>
    <FitScreenIcon color="primary"/>
</ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
        <ProductDetailDialog product={product}/>
        </>
        
    );
}