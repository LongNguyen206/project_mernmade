import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import { Link }  from  'react-router-dom';


class Footer extends Component {
  render () {
    const { classes } = this.props
    const currentYear = new Date().getFullYear()
    return (
      <div className={classes.root}>
        <Grid className={classes.subFooter} item xs={12}>
          <Typography className={classes.white} variant="subheading" component={'span'} >
          © {currentYear} Hashtag Hound
          </Typography>
          <Typography>
           <Link to="/"> Terms of Use </Link>
            <Link to="/"> Privacy Policy</Link>
            <Link  to="/"> Contact Us </Link>
          </Typography>
        </Grid>
      </div>
    )
  }
}



const styles = theme => ({
  root: {
    marginTop: 30,
    backgroundColor: `${theme.palette.primary[500]}`,
    paddingTop: '30px',
    overflowX: 'hidden'

  },
  footerSections: {
    margin: '0 16px'
  },
  subFooter: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    padding: '8px 16px 8px 16px',
    marginTop: '8px'
  },
  footerText: {
    color: '#fff',
    fontSize: '30px',
    lineHeight: 1.5
  },
  white: {
    color: '#ffffff'
  },
  flexContainer: {
    display: 'flex'
  }
})

export default withStyles(styles)(Footer)
