import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { CardActionArea, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';

const StyledTile = styled(Card)(({ theme }) => ({
    color: "black",
    backgroundColor: "#efefef",
    marginRight: "5px",
    opacity: 0.9,
    borderRadius: "20px",
    maxHeight: 400,
    '&:hover': {
      opacity: 0.5,
      transition: "500ms"
    },
  }));

function ProblemTile(props) {
    return (
        <StyledTile variant="outlined">
            <CardActionArea>
                <Typography variant="h6" sx={{color: "ivory", fontSize: {xs: "2.5rem", sm: "3.5rem", md: "5rem"}, fontWeight: "900", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>{props.props.text}</Typography>
                <CardMedia component="img" image={props.props.imgSrc} title={props.props.alt} height="400" style={{width: "100%"}} />
            </CardActionArea>
        </StyledTile>
    );
}

export default ProblemTile;