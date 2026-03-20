export interface IComida {
    id: number,
    name: string,
    description?: string,
    price: number,
    portion: string,
    img?: string
}

const MockComidas: IComida[] = [
    {
        id: 1,
        name: "Pizza",
        description: "Contém glúten e lactose",
        price: 39.99,
        portion: "8 fatias",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSMiKaN6KCRR0PVCV-zjtIYToLPuFEN1_Gw&s"
    },
    {
        id: 2,
        name: "Hambúrguer",
        description: "Pão, carne, queijo e molho especial",
        price: 24.90,
        portion: "1 unidade",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8e/2a/59/capitao-charles-vane.jpg?w=900&h=500&s=1"
    },
    {
        id: 3,
        name: "Sushi",
        description: "Combo com peças variadas de sushi",
        price: 59.90,
        portion: "20 peças",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/57/12/c2/photo0jpg.jpg?w=900&h=500&s=1"
    },
    {
        id: 4,
        name: "Salada Caesar",
        description: "Alface, frango grelhado, croutons e molho Caesar",
        price: 29.50,
        portion: "1 prato",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPa9qb_uqPj3PdfJ3SBQRWMqGiclR2GVnjQ&s"
    },
    {
        id: 5,
        name: "Lasanha",
        description: "Lasanha à bolonhesa com queijo gratinado",
        price: 34.00,
        portion: "1 porção",
        img: "https://static.itdg.com.br/images/640-400/a9785927200dab579e1144c4afa6f6c8/lasanha.png"
    },
    {
        id: 6,
        name: "Taco",
        description: "Taco mexicano com carne temperada",
        price: 19.90,
        portion: "3 unidades",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTQ-puPx90wjmngdM5_AfGPP7N5wLggCrOw&s"
    },
    {
        id: 7,
        name: "Frango Frito",
        description: "Pedaços de frango empanado e crocante",
        price: 27.90,
        portion: "6 pedaços",
        img: "https://static.ndmais.com.br/2025/04/segredo-do-kfc-para-frango-frito-crocante.jpg"
    },
    {
        id: 8,
        name: "Macarrão",
        description: "Macarrão ao molho de tomate ou branco",
        price: 22.00,
        portion: "1 prato",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6P-ssG52NtX8HedMZwSUNhQtw8zO5Jw_9pw&s"
    },
    {
        id: 9,
        name: "Açaí",
        description: "Açaí com granola, banana e leite condensado",
        price: 18.50,
        portion: "500ml",
        img: "https://cdn.goomer.com.br/website/base/f0f/254/331/como-vender-acai.jpg"
    },
    {
        id: 10,
        name: "Churrasco",
        description: "Mix de carnes grelhadas",
        price: 79.90,
        portion: "2 pessoas",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKILIwveqNYHOUL15Dzp63R41kJiEnohgF3A&s"
    },
    {
        id: 11,
        name: "Pastel",
        description: "Pastel frito recheado com carne ou queijo",
        price: 12.50,
        portion: "1 unidade",
        img: "https://i.ytimg.com/vi/V3joY-bu8QU/maxresdefault.jpg"
    },
    {
        id: 12,
        name: "Coxinha",
        description: "Salgado recheado com frango desfiado",
        price: 8.00,
        portion: "1 unidade",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LDTbVg9N1fZpSPQyqdfgoZHZBGgvzN1fvQ&s"
    },
    {
        id: 13,
        name: "Feijoada",
        description: "Prato tradicional com feijão preto e carnes",
        price: 45.00,
        portion: "1 prato",
        img: "https://www.ajinomotofoodservice.com.br/wp/content/uploads/receitas/feijoada-1920x1080-11-01-2022-7djml.jpg"
    },
    {
        id: 14,
        name: "Panqueca",
        description: "Panqueca recheada com carne moída e molho",
        price: 21.90,
        portion: "4 unidades",
        img: "https://cdn0.tudoreceitas.com/pt/posts/0/7/2/panqueca_de_carne_moida_270_600.jpg"
    },
    {
        id: 15,
        name: "Esfiha",
        description: "Esfiha aberta de carne ou queijo",
        price: 6.50,
        portion: "1 unidade",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4bkcbB9ZlYQDB6tNy_1nf8HaeUPUx-hkUA&s"
    },
    {
        id: 16,
        name: "Risoto",
        description: "Risoto cremoso de cogumelos",
        price: 37.00,
        portion: "1 prato",
        img: "https://www.boqnews.com/wp-content/uploads/2020/11/risoto.png"
    },
    {
        id: 17,
        name: "Batata Frita",
        description: "Batatas fritas crocantes com sal",
        price: 15.00,
        portion: "300g",
        img: "https://www.tendaatacado.com.br/dicas/wp-content/webp-express/webp-images/uploads/2022/06/como-fazer-batata-frita-topo.jpg.webp"
    },
    {
        id: 18,
        name: "Wrap",
        description: "Wrap com frango, alface e molho",
        price: 23.50,
        portion: "1 unidade",
        img:"https://png.pngtree.com/thumb_back/fw800/background/20260113/pngtree-grilled-chicken-wrap-with-fresh-veggies-and-sauce-image_21109476.webp"
    },
    {
        id: 19,
        name: "Sorvete",
        description: "Sorvete de creme, chocolate ou morango",
        price: 14.00,
        portion: "2 bolas",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSpWccoQe1kwK8w7MSzORUv01jy05J2drJw&s"
    },
    {
        id: 20,
        name: "Poke",
        description: "Poke havaiano com peixe cru e arroz",
        price: 42.00,
        portion: "1 bowl",
        img: "https://www.becel.com.br/-/media/Project/Upfield/Brands/Becel-NL/Becel-BR/Assets/Recipes/1584187a-93ca-44b1-a693-d65d62709f90.jpg?rev=663ac0d7e3c94715b0e2dbbe9a16c9aa&w=900"
    }
]

export default MockComidas