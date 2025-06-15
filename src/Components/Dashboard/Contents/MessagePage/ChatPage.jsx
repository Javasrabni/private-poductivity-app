import React, { useEffect, useState } from "react";
import { socket } from "./socket"; // Pastikan ini diekspor dengan withCredentials

export default function ChatPage({ username, targetUser }) {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    const [userStatus, setUserStatus] = useState("")
    useEffect(() => {
        if (!username) return;

        // Register socket userId ke server (gunakan email / sub)
        socket.emit("register", username);
        console.log("🔗 Registered to socket server:", username);

        // Listener pesan pribadi masuk
        socket.on("private_message", ({ fromUserId, message }) => {
            console.log(`📩 Message received from ${fromUserId}:`, message);
            setChat((prev) => [...prev, { sender: fromUserId, message }]);
        });

        socket.on('user_online', ({ userId }) => {
            setUserStatus(`${userId} is online`)
        })

        socket.on("user_offline", ({ userId }) => {
            console.log(`${userId} is offline`)
            setUserStatus(`${userId} is offline`)  // tampilkan status di UI
        })

        // Cleanup ketika komponen unmount
        return () => {
            socket.off("private_message");
        };
    }, [username]);

    const sendMessage = () => {
        if (!message.trim() || !targetUser) return;

        // Emit pesan pribadi
        socket.emit("private_message", {
            toUserId: targetUser,
            fromUserId: username,
            message,
        });

        // Tambahkan ke UI
        setChat((prev) => [...prev, { sender: username, message }]);
        setMessage("");
    };

    return (
        <div>
            <h2>Private Chat</h2>
            {/* <p>From: <strong>{username}</strong> ➡ To: <strong>{targetUser}</strong></p> */}
            <div>
                {userStatus && <p style={{ color: userStatus.includes('online') ? 'green' : 'red' }}>{userStatus}</p>}

            </div>
            <div
                style={{
                    height: "300px",
                    overflowY: "auto",
                    border: "1px solid #ccc",
                    padding: "10px",
                    marginBottom: "10px"
                }}
            >
                {chat.map((msg, i) => (
                    <div
                        key={i}
                        style={{
                            textAlign: msg.sender === username ? "right" : "left",
                            margin: "4px 0"
                        }}
                    >
                        <p style={{ margin: 0 }}>
                            <strong>{msg.sender}</strong>: {msg.message}
                        </p>


                    </div>
                ))}


            </div>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type message..."
                style={{ width: "70%", padding: "5px" }}
            />
            <button onClick={sendMessage} style={{ padding: "6px 12px", marginLeft: "10px" }}>
                Send
            </button>
        </div>
    );
}
