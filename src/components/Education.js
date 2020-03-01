import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

function Education() {
    const classes = useStyles()
    return (
        <Grid className={classes.grids} item xs={12} sm={12}>
            <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                    <ImportContactsIcon className={classes.icons} /> EDUCATION
              </Typography>
                <div className={classes.hr}></div>
                <Grid container>
                    <Grid item sm={12} xs={12}>
                        <b>Mustafa Eminoğlu High School</b>
                        <Typography style={{ fontSize: 15 }} color="textSecondary">
                            2013-2017
                        </Typography>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <b>Erciyes University - Computer Engineering</b>
                        <Typography style={{ fontSize: 15 }} color="textSecondary">
                            2017-present
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Grid>
    )
}
export default Education

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