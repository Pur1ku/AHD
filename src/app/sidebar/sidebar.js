import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Home, Info, ContactMail } from '@mui/icons-material';

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#000', // สีดำ
          color: '#fff', // สีตัวอักษรขาว
        },
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon sx={{ color: '#fff' }}>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ color: '#fff' }}>
            <Info />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ color: '#fff' }}>
            <ContactMail />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
}
