import React from 'react';
import BookFeed from '../components/BookFeed';

import { useQuery, gql } from '@apollo/client';


const Feed = props => {
    return (
        <BookFeed navigation={props.navigation} />
    );
};

//screen title
Feed.navigationOptions = {
    title: 'Feed'
};
export default Feed;