import React from 'react';
import Header from './header';
import Home from '../Home/Home';
import Cart from '../../components/cart/cart';
import { Route, Switch } from 'react-router-dom';

export default class Layout extends React.Component {
  render() {
    return (<>
      <Header/>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/cart" exact component={ Cart } />
      </Switch>
    </>);
  }
}
