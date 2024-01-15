export interface Product {
    id: number;
    img: string;
    img2?: string;
    desc?: string;
    title: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
}