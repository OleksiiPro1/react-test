import React, {useEffect, useState} from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1/products';
const Store = () => {
    const [inputValue, setInputValue] = useState('');
    function handleInput(e) {
        setInputValue(e.target.value);
    }
    const [prise, setPrise] = useState(0);
    function handleInputPrise(e) {
        setPrise(e.target.value);
    }
    const [description, setDescription] = useState('');
    function handleInputDescription(e) {
        setDescription(e.target.value);
    }
        const [productId, setproductId] = useState('');
        function handleInputproductId(e) {
            setproductId(e.target.value);
        }

        function handleSubmit(e) {
            e.preventDefault();
            if(!inputValue || !prise || !description || !productId ) {
                alert('All fields must be filled out');
                return;
            }
            formProduct();
            setInputValue('');
            setPrise(0);
            setDescription('');
            setproductId('');

        }

        function formProduct() {
            axios.post('', 
                {
                    title: inputValue,
                    price: prise,
                    description: description,
                    categoryId: productId,
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
            <form onSubmit={handleSubmit}>
                <label>Title</label> <br />
                <input onChange={handleInput} value={inputValue} type="text" /><br />
                <label>Prise</label><br />
                <input onChange={handleInputPrise} value={prise} type="text" /><br />
                <label>Description</label><br />
                <input onChange={handleInputDescription} value={description} type="text" /><br />
                <label>Product category id</label><br />
                <input onChange={handleInputproductId} value={productId} type="text" /><br /><br />
                <button type='submit' onSubmit={handleSubmit} onClick={formProduct}>Add a product</button>
                <br /><br />
            </form>

        <hr />






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
