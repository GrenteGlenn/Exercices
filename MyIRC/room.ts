import { db } from "./connection";
import { my_db } from "./server";
import { list } from "./list";


export function room(command, room, socket, username) {
    if(command.startsWith("--join")) {
        console.log(`l'utilisateur ${username} à crée le salon ${room})`);
        my_db.query("SELECT * FROM rooms WHERE name = ?", [room], function (err: any, result: any) {
            if(err) throw err;
            if (result.length == 0) {
                my_db.query('INSERT INTO rooms (name) VALUES (?)', [room]);
                my_db.query("SELECT * FROM rooms WHERE name = ?", [room], function (err: any, result: any) {
                    socket.data.room_id = result[0].id;
                    console.log(socket.data.room_id)
                }); 
            }
            socket.data.room = room
            socket.join(room);
            socket.send(`Vous êtes dans le channel:" ${room}`);

        });
    }
    if(command.startsWith("--list")){
        list(socket)
    }
    if (command.startsWith("--leave")) {
        console.log(`l'utilisateur ${username} à quitter le salon ${room}`);
        socket.leave(room);
        socket.data.room = null;
        socket.send(`User left:${room}`);
        socket.broadcast.emit(`'message', ${username} : ${command}`)
        console.log(`${username} : ${command}`);

    } else if (command.startsWith("--export")) {
        my_db.query("SELECT username, content FROM users u, messages m WHERE u.id = m.id_user AND u.id = ? INTO OUTFILE 'text.txt' FIELDS TERMINATED BY ': '", [socket.data.user_id]);
        socket.emit('message',"The export was successful")
        console.log("The export was successful");
    }
    
    else if (socket.data.room) {
        socket.to(socket.data.room).emit(`'message', ${username} : ${command}`)
        my_db.query('INSERT INTO messages (id_user, id_room, content) VALUES (?, 1, ?)', [socket.data.user_id, command],);
        console.log(`${username} : ${command}`);

    } else {
        socket.broadcast.emit(`'message', ${username} : ${command}`)
        my_db.query('INSERT INTO messages (id_user, id_room, content) VALUES (?, 1, ?)', [socket.data.user_id, command],);
        console.log(`${username} : ${command}`);

    }
}