import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
//redux
import { logout } from '../../redux/actions/auth'
import { connect } from 'react-redux'
//
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))
////

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  // define login or logout buttons
  const Buttonlogout = <Button color="inherit">Logout</Button>

  const geustButton = <Button color="inherit">Login</Button>

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {
            //!loading &&
            <Fragment>{isAuthenticated ? Buttonlogout : geustButton}</Fragment>
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navbar)
