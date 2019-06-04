import React from 'react';
import "./Home.css"
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const products = [
  {name: 'phone',
    price: 1600
  },
  {name: 'vape',
    price: 350
  },
  {name: 'case for the phone',
    price: 35
  },
  {name: 'screen protector',
    price: 40
  },
  {name: 'keyboard',
    price: 80
  },
  {name: 'calculator1',
    price: 65
  },
  {name: 'calculator2',
    price: 65
  },
  {name: 'calculator3',
    price: 65
  },
  {name: 'calculator4',
    price: 65
  },
  {name: 'calculator5',
    price: 65
  }
];
// {i%3 === 0: </div><div style={{float: 'left', width: '50%', padding: '10px'}}>:null};

class Home extends React.Component {
  render() {
    let col1 = [];
    let col2 = [];
    let col3 = [];
    let cols = [];
    cols.push(col1);
    cols.push(col2);
    cols.push(col3);
    products.forEach((p, i) => {
      let tmp = (
        <div onClick={()=>{this.props.onProductAdd(p)}} className={'card'} key={'product-'+i} style={{width: '33%', padding: '16px', boxSizing: 'border-box'}}>
          {p.name}<br/>
          {p.price}
        </div>
    );
    cols[i%3].push(tmp);
  });

    return (<>
      <h2>Top Navigation Example</h2>
      <p>Some content..</p>
      <div style={{width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{width: "70%"}}>
          <div  style={{float: 'left',width: '33%',padding: '10px',boxSizing: 'border-box'}}>
            {col1}
          </div>
          <div  style={{float: 'left',width: '33%',padding: '10px',boxSizing: 'border-box'}}>
            {col2}
          </div>
          <div  style={{float: 'left',width: '33%',padding: '10px',boxSizing: 'border-box'}}>
            {col3}
          </div>
        </div>
      </div>
    </>);
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onProductAdd: (product) => {dispatch({type: actionTypes.ADD_PRODUCT, product: product})},
    onProductRemoved: (product) => {dispatch({type: actionTypes.REMOVE_PRODUCT, product: product})}
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);
