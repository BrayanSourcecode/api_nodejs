import mysql from"mysql2"


const conection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"tienda"
})
export default conection;

// // conection.connect((err)=>{
// //     if(err){
// //         console.log("fallo"+err);
// //     }else{
// //         console.log("exitosa");
// //     }
// })



