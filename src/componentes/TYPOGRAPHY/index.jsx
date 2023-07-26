import { Typography } from "@mui/material"
export const MyTypography = ({
    variant,
    title,
    ...props
}) => {
    return (
        <>
            <Typography {...props} variant={variant} gutterBottom>
                {title}
            </Typography>
        </>
    )
}