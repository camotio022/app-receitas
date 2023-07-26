
import { Tabs, AppBar } from "@mui/material"
export const MyAppBar = (
    {
        handleChange,
        content,
        value,
        content1
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
                    {content}
                    {content1}
                </Tabs>
            </AppBar>
        </>
    )
}