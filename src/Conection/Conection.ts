const searchProduct = async (name_product: string) => {
    const url = `https://api.mercadolibre.com/sites/MLC/search?q=${name_product}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export default searchProduct;
