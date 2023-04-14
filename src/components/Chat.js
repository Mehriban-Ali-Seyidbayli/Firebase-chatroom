import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, auth } from "../firebase/FirebaseConfig";

const Chat = ({ room }) => {

    const [newMsg, setNewMsg] = useState("");
    const [messages, setMessages] = useState([]);
    const messageRef = collection(db, "messages");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newMsg) return;

        addDoc(messageRef, {
            text: newMsg,
            user: auth.currentUser.displayName,
            room: room,
            createdAt: serverTimestamp(),
        });

        setNewMsg("")
    }

    useEffect(() => {
        const queryMessage = query(
            messageRef,
            where("room", "==", room),
            orderBy("createdAt")
        )

        onSnapshot(queryMessage, (snapshot) => {
            let comingMessages = [];
            snapshot.forEach((doc) => {
                comingMessages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(comingMessages)
        });
    }, [])
    return (
        <div className="chat">
            <div className="chat-info">
                <p>Chat Room</p>
                <h2> {room} </h2>
                <a href="/">Another room</a>
            </div>

            <div className="message">
                {
                    messages.map((message) => (
                        <>
                            {
                                auth.currentUser.displayName == message.user ? (
                                    <p className="user-message">{message.text}</p>) : (<p>
                                        <span className="message-info">
                                            {message.user} :
                                        </span>
                                        <span className="messages">
                                            {message.text}
                                        </span>
                                    </p>)
                            }
                        </>
                    ))
                }
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)} type="text" placeholder="Enter your message.." />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chat;