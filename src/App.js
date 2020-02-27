import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'


function App() {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  return (
    <div className={classes.divs}>
      <Grid container>
        <Grid className={classes.grids} item xs={12} sm={3}>
          <Card className={classes.root}>
            <CardContent>
              <Grid item justify='center'  alignContent='center' alignItems='center'>
                <Avatar alt="Alperen Arıcı" variant='circle' className={classes.profilePhoto} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdZJR0V-0Gj4v1fYHNoYvF0zHUqKK9q0CnMN8-_ve9AcX1nJUx" />

              </Grid>

              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

        </Grid>
        <Grid className={classes.grids} item xs={12} sm={9}>


          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
        </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
        </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
        </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
          <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>






    </div>
  )
}

export default App


const useStyles = makeStyles(theme => ({
  divs: {
    margin: '0% 3%'
  },
  root: {
    minWidth: 275,

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
  },
  grids: {
    padding: '1%'
  },
  profilePhoto: {
    width: '200px',
    height: '200px',

  }
}))