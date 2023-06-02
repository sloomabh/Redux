import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import HooksCakeContainerPlayLoad from './components/HooksCakeContainerPlayLoad';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HooksCakeContainer />
        <CakeContainer />
        <HooksIceCreamContainer />
        <HooksCakeContainerPlayLoad />
      </Provider>
    </div>
  );
}

export default App;
