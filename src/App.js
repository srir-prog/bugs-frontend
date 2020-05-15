import React from 'react';
import './App.css';
import Bugs from './components/Bugs';
import configureStore from './store/configureStore';
import StoreContext from './contexts/storeContexts';
import { Provider } from 'react-redux';
import BugList from './components/BugsList';

const store = configureStore();

function App() {
  return (
    // <StoreContext.Provider value={store}>
    //   <Bugs />
    // </StoreContext.Provider>
    <Provider store={store}>
      <BugList />
    </Provider>
  );
}

export default App;
