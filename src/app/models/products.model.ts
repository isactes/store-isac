export interface Category {
    id: string;
    name: string;
}


export interface Product {
    id: string;
    title: string;
    price: number;
    images: string[];
    description: string;
    category: Category;
    taxes?: number;
}
export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
    categoryId: number;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}

export  interface ImageNav {
    logom: string;
    logocart1: string;
    logocart2: string;
    logocart3: string;
    logocart4: string;
    logocart5: string;
    logocart6: string;
    logocart7: string;
}