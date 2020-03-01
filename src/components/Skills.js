import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/Star';
import CodeIcon from '@material-ui/icons/Code';
function Skills() {
    const classes = useStyles()

    return (
        <Grid className={classes.grids} item xs={12} sm={12}>
            <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                    <CodeIcon className={classes.icons} /> Skills
              </Typography>
                <div className={classes.hr}></div>
                <Grid container>
                    <Grid item sm={3} xs={6}>
                        <Typography style={{ fontSize: 15 }} color="textSecondary">
                            Asp.Net Core 2 <StarIcon className={classes.icons} /><StarIcon className={classes.icons} />
                        </Typography>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <Typography style={{ fontSize: 15 }} color="textSecondary">
                            React.js <StarIcon className={classes.icons} /><StarIcon className={classes.icons} /><StarIcon className={classes.icons} />
                        </Typography>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <Typography style={{ fontSize: 15 }} color="textSecondary">
                            React Native <StarIcon className={classes.icons} />
                        </Typography>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <Typography style={{ fontSize: 15 }} color="textSecondary">
                            C# <StarIcon className={classes.icons} /><StarIcon className={classes.icons} /><StarIcon className={classes.icons} />
                        </Typography>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <Typography style={{ fontSize: 15 }} color="textSecondary">
                            HTML <StarIcon className={classes.icons} /><StarIcon className={classes.icons} /><StarIcon className={classes.icons} />
                        </Typography>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <Typography style={{ fontSize: 15 }} color="textSecondary">
                            CSS <StarIcon className={classes.icons} /><StarIcon className={classes.icons} /><StarIcon className={classes.icons} />
                        </Typography>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <Typography style={{ fontSize: 15 }} color="textSecondary">
                            Javascript <StarIcon className={classes.icons} /><StarIcon className={classes.icons} /><StarIcon className={classes.icons} />
                        </Typography>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <Typography style={{ fontSize: 15 }} color="textSecondary">
                            Bootstrap <StarIcon className={classes.icons} /><StarIcon className={classes.icons} /><StarIcon className={classes.icons} /><StarIcon className={classes.icons} />
                        </Typography>
                    </Grid>
                </Grid>

            </CardContent>
        </Grid>
    )
}
export default Skills

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
    mobileStepper: {
        width: '40%'
    }
}))