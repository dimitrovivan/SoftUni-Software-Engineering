import style from './Post.module.css'

function Post(props) {
    return (
        <div className={style.post}>
            <p className={style.description}>{props.description}</p>
            <span className={style.author}>{props.author}</span>
        </div>
    )
}

export default Post;