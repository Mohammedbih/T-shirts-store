import { useTheme } from "@mui/material/styles";
import { useMediaQuery ,Typography , Box} from "@mui/material";
import { BannerContainer,BannerContent,BannerDescription,BannerImage,BannerShopButton,BannerTitle } from "../../Styles/banner";

export default function Banner(){

    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return(
    <div>
    <BannerContainer >
<BannerImage src="/Images/Home/HomeImage.png" />
      <BannerContent>
        <BannerTitle variant="h2">
          T-STORE
        </BannerTitle>
<Typography variant="h5" fontFamily= '"Montez", "cursive"'>WELCOME TO OUR STORE</Typography>
        <BannerDescription variant="subtitle">
          We have t-shirts and posters go and start your shopping
        </BannerDescription>

        <BannerShopButton color="primary">Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
 </div>   
  );
}