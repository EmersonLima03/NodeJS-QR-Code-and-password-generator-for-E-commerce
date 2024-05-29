import chalk from 'chalk'
const mainPrompt = {

        name: "select",
        description: chalk.yellow.bold ("Escolha a ferramenta ( 1 - QRCODE) ou (2 - PASSOWRD)"),
        pattern: /^[1-2]+$/, //Significa padrão e só permite a entrada de 1 ou dois
        message: chalk.red("Escolha apenas entre 1 e 2"),//mensagem de erro caso ele não escolha entre 1 ou 2
        required: true //Que é obrigatório

};

export default mainPrompt;