import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


function UpdateBlog() {


   const [blogData, newBlogData] = useState([]);
   const [blogId, getBlogId] = useState('')
   const [show, setShow] = useState(false);
   const [name, setName] = useState("");
   const [blogDataD, setBlogData] = useState("");
   const [blogLink, setBlogLink] = useState("");
   const [imageLink, setImageLink] = useState("");

   const handleClose = () => {

      setShow(false);
      updateBlogData();
   }

   const handleShow = (data) => {
      getBlogId(data)
      setShow(true);
   }


   useEffect(() => {

      getBlogData();
   }, [])

   async function getBlogData() {
      let data = await fetch('http://localhost:5000/blogs');
      let blogs = await data.json();
      newBlogData(blogs)

   }

   const updateBlogData = () => {
      axios.put("http://localhost:5000/update", { blog_name: name, blog_data: blogDataD, blog_link: blogLink, blog_image: imageLink, blog_id: blogId.blog_id }).then(
         (response) => {

            if (response.status === 200) {
               alert('successfully updated');
               getBlogData();

            }
         })
   }

   // console.log(blogData)
   // getBlogData()
   console.log(blogId)

   return (
      <>

         <h2 className='my-4 text-center' >Update Blog</h2>

         {

            blogData.length > 0 ?

               blogData.map((data) => {

                  return (
                     <>
                        <Card style={{ width: '28rem' }} className="d-container" >

                           <Card.Img variant="top" src={data.blog_image} />
                           <Card.Body>
                              <Card.Title>{data.blog_name}</Card.Title>
                              <Card.Text>
                                 {data.blog_data}
                              </Card.Text>
                              <Button variant="primary">{data.blog_link}</Button>
                              <Button variant="primary" className='my-3' onClick={() => { handleShow(data) }}>
                                 Update
                              </Button>
                           </Card.Body>

                        </Card>
                        <br />
                     </>
                  )
               })
               :
               <p className='text-center'>No Data!</p>

         }


         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Update Blog</Modal.Title>
            </Modal.Header>
            <Modal.Body><Form>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Blog Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter Blog Title" defaultValue={blogId.blog_name} onChange={(e) => {
                     setName(e.target.value)
                  }} />

               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Add Description" defaultValue={blogId.blog_data} onChange={(e) => {
                     setBlogData(e.target.value)
                  }} />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Add Link</Form.Label>
                  <Form.Control type="text" placeholder="Add Link" defaultValue={blogId.blog_link} onChange={(e) => {
                     setBlogLink(e.target.value)
                  }} />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Add Image</Form.Label>
                  <Form.Control type="text" placeholder="Add Link" defaultValue={blogId.blog_image} onChange={(e) => {
                     setImageLink(e.target.value)
                  }} />
               </Form.Group>

               {/* <Button variant="primary" type="submit" onClick={sendBlogData} >
                  Submit
               </Button> */}
            </Form></Modal.Body>
            <Modal.Footer>

               <Button variant="primary" onClick={handleClose}>
                  Save Changes
               </Button>
            </Modal.Footer>
         </Modal>

      </>
   )
}

export default UpdateBlog;


