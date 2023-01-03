import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ReadBlog() {


   const [blogData, newBlogData] = useState([]);


   useEffect(() => {

      getBlogData();
   }, [])

   async function getBlogData() {
      let data = await fetch('http://localhost:5000/blogs');
      let blogs = await data.json();
      newBlogData(blogs)

   }

   console.log(blogData)




   return (
      <>
         <h2 className='my-4 text-center' >Read Blog</h2>

         {

            blogData.length > 0 ?

               blogData.map((data) => {

                  return (
                     <>
                        <Card style={{ width: '28rem' }} className="d-container">

                           <Card.Img variant="top" src={data.blog_image} />
                           <Card.Body>
                              <Card.Title>{data.blog_name}</Card.Title>
                              <Card.Text>
                                 {data.blog_data}
                              </Card.Text>
                              <Button variant="primary">{data.blog_link}</Button>
                           </Card.Body>
                        </Card>
                        <br />
                     </>
                  )
               })
               :
               <h1 className='text-center'>No Data !</h1>

         }

      </>
   )
}

export default ReadBlog;


