import  express from "express";
import product_routes from "./router/product_routes.js"; 
import notas_routes from "./router/notas_routes.js"

// SE INICIALIZA EL RESERVIDOR
const app =express();

const PORT=process.env.PORT || 3400;

app.listen(PORT);

app.use(express.json())

app.use("/api",product_routes);
app.use("/api",notas_routes);