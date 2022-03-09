
const productData = [
    {
        id: 1,
        name: 'Flores',
        productType: 'Indica',
        price: 50,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1609443934742-3e2383f9423f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        description: 'Cannabis, also known as marijuana among other names, is a psychoactive drug from the Cannabis plant. Native to Central and South Asia, the cannabis plant .'
    },
    {
        id: 2,
        name: 'Cripi',
        productType: 'Kush',
        price: 60,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1612995923001-27d03779d023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        description: 'Creepy fue el título de dos revistas especializadas en historieta de terror: Una estadounidense y otra española. Al parecer, la edición estadounidense recibía cartas de lectores quejándose de la influencia española que se notaba en la revista, mientras que la edición española lo hacía respecto a la influencia americana.1'
    },
    {
        id: 3,
        name: 'CBD',
        productType: 'Oil',
        price: 80,
        rating: 3,
        image: 'https://images.unsplash.com/photo-1556928045-16f7f50be0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        description: 'El CBD parece moderar el efecto eufórico del THC, el cual es un isómero del cannabidiol .2​ Sin embargo, ciertas investigaciones sugieren que el CBD puede incrementar el estado de alerta.3​ Se sabe que puede disminuir la velocidad de eliminación del THC del organismo al interferir con el metabolismo del THC en el hígado. No parece que el CBD afecte los receptores, tanto CB1 o CB2.4​'
    },
    {
        id: 4,
        name: 'Prensado',
        productType: 'Herb',
        price: 10,
        rating: 1,
        image: 'https://images.unsplash.com/photo-1630678691613-0ee767e22250?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        description: 'El cannabis prensado o marihuana prensada, también conocida como ladrillo1​ o, coloquialmente, «paragua» o «paraguayo/a» es un producto procesado derivado de Cannabis que ha sido adulterado con otras sustancias aglutinantes para abaratarlo, siendo de peor calidad. La mezcla se comprime y se corta en bloques que facilitan el transporte.'
    },
    {
        id: 5,
        name: 'Wax',
        productType: 'wax oil',
        price: 100,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1598052162874-e41952203254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80',
        description: 'A cannabis concentrate (also called marijuana concentrate, marijuana extract, or cannabis extract) is a highly potent tetrahydrocannabinol (THC) and/or cannabidiol (CBD) concentrated mass. Marijuana concentrates contain extraordinarily high THC levels that could once range from 40 to 80%, up to four times stronger in THC content than high grade or top shelf marijuana, which normally measures around 20% THC levels. By 2017, distilled concentrate was reportedly available at 99.58% THC conten'
    },
    {
        id: 6,
        name: 'Vaporizer',
        productType: 'Vapping Pen',
        price: 150,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1606753113192-59011d2dad85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        description: 'A cannabis concentrate (also called marijuana concentrate, marijuana extract, or cannabis extract) is a highly potent tetrahydrocannabinol (THC) and/or cannabidiol (CBD) concentrated mass. Marijuana concentrates contain extraordinarily high THC levels that could once range from 40 to 80%, up to four times stronger in THC content than high grade or top shelf marijuana, which normally measures around 20% THC levels. By 2017, distilled concentrate was reportedly available at 99.58% THC conten'
    },
    {
        id: 7,
        name: 'Cookies',
        productType: 'Cookies',
        price: 20,
        rating: 2,
        image: 'https://images.unsplash.com/photo-1560999448-1288f5c62468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        description: 'Las comidas y bebidas de cannabis, también llamadas comestibles de cannabis (del inglés, cannabis edibles), son comidas y bebidas hechas con cannabis o alguno de sus derivados. Algunos ingredientes de cannabis son la mantequilla de Marrakesh, o la tintura de cannabis; Algunas preparaciones culinarias de cannabis son los space cakes («pasteles espaciales») o el majún. Algunas bebidas de cannabis son el té de cannabis o el bhang.'
    },
]
export default productData;