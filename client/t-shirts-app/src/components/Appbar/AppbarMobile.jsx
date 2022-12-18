import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../Styles/Appbar";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-materialSearch'

export default function AppbarMobile({ matches }){
    return (
        <AppbarContainer>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h4">T-STORE
            </AppbarHeader>
        <IconButton>
            <SearchIcon/>
        </IconButton>
        <Actions matches={matches}/>
        </AppbarContainer>
    );
    
}