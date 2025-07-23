function getManufacturerName(product) {
    return product?.details?.manufacturer?.name ?? 'Fornecedor desconhecido';
}

const productA = {
    id: 102,
    name: 'Teclado',
    details: {
        price: 300.50
    }
};

const productB = {
    id: 103,
    name: 'Mouse',
    details: {
        price: 150.75,
        manufacturer: {
            name: 'Logitech'
        }
    }
};

console.log(`Produto A: ${getManufacturerName(productA)}`);
console.log(`Produto B: ${getManufacturerName(productB)}`);