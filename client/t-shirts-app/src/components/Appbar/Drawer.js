import { Divider,Drawer,List,ListItemButton,ListItemText,} from "@mui/material";
import { useUIContext } from "../../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../Styles/Appbar";
import { lighten } from "polished";
import { Colors } from "../../Styles/theme";
import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Products from "../../pages/products/Products";

export default function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        
      <List>
        <ListItemButton>
          <ListItemText>Home</ListItemText>
        </ListItemButton>
        <Divider variant="middle"/>
        <ListItemButton>
          <ListItemText>Products</ListItemText>
        </ListItemButton>
        <Divider variant="middle"/>
        <ListItemButton>
          <ListItemText>WishList</ListItemText>
        </ListItemButton>
        <Divider variant="middle"/>
        <ListItemButton>
          <ListItemText>My Account</ListItemText>
        </ListItemButton>
        <Divider variant="middle"/>
        <ListItemButton>
          <ListItemText>About Us</ListItemText>
        </ListItemButton>
        <Divider variant="middle"/>
        <ListItemButton>
          <ListItemText>contact Us</ListItemText>
        </ListItemButton>
        <Divider variant="middle"/>
      </List>
    </Drawer>
    <Routes>
        {/* <Route path="/" element={< />} /> */}
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}