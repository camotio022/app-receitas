import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export const Links_a = ({
  name,
  handleClick,
  icon,
  children,
  selectedLink,
}) => {
  const { logout } = useContext(AuthContext)
  const handleLinkClick = (link) => {
    if (link.onClick === 'logout') {
      logout() // Chame a função logout aqui
    } else {
      // Lógica para lidar com outros links
    }
  }
  const isSelected = selectedLink === name
  return (
    <>
      <ListItemButton sx={{ color: 'black' }} onClick={handleClick}>
        <ListItemIcon sx={{ color: 'black' }}>{icon}</ListItemIcon>
        <ListItemText primary={name} />
        {isSelected ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isSelected} timeout="auto" unmountOnExit>
        <List sx={{ color: 'white' }} component="div" disablePadding>
          {children &&
            children?.length > 0 &&
            children.map((child) => (
              <Link to={child?.onClick || child?.link}>
                <ListItemButton
                  key={child?.name}
                  sx={{ pl: 4, borderLeft: '20px solid #e3e9ed' }}
                >
                  <ListItemIcon sx={{ color: 'black' }}>
                    {child.icon}
                  </ListItemIcon>
                  <Link href={child?.link}>
                    <ListItemText
                      primary={child.name}
                      sx={{ color: 'black' }}
                    />
                  </Link>
                </ListItemButton>
              </Link>
            ))}
        </List>
      </Collapse>
    </>
  )
}
