import React from 'react';
import BookFeed from '../components/BookFeed';


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