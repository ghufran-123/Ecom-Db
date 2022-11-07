var obj = {};
obj.username = (value)=>{
    var pattern = /^[a-z]$/;
    if(pattern.test(value)){
        const err = err("UserName contain only lowerCase Alphabets",406);
        throw err;    
    }
}

obj.password = (value)=>{
    var pattern = /[@#-_$%^&]/;
    if(pattern.test(value)){
        const err = err("Your Password must be strong",400);
        throw err;    
    }
}

obj.namePat = (value)=>{
    var pattern = /^[A-Z]/;
    if(pattern.test(value)){
        const err = err("Your Name Must start with a Capital alphabet",406);
        throw err;    
    }
}

obj.emailPat = (value)=>{
    var pattern = /^[a-z]+[@](gmail|hotmail|yahoo).(com|in|info)$/;
    if(pattern.test(value)){
        const err = err("Invailid Email",406);
        throw err;    
    }
}
module.exports = obj;