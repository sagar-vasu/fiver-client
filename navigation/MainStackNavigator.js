import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// We import our screens from screens folder

import Signup from '../screens/SignupScreen';
import Login from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';


// We import our default MaintabNavigator


import TabNavigator from './MainTabNavigator'



// We created a route  in which we added our screens the first Welcome screen is main screen that will be shown
// in the last we added out tabnavigator 



const AppNavigator = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,

    },
    Signup: {
        screen: Signup,
    },
    Main: {
        screen: TabNavigator,
        navigationOptions: {
            header: null
        }
    }

});

export default createAppContainer(AppNavigator)

