Projeto de uma API REST básica em JavaScript com a tecnologia Node.js

Uma API(Interface de Progamação de Aplicações) funciona como intermediadora entre a comunicação de um clent(lado do usuário) e o Back-End(lado do servidor)

Exemplo: cliente (client) -> garçom (API) -> cozinha (Back-End)

REST é o padrão de "normas" ou boas práticas para a comunicação dos dados da API, usando o protocolo HTTP

Padrão REST:

1 - Separação do client e do servidor
2 - STATELESS: Cada solicitação necessita ter todos os dados necessários para o servidor enternder o REQUEST e conseguir enviar a RESPONSE, além do uso de algum tipo de autenticação como tokens de sessão
3 - CACHEABLE: As respostas de uma requisição devem ser explicítas no sentido de mostrarem se a requisição pode ou não ser cacheada
4 - LAYERED SYSTEMS: O client acessar End-points sem a necessidade de saberem a complexidade que está ocorrendo por trás dos "panos"
5 - CODE-ON-DEMAND(opcional): o servidor enviar scripts para serem executados no dispositivo do

