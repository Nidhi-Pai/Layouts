import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter as Router, Redirect, Route } from 'react-router-dom';
import ScreenOneLayout from '../screens/screen-one/layout';
import ScreenThreeLayout from '../screens/screen-three/layout';
import ScreenTwoLayout from '../screens/screen-two/layout';

export const MainScreenPaths = {};

const Routes: React.FC = () => {
  return (
    <Router>
      <Route exact path="/screen-one" component={ScreenOneLayout} />
      <Route exact path="/screen-two" component={ScreenTwoLayout} />
      <Route exact path="/screen-three" component={ScreenThreeLayout} />
      <Route exact path="/" component={Nothing} />
    </Router>
  );
};

const Nothing: React.FC = () => <Redirect to="/screen-one" />;

export default hot(Routes);
