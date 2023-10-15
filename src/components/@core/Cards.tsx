import {ReactElement} from 'react'
import {Box, Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, } from '@mui/material'
import {MoreVert, Favorite, Share} from '@mui/icons-material'
import {red} from '@mui/material/colors'
import { HotelPropsCard } from '../../types/Application'

const Cards = ({...props}:HotelPropsCard):ReactElement => {
  const {key, name, city ,hostThumbnail, address, images} = props
  return (
    <Card key={key} sx={{marginBottom:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={hostThumbnail}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={name}
        subheader={city}
      />
      <Box sx={{width:'100%', display:'flex', justifyContent:'center', bgcolor:'black'}}>
        <div style={{width:'350px'}}> 
          <CardMedia
          component="img"
          image={images[0]}
          alt="Paella dish"
          />
        </div>
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
        <Typography component='p'>
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Cards