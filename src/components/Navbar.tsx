import { useState } from 'react'
import { Pets, Mail, Notifications} from '@mui/icons-material'
import {AppBar, Toolbar, Typography, styled, Box, InputBase, Badge, Avatar, Menu, MenuItem} from '@mui/material'


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})
const SearchBar = styled(Box)(({theme})=>({
    backgroundColor: 'white',
    padding: '0px 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))
const IconsMenu = styled(Box)(({theme})=>({
    display:'none',
    gap:'20px',
    alignItems:'center',
    [theme.breakpoints.up("sm")]:{
        display : 'flex'
    }
}))
const UserBox = styled(Box)({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    "&:hover": {
        'cursor': 'pointer'
    }
})
const UserName = styled(Typography)(({theme})=>({
    display:'flex',
    [theme.breakpoints.up("sm")]:{
        display:'none'
    }
}))
const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography sx={{display:{xs:'none',sm:'block'}}} variant='h6'>CloneDev</Typography>
            <Pets sx={{display:{xs:'block',sm:'none'}}} />
            <SearchBar>
                <InputBase placeholder='Search here....' name='searchinputbase' />
            </SearchBar>
            <IconsMenu>
                <Badge badgeContent={5} color='error'>
                    <Mail />
                </Badge>
                <Badge badgeContent={5} color='error'>
                    <Notifications />
                </Badge>
            </IconsMenu>
            <UserBox id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <Avatar sx={{height:'30px', width:'30px'}} src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1691163744~exp=1691164344~hmac=c30ba927bc783f86fe65e1c036bf7e5f2ed607bc991adac4a1b435cbe413617f' />
                <UserName>Jhon Doe</UserName>
            </UserBox>
        </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar