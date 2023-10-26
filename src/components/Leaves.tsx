import { Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import TableComponent from "./TableComponent";
import React from "react";
import { useNavigate } from "react-router";

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
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Leaves = () => {
  const navigate = useNavigate()
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
          justifyContent: "space-between",
          paddingBottom: "20px",
        }}
      >
        <Typography variant="h5">Leaves</Typography>

        <Stack direction="row" display="flex">
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "rgb(95, 158, 160)",
              borderColor: "rgb(95, 158, 160)",
              "&:hover": { borderColor: "rgb(95, 158, 160)" },
            }}
          >
            Refresh
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={()=>{navigate('/leaves/apply')}}
            sx={{
              mx: 2,
              backgroundColor: "rgb(95, 158, 160)",
              "&:hover": { backgroundColor: "rgb(95, 158, 160)" },
            }}
          >
            Apply Leave
          </Button>
        </Stack>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
        }}
      >
        <Stack direction="row" display="flex">
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "rgba(0, 0, 0, 0.3)",
              borderColor: "rgba(0, 0, 0, 0.3)",
              "&:hover": { borderColor: "rgba(0, 0, 0, 0.3)" },
            }}
          >
            DD-MMM-YYYY - DD-MMM-YYYY
          </Button>

          <Button
            variant="outlined"
            size="small"
            sx={{
              mx: 2,
              color: "rgb(95, 158, 160)",
              borderColor: "rgb(95, 158, 160)",
              "&:hover": { borderColor: "rgb(95, 158, 160)" },
            }}
          >
            Clear Filters
          </Button>
        </Stack>
      </div>

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
        <Tab label="ALL " {...a11yProps(0)} />
        <Tab label="PENDING" {...a11yProps(1)} />
        <Tab label="APPROVED" {...a11yProps(2)} />
        <Tab label="REJECTED" {...a11yProps(3)} />
        <Tab label="CANCELLED" {...a11yProps(4)} />
        <Tab label="PARTIALLY APPROVED" {...a11yProps(5)} />
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <TableComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TableComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TableComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <TableComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <TableComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <TableComponent />
      </CustomTabPanel>

      {/* <div>
          <FormControl fullWidth>
            <TextField
              sx={{ width: "300px" }}
              placeholder="Search Employee"
              variant="outlined"
              size="small"
            />
          </FormControl>

       
        </div> */}

      {/* </Box> */}
    </>
  );
};
