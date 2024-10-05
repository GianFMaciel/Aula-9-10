const primeiratarefa = prompt(" Digite a primera tarefa que voce precisa realizar no dia a dia ", )
const segundatarefa = prompt(" Digite a segunda tarefa que voce precisa realizar no dia a dia ", )
const terceiratarefa = prompt(" Digite a terceira tarefa que voce precisa realizar no dia a dia ", )

const listatarefas = [primeiratarefa]
listatarefas[1]=segundatarefa
listatarefas[2]=terceiratarefa

const escolha = prompt("Digite o índice da tarefa que você já realizou 0, 1 ou 2 ")
listatarefas.splice(escolha, 1)

console.log(listatarefas)

