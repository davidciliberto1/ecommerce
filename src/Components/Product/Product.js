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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AddShoppingCart, Rotate90DegreesCcwSharp } from '@material-ui/icons';
import ImageProduct1 from '../../Assets/ecommerce-product-page-main/images/cannabis-gde9b3c753_1920.jpg';
import ImageAvatar from '../../Assets/ecommerce-product-page-main/images/image-avatar.png';
import accounting from 'accounting';


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

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={ImageAvatar} alt='avatar image'></img>
          </Avatar>
        }
        action={
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(50)}
          </Typography>
        }
        title="Porro"
        subheader="In Stock"
      />
      <CardMedia
        className={classes.media}
        title="cannabis"
        image={ImageProduct1}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Los humanos han cultivado desde tiempos prehistóricos esta planta por sus numerosos usos:
          como fuente de fibra textil, para extraer el aceite de sus semillas, como planta
          medicinal —hay registros escritos sobre este uso que datan de 2737 a. C.—,3​ y como psicotrópico.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to Cart">
          <AddShoppingCart />
        </IconButton>
        <IconButton aria-label="share">
          {Array(4)
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
            holuuuuuus
          </Typography>
          <Typography paragraph>
            C. ruderalis may be included within C. sativa; all three may be treated as subspecies
            of a single species, C. sativa;[1][3][4][5] or C. sativa may be accepted as a single
            undivided species.[6] The genus is widely accepted as being indigenous to and
            originating from Asia.
          </Typography>
      
         
        </CardContent>
      </Collapse>
    </Card>
  );
}
