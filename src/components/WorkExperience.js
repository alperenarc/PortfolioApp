import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import WorkIcon from '@material-ui/icons/Work';

function WorkExperience() {
    const classes = useStyles()
    return (
        <Grid className={classes.grids} item xs={12} sm={12}>
            <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                    <WorkIcon className={classes.icons} /> WORK EXPERIENCE
                </Typography>
                <div className={classes.hr}></div>
                <b>Kayten Tech.</b>
                <Typography style={{ fontSize: 15 }} color="textSecondary">
                    Backend Developer (Intern) June 2019 - July 2019
                </Typography>
            </CardContent>
        </Grid>
    )
}
export default WorkExperience

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