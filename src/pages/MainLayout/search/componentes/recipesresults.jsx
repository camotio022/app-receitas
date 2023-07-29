import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link } from '@mui/material';
export const FolderList = ({ results, searchInput }) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {results.map((res, index) => {
                return (
                    <Link key={index} href={`/detailsRecipes/${res.id}`}>
                        <List>
                            <ListItem >
                                <ListItemAvatar>
                                    <Avatar src={res.recipeImage}>{res.recipeImage}</Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        res.recipeTitle && (
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: res.recipeTitle.replace(
                                                        new RegExp(searchInput, 'gi'),
                                                        (match) => `<strong class="results">${match}</strong>`
                                                    ),
                                                }}
                                            />
                                        )
                                    }
                                    secondary={res.creationDate}
                                />
                            </ListItem>
                        </List>
                    </Link>
                )
            })}
        </List >
    );
};
