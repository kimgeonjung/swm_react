import React from "react";
import { AppBar, Toolbar, Typography, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#c8ffed", color: "#121212" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <RouterList
            to="/"
            sx={{
              fontSize: "inherit",
              textDecoration: "none",
              color: "black",
            }}
            className="eng"
          >
            SWM: Study With Me!
          </RouterList>
        </Typography>
        <Button color="inherit">
          <RouterList to={"/study"}>새로운 학습 시작</RouterList>
        </Button>
        <Button color="inherit">
          <RouterList to={"/login"} className="eng">
            Login
          </RouterList>
        </Button>
        <Button color="inherit">
          <RouterList to={"/signup"} className="eng">
            Sign Up
          </RouterList>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const RouterList = styled(Link)`
  color: ${(props) => (props.isActive ? "blue" : "black")};
  text-decoration: none;
`;
export default Header;
