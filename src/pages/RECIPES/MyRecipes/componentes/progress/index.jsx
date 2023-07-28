import { CircularProgress, Typography } from '@mui/material'
import *as Tag from '../../index.js'

export const ProgressMyRecipes = ({
    progress
}) => {
    return (
        <>
            <Tag.Cards
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress
                    variant="indeterminate"
                    value={progress}
                    size={80}
                />
                <Typography variant="h6" sx={{ marginLeft: '10px' }}>
                    {`${progress}%`}
                </Typography>
            </Tag.Cards>
        </>
    )
}