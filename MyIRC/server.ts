import { Server } from "socket.io";
import { Connection } from "./connection";
import { room } from "./room";
import { db } from "./connection";
import { storageNames } from "./storageNames";
import { pm } from "./PM";
const clc = require("cli-color");
const http = require('http').createServer();
const io = new Server(http);
const port: number = 3000;
export const my_db = db();
let listNames = {};
let room_id: number = 1

io.on('connection', (socket: any) => {

    let connected:boolean = false;
    let user: string;
    socket.join('Accueil');
    my_db.query("SELECT * FROM rooms WHERE name = 'Accueil'", function (err: any, result: any) {
        if(err) throw err;
        if (result.length == 0) {
            my_db.query("INSERT INTO rooms (id, name) VALUES (?, 'Accueil')", [room_id]);
    }});
    socket.emit('message', '--register : \n--login :');
    console.log('Un utilisateur s\'est connecté');
    storageNames(listNames, socket);

    socket.on('message', (evt) => {
        const { input } = evt;
        const message: string = input.trim().split('\n')[0];// enleve le \n de la fin
        const content: string[]= message.split(' ');//split la phrase au niveau des ' ' pour en faire un tableau.
        if (pm(listNames, socket, content))
            return
    
    
        if (connected === false) {
            console.log(`Connexion de l\'utilisateur ${content[1]} ...`)
            connected = Connection(connected, socket, user, content[0], content[1], content[2],my_db)

            user = content[1];
        } else {
            room(content[0], content[1], socket, user)
        }
    })

})

// io.on('disconnect', () => {
//     console.log('disconnected');
// })
http.listen(port, () => console.log(`server listening on port: ${port}`))
