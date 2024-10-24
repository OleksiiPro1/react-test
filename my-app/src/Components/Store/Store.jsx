import React, {useEffect, useState} from 'react';

const Store = () => {
    const [offset, setOffset] = useState(0);
const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=1`)
        .then((res) => res.json())
        .then((data) => {
            setProductsList((prod) => [...prod, ...data]);
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        });
}, [offset]); 

// const filteredProductlist = productsList.filter((product)=>{
    
//     return productsList.indexOf(product) !== 
// })
    return (
        <div>
            <div>
               
                    
                    {productsList.map((product)=>{
                        return (
                    <div>
                        <h1 key={product.id}><b>Title: </b>{product.title}</h1>

                        <p><b>Prise:</b> {product.price}</p>
 
                        <p><b>Description:</b> {product.description}</p>

                        <p><b>Product category id:</b> {product.category.id}</p>

                        <p><b>Product category name:</b> {product.category.name}</p>

                        <img src={product.category.image} width="200" />
                    </div>
                    )                      
                    })}
                   
                

                <button onClick={()=>{
                    setOffset(offset+1)
                }}>next page</button>
            </div>
        </div>
    );
    
}

export default Store;
