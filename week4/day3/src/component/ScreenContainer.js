import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeActivity from './HomeActivity';
import ProfileActivity from './ProfileActivity';

const RootStack=createStackNavigator(
    {
        Home:{screen:HomeActivity},
        Profile:{screen:ProfileActivity}
    },
    {
        initialRouteName:'Home'
    }
);

const Container = createAppContainer(RootStack);

export default Container;