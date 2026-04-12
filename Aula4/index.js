import express from 'express'

async function run() {
    const app = express();

    app.listen(3333, () =>
        console.log("Servidor iniciadp em : http://localhost:3333"),)

}

run()