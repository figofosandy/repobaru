import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeActivity from './HomeActivity';
import ProfileActivity from './ProfileActivity';
import State from './State';
import FlexComponent from'./FlexComponent';
import AlignItems from './AlignItems';
import BMI from './BMI/BMI';
const RootStack=createStackNavigator(
    {
        Home:{screen:HomeActivity},
        State:{screen:State},
        FlexComponent:{screen:FlexComponent},
        AlignItems:{screen:AlignItems},
        BMI:{screen:BMI}
    },
    {
        initialRouteName:'Home'
    }
);

const Container = createAppContainer(RootStack);

export default Container;