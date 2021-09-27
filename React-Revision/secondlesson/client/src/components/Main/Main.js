import {Component} from 'react';

import * as postService from '../services/postServices';
import Post from './Post';

class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
         postService.getAllPosts()
                        .then(data => this.setState({posts: data}));
    }

    render() {
        return (
        <>
            {this.state.posts.map(x =>
                <Post
                    key={x.id}
                    id={x.id}
                    title={x.title}
                >
                    {x.text}
                </Post>
            )}
        </>
    )
}
}

export default Main;