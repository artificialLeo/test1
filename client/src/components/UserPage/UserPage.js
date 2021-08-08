import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import lock from "./locked.jpg";

const useStyles = makeStyles((theme) => ({
    img: {
        margin: 'auto',
        display: 'block',
        width: '100%',
        height: '100%',
    },
}));

const UserPage = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >

            <img  className={classes.img} src={lock} alt={'locked'}/>

        </Grid>
    );
};

export default UserPage;