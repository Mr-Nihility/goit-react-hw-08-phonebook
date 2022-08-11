import { Button, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';
//----------------------------------------------------//
const ContactItem = ({ name, phone, onDelete, id }) => {
  return (
    <li>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Avatar sx={{ width: 56, height: 56 }} />
        <Typography variant="h3" gutterBottom component="p">
          {name}
        </Typography>
        <Typography variant="h3" gutterBottom component="p">
          {phone}
        </Typography>
        <Button
          size="large"
          variant="contained"
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </Button>
      </CardContent>
    </li>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export { ContactItem };
