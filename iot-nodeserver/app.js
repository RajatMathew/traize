const express = require("express");

const app = express()

const axios = require("axios");

setTimeout(() => {

    
    app.get(`http://127.0.0.1:4000/getData`)
    .then(res => {
        console.log(res.data)
    }).catch((error)=> {
        console.log(error);
    })
        
    // }).then( function () {
    //     console.log("oke set")
    // });  
    
}, 4000);
 app.listen(9000);