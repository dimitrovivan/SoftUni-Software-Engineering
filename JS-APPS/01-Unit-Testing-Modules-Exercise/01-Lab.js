
function verifyHttp({method,uri,version,message}) {

    let specialCharactes = ['<', '>', '&', '"', `'`, '\\'];


    checkMethod(method);
    checkVersion(version);
    checkMessage(message);
      
    function checkMethod(method) {
        if(method != 'GET' && method != 'POST' && method != 'DELETE' && method != 'CONNECT') {
            throw new Error('Invalid request header: Invalid method');
        } 
    }
    
    function checkVersion(version) {
        if(version != 'HTTP/0.9' && version != 'HTTP/1.0' && version != 'HTTP/1.1' && version != 'HTTP/2.0') {
            throw new Error('Invalid request header: Invalid version');
        } 
    }


    function checkMessage(message) {

        let hasSpecLett = false;

        for (let index = 0; index < message.length; index++) {
            const element = message[index];

            if (specialCharactes.includes(element)) {
                hasSpecLett = true;
                break;
            }
            
        }

        if(hasSpecLett) {
            throw new Error('Invalid request header: Invalid message');
        } 
    }

}


try {
    verifyHttp({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: '&>>'
      }
      )
} catch(e) {
    console.log(e.message);
}