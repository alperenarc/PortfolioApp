import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import InfoIcon from '@material-ui/icons/Info'

function About() {
    const classes = useStyles()
    return (
        <Grid className={classes.grids} item xs={12} sm={12}>
            <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                    <InfoIcon className={classes.icons} /> ABOUT
              </Typography>
                <div className={classes.hr}></div>
                <Typography variant="body2" component="p">
                Hello World,
I'm Alperen. Over the past 2 years I have continuously challenged myself with new languages, frameworks and methodologies. My core languages have always been javascript and C#. So I am developing Web Applications a long time. However nowadays, I tend to develop mobile applications. My next goal is to develop many mobile applications and upload the play store.
                </Typography>
            </CardContent>
        </Grid>
    )
}
export default About

const useStyles = makeStyles(theme => ({
    divs: {
        margin: '0% 3%'
    },
    pos: {
        marginBottom: 12,
    },
    grids: {
        padding: '1%'
    },
    hr: {
        borderBottom: '1px solid #f0f0f0',
        marginBottom: '20px'
    },
    icons: {
        display: "inline-flex",
        verticalAlign: "top"
    }
}))