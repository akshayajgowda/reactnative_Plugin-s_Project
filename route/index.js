import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';
import GeolocationExample from '../pages/GeolocationExample';

const Route = createStackNavigator(
    {
        Home:Home,
        Register:Register,
        Login:Login,
        GeolocationExample:GeolocationExample,
    },
    {
        initialRouteName: "Home"
    }
);

const RouterConfig = createAppContainer(Route);

export default RouterConfig;