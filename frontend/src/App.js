import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import HeroesPage from './pages/Heroes'

const App = () => (
  <div className="App">
    <Provider store={store}>
      <HeroesPage />
    </Provider>
  </div>
);

export default App;
