import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import EmailIcon from '@material-ui/icons/Email'
import NavigationIcon from '@material-ui/icons/Navigation'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import InstagramIcon from '@material-ui/icons/Instagram'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Hobby from './components/Hobby'

function App() {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  return (
    <div className={classes.divs}>
      <Grid container>
        <Grid className={classes.grids} item xs={12} sm={3}>
          <Card className={classes.root}>
            <CardContent className={classes.centered}>
              <Grid item justify='center'>
                <img style={{ borderRadius: 10000, width: '50%', height: '50%' }} alt='Alperen Arıcı' src='https://avatars3.githubusercontent.com/u/34552821?s=400&u=d04d7f18bc3ae8f3bf5595da7f9f2e1636e79cc8&v=4' />
              </Grid>
              <Typography variant="h5" component="h2">
                Alperen Arıcı
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Software Developer
              </Typography>
              <Typography variant="body2" component="p">
                <NavigationIcon style={{
                  display: "inline-flex",
                  verticalAlign: "top"
                }} fontSize="small" />
                <span>Kayseri, TURKEY</span>
                <br />
                <EmailIcon style={{
                  display: "inline-flex",
                  verticalAlign: "top"
                }} fontSize="small" />
                <span> alparicieren@gmail.com</span>
              </Typography>
            </CardContent>
            <div className={classes.hr}></div>
            <CardContent className={classes.centered}>
              <a target='_blank' className={classes.socailButtons} href='https://github.com/alperenarc'>
                <GitHubIcon />
              </a>
              <a target='_blank' className={classes.socailButtons} href='https://www.linkedin.com/in/alperen-arici-4a4a74154/'>
                <LinkedInIcon />
              </a>
              <a target='_blank' className={classes.socailButtons} href='https://twitter.com/Alperen_arc'>
                <TwitterIcon />
              </a>
              <a target='_blank' className={classes.socailButtons} href='https://www.youtube.com/channel/UC03Dnpwp7RQNdApN4Z9-t0A'>
                <YouTubeIcon />
              </a>
              <a target='_blank' className={classes.socailButtons} href='https://www.instagram.com/alperen_arc/'>
                <InstagramIcon />
              </a>
            </CardContent>
          </Card>

        </Grid>
        <Grid className={classes.grids} item xs={12} sm={9}>
          <Card className={classes.root}>
            <About/>
            <Skills/>
            <Education/>
            <WorkExperience/>
            <Projects/>
            <Hobby/>
          </Card>
          
        </Grid>
      </Grid>
    </div>
  )
}

export default App


const useStyles = makeStyles(theme => ({
  divs: {
    margin: '0% 3%',
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
  centered: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  socailButtons: {
    color: '#000',
    '& :hover': {
      color: 'grey',
      cursor: 'pointer'
    }
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