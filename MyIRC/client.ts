const socket = require('socket.io-client')('http://localhost:3000');
const repl = require('repl');
const clc = require("cli-color");

// const username = null // déclaration de la variable qui va stocker le nom de l'user
  
socket.on('connect', () => { 
  socket.on('message', (msg) => {
  console.log(msg)
  });

      
      socket.on('private', (data) => {  // affiche le message envoyer
        const { name, pm } = data      
        console.log(`${name}:${pm}`.split('\n') [0])
      })
      // const data = {name: username, userId: socket.id}; // recupère le nom et l'ID
      // socket.emit('setSocketId', data); // envoie les donnée au serveur


      repl.start({
        prompt: '',
        eval: (input) => {
          socket.send ({ input })
        }
      })

    })
