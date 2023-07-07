import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import { Box } from './styles'

import {
  Edit as EditIcon,
  FileCopy as FileCopyIcon,
  Save as SaveIcon,
  Print as PrintIcon,
  Share as ShareIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from '@mui/icons-material'
const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <KeyboardArrowUpIcon />, name: 'Move scroll' },
]
export const ScrollToTopButton = () => {
  return (
    <Box>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            sx={{ bgcolor: '#374957', color: 'white' }}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}
