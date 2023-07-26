
import {Tabs } from "@mui/material";
import { CardGiftcard, Image } from "@mui/icons-material";
import { Tab } from "@mui/material";

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}
export const AppBarTopic = ({
  handleChange, value
}) => {

  return (
    <>
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
            width: '100%',
          }}
          label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {<CardGiftcard />}
              {"Recipes Cards"}
            </div>
          }
          {...a11yProps(0)}
        />
        <Tab
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
          label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {<CardGiftcard />}
              {"Recipes Cards"}
            </div>
          }
          {...a11yProps(1)}
        />
      </Tabs>

    </>
  );
};