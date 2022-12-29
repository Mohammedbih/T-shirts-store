import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useUIContext } from "../../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../Styles/Appbar";
import { lighten } from "polished";
import { Colors } from "../../Styles/theme";
import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Products from "../../pages/products/Products";
import { Path } from "../../routs/Path";

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
            <Link
              to={Path.HOME}
              style={{ textDecoration: "none", color: Colors.secondary }}
            >
              <ListItemText>Home</ListItemText>
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link
              to={Path.PRODUCTS}
              style={{ textDecoration: "none", color: Colors.secondary }}
            >
              {" "}
              <ListItemText>Products</ListItemText>
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link
              to={Path.WISHLIST}
              style={{ textDecoration: "none", color: Colors.secondary }}
            >
              {" "}
              <ListItemText>WishList</ListItemText>
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link
              to={Path.MY_ACCOUNT}
              style={{ textDecoration: "none", color: Colors.secondary }}
            >
              {" "}
              <ListItemText>My Account</ListItemText>
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link
              to={Path.HOME}
              style={{ textDecoration: "none", color: Colors.secondary }}
            >
              {" "}
              <ListItemText>About Us</ListItemText>
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link
              to={Path.HOME}
              style={{ textDecoration: "none", color: Colors.secondary }}
            >
              {" "}
              <ListItemText>contact Us</ListItemText>
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
        </List>
      </Drawer>
      <Routes>
        {/* <Route path="/" element={< />} /> */}
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}
