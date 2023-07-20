import { Grid, TextField } from "@mui/material"

export const MyTextField = ({
    variant,
    ...props
}) => {
    return (
        <>
            <Grid item xs={12} lg={6}>
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