import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Create_Blog() {

   const [name, setName] = useState("");
   const [blogData, setBlogData] = useState("");
   const [blogLink, setBlogLink] = useState("");
   const [imageLink, setImageLink] = useState("");

   const sendBlogData = async (e) => {
      e.preventDefault();
      console.log(name, blogData, blogLink)


      let data = await fetch('http://localhost:5000/create-new-blog', {
         headers: {
            "Content-type": "application/json; charset=UTF-8"
         },
         method: "POST",
         body: JSON.stringify({
            blog_name: name,
            blog_data: blogData,
            blog_link: blogLink,
            blog_image: imageLink
         }),

      }
      )

      if (data.status === 200)

         alert('blog created successfully')

   }
   return (
      <div className="App d-container">

         <h2 className='my-4 text-center' >Add Blog</h2>
         <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Blog Title</Form.Label>
               <Form.Control type="text" placeholder="Enter Blog Title" onChange={(e) => {
                  setName(e.target.value)
               }} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Description</Form.Label>
               <Form.Control type="text" placeholder="Add Description" onChange={(e) => {
                  setBlogData(e.target.value)
               }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Add Link</Form.Label>
               <Form.Control type="text" placeholder="Add Link" onChange={(e) => {
                  setBlogLink(e.target.value)
               }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Add Image</Form.Label>
               <Form.Control type="text" placeholder="Add Link" onChange={(e) => {
                  setImageLink(e.target.value)
               }} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={sendBlogData} >
               Submit
            </Button>
         </Form>
      </div>
   )
}

export default Create_Blog;