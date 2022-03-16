import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import ImageAvatar from '../../Assets/ecommerce-product-page-main/images/image-avatar.png';
import accounting from 'accounting';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Product({ Product: { id, name, productType, image, price, rating, description } }) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: id,
        name: name,
        productType: productType,
        image: image,
        price: price,
        rating: rating,
        description: description,
      }
    })
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={ImageAvatar} alt='avatar'></img>
          </Avatar>
        }
        action={
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader="In Stock"
      />
      <CardMedia
        className={classes.media}
        title={name}
        image={image}
        key={id}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to Cart"
          onClick={addToBasket}
        >
          <AddShoppingCart fontSize='large' />
        </IconButton>
        <IconButton aria-label="share">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Info:</Typography>
          <Typography paragraph>
            {description}
          </Typography>


        </CardContent>
      </Collapse>
    </Card>
  );
}
