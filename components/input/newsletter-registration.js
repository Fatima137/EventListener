import classes from './newsletter-registration.module.css';
import { useRef } from 'react';

function NewsletterRegistration() {
  const e=useRef();
  function registrationHandler(event) {
    event.preventDefault();
    fetch('/api/newsletter',{
      method:'POST',
      body:JSON.stringify({email:e.current.value}),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>res.json()).then(data=>console.log(data))
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={e}
          />
          <button onClick={registrationHandler}>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;