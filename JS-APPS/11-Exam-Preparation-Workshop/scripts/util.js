export const request = {

    get: (url) => fetch(url, {
        method: "GET",
        returnSecureToken: true
    }),
       
    post: (url, body = {}) => fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        returnSecureToken: true
    }),

    del: (url, body = {}) => fetch(url, {
        method: "DELETE",
        body: JSON.stringify(body),
        returnSecureToken: true
    })
}


export function convertObj(obj) {

    let result = {};

    Object.entries(obj).map( ([key, value]) => {

        let currCategory = (value.category).toLowerCase()
        
        switch(currCategory) {
            
            case 'js': {
                if(!result.js) result.js = {};

                result.js[key] = {key, ...value};
            }
            break;
            case 'java': {
                if(!result.java) result.java = {};

                result.java[key] = {key, ...value};
            }
            break;
            case 'python': {
                if(!result.python) result.python = {};

                result.python[key] = {key, ...value};
            }
            break;
            case 'c#': {
                if(!result.cSharp) result.cSharp = {};

                result.cSharp[key] = {key, ...value};
            }
            break;
        }
    })

    return result;

}

export function backOnClick() {
    history.back();
}