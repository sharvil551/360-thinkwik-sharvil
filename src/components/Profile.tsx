import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import dayjs from "dayjs";
import { MuiTelInput } from "mui-tel-input";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Profile = () => {
  const [value, setValue] = React.useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Avatar alt="Sharvil Patel" sx={{ width: 90, height: 90 }}>
            SP
          </Avatar>

          <div>
            <Typography variant="h5">Sharvil Patel</Typography>
            <Typography variant="subtitle2">sharvil.p@thinkwik.com</Typography>
          </div>
        </div>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              ".Mui-selected": { color: "rgb(95, 158, 160) !important" },
              ".MuiTabs-indicator": {
                background: "rgb(95, 158, 160) !important",
              },
            }}
          >
            <Tab label="Basic Details" {...a11yProps(0)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <form noValidate>
            {/* Basic Details */}
            <Typography variant="h6">Basic Details</Typography>
            <Grid container spacing={2} mt={0}>
              <Grid item sm={3.5}>
                <FormControl fullWidth size="small">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date of Birth"
                      value={dayjs(Date.now())}
                      slotProps={{ textField: { size: "small" } }}
                    />
                  </LocalizationProvider>
                </FormControl>
              </Grid>

              <Grid item sm={3.5}>
                <FormControl fullWidth>
                  <MuiTelInput
                    defaultCountry="IN"
                    label="Phone Number"
                    value={"+91 6354886802"}
                    size="small"
                  />
                </FormControl>
              </Grid>
            </Grid>

            {/* Employment Details */}
            <Typography variant="h6" mt={2}>
              Employment Details
            </Typography>
            <Grid container spacing={2} mt={0}>
              <Grid item sm={3.5}>
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date of Joining"
                      value={dayjs(Date.now())}
                      disabled
                      slotProps={{ textField: { size: "small" } }}
                    />
                  </LocalizationProvider>
                </FormControl>
              </Grid>

              <Grid item sm={3.5}>
                <FormControl fullWidth>
                  <TextField
                    label="Employee ID"
                    defaultValue="TW066"
                    disabled
                    size="small"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={0}>
              <Grid item sm={3.5}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Department
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    defaultValue="Web Development"
                    label="Department"
                    disabled
                    size="small"
                  >
                    <MenuItem value="Web Development">Web Development</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item sm={3.5}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Designation
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    defaultValue="Junior Software Engineer"
                    label="Department"
                    disabled
                    size="small"
                  >
                    <MenuItem value="Junior Software Engineer">
                      Junior Software Engineer
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item sm={3.5}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Reporting Manager
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    defaultValue="Sulay Sumaria"
                    label="Reporting Manager"
                    disabled
                    size="small"
                  >
                    <MenuItem value="Sulay Sumaria">Sulay Sumaria</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* Access Details */}
            <Typography variant="h6" mt={2}>
              Access Details
            </Typography>
            <Grid container spacing={2} mt={0}>
              <Grid item sm={3.5}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Employee Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    defaultValue="Active"
                    label="Employee Status"
                    disabled
                    size="small"
                  >
                    <MenuItem value="Active">Active</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item sm={3.5}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Employee Role
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    defaultValue="Employee"
                    label="Employee Role"
                    disabled
                    size="small"
                  >
                    <MenuItem value="Employee">Employee</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Stack direction="row" justifyContent="flex-end">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "rgb(95, 158, 160)",
                  "&:hover": { backgroundColor: "rgb(95, 158, 160)" },
                }}
              >
                Save
              </Button>
            </Stack>
          </form>
        </CustomTabPanel>
      {/* </Box> */}
    </>
  );
};
