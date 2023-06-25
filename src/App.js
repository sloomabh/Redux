import './App.css';

import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HooksIceCreamContainer />
        <HooksCakeContainer />
      </Provider>
    </div>
  );
}

export default App;
