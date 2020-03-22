import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { NavLink } from 'react-router-dom';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';

export const mainListItems = (
  <div>
    <NavLink to="/" className="menu__link">
      <ListItem button>
          <ListItemIcon>
            <FeaturedPlayListIcon />
          </ListItemIcon>
          <ListItemText primary="Biographie" />
      </ListItem>
    </NavLink>
    <NavLink to="/membres" className="menu__link">
      <ListItem button>
          <ListItemIcon>
            <FeaturedPlayListIcon />
          </ListItemIcon>
          <ListItemText primary="Membres" />
      </ListItem>
    </NavLink>
    <NavLink to="/album" className="menu__link">
      <ListItem button>
          <ListItemIcon>
            <FeaturedPlayListIcon />
          </ListItemIcon>
          <ListItemText primary="Album" />
      </ListItem>
    </NavLink>
 </div>
);