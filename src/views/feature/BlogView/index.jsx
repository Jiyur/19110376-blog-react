import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import myblog from "../../model/blogModel";
import { Typography } from "@mui/material";
import CommentList from "../CommentList";
import Comment from "../Comment";

function FormItem(props) {
  const { id } = useParams();
 
  let blog = myblog.find((blog) => blog.id == id);
  if(blog.commentList==undefined){
    blog.commentList=[];
  }
  return (
    <div >
      <div className="blog__view">
        <h1>{blog.title}</h1>
        <Typography>{blog.content}</Typography>
      </div>
      <Comment/>
      <div>
        <h2>Comments</h2>
        <CommentList commentList={blog.commentList} />
      </div>
    </div>
  );
}


export default FormItem;
