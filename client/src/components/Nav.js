import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


function NavBar() {
   return (
      <div>

         <Nav
         >
            <Nav.Item>
               <Nav.Link><Link to="/" > Create Blog </Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link><Link to="/read-blog" > Read Blog</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link > <Link to="/update-blog" > Update Blog</Link> </Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link >
                  <Link to="/delete-blog" > Delete Blog</Link>
               </Nav.Link>
            </Nav.Item>
         </Nav>
      </div>
   )
}

export default NavBar;
