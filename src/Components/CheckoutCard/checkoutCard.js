import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ImageAvatar from '../../Assets/ecommerce-product-page-main/images/image-avatar.png';
import accounting from 'accounting';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
},
cardRating: {
    display: 'flex',
},
}));

export default function CheckoutCard({ Product: { id, name, productType, image, price, rating, description } }) {
    const classes = useStyles();    
    const [expanded, setExpanded] = React.useState(false);
    const [{ basket }, dispatch] = useStateValue();

     const removeItem = () => 
        dispatch({
            type: actionTypes.REMOVE_ITEM,
            id,
        })
    
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

            <CardActions disableSpacing className={classes.cardActions}>
                <div className={classes.cardRating}>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>&#11088;</p>
                        ))}
                </div>
                
           
            <IconButton  onClick={removeItem}>
           <DeleteIcon fontSize='large'/>
           </IconButton>
           </CardActions>
        </Card>
    );
}
