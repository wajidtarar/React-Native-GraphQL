import React from 'react';
import 'react-native-gesture-handler';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Feed from './feed';
import Favorites from './favorites';
import MyBooks from './mybooks';
import { createStackNavigator } from 'react-navigation-stack';
import BookScreen from './book';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';



//stacked navivator
const FavoritesStack = createStackNavigator({
    Favorites: Favorites,
    Book: BookScreen
});

const FeedStack = createStackNavigator({
    Feed: Feed,
    Book: BookScreen
});

const MyBooksStack = createStackNavigator({
    MyBooks: MyBooks,
    Book: BookScreen
});

const TabNavigator = createBottomTabNavigator({
    FeedScreen: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
                <MaterialIcons name="home" size={24} color={'black'} />
            ) 
        }
    },
    MyBooksScreen: {
        screen: MyBooksStack,
        navigationOptions: {
            tabBarLabel: 'My Books',
            tabBarIcon: () => (
                <MaterialIcons name="library-books" size={24} color={'black'} />
            )
        }
    },
    FavoriteScreen: {
        screen: FavoritesStack,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: () => (
                <MaterialCommunityIcons name="star" size={24} color={'black'} />
            )
        }
    }
});
export default createAppContainer(TabNavigator);