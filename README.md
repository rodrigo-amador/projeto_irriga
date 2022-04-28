Para rodar o projeto rodar os comandos abaixo

Instala todos os packages:
    
    * npm install

Verificar os dados para conexão do banco no arquivo .env:
    
    * Os dados para conectar ao banco estão no arquivo .env, com o 'user'='root', 'senha'='', e a 'porta'=3306, apontando para o localhost, caso algum dos dados padrões seja diferente atualizar o .env

Roda o server:
    
    * npm run start

Roda o Standard para validar o padrão do projeto:
    
    * npm run standard

Rodar o teste unitario:
    
    * npm run test

Para rodar a pesquisa para todas as cidades via terminal:
    
    * npm run terminal-all

Para rodar a pesquisa para uma cidade especifica via terminal:
    
    * npm run terminal-one -- valor_id

    * Onde o valor_id deve ser o id do banco, hoje de 1 a 4

Demais informações

    * Os registros do retorno da API são salvos como historico, ou seja todos os retornos são sempre salvos e não são alterados ou removidos
    
    * Hoje o registro 4 "Três de Maio" não contem latitude/longitude, impossibilitando a pesquisa na API, uma outra rota permitia a pesquisa da posição geografica e depois a chamada da API de tempo, mas para testar o LOG foi feito somente a criação na pasta logs/error.log
    
    * O arquivo banco_irriga_completo.sql com as queries para insert no banco também contem a criação (caso não exista) schema e da tabela de cities
    
    * Projeto desenvolvido em node v12.13.0 e npm 8.4.1
    
