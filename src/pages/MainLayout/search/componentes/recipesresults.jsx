import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
export const FolderList = ({
    results,
    searchInput,
    key
}) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
            {results?.map((item) => {
                return (
                    <ListItem key={key}>
                        <ListItemAvatar>
                            <Avatar src={item.recipeImage}>
                                {item.recipeImage}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.recipeTitle && (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: item.recipeTitle.replace(
                                        new RegExp(searchInput, 'gi'),
                                        (match) => `<strong class="results">${match}</strong>`
                                    ),
                                }}
                            />
                        )} secondary={item.creationDate} />
                    </ListItem>
                )
            })}
        </List >
    );
}