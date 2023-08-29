import { Box, List, Stack, styled, useMediaQuery } from '@mui/material'
export const Container = styled('div')(({ scrollHeight }) => ({
  borderBottom: '1px solid #e3e9ed',
  top: 0,
  left: 0,
  gap: 0,
  zIndex: scrollHeight && 9999,
  transition: 'all 0.5s ease',
  transition: 'height 0.3s ease',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
}))

export const Header = styled('div')(({ scrollHeight }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '10vh',
  background: '#374957',
  padding: '0.5rem',
  ...(scrollHeight > 20
    ? {
        transition: 'all 0.5s ease',
        transition: 'height 0.3s ease',
      }
    : {}),
  color: 'white',
}))
export const SideMenu = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection:'row',
  width: '100%',
  height: '100vh',
  overflow: 'auto',
  transition: 'all 0.5s ease',
  transition: 'height 0.3s ease',
}))

export const Content = styled(Stack)(() => ({
  overflow: 'auto',
  height: '100%',
  width: '100%',
  transition: 'all 0.5s ease-in-out',
}))

export const ItemsLinks = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  //   maxWidth: '70%',
  //   width: 'auto',
  background: 'yellow',
}))
export const MinhaLista = styled(List)(() => ({
  overflow: 'auto',
  height: '100%',
  width: '30%',
  transition: 'all 0.5s ease-in-out',
}))
