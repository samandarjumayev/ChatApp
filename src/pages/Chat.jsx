// components/ChatBox.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";

export default function ChatBox({ currentUser }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    await addDoc(collection(db, "messages"), {
      text: message,
      createdAt: Date.now(),
      user: currentUser,
    });

    setMessage("");
  };

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-2">
        {messages.map((msg) => (
          <div key={msg.id} className={`mb-2 ${msg.user === currentUser ? "text-right" : "text-left"}`}>
            <span className="bg-blue-200 p-2 rounded">{msg.text}</span>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="flex p-2 border-t">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border rounded px-2 py-1"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white px-3 rounded">
          Send
        </button>
      </form>
    </div>
  );
}
