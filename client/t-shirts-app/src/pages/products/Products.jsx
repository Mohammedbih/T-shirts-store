import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { products } from "./data";
import SingleProductMob from "./singleProductMob";
import SingleProductDes from "./singleProductDes";
// import { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";

export default function  Products(){

    // const [list, setList] = useState([]);

    // useEffect(()=>{
    //     axios.get("https://t-store.deta.dev/api/v1/t-shirt/all")
    //     .then(data=>{
    //         setList(...list, data);

    //         console.log(list);
    //     })
    // },[])

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const renderProducts = products.map((product) => (
<Grid item 
       key={product.id} 
       xs={2}
       sm={4}
       md={4}
       display="flex" 
       flexDirection={"column"} 
       alignItems="center">

        {matches ? <SingleProductMob product={product} matches={matches}/> 
                 : <SingleProductDes product={product} matches={matches}/>}

</Grid>
    ));

    return(
        <Container className="products">
            <Grid
            container
            spacing={{xs:2, md: 3}}
            justifyContent={"center"}
            sx={{ margin: '20px 4px 10px 4px'}}
            columns={{xs:4, sm:8, md:12}}>    
         {renderProducts}
            </Grid>
        </Container>
    );
}