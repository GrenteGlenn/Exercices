const clc = require("cli-color");


export default function login(username, password, user, socket, db){
    db.query("SELECT * FROM users WHERE username = ?" , [username], function (err: any, result: any) {
    if(err) throw err;
        if (result.length == 0) {
            socket.emit('message', clc.red('cet utilisateur n\'existe pas'))
            socket.emit('message', '--register\n--login:');
            return false;
        } else if (password == result[0].password) {
            user = username;
            socket.data.user_id = result[0].id;
            socket.emit('message', clc.green('Connexion réussie, vous pouvez discuter !'))
            socket.emit('message', 'Accueil');
            socket.emit('message', clc.green('=== Commencer à discuter ==='))
            return true;
        } else {
            socket.emit('message', clc.red('le mot de pass est erroné, veuillez réessayer'))
            socket.emit('message', '--register \n--login :');
        }
    });
}
