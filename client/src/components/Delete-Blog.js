import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


function DeleteBlog() {


   const [blogData, newBlogData] = useState([]);
   const [blogId, getBlogId] = useState('')
   const [show, setShow] = useState(false);

   const handleClose = () => {

      setShow(false);
      deleteBlogData();
   }

   const handleShow = (id) => {
      getBlogId(id)
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

   const deleteBlogData = () => {
      axios.delete(`http://localhost:5000/delete/${blogId}`).then((response) => {

         if (response.status === 200) {
            alert('successfully deleted');
            getBlogData();

         }
      })
   }

   // console.log(blogData)
   // getBlogData()
   console.log(blogId)

   return (
      <>

         <h2 className='my-4 text-center' >Delete Blog</h2>

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

                              <Button variant="primary" className='my-3' onClick={() => { handleShow(data.blog_id) }}>
                                 Delete
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
               <Modal.Title>Delete Blog</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this blog ?</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={handleClose}>
                  Save Changes
               </Button>
            </Modal.Footer>
         </Modal>

      </>
   )
}

export default DeleteBlog;


