const express = require('express');
const app = express();
const cors = require("cors");
const connection = require('./connection');
const port = 5000;


app.use(express.json());
app.use(cors());



app.post("/create-new-blog", (req, resp) => {
   let data = "log Successfully Added"

   const blog_name = req.body.blog_name;
   const blog_data = req.body.blog_data;
   const blog_link = req.body.blog_link;
   const blog_image = req.body.blog_image

   connection.query(
      "INSERT INTO new_blog (blog_name, blog_data, blog_link,blog_image) VALUES (?,?,?,?)",
      [blog_name, blog_data, blog_link, blog_image],
      (err, result) => {
         if (err) {
            console.log(err);
         } else {
            resp.send(data)
         }
      }
   );

})


app.get("/blogs", (req, res) => {
   connection.query("SELECT * FROM new_blog", (err, result) => {
      if (err) {
         console.log(err);
      } else {
         res.send(result);
         // console.log('hi');
      }
   });
});

app.delete("/delete/:id", (req, res) => {
   const blog_id = req.params.id;
   console.log(req.param)
   connection.query("DELETE FROM new_blog WHERE blog_id = ?", blog_id, (err, result) => {
      if (err) {
         console.log(err);
      } else {
         res.send(result);
      }
   });
});

// app.post("/post/:id", (req,res) => {
//    const blog_id = req.params.id;


// })

app.put("/update", (req, res) => {
   const blog_id = req.body.blog_id;
   const blog_name = req.body.blog_name;
   const blog_data = req.body.blog_data;
   const blog_image = req.body.blog_image;
   console.log(blog_id)
   connection.query(
      "UPDATE new_blog WHERE blog_id = ?",
      [blog_id, blog_name, blog_data, blog_image],
      (err, result) => {
         if (err) {
            console.log(err);
         } else {
            res.send(result);
         }
      }
   );
});

app.put("/update", (req, res) => {
   const blog_id = req.body.id;

   connection.query(
      "UPDATE new_blog SET wage = ? WHERE blog_id = ?",
      [blog_id],
      (err, result) => {
         if (err) {
            console.log(err);
         } else {
            res.send(result);
         }
      }
   );
});


app.listen(port, (err) => {
   if (err)
      throw err;
   else
      console.log("server is running on", port)

})