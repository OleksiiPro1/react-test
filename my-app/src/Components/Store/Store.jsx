import React, {useEffect, useState} from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1/products';
const Store = () => {
    const [offset, setOffset] = useState(0);
const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        // fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=1`)
        // .then((res) => res.json())
        // .then((data) => {
        //     setProductsList((prod) => [...prod, ...data]);
        // })
        // .catch((error) => {
        //     console.error('Error fetching products:', error);
        // });
        axios.get('').then((res) => {
            // console.log(res);
            
             setProductsList((prod) => [...prod, ...res.data]);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
}, [offset]); 

function addProduct() {
    axios.post('', 
        {
            title: "Oleksii",
            price: 10,
            description: "A description",
            categoryId: 1,
            images: ["https://placeimg.com/640/480/any"]
          },
          {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            }
          }
    ).then((res)=>{console.log(res);
    })
}

async function delProduct() {
    try {
        const res = await axios.delete('/246')
    } catch (error) {
        console.log(error);
    }
    
}

// const filteredProductlist = productsList.filter((product)=>{
    
//     return productsList.indexOf(product) !== 
// })
    return (
        <div>
            <button onClick={addProduct}>Add product</button>
            <button onClick={delProduct}>Delete</button>
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
