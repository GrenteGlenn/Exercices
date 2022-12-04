import { my_db } from "./server";

export function list(socket){
    my_db.query("SELECT name FROM rooms" , function (err: any, result: any){
        for (let i = 0; i < result.length; i += 1) {
            socket.emit('message',result[i].name);   
        }
        

    })
}
