export interface IMercadoria{
    id: number,
    name: string,
    category: string,
    price: number,
    store: string,
    img?: string
}

const MockMercadorias: IMercadoria[] = [
    {
        id: 1,
        name: "Arroz 5kg",
        category: "Alimentos",
        price: 28.9,
        store: "Supermercado Bom Preço",
        img: "https://supermercadobomdemais.com.br/wp-content/uploads/2020/05/Arroz-Branco-Prato-Fino-5kg.jpg"
    },
    {
        id: 2,
        name: "Feijão 1kg",
        category: "Alimentos",
        price: 7.5,
        store: "Mercado Central",
        img: "https://muffatosupermercados.vtexassets.com/arquivos/ids/295109-800-auto?v=637614479872230000&width=800&height=auto&aspect=true"
    },
    {
        id: 3,
        name: "Macarrão Espaguete",
        category: "Alimentos",
        price: 4.2,
        store: "Supermercado Bom Preço",
        img: "data:image/png;base64,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"
    },
    {
        id: 4,
        name: "Leite Integral 1L",
        category: "Bebidas",
        price: 5.3,
        store: "Atacadão",
        img: "https://assets.instabuy.app.br/ib.item.image.large/l-c54acdc6d1da4f50a37252efe847bbd7.jpeg"
    },
    {
        id: 5,
        name: "Café 500g",
        category: "Alimentos",
        price: 16.9,
        store: "Mercado Central",
        img: "https://s3.amazonaws.com/lepok.w/produtos/produtos/11005.webp"
    },
    {
        id: 6,
        name: "Refrigerante Cola 2L",
        category: "Bebidas",
        price: 8.99,
        store: "Atacadão",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-cDNK6oGtLXx2JhTDNeGP0Xzdr1CHbigXQA&s"
    },
    {
        id: 7,
        name: "Óleo de Soja 900ml",
        category: "Alimentos",
        price: 6.8,
        store: "Supermercado Bom Preço",
        img: "https://cocamarstore.vtexassets.com/arquivos/ids/162651/OLEO-DE-SOJA-900ML-UNID-NOVO.jpg?v=638231417481000000"
    },
    {
        id: 8,
        name: "Açúcar 1kg",
        category: "Alimentos",
        price: 3.9,
        store: "Mercado Central",
        img: "https://cdn.awsli.com.br/2500x2500/446/446822/produto/19593247/5f85211c37.jpg"
    },
    {
        id: 9,
        name: "Farinha de Trigo 1kg",
        category: "Alimentos",
        price: 5.1,
        store: "Atacadão",
        img: "https://d3gdr9n5lqb5z7.cloudfront.net/fotos/943581-1-15-08-2024-16-24-41-421.jpg"
    },
    {
        id: 10,
        name: "Biscoito Recheado",
        category: "Alimentos",
        price: 2.99,
        store: "Supermercado Bom Preço",
        img: "https://centaurodistribuidora.agilecdn.com.br/5038_1.jpg"
    },
    {
        id: 11,
        name: "Detergente Líquido",
        category: "Limpeza",
        price: 2.5,
        store: "Mercado Central",
        img: "https://source.unsplash.com/featured/?dishwashing"
    },
    {
        id: 12,
        name: "Sabão em Pó 1kg",
        category: "Limpeza",
        price: 12.7,
        store: "Atacadão",
        img: "https://source.unsplash.com/featured/?laundry-detergent"
    },
    {
        id: 13,
        name: "Amaciante 2L",
        category: "Limpeza",
        price: 14.3,
        store: "Supermercado Bom Preço",
        img: "https://source.unsplash.com/featured/?fabric-softener"
    },
    {
        id: 14,
        name: "Shampoo 350ml",
        category: "Higiene",
        price: 11.9,
        store: "Mercado Central",
        img: "https://source.unsplash.com/featured/?shampoo"
    },
    {
        id: 15,
        name: "Condicionador 350ml",
        category: "Higiene",
        price: 12.5,
        store: "Atacadão",
        img: "https://source.unsplash.com/featured/?conditioner"
    },
    {
        id: 16,
        name: "Sabonete 90g",
        category: "Higiene",
        price: 1.99,
        store: "Supermercado Bom Preço",
        img: "https://source.unsplash.com/featured/?soap"
    },
    {
        id: 17,
        name: "Papel Higiênico 12 rolos",
        category: "Higiene",
        price: 18.9,
        store: "Mercado Central",
        img: "https://source.unsplash.com/featured/?toilet-paper"
    },
    {
        id: 18,
        name: "Água Mineral 1.5L",
        category: "Bebidas",
        price: 2.2,
        store: "Atacadão",
        img: "https://source.unsplash.com/featured/?water-bottle"
    },
    {
        id: 19,
        name: "Suco de Laranja 1L",
        category: "Bebidas",
        price: 6.4,
        store: "Supermercado Bom Preço",
        img: "https://source.unsplash.com/featured/?orange-juice"
    },
    {
        id: 20,
        name: "Margarina 500g",
        category: "Alimentos",
        price: 7.2,
        store: "Mercado Central",
        img: "https://source.unsplash.com/featured/?margarine,butter"
    }
]

export default MockMercadorias