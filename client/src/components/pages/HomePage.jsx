import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import Button from '@material-ui/core/Button';
import { Container, Typography } from '@material-ui/core';
import { logOut } from "../../redux/features/application"

function HomePage(props) {
  const dispatch = useDispatch();

  const name = useSelector(state => state.application.name)

  const handleLogout = () => {
    dispatch(logOut())
  }
  
  return (
    <div>
      <Container>
      <Typography>
        Имя: {name}
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Log out
      </Button>
      </Container>
    </div>
  );
}

export default HomePage;