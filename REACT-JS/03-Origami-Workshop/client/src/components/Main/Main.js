import { Component } from 'react';
import style from './Main.module.css';
import Post from '../Post';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/posts')
        .then(res => res.json())
        .then(posts => this.setState( {posts} ));
    }

    render() {
        return (
            <main className={style.main}>
                <h1 className={style.mainHeading}>Sooooooooooome heading</h1>
                {this.state.posts.map(post => <Post description={post.description} author={post.author}/>)}
            </main>
        )
    }
}


export default Main;