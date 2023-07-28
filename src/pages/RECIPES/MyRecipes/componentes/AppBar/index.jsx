import { Folder } from "@mui/icons-material"
import { AppBar, Tab, Tabs } from "@mui/material"

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}
export const AppBarMyrecipes = ({
    handleChange,
    value
}) => {
    return (
        <>
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
                    <Tab
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
                                <Folder style={{ marginRight: '0.5rem' }} />
                                MINHAS RECEITAS
                            </div>
                        }
                        {...a11yProps(0)}
                    />
                </Tabs>
            </AppBar>
        </>
    )
}