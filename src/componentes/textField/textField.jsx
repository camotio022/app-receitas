import { Grid, InputAdornment, TextField } from "@mui/material"

export const MyTextField = ({
    variant,
    fullWidth,
    icon,
    type,
    onKeyDown,
    ...props
}) => {
    return (
        <>
            <Grid item xs={12} lg={6} sx={{ mb: 1, width: '100%' }}>
                <TextField
                    style={{ position: 'relative', zIndex: 0 }}
                    size="small"
                    required
                    fullWidth
                    type={type}
                    variant={variant || 'filled'}
                    onKeyDown={onKeyDown}
                    {...props}
                />
            </Grid>
        </>
    )
}