import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends React.Component {
  render() {
    return (<div className={'navbar'}>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/cart">Cart({this.props.cart.length})</Link>
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Header);
