function BookList(props) {
    return (
        <ul>
            {props.books.map(book => <li>
                                         <h4>{book.title}</h4>
                                         <h4>{book.description}</h4>
                                         <h4>{book.author}</h4>
                                    </li>)}
        </ul>
    )
}

export default BookList;