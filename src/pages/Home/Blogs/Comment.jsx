const Comment = ({ comment }) => {
    const { text } = comment;
    return (
        <div>
            <li>{text}</li>
        </div>
    );
};

export default Comment;