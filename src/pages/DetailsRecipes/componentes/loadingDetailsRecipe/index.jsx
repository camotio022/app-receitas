import { Alert, LinearProgress, Stack } from "@mui/material"

import * as Tag from '../../styles/index.js'

export const LoadingDetailsRecipe = () => {
    return (
        <>
            <Tag.Container>
                <Stack
                    sx={{
                        width: '100%',
                        bgcolor: 'green',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                    }}
                >
                    <LinearProgress
                        sx={{ height: '0.5rem' }}
                        variant="indeterminate"
                    />
                </Stack>
                <Alert severity="info">
                    Carregando informações, por favor aguade...
                </Alert>
            </Tag.Container>
        </>
    )
}
