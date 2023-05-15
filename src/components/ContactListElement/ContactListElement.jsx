import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/tasks/operations';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

const ContactListElement = props => {
  const dispatch = useDispatch();

  const ContactDeleteHandler = () => {
    dispatch(deleteContact(props.id));
  };

  return (
    <Grid xs={4} lg={3}>
      <Card>
        <CardContent>
          <Typography variant="h5">{props.name}</Typography>
          <Typography sx={{ mb: 0.5 }} color="text.secondary">
            {props.number}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={ContactDeleteHandler} color="error">
            Delete contact
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

ContactListElement.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};

export default ContactListElement;
