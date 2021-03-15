import './App.css';
import Home from './pages/Home';
import {Container} from 'semantic-ui-react';
import {Switch, Route} from 'react-router-dom'



function App() {
  return (
    <>
    <Container>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
    </Container>
    </>
  );
}

export default App;
