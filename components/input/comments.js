import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [commlist,setComm]=useState([]);


  useEffect(()=>{
    if(showComments)
    {
      fetch('/api/comment/'+eventId).then(res=>res.json()).then(data=>setComm(data.arr))
    }
  },[showComments])
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);

  }

  function addCommentHandler(commentData) {
    fetch('/api/comment/'+eventId,{
      method:'POST',
      body:JSON.stringify({commentObj:commentData}),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>res.json()).then(data=>console.log(data.comment))
 
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList arr={commlist} />}
    </section>
  );
}

export default Comments;