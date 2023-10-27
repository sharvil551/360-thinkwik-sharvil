import { Box, Grid, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const leavesInfo = [
  {
    type: "Paid Leaves",
    available: 1,
    used: 0,
    planned: 0,
    backgroundColor: "rgba(88, 149, 255, 0.1)",
  },
  {
    type: "Sick Leaves",
    available: 0,
    used: 0,
    planned: 0,
    backgroundColor: "rgba(171, 74, 252, 0.1)",
  },
  {
    type: "Comp Off",
    available: 0,
    used: 0,
    planned: 0,
    backgroundColor: "rgba(150, 188, 66, 0.1)",
  },
];

const leavesDetailedInfo = [
  {
    heading: "Today's Leaves",
    text: "No leaves today",
  },
  {
    heading: "Upcoming Leaves in next 14 days",
    text: "No upcoming leaves",
  },
];

export const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}
      <Typography variant="h5">Welcome Sharvil Patel!</Typography>
      <Box>
        <Grid container spacing={2} mt={0}>
          {leavesInfo.map((p, index) => {
            return (
              <>
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <Paper
                    square={false}
                    elevation={1}
                    sx={{
                      padding: "16px",
                      background: p.backgroundColor,
                    }}
                  >
                    <Typography variant="h6">{p.type}</Typography>
                    <Typography variant="body1" mt={1}>
                      Available: {p.available}
                    </Typography>
                    <Typography variant="body1">Used: {p.used}</Typography>
                    <Typography variant="body1">
                      Planned: {p.planned}
                    </Typography>
                  </Paper>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>

      <Box mt={2}>
        <Grid container spacing={2}>
          {leavesDetailedInfo.map((p, index) => {
            return (
              <>
                <Grid item xs={12} lg={6}>
                  <Paper
                    elevation={1}
                    sx={{
                      padding: "16px",
                    }}
                  >
                    <Typography variant="h6">{p.heading}</Typography>
                    <Grid
                      container
                      direction={"column"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "350px",
                      }}
                    >
                      <Grid item xs={3}>
                        <p>{p.text}</p>
                        {/* <CircularProgress sx={{color:"rgb(95, 158, 160)"}}/> */}
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </>
            );
          })}

          {/* <Grid item xs={12} lg={6}>
              <Paper
                elevation={1}
                sx={{
                  padding: "16px",
                }}
              >
                <Typography variant="h6">
                  Upcoming Leaves in next 14 days
                </Typography>
                <Grid
                  container
                  direction={"column"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "350px",
                  }}
                >
                  <Grid item xs={3}>
                    <p>No upcoming leaves</p>
                  </Grid>
                </Grid>
              </Paper>
            </Grid> */}
        </Grid>
      </Box>
      {/* </Box> */}
    </>
  );
};
