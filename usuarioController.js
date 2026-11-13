 const usuarioController = {
    criarUsuario: (req, res) =>{    
        const { nome, dataNasc, email} = req.body;
        // Validação simples dos campos obrigatórios
        if(!nome|| !dataNasc || !email){
            console.log(req.body)
            return res.status(400).json({
                sucesso:false,
                mensagem: "Todos os campos (nome, dataNasc, email) são obrigatórios!"
            })
        }
        //Transformar e calcular os dados
        const NomeInteiro = String(nome);
        const DataNascimento = Number(dataNasc);
        const e_mail = String(email);

        const novoUsuario ={
            codigo,
            nome: NomeInteiro,
            Data_de_Nascimento: DataNascimento,
            email: e_mail,
            criadoEm: new Date().toISOString()
        }

        // Retorna a resposta HTTP 201 (Created)
        return res.status(201).json({
            sucesso:true,
            mensagem: "Usuario cadastrado com sucesso!",    
            novoUsuario    
        })
    }
}
module.exports = usuarioController;