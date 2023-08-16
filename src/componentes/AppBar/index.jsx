import React from "react";
import { Folder } from "@mui/icons-material";
import { AppBar, Tab, Tabs } from "@mui/material";

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}

function createTab(label, index) {
    return (
        <Tab
            key={index} // Certifique-se de usar um identificador único
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            label={
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    {label.icon && <label.icon style={{ marginRight: '0.5rem' }} />}
                    {label.text}
                </div>
            }
            {...a11yProps(index)}
        />
    );
}

export const AppBarGlobal = ({
    handleChange,
    value,
    tabs
}) => {
    return (
        <AppBar
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            position="static"
            color="default"
        >
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="action tabs example"
            >
                {tabs.map((tab, index) => createTab(tab, index))}
            </Tabs>
        </AppBar>
    );
};
