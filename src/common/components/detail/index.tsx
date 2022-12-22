import { Box, Button, Card, CardContent, CardMedia, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "../appbar";
import { Grid, Toolbar, Typography } from "@material-ui/core";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CircleIcon from "@mui/icons-material/Circle";
import example from "../body/example.json"
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;

export default function Detail() {
      const location = useLocation();
      const id = location.state.id
      const data1 = example.filter(item => item.id == id)
      useEffect(() => {
            console.log('data1', data1)
      }, [])
      return (
            <Box sx={{ display: "flex" }}>
                  <ResponsiveDrawer />
                  <Box
                        component="main"
                        sx={{
                              flexGrow: 1,
                              p: 3,
                              width: { sm: `calc(100% - ${drawerWidth}px)` },
                        }}
                  >
                        <Toolbar />
                        <Box sx={{ flexGrow: 1, textAlign: "left" }}>
                              <Grid container item>
                                    <Grid item>
                                          <ArrowBackIosNewIcon sx={{ color: "white" }} />
                                    </Grid>
                                    <Grid item md={6} xs={12}>

                                          <Button href="/" sx={{ fontFamily: "Kanit", color: "white", backgroundColor: "#134b8a" }} >
                                                <ArrowBackIosNewIcon sx={{ color: "white" }} />
                                                Back</Button>

                                    </Grid>
                              </Grid>
                        </Box>
                        <Card style={{ backgroundColor: "#C4D3E9", marginTop: "30px" }}>
                              <CardContent>
                                    <Grid container>
                                          <Grid item>
                                                <Box>
                                                      <CardMedia image={data1[0].profile_image_url}></CardMedia>
                                                      <Grid container>
                                                            <Grid item>
                                                                  <div>{data1[0].name}</div>
                                                                  <CircleIcon
                                                                        sx={{
                                                                              width: "15px",
                                                                              height: "15px",
                                                                              color: "#134b8a",
                                                                              marginTop: "5px",
                                                                              marginRight: "3px",
                                                                        }}
                                                                  />
                                                            </Grid>
                                                            <Grid item>
                                                                  <div style={{ fontFamily: "Kanit" }}>
                                                                        {/* {item.name} */}
                                                                  </div>
                                                            </Grid>
                                                      </Grid>
                                                      <Grid container>
                                                            <Grid item>
                                                                  Address : {data1[0].address}
                                                            </Grid>
                                                            <Grid item>

                                                            </Grid>
                                                      </Grid>
                                                      <Grid container>
                                                            <Grid item></Grid>
                                                            Opening Hour : {data1[0].operation_time[0].time_open} - {data1[0].operation_time[0].time_close}
                                                      </Grid>
                                                      <Grid item>
                                                      </Grid>
                                                      <Box />
                                                </Box>
                                          </Grid>
                                    </Grid>
                                    <Grid item>
                                          <Box>
                                                <Typography>Image</Typography>
                                                <CardMedia></CardMedia>
                                                <CardMedia></CardMedia>
                                                <CardMedia></CardMedia>
                                          </Box>
                                    </Grid>

                              </CardContent>
                        </Card>
                  </Box >
            </Box >
      )
}
