# Storage
A interface de Armazenamento da Web Storage API fornece acesso ao armazenamento de sessão ou armazenamento local para um domínio específico, permitindo por exemplo, adicione, modifique ou exclua itens de dados armazenados.


## localStorage

#### Conceitos Básicos

* Semelheante ao sessionStorage, única diferença é que os dados não se expiram.
* Fica salvo mesmo o recarregamento da página ou a fechar a aba.
* Capacidade de 10MB
* Os dados são salvos no computador do usuário
* Não possuem tempo de expiração mas podem ser removidos
* Ficam salvos na aba Application do Dev tools

## sessiomStorage

#### Conceitos Básicos

* Similar ao localStorage (salvar dados, ler dados e excluir dados)
* Capacidade de 5MB
* Os dados são salvos no computador do usuário
* Os dados expiram quanda a aba é fechada
