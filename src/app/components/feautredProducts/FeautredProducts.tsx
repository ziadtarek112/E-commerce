import { Product } from '../../../models/index';
import { products } from '../../../constants/index';
import Card from '../card/Card'; // Add missing import statement for Card component
import './FeaturedProducts.scss'
interface FeautredProductsProps {
    type: string;
}

const FeautredProducts = ({ type }: FeautredProductsProps) => {
    return (
        <div className="featuredProducts">
         
                <h1>{type} Products</h1>

            <div className="products">
                {products.map((item: Product) => (
                    <Card item={item} key={item.id} /> // Ensure that the item prop is correctly passed to the Card component
                ))}
            </div>
        </div>
    );
};

export default FeautredProducts;
