import React from 'react'
import Grid from "@mui/material/Grid";


const Hero = ({imgSrc, imgAlt}) => {
    return (
        <Grid
  component="section"
  container
  sx={{
    position: `relative`,
    height: "100vh",
    width: `100vw`,
    overflow: `hidden`,
    zIndex: -100,
    mb: 15,
  }}
>
    <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />

</Grid>
    )
}

export default Hero
