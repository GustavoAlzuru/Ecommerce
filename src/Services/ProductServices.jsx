export const getProducts = async buscador => {
        return await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscador}`).then(data => data.json())
}
export const getProduct = async id => {
        return await fetch(`https://api.mercadolibre.com/items/${id}`).then(data => data.json())
} 