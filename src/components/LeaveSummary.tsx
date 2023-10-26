import {
  Avatar,
  Box,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import TableComponent from "./TableComponent";

const leavesSection = [
  {
    type: "Unpaid Leaves",
    used: 0,
    available: "N/A",
    backgroundColor: "rgba(224, 86, 84, 0.1)",
  },
  {
    type: "Paid Leaves",
    used: 0,
    available: 1,
    backgroundColor: "rgba(88, 149, 255, 0.1)",
  },
  {
    type: "Sick Leaves",
    used: 0,
    available: 0,
    backgroundColor: "rgba(171, 74, 252, 0.1)",
  },
  {
    type: "Comp Off",
    used: 0,
    available: 0,
    backgroundColor: "rgba(150, 188, 66, 0.1)",
  },
];

export const LeaveSummary = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div style={{ paddingBottom: "20px" }}>
          <Typography variant="h5">Leave Summary</Typography>
        </div>
        <Stack direction="row">
          <div>
            <FormControl fullWidth>
              <TextField
                sx={{ width: "300px" }}
                placeholder="Search Employee"
                variant="outlined"
                size="small"
              />
            </FormControl>

            <List
              sx={{
                marginTop: "16px",
                maxHeight: "75vh",
                minHeight: "75vh",
                backgroundColor: "rgb(241 238 238 / 44%)",
              }}
            >
              <ListItemButton selected={true}>
                <ListItemIcon>
                  <Avatar alt="Sharvil Patel">S</Avatar>
                </ListItemIcon>
                <ListItemText>
                  <span>
                    <Typography variant="body2">
                      Sharvil Patel <br />
                      TW066
                    </Typography>
                  </span>
                </ListItemText>
              </ListItemButton>
            </List>
          </div>

          <div style={{ width: "100%" }}>
            <Stack
              direction="column"
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ justifyContent: "space-between" }}
              mx={2}
            >
              <Stack direction="row" sx={{ justifyContent: "space-between",alignItems:'center' }}>
                <Typography variant="h5" >Sharvil Patel (TW066)</Typography>

                <Stack direction="row" spacing={2} mx={2}>
                  <div style={{ width: "150px", maxWidth: "100%" }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Year
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        defaultValue="2023"
                        label="Year"
                        size="small"
                      >
                        <MenuItem value="2023">2023</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div
                    style={{
                      width: "150px",
                      maxWidth: "100%",
                    }}
                  >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Month
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        defaultValue="October"
                        label="Month"
                        size="small"
                      >
                        <MenuItem value="January">January</MenuItem>
                        <MenuItem value="February">February</MenuItem>
                        <MenuItem value="March">March</MenuItem>
                        <MenuItem value="April">April</MenuItem>
                        <MenuItem value="May">May</MenuItem>
                        <MenuItem value="June">June</MenuItem>
                        <MenuItem value="July">July</MenuItem>
                        <MenuItem value="August">August</MenuItem>
                        <MenuItem value="September">September</MenuItem>
                        <MenuItem value="October">October</MenuItem>
                        <MenuItem value="November">November</MenuItem>
                        <MenuItem value="December">December</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Chip label="Current Month" variant="outlined" />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Chip label="Previous Month" variant="outlined" />
                  </div>
                </Stack>
              </Stack>

              {/* <Box> */}
                <Grid container spacing={2} sx={{margin:'0 !important'}}>
                  {leavesSection.map((p, index) => {
                    return (
                      <>
                        <Grid item xs={3} key={index}>
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
                              Used: {p.used}
                            </Typography>
                            <Typography variant="body1">
                              Available: {p.available}
                            </Typography>
                          </Paper>
                        </Grid>
                      </>
                    );
                  })}
                </Grid>
              {/* </Box> */}

              <Typography variant="h6" mt={4} mb={2}>
                Leaves taken
              </Typography>
              <TableComponent />
            </Stack>
          </div>
        </Stack>
      </Box>
    </>
  );
};
