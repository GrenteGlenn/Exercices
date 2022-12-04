const clc = require("cli-color");

export default function try_register(socket, user, username, password, db){
    if ( username == null || password == null) {
        socket.emit('message', 'create login:\n create password');
        return false;
    } else {
        db.query("SELECT * FROM users WHERE username = ? ", [username], function (err: any, result: any) {
            if(err) throw err;
            if (result.length == 1) {
                socket.emit('message', clc.red('Cet utilisateur existe déjà'))
                socket.emit('message', 'Register\n Create login,Create password');
                return false;
            } else {
                db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password],);
                user = username;
                socket.emit('message', clc.green('Connexion réussie, vous pouvez discuter !'))
                socket.emit('message', 'Accueil');
                socket.emit('message', clc.green('=== Commencer à discuter ==='))
                return true;
            }
        });
    }
}







