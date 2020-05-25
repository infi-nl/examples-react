import React from 'react';
import { 
  BrowserRouter,
  Switch} from 'react-router-dom';
import LayoutRoute from './Pages/PageLayouts/LayoutRoute';
import { LayoutWithMenuTop } from './Pages/PageLayouts/LayoutWithMenuTop';
import { LayoutWithMenuLeft } from './Pages/PageLayouts/LayoutWithMenuLeft';
import HomePage from './Pages/HomePage/HomePage';
import FormPage from './Pages/FormPage/FormPage';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter >
      <Switch>
        <LayoutRoute path={"/"} layout={LayoutWithMenuTop} component={HomePage} exact/>
        <LayoutRoute path={"/form"} layout={LayoutWithMenuLeft} component={FormPage} exact/>
        <LayoutRoute layout={LayoutWithMenuTop} component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
