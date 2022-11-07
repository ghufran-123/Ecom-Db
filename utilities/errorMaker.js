function err(msg,status){
        let err = new Error();
        err.message = msg;
        err.status = status; 
        return err;
    }

module.exports.err = err;