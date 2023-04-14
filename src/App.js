
import { useRef, useState } from 'react';
import Auth from './components/Auth';
import Chat from './components/Chat';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  const [room, setRoom] = useState(null);

  const inputRef = useRef();
  console.log(room);



  if (!isAuth) {
    return (
      <div className='container'>
        <Auth setIsAuth={setIsAuth} />
      </div>
    )
  }


  return (
    <div className='container'>

      {
        room ? (
          <Chat room={room} />
        ) : (
          <div className='room-container'>
            <h1>Chat Room</h1>
            <p>Please enter room name..</p>
            <input ref={inputRef} type='text' placeholder='Room Name' />
            <button onClick={() => setRoom(inputRef.current.value)} className='btn enter'>Enter Room</button>
            <button className='btn out'>Log Out</button>
          </div>
        )
      }


    </div>
  );
}

export default App;
