import React from 'react';
import { Typography,  List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const StyledHomePage = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const StyledTitle = styled(Typography)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const StyledDescription = styled(Typography)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
`;

export default function Home() {
  return (
    <StyledHomePage>
      <StyledTitle>Welcome to Phonebook</StyledTitle>
      <StyledDescription>Manage your contacts easily with Phonebook</StyledDescription>
      <List>
        <ListItem>
          <ListItemText primary="Create and store your contacts" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Organize contacts with groups and tags" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Search and filter contacts efficiently" />
        </ListItem>
      </List>
    </StyledHomePage>
  );
};

  