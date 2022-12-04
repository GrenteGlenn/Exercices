
    
export function pm(listNames, socket, content: string[]) {  	
    if (content[0] === "--pm "){	//Identifie la commande --pm

        const name = content[1]	// récupère le nom
    
        content.shift() // retire la cmd et le premier argument du content
        content.shift()
        let pm = content.join(" ") // rassemble toutes les chaines de charactère en une seul
        pm.trim(); // recupere le message sans le 1er espace
        
        if(name in listNames ){	// Si le nom est dans la list
            
            socket.to(listNames[name]).emit('private', {pm,name});	//Envoie le socket.id au client
            
        } 
        return true;
    }		
    
    return false;
    


} 					
  