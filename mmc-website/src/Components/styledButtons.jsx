import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useMediaQuery, useTheme } from '@mui/material';

const NavbarDrawerStyledButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "#efefef",
    marginRight: "5px",
    '&:hover': {
      backgroundColor: "gray",
    },
  }));

function NavbarButtonDrawer(props) {
    return (
        <NavbarDrawerStyledButton id={props.props.id} variant="contained" href={props.props.href} startIcon={props.props.startIcon}>{props.props.text}</NavbarDrawerStyledButton>
    );
}

function NavbarButton(props) {
  const theme = useTheme();

  return (
      <NavbarDrawerStyledButton id={props.props.id} size={useMediaQuery(theme.breakpoints.down("md")) ? "small" : "medium"} variant="contained" href={props.props.href} startIcon={props.props.startIcon}>{props.props.text}</NavbarDrawerStyledButton>
  );
}

export default NavbarButtonDrawer;