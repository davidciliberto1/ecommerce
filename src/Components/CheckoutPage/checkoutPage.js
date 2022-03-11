import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import CheckoutCard from '../CheckoutCard/checkoutCard';
import productData from '../../Data';
import Product from '../Product/Product';
import Total from '../Total/Total';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '2rem',
    },

}));

const CheckoutPage = () => {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                {productData.map((product) => (
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard 
                        key={product.id}
                        Product={product}
                        />
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        shopping cart
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant='h4'>
                        <Total />
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}
export default CheckoutPage;