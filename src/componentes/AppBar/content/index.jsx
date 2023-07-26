import { Tab } from "@mui/material";


export const MyContent = ({ titles, icon, a11yProps }) => {
    return (
        <Tab
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
            }}
            label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {icon}
                    {titles}
                </div>
            }
     
        />
    );
};
