import { Edit } from "@mui/icons-material"
import { Tabs, Tab, AppBar } from "@mui/material"



export const MyAppBar = (
    { handleChange,
        a11yProps,
        value
    }
) => {
    return (
        <>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="action tabs example"
                >
                    <Tab sx={{
                        display: 'flex',
                        alignItems: 'center',

                    }} label={
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Edit style={{ marginRight: '0.5rem' }} />
                            EDITAR MINHA RECEITA
                        </div>
                    } {...a11yProps(0)} />

                </Tabs>
            </AppBar>
        </>
    )
}