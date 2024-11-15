import React, { useEffect, useState } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1/products'
const Store = () => {
const [delProductId, setDelProductId] = useState(0);    
const [productsList, setProductsList] = useState([])
  const [inputValue, setInputValue] = useState('')
  function handleInput(e) {
    setInputValue(e.target.value)
  }
  const [prise, setPrise] = useState(0)
  function handleInputPrise(e) {
    setPrise(e.target.value)
  }
  const [description, setDescription] = useState('')
  function handleInputDescription(e) {
    setDescription(e.target.value)
  }
  const [productId, setproductId] = useState(0)
  function handleInputproductId(e) {
    setproductId(e.target.value)
  }
  function handleSubmitToDelete(e) {
    e.preventDefault()
    axios
      .delete(
        `/${delProductId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
        },
      )
      .then((res) => {
        console.log(res)
      })
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (!inputValue || !prise || !description || !productId) {
      alert('All fields must be filled out')
      return
    }
    formProduct()
    setInputValue('')
    setPrise(0)
    setDescription('')
    setproductId('')
  }

  function forceDeleteProduct(id) {
    axios
    .delete(
      `/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
      },
    )
    .then((res) => {
      console.log(res)
    }).catch((error) => {
        console.error('Error fetching products:', error)
      })
      
  }

//   useEffect(() => {
//      productsList.map((product)=>{
//          if(product.title.toLowerCase() !== "maks"){
// forceDeleteProduct(product.id)
//          }
//      }) 

//   }, [productsList]);

  function formProduct() {
    axios
      .post(
        '',
        {
          title: inputValue,
          price: prise,
          description: description,
          categoryId: productId,
          images: ['https://placeimg.com/640/480/any'],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
        },
      )
      .then((res) => {
        console.log(res)
      })
  }





  function addProduct() {
    axios
      .post(
        '',
        {
          title: 'Oleksii',
          price: 10,
          description: 'A description',
          categoryId: 1,
          images: ['https://placeimg.com/640/480/any'],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
        },
      )
      .then((res) => {
        console.log(res)
      })
  }

  async function delProduct() {
    try {
      const res = await axios.delete('/246')
    } catch (error) {
      console.log(error)
    }
  }

  // const filteredProductlist = productsList.filter((product)=>{

  //     return productsList.indexOf(product) !==
  // })

    function handleDelProductId(e) {
        setDelProductId(e.target.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmitToDelete}>
            <label>Delete Product</label>
            <input type="number" value={delProductId} onChange={handleDelProductId} />
            <br />
            <button type={'submit'}>Delete Product</button>
        </form>

      <form onSubmit={handleSubmit}>
        <label>Title</label> <br />
        <input onChange={handleInput} value={inputValue} type="text" />
        <br />
        <label>Prise</label>
        <br />
        <input onChange={handleInputPrise} value={prise} type="number" />
        <br />
        <label>Description</label>
        <br />
        <input
          onChange={handleInputDescription}
          value={description}
          type="text"
        />
        <br />
        <label>Product category id</label>
        <br />
        <input onChange={handleInputproductId} value={productId} type="number" />
        <br />
        <br />
        <button type="submit" onSubmit={handleSubmit} onClick={formProduct}>
          Add a product
        </button>
        <br />
        <br />
      </form>

      <hr />

      <button onClick={addProduct}>Add product</button>
      <button onClick={delProduct}>Delete</button>
      <ul>
        {productsList.reverse().map((product) => {
          return (
            <li>
              <h1 key={product.id}>
                <b>Title: </b>
                {product.title}
              </h1>

              <p>
                <b>Prise:</b> {product.price}
              </p>

              <p>
                <b>Description:</b> {product.description}
              </p>

              <p>
                <b>Unique id:</b> {product.id}
              </p>

              <p>
                <b>Product category name:</b> {product.category.name}
              </p>

              <img src={product.category.image} width="200" />
            </li>
          )
        })}

       
      </ul>
    </div>
  )
}

export default Store
