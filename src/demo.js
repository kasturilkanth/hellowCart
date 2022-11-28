import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,

  lineHeight: "60px"
}));

// const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: "light" } });

export default function Elevation() {
  return (
    <Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={1} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "flex",
                flexShrink: "2",
                gap: 2,
                height: "100px"
              }}
            >
              {/* {[1, 1].map((elevation) => ( */}
              <Item elevation="1">
                {/* {`elevation=${elevation}`} */}
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "36px",
                    fontFamily: "Poppins"
                  }}
                >
                  Sort By:Brand
                </p>
              </Item>
              <Item elevation="1">
                {" "}
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "36px",
                    fontFamily: "Poppins"
                  }}
                >
                  Filter By : Finished
                </p>
              </Item>
              {/* ))} */}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
