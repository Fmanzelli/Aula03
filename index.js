import mysql from "mysql2/promise";

async function start() {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'root',
            database: 'harve'
        })

        const selectUsuarios = "SELECT * FROM usuarios"
        const usuarios = await db.query(selectUsuarios);
        console.log(usuarios);

//         const insertUsuarios = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;

//         const usuario = {
//             nome: "testerson silva",
//             email: "test@email.com",
//             senha:"senha123",
//         };
//         const [resultadoInsert] = await db.query(insertUsuarios, [
//             usuario.nome,
//             usuario.email,
//             usuario.senha
//         ])
//         console.log(resultadoInsert);
        const insertProduto = 'INSERT INTO produtos (id_categoria,nome, preco, descricao) VALUES (2,?, ?, ?)';
        const produto = {
            nome:"tablet",
            preço:775.99,
            descrição: "tablet de 12"

        };
        const [resultadoInsert] = await db.query(insertProduto,[
            produto.nome,
            produto.preço,
            produto.descrição
        ])
        console.log(resultadoInsert)
        await db.end()

    } catch (error) {
        console.log(error.message);
        //Finaliza a execução do script para
        //  nao ficar consumindo memoria do nosso servidor atoa
        process.exit(1)
    }

}
start()
