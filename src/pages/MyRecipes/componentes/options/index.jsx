import React from 'react';
import { Close, Delete, Details, Edit } from '@mui/icons-material';
import { Divider, Link, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import * as Tag from '../../index.js';

export const OptionsMyRecipes = ({
  handleClickOutsideMenu,
  floatingMenu,
  index,
  recipe,
  deleteRecipe
}) => {
  return (
    <Tag.Options>
      <Tag.PaperOptions
        className={`floating-menu ${floatingMenu === index ? 'open' : ''}`}
      >
        <MenuList>
          <MenuItem onClick={() => { /* Handler para detalhar a receita */ }}>
            <ListItemIcon>
              <Details fontSize="small" />
            </ListItemIcon>
            <ListItemText>Detalhar</ListItemText>
            <Typography variant="body2" color="text.secondary">
              Control + V
            </Typography>
          </MenuItem>
          <Link href={`/editerecipes/${recipe?.id}`}>
            <MenuItem>
              <ListItemIcon>
                <Edit fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                Editar minha receita
              </ListItemText>
              <Typography variant="body2" color="text.secondary">
                Control + E
              </Typography>
            </MenuItem>
          </Link>
          <MenuItem
            onClick={() => deleteRecipe(recipe?.id, recipe?.recipeTitle)}
            sx={{
              color: red[500],
            }}
          >
            <ListItemIcon>
              <Delete
                sx={{
                  color: red[500],
                }}
                fontSize="small"
              />
            </ListItemIcon>
            <ListItemText>
              Deletar a receita
            </ListItemText>
            <Typography variant="body2" color="text.secondary">
              Control + D
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => handleClickOutsideMenu(index)}>
            <ListItemIcon>
              <Close fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              Fechar o menu
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Tag.PaperOptions>
    </Tag.Options>
  );
};
