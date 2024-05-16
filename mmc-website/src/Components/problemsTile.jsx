import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { CardActionArea, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';

const StyledTile = styled(Card)(({ theme }) => ({
    color: "black",
    backgroundColor: "#efefef",
    marginRight: "5px",
    '&:hover': {
      backgroundColor: "gray",
    },
  }));

function ProblemTile(props) {
    return (
        <StyledTile variant="outlined">
            <CardActionArea>
                <Typography variant='h6'>{props.props.text}</Typography>
                <CardMedia component="img" image={props.props.imgSrc} title={props.props.alt} style={{width: "100%", height: "100%"}} />
            </CardActionArea>
        </StyledTile>
    );
}

export default ProblemTile;