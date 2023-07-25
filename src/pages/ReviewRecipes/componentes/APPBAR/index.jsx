import { Folder, Image } from "@mui/icons-material";
import { AppBar, Tabs, Tab } from "@mui/material";
import { green } from "@mui/material/colors";

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

export const AppBarTopic = ({
  handleChange,
  value,
}) => {
  return (
    <AppBar position="static" color="default">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="action tabs example"
      >
        <Tab
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
          label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Folder style={{ marginRight: '0.5rem' }} />
              Folder cards
            </div>
          }
          {...a11yProps(0)}
        />
        <Tab
          label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image style={{ marginRight: '0.5rem' }} />
              Image cards
            </div>
          }
          {...a11yProps(1)}
        />
      </Tabs>
    </AppBar>
  );
};
