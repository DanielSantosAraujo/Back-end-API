const connection = require('./connection');

async function getAllAnimesModel(){
    const animes = await connection.query(
        'SELECT * FROM animes ORDER BY id'
    )

    return animes.rows;
}

async function getAnimeByIdModel(id){
    
    const anime = await connection.query(
        `SELECT * FROM animes WHERE id = ${id}`
    )

    return anime.rows[0];
}

async function setNovoAnimeModel(nome, ano, nota, genero, imagem, sinopse){
    await connection.query(
        `INSERT INTO animes (nome, ano, nota, genero, imagem, sinopse)
        VALUES ('${nome}', ${ano}, ${nota}, '${genero}', '${imagem}', '${sinopse}')`
    )

    return;
}

async function getAnimeByNameModel(nome){
    const anime = await connection.query(
        `SELECT * FROM animes WHERE nome LIKE '${nome}'`
    )

    return anime.rows[0];
}

async function updateAnimeModel(episodios, id){
     await connection.query(
        `UPDATE animes SET episodios = ${episodios} WHERE id = ${id}`
    )

    return;
}

async function deleteAnimeModel(id){
    await connection.query(
        `DELETE FROM animes WHERE id = ${id}`
    )
}

module.exports = {
    getAllAnimesModel,
    getAnimeByIdModel,
    setNovoAnimeModel,
    getAnimeByNameModel,
    updateAnimeModel,
    deleteAnimeModel
}