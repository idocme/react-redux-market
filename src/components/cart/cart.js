import React from 'react';
import { connect } from 'react-redux';


const Cart = (props) => {
  let sum = 0;
  console.log("props");
  console.log(props);
  let view = props.cart.map((p, i)=> {
    sum += p.price;
    return (
    <div key={i}>
      {p.name}
    </div>)
  });
  view = (<>
    <div> {view} </div>
      {sum}
    </>);

  return (<>
    {props.cart.length===0? "Empty":view}
  </>);
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Cart);
