import { Socket, io } from "socket.io-client"

class SocketService {
    socket: Socket|undefined;

    // adding username as arg
    async connect(setMsgs: any, username: string) {

        // send username at handshake
        this.socket = io("http://localhost:4000", {query: {username}})

        // parse json-message
        this.socket.on("server-msg", (data: {msg:string, username: string}) => {
            console.log("new msg from server:" + data.msg);
            
            // ignore "got-it" message (sent only to sender)
            if (data.username !== "self") {                
                setMsgs((prevMsgs: any) => [...prevMsgs, data.username + ": " + data.msg]);
            }
        })
    }

    send(msg: string): void{
        this.socket?.emit("new-msg", msg)
    }
    async disconnect(){
        this.socket?.disconnect();
        this.socket = undefined;
    }
}

const socketService = new SocketService();

export default socketService;

