export interface IMercadoria{
    id: number,
    name: string,
    category: string,
    price: number,
    store: string
}

const MockMercadorias: IMercadoria[] = [
    {
        id: 1, 
        name: "Arroz 5kg", 
        category: "Alimentos", 
        price: 28.9, 
        store: "Supermercado Bom Preço"
    },
    {   
        id: 2, 
        name: "Feijão 1kg", 
        category: "Alimentos", 
        price: 7.5, 
        store: "Mercado Central" 
    },
    {   
        id: 3, 
        name: "Macarrão Espaguete", 
        category: "Alimentos", 
        price: 4.2, 
        store: "Supermercado Bom Preço" 
    },
    {   
        id: 4, 
        name: "Leite Integral 1L", 
        category: "Bebidas", 
        price: 5.3, 
        store: "Atacadão" 
    },
    {   
        id: 5, 
        name: "Café 500g", 
        category: "Alimentos", 
        price: 16.9, 
        store: "Mercado Central" 
    },
    {   
        id: 6, 
        name: "Refrigerante Cola 2L", 
        category: "Bebidas", 
        price: 8.99, 
        store: "Atacadão" 
    },
    {   
        id: 7, 
        name: "Óleo de Soja 900ml", 
        category: "Alimentos", 
        price: 6.8, 
        store: "Supermercado Bom Preço" 
    },
    {   
        id: 8, 
        name: "Açúcar 1kg", 
        category: "Alimentos", 
        price: 3.9, 
        store: "Mercado Central" 
    },
    {   
        id: 9, 
        name: "Farinha de Trigo 1kg", 
        category: "Alimentos", 
        price: 5.1, 
        store: "Atacadão" 
    },
    {   
        id: 10, 
        name: "Biscoito Recheado", 
        category: "Alimentos", 
        price: 2.99, 
        store: "Supermercado Bom Preço" 
    },
    {   
        id: 11, 
        name: "Detergente Líquido", 
        category: "Limpeza", 
        price: 2.5, 
        store: "Mercado Central" 
    },
    {   
        id: 12, 
        name: "Sabão em Pó 1kg", 
        category: "Limpeza", 
        price: 12.7, 
        store: "Atacadão" 
    },
    {   
        id: 13, 
        name: "Amaciante 2L", 
        category: "Limpeza", 
        price: 14.3, 
        store: "Supermercado Bom Preço" 
    },
    {   
        id: 14, 
        name: "Shampoo 350ml", 
        category: "Higiene", 
        price: 11.9, 
        store: "Mercado Central" 
    },
    {   
        id: 15, 
        name: "Condicionador 350ml", 
        category: "Higiene", 
        price: 12.5, 
        store: "Atacadão" 
    },
    {   
        id: 16, 
        name: "Sabonete 90g", 
        category: "Higiene", 
        price: 1.99, 
        store: "Supermercado Bom Preço" 
    },
    {   
        id: 17, 
        name: "Papel Higiênico 12 rolos", 
        category: "Higiene", 
        price: 18.9, 
        store: "Mercado Central" 
    },
    {   
        id: 18, 
        name: "Água Mineral 1.5L", 
        category: "Bebidas", 
        price: 2.2, 
        store: "Atacadão" 
    },
    {   
        id: 19, 
        name: "Suco de Laranja 1L", 
        category: "Bebidas", 
        price: 6.4, 
        store: "Supermercado Bom Preço" 
    },
    {   
        id: 20, 
        name: "Margarina 500g", 
        category: "Alimentos", 
        price: 7.2, 
        store: "Mercado Central" 
    }
]

export default MockMercadorias