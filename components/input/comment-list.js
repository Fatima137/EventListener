import classes from './comment-list.module.css';

function CommentList(props) {
  return (
    <ul className={classes.comments}>
      {props.arr.map(item=>{
        return(
          <li id={item._id}>
              <p>{item.text}</p>
              <div>
                By <address>{item.name}</address>
              </div>
            </li>
        )
      })}

    </ul>
  );
}

export default CommentList;