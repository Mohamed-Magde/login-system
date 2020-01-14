import React, { Component } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import ReduxThunk from 'redux-thunk'

// Material UI Theme
import { ThemeProvider } from '@material-ui/styles'
import MuiTheme from '../styles/theme'

// MUI components
import Container from '@material-ui/core/Container'

// Containers
import Navbar from '../containers/Navbar'
import Footer from '../containers/Footer'

import Routes from './Routes'

// Redux
import { Provider } from 'react-redux'
import store from '../store'
import { loadUser } from '../redux/actions/auth'

export default class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser)
  }
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={MuiTheme}>
          <Router>
            <Navbar />
            <Container maxWidth="xl">
              <Routes />
            </Container>
            <Footer />
          </Router>
        </ThemeProvider>
      </Provider>
    )
  }
}
