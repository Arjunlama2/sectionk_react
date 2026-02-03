import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Card from '../components/Card'




const quote = "Best Furniture For Your Castle..."
const data1 = "teting"
function Home() {
  const [product, setProduct] = useState()
  useEffect(() => {
    fetch("https://abhit-batch-bn.onrender.com/api/v1/product")
      .then((response) => {
        return response.json()
      }).then((res) => {
       setProduct(res.data)
      })


      .catch((err) => {
        console.log(err)
      })
  },[])
  return (
    <div className='bg-[#F2F0FF]'>
      <div className='px-20'>
        <Hero data={quote} />
      </div>
      <div className='px-20 grid grid-cols-4 gap-5'>
        {
          product?.map((el) => {
            return <Card data={el} />
          })
        }


      </div>

    </div>
  )
}

export default Home