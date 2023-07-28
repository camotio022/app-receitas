import { Grid, TextField } from "@mui/material"

export const MyTextField = ({
    variant,
    fullWidth,
    ...props
}) => {
    return (
        <>
            <Grid item xs={12} lg={6} sx={{mb: 1, width: '100%'}}>
                <TextField
                    required
                    fullWidthfullWidth
                    fullWidth
                    variant={variant || 'filled'}
                    {...props}
                />
            </Grid>
        </>
    )
}