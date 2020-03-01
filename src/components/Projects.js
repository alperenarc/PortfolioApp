import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AttachFileIcon from '@material-ui/icons/AttachFile'

function Projects() {
    const classes = useStyles()
    return (
        <Grid className={classes.grids} item xs={12} sm={12}>
            <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                    <AttachFileIcon className={classes.icons} /> PROJECTS
                </Typography>
                <div className={classes.hr}></div>

                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <b>Beamity</b>
                        <Typography style={{ fontSize: 15 }} color="textSecondary">
                            2019
                        </Typography>
                        <Typography variant="body2" component="p">
                            This project has two stage. First stage is a content management system (Web - Admin Panel)thatnameisBeamity, andthesecondstageisaniOSapplication(ClientLayer) that name is Museum Hunt. Thanks the CMS, Customers who contacted Beacon can see many diﬀerent content that are always up to date. In short, this is a CMS with Beacon project. Project Github Link : <a className={classes.links} href=' https://github.com/alperenarc/Beamity'> https://github.com/alperenarc/Beamity </a> 
                        </Typography>
                    </Grid>
                    <br className={classes.br}/>
                    <Grid item xs={12} sm={12}>
                        <b>NoteLibrary</b>
                        <Typography style={{ fontSize: 15 }} color="textSecondary">
                            2019
                        </Typography>
                        <Typography variant="body2" component="p">
                        Thanks to this project, university students will be able to access the lecture notes more easily. Project Github Link : <a className={classes.links} href='https://github.com/alperenarc/NoteLibrary'>https://github.com/alperenarc/NoteLibrary </a> 
                        </Typography>
                    </Grid>
                    <br className={classes.br}/>
                    <Grid item xs={12} sm={12}>
                        <b>Twitter Analysis App</b>
                        <Typography style={{ fontSize: 15 }} color="textSecondary">
                            2020
                        </Typography>
                        <Typography variant="body2" component="p">
                        This project analyzes the followers and followers of users logged into the application via Twitter. If the user wishes, it can inspect a person and analyze it. Project Github Link : <a className={classes.links} href='https://github.com/alperenarc/twitter-stalk-app'>https://github.com/alperenarc/twitter-stalk-app</a>  
                        </Typography>
                    </Grid>
                </Grid>


            </CardContent>
        </Grid>
    )
}
export default Projects

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