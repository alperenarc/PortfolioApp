import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

function Hobby() {
    const classes = useStyles()
    return (
        <Grid className={classes.grids} item xs={12} sm={12}>
            <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                    <SportsEsportsIcon className={classes.icons} /> HOBBY
                </Typography>
                <div className={classes.hr}></div>
                <b>Playing Piano</b>
                <Typography variant="body2" component="p">
                    My Youtube Channel => <a className={classes.links} href='https://www.youtube.com/channel/UC03Dnpwp7RQNdApN4Z9-t0A'>YouTube</a>
                </Typography>
            </CardContent>
        </Grid>
    )
}
export default Hobby

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
    },
    links:{
        color:'#000',
        textDecoration:'none'
    }
}))