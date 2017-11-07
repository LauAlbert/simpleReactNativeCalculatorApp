import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './src/components/Calculator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Calculator />
      </Provider>

    );
  }
}



// const mapStateToProps = ({calculator}) => {
//   const {current, total} = calculator;
//   return {current, total};
// }

// export default connect(mapStateToProps)(App)