import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCardIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CssBaseline, Divider } from '@mui/material';
import Drawer from './Drawer'
import { useUIContext } from "../..//context/ui";

export default function AppBarDesktop({matches}) {
      const [auth] = React.useState(true);
      const [anchorEl, setAnchorEl] = React.useState(null);    
      const { setDrawerOpen, setShowSearchBox } = useUIContext();
    
      const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
        setAnchorEl(null);
      };
    
      return (
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar >
        {auth && (
          <div>
           <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
          {/* <ResponsiveDrawer/> */}
          <Menu>
          <Drawer/>
          </Menu>
          </div>
        )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Box textAlign={"center"} variant="h4" sx={{marginTop:"4px"}}>
          <svg width="220" height="60" viewBox="0 0 257 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_52)">
<path d="M47 14.0189C51.0717 14.0189 54.5887 11.4228 55.8521 7.60363C53.4417 8.26714 50.3694 8.6676 47 8.6676C43.6309 8.6676 40.5586 8.26714 38.1486 7.60363C39.4113 11.4225 42.928 14.0189 47 14.0189Z" fill="#315966"/>
<path d="M93.883 18.7153C93.6896 18.1727 93.2872 17.7264 92.763 17.4834L74.8416 9.21024C71.0294 7.91884 67.1457 6.89877 63.2242 6.1532C63.0861 6.12616 62.9487 6.11312 62.8132 6.11312C61.8424 6.11312 60.9731 6.78331 60.7568 7.76617C59.3248 14.0705 53.7442 18.7904 46.9997 18.7904C40.2555 18.7904 34.6745 14.0708 33.2429 7.76617C33.024 6.78331 32.1563 6.11312 31.1862 6.11312C31.0507 6.11312 30.9133 6.12616 30.7752 6.1532C26.854 6.89877 22.9702 7.91884 19.152 9.21024L1.237 17.4831C0.709627 17.7261 0.304397 18.1724 0.12023 18.715C-0.0702978 19.264 -0.0359455 19.8566 0.232511 20.3744L8.01267 35.7286C8.37687 36.4573 9.11767 36.8947 9.90141 36.8947C10.1037 36.8947 10.3089 36.8654 10.5112 36.8047L19.1524 34.2435V85.7624C19.1524 86.9323 20.1069 87.8866 21.28 87.8866H72.7203C73.8902 87.8866 74.8419 86.932 74.8419 85.7624V34.2442L83.4891 36.8053C83.6914 36.8661 83.8963 36.8953 84.0983 36.8953C84.8804 36.8953 85.6184 36.458 85.9876 35.7293L93.7707 20.3751C94.0328 19.8569 94.0703 19.2643 93.883 18.7153Z" fill="#315966"/>
</g>
<path d="M85 63.625H98.9062V68.3438H85V63.625ZM107.406 67.4062H109.594C109.823 69.7812 110.281 71.7604 110.969 73.3438C111.656 74.9271 112.5 76.1875 113.5 77.125C114.521 78.0625 115.677 78.7292 116.969 79.125C118.281 79.5 119.667 79.6875 121.125 79.6875C122.875 79.6875 124.365 79.4688 125.594 79.0312C126.844 78.5938 127.865 77.9896 128.656 77.2188C129.469 76.4271 130.052 75.4896 130.406 74.4062C130.781 73.3021 130.969 72.0938 130.969 70.7812C130.969 69.1562 130.698 67.8229 130.156 66.7812C129.615 65.7188 128.854 64.8229 127.875 64.0938C126.917 63.3438 125.76 62.6979 124.406 62.1562C123.052 61.6146 121.562 61.0521 119.938 60.4688C118.312 59.8854 116.76 59.2708 115.281 58.625C113.823 57.9792 112.531 57.1771 111.406 56.2188C110.281 55.2604 109.385 54.0938 108.719 52.7188C108.073 51.3229 107.75 49.5938 107.75 47.5312C107.75 45.5938 108.062 43.8229 108.688 42.2188C109.312 40.6146 110.24 39.25 111.469 38.125C112.698 36.9792 114.219 36.0938 116.031 35.4688C117.865 34.8438 119.99 34.5312 122.406 34.5312C123.365 34.5312 124.354 34.5833 125.375 34.6875C126.396 34.7708 127.406 34.9062 128.406 35.0938C129.427 35.2812 130.427 35.5104 131.406 35.7812C132.385 36.0312 133.312 36.3125 134.188 36.625L134.562 47.9688H132.375C132.188 45.7188 131.771 43.8854 131.125 42.4688C130.479 41.0521 129.688 39.9479 128.75 39.1562C127.833 38.3438 126.802 37.7917 125.656 37.5C124.531 37.1875 123.375 37.0312 122.188 37.0312C120.604 37.0312 119.229 37.2292 118.062 37.625C116.896 38 115.927 38.5521 115.156 39.2812C114.385 39.9896 113.802 40.8646 113.406 41.9062C113.031 42.9271 112.844 44.0833 112.844 45.375C112.844 46.9167 113.115 48.1979 113.656 49.2188C114.198 50.2396 114.958 51.125 115.938 51.875C116.938 52.6042 118.125 53.2604 119.5 53.8438C120.896 54.4062 122.427 55 124.094 55.625C125.615 56.2083 127.104 56.8333 128.562 57.5C130.042 58.1458 131.354 58.9688 132.5 59.9688C133.667 60.9479 134.604 62.1667 135.312 63.625C136.021 65.0625 136.375 66.8542 136.375 69C136.375 71.0833 136.01 72.9375 135.281 74.5625C134.573 76.1875 133.542 77.5521 132.188 78.6562C130.854 79.7604 129.219 80.6042 127.281 81.1875C125.344 81.7708 123.156 82.0625 120.719 82.0625C119.656 82.0625 118.552 82.0104 117.406 81.9062C116.281 81.8021 115.156 81.6458 114.031 81.4375C112.927 81.2292 111.844 80.9896 110.781 80.7188C109.719 80.4479 108.729 80.1354 107.812 79.7812L107.406 67.4062ZM161.406 74.75C160.844 77.1875 159.917 78.9896 158.625 80.1562C157.333 81.3021 155.552 81.875 153.281 81.875C152.094 81.875 151.021 81.7292 150.062 81.4375C149.125 81.1458 148.323 80.6875 147.656 80.0625C146.99 79.4167 146.479 78.6042 146.125 77.625C145.771 76.625 145.594 75.4167 145.594 74V56.875H140.906V54.375H145.594V48.3125L151.219 47.375V54.375H159.344V56.875H151.219V74.6875C151.219 75.5417 151.292 76.2396 151.438 76.7812C151.604 77.3229 151.833 77.75 152.125 78.0625C152.417 78.375 152.76 78.5938 153.156 78.7188C153.552 78.8229 154 78.875 154.5 78.875C155.167 78.875 155.74 78.7812 156.219 78.5938C156.698 78.3854 157.115 78.0833 157.469 77.6875C157.844 77.2708 158.156 76.7604 158.406 76.1562C158.677 75.5521 158.927 74.8542 159.156 74.0625C159.552 74.125 159.938 74.2083 160.312 74.3125C160.688 74.4167 161.052 74.5625 161.406 74.75ZM164.844 67.9375C164.844 65.9792 165.146 64.125 165.75 62.375C166.375 60.625 167.281 59.0938 168.469 57.7812C169.656 56.4688 171.104 55.4375 172.812 54.6875C174.542 53.9167 176.5 53.5312 178.688 53.5312C180.854 53.5312 182.771 53.9062 184.438 54.6562C186.104 55.3854 187.5 56.3854 188.625 57.6562C189.75 58.9271 190.594 60.4062 191.156 62.0938C191.74 63.7812 192.031 65.5729 192.031 67.4688C192.031 69.4271 191.719 71.2812 191.094 73.0312C190.49 74.7812 189.594 76.3125 188.406 77.625C187.219 78.9375 185.76 79.9792 184.031 80.75C182.323 81.5 180.375 81.875 178.188 81.875C176.021 81.875 174.104 81.5104 172.438 80.7812C170.771 80.0312 169.375 79.0208 168.25 77.75C167.125 76.4792 166.271 75 165.688 73.3125C165.125 71.625 164.844 69.8333 164.844 67.9375ZM171.031 67.8125C171.031 70.0833 171.188 71.9688 171.5 73.4688C171.812 74.9688 172.271 76.1667 172.875 77.0625C173.479 77.9583 174.24 78.5938 175.156 78.9688C176.073 79.3229 177.146 79.5 178.375 79.5C179.583 79.5 180.656 79.3125 181.594 78.9375C182.531 78.5625 183.312 77.9271 183.938 77.0312C184.562 76.1146 185.031 74.8958 185.344 73.375C185.677 71.8333 185.844 69.9062 185.844 67.5938C185.844 65.3229 185.688 63.4375 185.375 61.9375C185.062 60.4375 184.604 59.2396 184 58.3438C183.396 57.4479 182.625 56.8229 181.688 56.4688C180.771 56.0938 179.708 55.9062 178.5 55.9062C177.271 55.9062 176.188 56.0938 175.25 56.4688C174.333 56.8438 173.562 57.4896 172.938 58.4062C172.312 59.3021 171.833 60.5208 171.5 62.0625C171.188 63.5833 171.031 65.5 171.031 67.8125ZM211.719 81H196.406V78.5H201.094V56.875H196.406V54.375H206.719V59.2188H206.844C207.219 58.4062 207.677 57.6667 208.219 57C208.781 56.3125 209.396 55.7188 210.062 55.2188C210.729 54.7188 211.438 54.3333 212.188 54.0625C212.938 53.7917 213.698 53.6562 214.469 53.6562C215.719 53.6562 216.75 54.0208 217.562 54.75C218.375 55.4792 218.781 56.4896 218.781 57.7812C218.781 58.9271 218.469 59.8229 217.844 60.4688C217.219 61.0938 216.406 61.4062 215.406 61.4062C214.365 61.4062 213.562 61.1042 213 60.5C212.458 59.8958 212.188 59.1354 212.188 58.2188C212.188 57.7396 212.281 57.2188 212.469 56.6562C211.656 56.9479 210.896 57.4167 210.188 58.0625C209.5 58.6875 208.896 59.4792 208.375 60.4375C207.854 61.3958 207.448 62.5104 207.156 63.7812C206.865 65.0312 206.719 66.4271 206.719 67.9688V78.5H211.719V81ZM246.281 72.5312C245.615 75.5521 244.323 77.8646 242.406 79.4688C240.49 81.0729 238 81.875 234.938 81.875C232.833 81.875 230.958 81.5104 229.312 80.7812C227.667 80.0312 226.271 79.0208 225.125 77.75C223.979 76.4792 223.104 75 222.5 73.3125C221.896 71.6042 221.594 69.7917 221.594 67.875C221.594 65.9167 221.906 64.0625 222.531 62.3125C223.156 60.5625 224.042 59.0417 225.188 57.75C226.354 56.4583 227.74 55.4375 229.344 54.6875C230.969 53.9167 232.781 53.5312 234.781 53.5312C236.615 53.5312 238.26 53.8542 239.719 54.5C241.177 55.1458 242.417 56.0521 243.438 57.2188C244.458 58.3646 245.24 59.7396 245.781 61.3438C246.344 62.9479 246.646 64.7083 246.688 66.625H227.844C227.823 66.9792 227.812 67.2188 227.812 67.3438C227.812 67.4479 227.812 67.5104 227.812 67.5312C227.812 69.9896 227.99 71.9896 228.344 73.5312C228.719 75.0729 229.229 76.2812 229.875 77.1562C230.542 78.0104 231.323 78.5938 232.219 78.9062C233.135 79.2188 234.146 79.375 235.25 79.375C236.271 79.375 237.229 79.2396 238.125 78.9688C239.042 78.6979 239.865 78.2708 240.594 77.6875C241.323 77.0833 241.958 76.3125 242.5 75.375C243.062 74.4167 243.51 73.2708 243.844 71.9375C244.26 71.9792 244.677 72.0521 245.094 72.1562C245.51 72.2604 245.906 72.3854 246.281 72.5312ZM240.375 64.1875C240.312 62.4583 240.125 61.0625 239.812 60C239.521 58.9167 239.125 58.0729 238.625 57.4688C238.125 56.8646 237.531 56.4583 236.844 56.25C236.177 56.0208 235.438 55.9062 234.625 55.9062C233.771 55.9062 232.969 56.0312 232.219 56.2812C231.49 56.5312 230.833 56.9688 230.25 57.5938C229.667 58.2188 229.177 59.0625 228.781 60.125C228.406 61.1875 228.146 62.5417 228 64.1875H240.375Z" fill="#315966"/>
<g clip-path="url(#clip1_2_52)">
<path d="M30.2051 30C40.8906 30 51.5714 30.1524 62.257 30.197C64.0948 30.2298 66.0093 30.0399 67.7449 30.7856C70.2542 31.8574 71.4973 34.8545 70.8188 37.4576C70.1218 39.9506 69.5712 42.7085 67.5521 44.5049C63.9275 47.8608 58.6672 47.2042 54.1691 48.0437C54.0784 48.4237 54.0738 48.8153 54.0366 49.2046C51.8712 56.5286 49.7499 63.869 47.7192 71.2351C47.2103 73.0057 46.7085 74.9077 45.3167 76.2046C43.4324 78.4676 40.3817 79.2744 37.5564 78.925C35.7395 78.9484 33.753 79.1337 32.173 78.0432C30.4188 76.819 29.7404 74.3683 30.4583 72.3655C31.9082 66.7066 33.6414 61.1345 35.1424 55.492C35.6582 53.5455 36.2344 51.5123 37.6447 50.0137C39.1015 48.6347 40.9719 47.7506 42.9492 47.4668C45.9696 47.0939 48.9924 46.7586 52.0129 46.374C51.683 44.5213 49.7243 43.3862 47.9562 43.4378C41.346 43.3323 34.7311 43.3651 28.1209 43.2737C25.8416 43.4378 23.5693 41.8501 23.0837 39.5613C22.4378 35.1688 25.5977 30.2791 30.2051 30ZM25.3653 36.1889C24.7729 37.6453 24.4685 39.6011 25.8602 40.7104C27.1079 41.6766 28.7576 41.2568 30.2074 41.3577C36.2367 41.5195 42.2777 41.3624 48.307 41.5289C50.9627 41.5805 53.3489 43.5457 53.9902 46.1442C57.6682 45.4875 61.625 45.8135 65.0474 44.0968C67.7054 42.6405 68.363 39.5003 69.0275 36.7893C69.5712 34.695 68.0168 32.378 65.8629 32.2068C61.6529 32.0075 57.4242 32.1646 53.2118 32.0426C45.9743 32.0215 38.7391 31.9183 31.5016 31.9043C28.7994 31.6064 25.8904 33.4099 25.3653 36.1889ZM42.6285 49.4555C40.5421 49.6854 38.7414 51.1816 37.8678 53.0694C35.7465 59.7719 34.062 66.6105 32.0894 73.3552C31.634 75.0742 32.8863 76.8424 34.6359 76.9808C36.4621 77.0746 38.2999 77.0183 40.1308 77.0301C42.5216 76.6853 44.6639 74.8866 45.419 72.5648C47.5472 64.4459 50.1449 56.4488 52.2081 48.3205C49.0064 48.6113 45.8163 49.0357 42.6285 49.4555Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2_52">
<rect width="94" height="94" fill="white"/>
</clipPath>
<clipPath id="clip1_2_52">
<rect width="48" height="49" fill="white" transform="translate(23 30)"/>
</clipPath>
</defs>
</svg>
</Box>
          </Typography>

          <IconButton onClick={() => setShowSearchBox(true)}>
            <SearchIcon/>
        </IconButton>
        <Divider/>
          <IconButton>
            <FavoriteIcon/>
          </IconButton>
          <Divider/>
          <IconButton>
            <ShoppingCardIcon/>
          </IconButton>
      
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}>Register</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
 }