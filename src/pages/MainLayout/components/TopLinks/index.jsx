import * as Tag from '../../index'
import { Box, IconButton, Tooltip } from '@mui/material'
import { links } from './links'

export const TopLinks = () => {
  return (
    <Tag.ItemsLinks
      sx={{
        justifyContent: 'flex-end',
      }}
    >
      {links.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Tooltip title={item?.title}>
              <IconButton size="small" sx={{ ml: 2, color: '#374957' }}>
                {item?.icon}
              </IconButton>
            </Tooltip>
          </Box>
        )
      })}
    </Tag.ItemsLinks>
  )
}
