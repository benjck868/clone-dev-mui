import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, styled, alpha} from '@mui/material'
import {Dashboard, Article, Group,  Storefront, Person, Settings, Contacts, Brightness6} from '@mui/icons-material'
import {pink} from '@mui/material/colors'
import { Navlink } from '../types/Application'

const navigation: Navlink[]  = [
  {
    title : 'Dashboard',
    icon : <Dashboard />,
    path : '#'
  },
  {
    title : 'Pages',
    icon : <Article />,
    path : '#'
  },
  {
    title : 'Groups',
    icon : <Group />,
    path : '#'
  },
  {
    title : 'Marketplace',
    icon : <Storefront />,
    path : '#'
  },
  {
    title : 'Friends',
    icon : <Person />,
    path : '#'
  },
  {
    title : 'Settings',
    icon : <Settings />,
    path : '#'
  },
  {
    title : 'Profile',
    icon : <Contacts />,
    path : '#'
  }

]

const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

const Sidebar = () => {
  return (
    <Box flex={2} p={0} sx={{"display":{"xs":"none", "sm": "none","md":"none", "lg":"block"}}}>
      <List>
        {
          navigation.map((nav,i) => {
            return(
              <ListItem key={i}>
                <ListItemButton component="a" href={nav.path}>
                  <ListItemIcon>
                    {nav.icon}
                  </ListItemIcon>
                  <ListItemText primary={nav.title}/>
                </ListItemButton>
              </ListItem>
            )
          })
        }
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Brightness6 />
            </ListItemIcon>
            <PinkSwitch {...label} defaultChecked />
          </ListItemButton>
        </ListItem>
      </List>  
    </Box>
  )
}

export default Sidebar