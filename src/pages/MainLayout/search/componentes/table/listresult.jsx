import { TableRow, TableCell, Stack, Avatar, Link, TableBody } from '@mui/material';
import './index.css'

export const MapResult = ({ index, id, name, photoURL, email, searchInput }) => {
  return (
    <>
      <TableBody key={index}>
        <TableRow>
          <TableCell
            sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <Link href={`/edituser/${id}`}>
              <Avatar
                sx={{ width: 46, height: 46 }}
                alt={name}
                src={photoURL}
              />
            </Link>
            <Stack>{name && (
              <span
                dangerouslySetInnerHTML={{
                  __html: name.replace(
                    new RegExp(searchInput, 'gi'),
                    (match) => `<strong class="results">${match}</strong>`
                  ),
                }}
              />
            )}</Stack>
          </TableCell>
          <TableCell>{email && (
            <span
              dangerouslySetInnerHTML={{
                __html: email.replace(
                  new RegExp(searchInput, 'gi'),
                  (match) => `<strong class="results">${match}</strong>`
                ),
              }}
            />
          )}</TableCell>
        </TableRow>
      </TableBody>
    </>
  )
}
