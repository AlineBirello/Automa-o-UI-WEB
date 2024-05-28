# language: pt
Funcionalidade: Cupom de descontos 

    Cenario: 1 Utilizar Cupom de desconto com sucesso  
            Dado: Como Cliente da EBAC-SHOP
            Quando: Quero utilizar o cupom
            Então: Para descontos em compras

    Cenario: 2 Utilizar Cupom com números e letras  
            Dado: Como Cliente da EBAC-SHOP
            Quando: Quero utilizar o cupom
            Então: Para descontos em compras
    
    Cenario: 3 Utilizar Cupom inválido
            Dado: Como Cliente da EBAC-SHOP
            Quando: Quero utilizar o cupom
            Então: o desconto não é concedido