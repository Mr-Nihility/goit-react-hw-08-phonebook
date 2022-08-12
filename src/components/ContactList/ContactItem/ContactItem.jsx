import { Button, Typography, TableCell, TableRow } from '@mui/material';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
//----------------------------------------------------//
const ContactItem = ({ name, phone, onDelete, id, index }) => {
  return (
    <TableRow>
      <TableCell>
        <Typography variant="h3" gutterBottom component="p">
          {index + 1}
        </Typography>
      </TableCell>
      <TableCell>
        <Avatar name={name} size={60} round={true} />
      </TableCell>
      <TableCell>
        <Typography variant="h3" gutterBottom component="p">
          {name}
        </Typography>
      </TableCell>

      <TableCell>
        <Typography variant="h3" gutterBottom component="p">
          {phone}
        </Typography>
      </TableCell>
      <TableCell>
        <Button
          sx={{ fontSize: '24px' }}
          size="large"
          variant="contained"
          type="button"
          onClick={() => onDelete(id)}
        >
          <DeleteForeverIcon sx={{ fontSize: 40, color: 'white' }} />
        </Button>
      </TableCell>
    </TableRow>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export { ContactItem };
