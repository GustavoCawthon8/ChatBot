curl -X POST http://localhost:3000/ensinar -H "Content-Type: application/json" -d '{"pergunta": "quem e o gustavo", "resposta": "Gustavo eh um Homem forte, bonito e ultramente inteligente"}'

curl -X POST http://localhost:3000/perguntar -H "Content-Type: application/json" -d '{"pergunta": "me diga, quem e o gustavo?"}'