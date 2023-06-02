import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
  console.log(props);
  return (
    <div>
      <h1 style={{ color: 'blue', fontSize: '30px', fontWeight: 'bold' }}>
        With mapStateToProps and mapDispatchToProps{' '}
      </h1>
      <h2>Number of cakes {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

//we connect the actions and state to  component props so we can use them
