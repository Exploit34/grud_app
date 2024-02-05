import app from "./app.js";

export const PORT = process.env.PORT || 3000
const Server = (PORT) => {
    app.listen(PORT, () => {
        console.log(`Servidor en ejecución en el puerto: ${PORT}`);
    }).on('error', (error) => {
        console.error(`Error al iniciar el servidor: ${error.message}`);
    });
};

export default Server;
