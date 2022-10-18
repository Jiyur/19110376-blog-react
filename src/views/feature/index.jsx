import React from "react";
import BlogList from "./BlogList";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import myblog from "../model/blogModel";
function BlogFeater(props) {
  const list = [...myblog
  
  ];
  return (
    <div>
      <BlogList blogList={list} />
      <div 
       style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
      >
        <h3>Click here to add new blog</h3>
        <Button variant="contained" endIcon={<SendIcon />} sx={{left:'35%'}}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default BlogFeater;
