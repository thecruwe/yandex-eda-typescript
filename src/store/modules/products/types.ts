export type TProduct = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    quantity: number,
    rating: object,
    title: string,
}

export type TStateProduct = {
    products: TProduct[],
}

export type TProductsWithId = {
    [key: number]: TProduct
}