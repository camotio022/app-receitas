import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom';
export const Links_a = ({

  name,
  link,
  handleClick,
  icon,
  selectedLink,
  setShowLinks
}) => {
  const location = useLocation()
  const isSelected = link === location.pathname;

  return (
    <Link to={link} onClick={()=> setShowLinks(false)}>
      <ListItemButton sx={isSelected ?
        { color: 'black', backgroundColor: '#d3d3d3' }:
        { color: 'black',}
      } onClick={handleClick}>
        <ListItemIcon sx={{ color: '#374957' }}>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </Link>
  );
};
