# Wireframes

https://www.figma.com/proto/3kJKszHBhxdvMal2AvmNhv/web2?node-id=1-2&starting-point-node-id=1%3A2

# Checkist

Caixas de Diálogo

- [X] prompt
- [X] alert
- [X] confirm

Temporizadores

- [ ] setInterval
- [X] setTimeout

Funções

- [X] Função anônima com argumento
- [X] Função anônima sem argumento
- [X] Função anônima com retorno
- [X] Função auto-executável - não será aceita a mesma do Module Pattern
- [X] Função com nome
- [X] Função aninhada/local - declarar uma função dentro de outra
- [ ] Passagem de uma função como parâmetro para outra função - ambas as funções precisam ser implementadas pelo aluno
- [X] Função Flecha - Arrow Function

Eventos

- [X] Evento de carregamento do documento - onload
- [ ] Evento de movimento do mouse
- [ ] Evento de teclado - usar charCode ou keyCode
- [X] Eventos de formulário - onfocus e onblur
- [ ] Imprimir alguma propriedade/atributo do objeto event recebido como parâmetro na função tratadora de evento

Acesso aos elementos DOM do HTML

- [X] Via referência DOM pelo id do elemento HTML - acesso sem uso do getElementByID ou querySelector, o id do objeto DOM é o próprio nome da variável
- [X] Via getElementByID()
- [X] Via getElementsByName()
- [ ] Via getElementsByTagName()
- [X] Via seletores CSS usados na função querySelector() ou querySelectorAll()

Tratadores de Evento

- [ ] Especificar o tratador de evento inline - registro do evento no HTML
- [ ] Especificar o tratador de evento no modo tradicional - registro do evento no JS com prefixo on via atributo de um objeto DOM
- [X] Especificar o tratador de evento com a função addEventListener - registro do evento no JS
- [ ] Usar o operador this em funções tratadoras de eventos.

Objetos Nativos

- [ ] Usar pelo menos 3 métodos de manipulação de array
- [X] Usar laço de repetição (for..in ou for..of ou forEach)
- [ ] Usar pelo menos 3 métodos para manipulação de string
- [X] String Template - a String com crase e ${}
- [X] Manipulação do CSS de forma nativa via atributo style e classList

Objetos

- [X] Criar objeto usando função construtora ou notação literal
- [X] (Obrigatório) Criar objetos a partir da definição de classes do ES6 - a classe precisa ser definida em arquivo separado, sendo o nome do arquivo em letras minúsculas no estilo dashed-case e nome da classe em UpperCamelCase
- [ ] Usar herança prototipal nativa ou herança de classes do ES6

Qualidade do código

- [ ] Usar um Style Guide - apresentar o uso de pelo menos 10 regras do style escolhido (sugerido AirBnb)
- [ ] Usar um Lint - corrigir todos os problemas informados pelo lint (sugerido JSHint - usar o arquivo .jshintrc disponível no moodle)
- [ ] Usar strict mode - em todos os arquivos
- [ ] Usar Module Pattern com função auto-executável ou o conceito de módulo do ES6 com operadores export e import
- [ ] Usar pasta assets e subpastas resources e libraries para organizar o código
- [ ] Usar let ou const ao invés de var
- [ ] Nomes de arquivos HTML, JS e CSS minúsculos e separados por hífen (dashed-case)

Formulário

- [ ] Validação de formulário com onsubmit usando os métodos tradicionais - é a fase executada após a validação via HTML5
- [ ] Validação de formulário com HTML5 API
- [ ] Customizar as mensagens nos balões de mensagem
- [ ] Usar os atributos de validação dos inputs - required ou type="email" ou outros
- [ ] Usar expressões regulares para validação - usar no atributo pattern do respectivo input
- [ ] Ler e escrever em elementos input com a propriedade value
- [ ] Alterar o conteúdo de elementos div ou p com a propriedade innerHTML ou textContent
- [ ] Manipulação de elemento de listagem, como checkbox, radio ou select
- [ ] Acesso aos elementos de um formulário via hierarquia (caminho) de objetos, ou seja, array forms e elements

