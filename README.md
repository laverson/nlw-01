# Next Level Week #01
> Permite que pessoas possam encontrar de forma prática empresas ou entidades que fazem a coleta de resíduos para reciclagem.


![GitHub issues][github_issues_badge] 
![GitHub][repository_license_badge] 
![Node_Badge][node_version_badge] 
![Npm_Badge][npm_version_badge] 
![Yarn_Badge][yarn_version_badge]
![React_Badge][web_react_badge] 
![React_Native_Badge][mobile_react-native_badge] 
![NodeJS_Badge][server_nodejs_badge]
![TypeScript][typescript_badge]
![LastCommit](https://img.shields.io/github/last-commit/laverson/ecoleta)

O aplicativo **Ecoleta** é um projeto desenvolvido durante a **Next Level Week #01**, ministrado por **[Diego Fernandes][diego_github_url]** CEO da **[Rocketseat][rocketseat_site]** utilizando as tecnologias ***TypeScript, NodeJs, React e React Native***.

Ele consiste em 3 projetos:

* **Server / back-end**
	* Responsável pelas regras de negócios.
* **Web / front-end**
	* Onde as empresas e/ou entidades poderão cadastrar os pontos de coleta, informando os dados necessários como:
		* a imagem do estabelecimento
		* dados como nome da entidade, e-mail e whatsapp
		* endereço contendo cidade e estado, bem como localização geográfica (inserindo um ponto no mapa)
		* e, por fim, escolhendo os ítens de coleta que ela recicla (Lâmpadas, Pilhas e Baterias, Papéis e Papelão, Resíduos Orgânicos e Óleo de cozinha)
* **Mobile**
	* Onde os usuários poderão, através do seu smartphone, filtrar os pontos de coleta cadastrados pelo Estado e Cidade e navegar pelo mapa até o ponto desejado e entrar em contato através de e-mail ou Whatsapp

![](../header.png)

## Pré-requisitos

Antes de baixarmos os projetos e executá-los temos que instalar o [NodeJS](https://nodejs.org/en/download/) em nossa máquina.

## Baixando o projeto

Através do terminal navegue até a pasta que deseja baixar o projeto e execute os comandos abaixo:


```bash
# Clonar o projeto
$ git clone https://github.com/laverson/ecoleta.git

# Acessar a pasta do projeto baixado
$ cd ecoleta

# Listando o conteúdo da pasta ecoleta
$ ls
LICENSE  mobile  README.md  server  web
```

## Rodando o servidor (Back-end)

Já dentro da pasta **ecoleta** vamos agora acessar a pasta **server** e instalar as dependências do projeto e executá-lo:

```bash
# Acessar pasta server
$ cd server

# Instalar dependências
$ npm install

# Executar o servidor (em modo de desenvolvimento)
$ npm run dev

# Se tudo ocorreu bem o servidor estará rodando em http://localhost:3333
```

Após executar o projeto será necessário criar a base de dados e popular com alguns dados padrões:

```bash
# Os dois commandos abaixo serão necessários apenas uma única vez
# Criar a base de dados
$ npm run knex:migrate

# Popular as tabelas necessárias
$ npm run knex:seed
```

## Rodando o web (Front-end)

Dentro da pasta **ecoleta** acesse a pasta **web** para instalar-mos as dependências do projeto e executá-lo:

```bash
# Acessar pasta web
$ cd web

# Instalar dependências
$ npm install

# Executar o servidor (em modo de desenvolvimento)
$ npm run start

# Se tudo ocorreu bem o front-end estará rodando em http://localhost:3000
```

## Rodando o mobile

Dentro da pasta **ecoleta** acesse a pasta **mobile** para instalar-mos as dependências do projeto e executá-lo:

```bash
# Acessar pasta mobile
$ cd mobile

# Instalar dependências
$ npm install

# Executar o servidor (em modo de desenvolvimento)
$ npm run start
```

> Para poder rodar o aplicativo movile você deve fazer o download do Expo no seu disposivo móvel, ele está disponível na loja de aplicativos (App Store e Play Store)


## Meta

Diego Laverson – [Linkedin](https://www.linkedin.com/in/diego-laverson) – dlaverson@gmail.com

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

[https://github.com/laverson](https://github.com/laverson/)

## Contribuindo

1. Faça o _fork_ do projeto (<https://github.com/laverson/ecoleta/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/featureName`)
3. Faça o _commit_ (`git commit -am 'Description of changes'`)
4. _Push_ (`git push origin feature/featureName`)
5. Crie um novo _Pull Request_

<!-- Github Users -->

[diego_github_url]: https://github.com/diego3g

<!-- Website Links -->

[rocketseat_site]: https://rocketseat.com.br/

<!-- Badges -->

[github_issues_badge]: https://img.shields.io/github/issues/laverson/ecoleta?color=green
[repository_license_badge]: https://img.shields.io/badge/license-MIT-green
[node_version_badge]: https://img.shields.io/badge/node-12.16.3-green
[npm_version_badge]: https://img.shields.io/badge/npm-6.14.4-red
[yarn_version_badge]: https://img.shields.io/badge/yarn-1.22.4-important
[web_react_badge]: https://img.shields.io/badge/web-react-blue
[mobile_react-native_badge]: https://img.shields.io/badge/mobile-react%20native-blueviolet
[server_nodejs_badge]: https://img.shields.io/badge/server-nodejs-important
[typescript_badge]: https://img.shields.io/badge/language-typescript-blue
