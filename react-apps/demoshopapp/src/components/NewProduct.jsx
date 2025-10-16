import './NewProduct.css';
import ItemDate from './ItemDate';
import ProductForm from './ProductForm';
function NewProduct(){

    function saveProduct(){
        console.log("Inside new")
    }
    return ( <div className='new-product'>
        <ProductForm onSaveProduct={saveProduct}/>
    </div>);
}
export default NewProduct;