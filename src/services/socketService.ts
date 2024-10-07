import {Socket, io} from "socket.io-client"

class SocketService {
    socket: Socket | undefined;

    async connect(setMsgs: any){

        this.socket = io("http://localhost:4000");

        this.socket.on("server-msg", (aiRes: string)=>{                        
            setMsgs((prev: string[])=>{return [...prev, aiRes]})
        })
    }
    async send(msg: string){
        this.socket?.emit("client-msg", msg)
    }

    async disconnect(){
        this.socket?.disconnect();
        this.socket = undefined;
    }
}

const socketService = new SocketService();
export default socketService;