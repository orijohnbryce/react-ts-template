import React, { useReducer, useState } from "react";
import { io, Socket } from "socket.io-client";
import socketService from "../../services/socketService";

type Props = {};

const Chat = (props: Props) => {
  const [user, setUser] = useState("");  
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState<string[]>([]);

  // trick for rerendering
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  async function connect() {
    await socketService.connect(setMsgs, user);    
  }
  async function disconnect() {
    await socketService.disconnect();

    // rerender
    forceUpdate()
  }

  return (
    <div>
      {!socketService.socket && (
        <>
          <input
            placeholder="enter name"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          {!socketService.socket && <button onClick={connect}> Connect </button>}
        </>
      )}

      {socketService.socket && (
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
