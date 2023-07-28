import { TableRow, TableCell, Stack, Avatar, Link } from '@mui/material';


export const MapResult = ({ index, id, name, photoURL, email }) => {
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
            <Stack>{name}</Stack>
          </TableCell>
          <TableCell>{email}</TableCell>
        </TableRow>
      </TableBody>
    </>
  )
}
