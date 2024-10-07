import React, { useState } from "react";
import { io, Socket } from "socket.io-client";
import socketService from "../../services/socketService";

type Props = {};

const Chat = (props: Props) => {
  const [user, setUser] = useState("");
  const [connected, setConnected] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState<string[]>([]);

  async function connect() {
    await socketService.connect(setMsgs, user);
    setConnected(true);
  }
  async function disconnect() {
    await socketService.disconnect();
    setConnected(false);
  }

  return (
    <div>
      {!connected && (
        <>
          <input
            placeholder="enter name"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <button onClick={connect}> Connect </button>
        </>
      )}

      {connected && (
        <>
          <button onClick={disconnect}> Disconnect </button>
          <br/>
          <br/>
          <input
            placeholder="enter-message"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
          <button
            onClick={() => {
              socketService.send(msg);
              setMsg("")
            }}
          >
            send
          </button>
          {msgs.map((m: string) => {
            return <p> {m}</p>;
          })}
        </>
      )}
    </div>
  );
};

export default Chat;
