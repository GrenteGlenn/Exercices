
export function storageNames(listNames, socket){
    socket.on('message',(data) => {
        
        if (data.input.match(RegExp('^(--register)')) && data.input.match(RegExp('^(--login)'))) { // check si l'username rentré existe deja 
            
            /*
            if(data in listNames){	
                return;			
            } 
            else {
                const userName = data.name	
                const userId = data.userId;	
                listNames[userName] = userId;	
                console.log(listNames);		
            }
            */
        }
        
        console.log();        
    });
    
    
    

}
