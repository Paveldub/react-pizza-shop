import React, { useEffect, useState } from 'react';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { setPizzas } from './Redux/actions/pizzas';
import { connect } from 'react-redux';
import store from './Redux/store';
import axios from 'axios';

class App extends React.Component {

  componentDidMount() {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => store.dispatch(setPizzas(data.pizzas)));
  }

  render() {
    return (
      <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={this.props.items} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
}

export default connect(mapStateToProps)(App);
