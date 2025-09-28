const express = require("express");
const db = require("./db/db");
const cors = require("cors");
const Fato = require("./models/Fato");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.post("/ensinar", async(req, res)=>{
    const {pergunta, resposta} = req.body;
    if(!pergunta || !resposta) return res.json({message: "Dados incompletos"});

    const fato = await Fato.create({
        pergunta: pergunta.toLowerCase(),
        resposta
    });

    res.json({message: "aprendido!!"});

});

app.post("/perguntar", async(req, res)=>{
    const {pergunta} = req.body;
    if(!pergunta) return res.json({message: "Precisa da pergunta"});

    const fatos = await Fato.findAll();
    const p = pergunta.toLowerCase();

    const fato = fatos.find(f => p.includes(f.pergunta));

    if(fato){
        return res.json({message: fato.resposta});
    }else{
        return res.json({message: "Não sei a resposta"});
    }

})


db.sync({force: false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on port https://localhost:${PORT}`)
    })
}).catch((err)=>{
    console.log(err);
})

