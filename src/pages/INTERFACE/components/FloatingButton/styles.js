import { Box as MuiBox, styled } from '@mui/material'

export const Box = styled(MuiBox)(() => ({
  position: 'fixed',
  bottom: '3.5rem',
  right: '1.5rem',
  height: 320,
  transform: 'translateZ(0px)',
  flexGrow: 1,
}))
