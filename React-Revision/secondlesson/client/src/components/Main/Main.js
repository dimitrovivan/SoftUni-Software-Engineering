
const Main = (
    {
        posts
    }
) => {
    return (
         {posts.map(x => <Post ></Post>)}
    )
}

export default Main;