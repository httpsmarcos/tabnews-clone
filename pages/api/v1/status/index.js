import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("select 1 + 1 as soma;");
  console.log(result.rows);
  response
    .status(200)
    .json({ chave: "alunos do curso.dev são acima da média" });
}

export default status;
