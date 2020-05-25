import React from 'react';
import { 
  Route,
  RouteProps} from 'react-router-dom';

interface LayoutRouteProps extends RouteProps{
  layout: React.ComponentType,
}

const LayoutRoute = ({layout: Layout, path, component, ...rest} : LayoutRouteProps) => (
  <Layout>
    <Route path={path} component={component} {...rest} />
  </Layout>
);


export default LayoutRoute;