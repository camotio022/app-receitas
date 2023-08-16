import { KeyboardArrowUp } from '@mui/icons-material'
import { Box, Fab, Fade } from '@mui/material'

export const ScrollToTopButton = ({ scrollHeight }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <Fade in={scrollHeight != 0}>
      <Box
        onClick={scrollToTop}
        role="presentation"
        sx={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Fade>
  )
}
