import React from 'react';
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import background from './download.png';
import logo from './logo.png';









const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },

        body: {
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            marginTop: '250px',
        }
    },
    logo: {
        width: '50px',
        height: '50px',
        animation: '$spin 3s linear infinite',

    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: 'purple',
        color: 'white',
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        marginLeft: '25px',
        flexGrow: 1,
        animation: "$beatIn 3s",
    },
    link: {
        margin: theme.spacing(1, 1.5),
        color: 'white',
    },
    '@keyframes beatIn': {
        "0%": { transform: 'translateX()' },
        "15%": { transform: 'translateX(8em)' },
        "30%": { transform: 'translateX(4em)' },
        "45%": { transform: 'translateX(12em)' },
        "60%": { transform: 'translateX(6em)' },
        "75%": { transform: 'translateX(14em)' },
        "90": { transform: 'translateX()' },
        "100%": { color: 'yellow' },

    },
    '@keyframes spin': {
        '0%': { transform: 'rotateZ(0)' },
        '100%': { transform: 'rotateZ(360deg)' },
    },
}
));








export default function Navbar() {
    const classes = useStyles();
    return (
        <div className="Navbar">
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar} >
                    <img src={logo} alt="logo" className={classes.logo} />
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>

                        Barnhill's Beats
                    </Typography>
                    <nav >
                        <Link variant="button" color="textPrimary" href="#" className={classes.link} >
                            Pricing
                        </Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link} >
                            Contact
                        </Link>
                    </nav>
                    <Button href="#" color="primary" variant="outlined" className={classes.link} id="login">
                        LOGIN
                    </Button>
                </Toolbar>
            </AppBar>

        </div >
    )
}
