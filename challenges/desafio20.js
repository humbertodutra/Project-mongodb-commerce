db.produtos.update({
    nome: "Quarteirão com Queijo",
}, { $pop: { ingredientes: -1 } });

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 }).pretty();