import try_register from "./register";
import login from "./login";


// Accès à la db
export function db(){
    const mysql = require('mysql');
    const db = mysql.createConnection({
        host: '127.0.0.1',
        user: 'kinsuful',
        password: 'azerty',
        database: 'MyIRC'
    });

    //Connection à la db
    db.connect(function(err: any) {
        if(err) {
            console.error('Impossible de se connecter', err)
        }
        console.log('Connecté à la db');
        
    });
    return db;
}

export function Connection(connected, socket, user, commmand, username, password, db) {
    if (commmand.match(RegExp('^(--register)'))) { // check si l'username rentré existe deja 
       connected = try_register(socket, user, username, password,db)

    }else if (commmand.match(RegExp('^(--login)'))) { // check si l'username rentré existe deja 
        connected = login(username, password, user, socket, db)
    }else {
        socket.emit('message', '--register:\n--login:');
     
    }
    return connected;
}


