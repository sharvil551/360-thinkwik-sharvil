import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const ApplyLeave = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}
      <Stack display="flex" flexDirection="column">
        <Stack display="flex" flexDirection="row">
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => {
              navigate("/leaves");
            }}
            sx={{
              border: "none",
              color: "rgb(95, 158, 160)",
              "&:hover": { border: "none" },
            }}
          >
            Back
          </Button>

          <Typography variant="h5" mx={2}>Apply for leave</Typography>
        </Stack>

        <Grid container spacing={2} mt={2} mx={0}>
          <Grid item pt={2} px={2}>
            <FormControl>
              <FormLabel>Leave Type</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="paid"
              >
                <FormControlLabel
                  value="paid"
                  control={<Radio />}
                  label="Paid(1)"
                />
                <FormControlLabel
                  value="sick"
                  control={<Radio />}
                  label="Sick(0)"
                />
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="Comp Off"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <div style={{ width: "100%" }}></div>
          <Grid item pt={2} px={2}>
            <FormControl fullWidth size="small">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="From Date"
                  value={dayjs(Date.now())}
                  slotProps={{ textField: { size: "small" } }}
                  format="DD-MMM-YYYY"
                  disablePast
                />
              </LocalizationProvider>
            </FormControl>
          </Grid>
          <Grid item pt={2} px={2}>
            <FormControl fullWidth size="small">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="To Date"
                  value={dayjs(Date.now())}
                  slotProps={{ textField: { size: "small" } }}
                  format="DD-MMM-YYYY"
                />
              </LocalizationProvider>
            </FormControl>
          </Grid>

          <div style={{ width: "100%" }}></div>
          <Grid item xs={6} md={7}>
            {/* <table
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                width: "100%",
              }}
            >
              <thead>
                <tr style={{ border: "1px solid black" }}>
                  <th
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      width: "40%",
                    }}
                  >
                    Date (Day)
                  </th>
                  <th
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      width: "60%",
                    }}
                  >
                    Applying for
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    26-Oct-2023 (Thursday)
                  </td>
                  <td style={{ border: "1px solid black" }}>
                    <FormControl
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="fullDay"
                      >
                        <FormControlLabel
                          value="fullDay"
                          control={<Radio />}
                          label="Full Day"
                          sx={{ mx: 2 }}
                        />
                        <FormControlLabel
                          value="firstHalf"
                          control={<Radio />}
                          label="First Half"
                        />
                        <FormControlLabel
                          value="secondHalf"
                          control={<Radio />}
                          label="Second Half"
                        />
                      </RadioGroup>
                    </FormControl>
                  </td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      width: "40%",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Total Days
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      width: "60%",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    1 day(s)
                  </td>
                </tr>
              </tbody>
            </table> */}
            <Table stickyHeader size="small" sx={{ border: 1 }}>
              <TableHead>
                <TableRow sx={{ border: 1 }}>
                  <TableCell
                    align="center"
                    sx={{
                      border: 1,
                      fontWeight: "bold",
                      backgroundColor: "transparent",
                    }}
                  >
                    Date (Day)
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: 1,
                      fontWeight: "bold",
                      backgroundColor: "transparent",
                    }}
                  >
                    Applying for
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ border: 1 }}
                  >
                    27-Oct-2023 (Friday)
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ border: 1 }}
                  >
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="fullDay"
                      >
                        <FormControlLabel
                          value="fullDay"
                          control={<Radio />}
                          label="Full Day"
                        />
                        <FormControlLabel
                          value="firstHalf"
                          control={<Radio />}
                          label="First Half"
                        />
                        <FormControlLabel
                          value="secondHalf"
                          control={<Radio />}
                          label="Second Half"
                        />
                      </RadioGroup>
                    </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ border: 1, fontWeight: "bold" }}
                  >
                    Total Days
                  </TableCell>

                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ border: 1, fontWeight: "bold" }}
                  >
                    1 day(s)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>

          <div style={{ width: "100%" }}></div>
          <Grid item>
            <Typography variant="body1">
              <strong>
                <i>
                  Note: For a half day, minimum 4.5 working hours to be
                  completed
                </i>
              </strong>
            </Typography>
          </Grid>

          <div style={{ width: "100%" }}></div>
          <Grid item>
            <Stack>
              <FormLabel>Attachments</FormLabel>
              <Button
                sx={{
                  mt: 2,
                  backgroundColor: "rgb(95, 158, 160)",
                  "&:hover": { backgroundColor: "rgb(95, 158, 160)" },
                }}
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
            </Stack>
          </Grid>

          <div style={{ width: "100%" }}></div>
          <Grid item xs={2} md={6}>
            <FormControl fullWidth>
              <FormLabel>Leave Reason</FormLabel>
              <TextField
                placeholder="Describe your reason for leave in short"
                variant="outlined"
                multiline
                rows={4}
              />
            </FormControl>
          </Grid>

          <div style={{ width: "100%" }}></div>
          <Grid item xs={2} md={6}>
            <Stack flexDirection="row" justifyContent="flex-end">
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "rgb(95, 158, 160)",
                  borderColor: "rgb(95, 158, 160)",
                  "&:hover": { borderColor: "rgb(95, 158, 160)" },
                }}
                onClick={() => {
                  navigate("/leaves");
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{
                  mx: 2,
                  backgroundColor: "rgb(95, 158, 160)",
                  "&:hover": { backgroundColor: "rgb(95, 158, 160)" },
                }}
              >
                Save
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};
