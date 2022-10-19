import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import myblog from "../../model/blogModel";
import { Typography } from "@mui/material";
import CommentList from "../CommentList";
import Comment from "../Comment";

function FormItem(props) {
  const { id } = useParams();
  const [isSubmit, setIsSubmit] = useState(false);
  const [blogDetail, setBlogDetail] = useState();
  useEffect(() => {
    handlGetData();
  }, [isSubmit]);

  const handlGetData = () => {
    const data = myblog.find((item) => item.id == id);
    setBlogDetail(data);
  };

  return (
    <div>
      <div className="blog__view">
        <h1>{blogDetail?.title}</h1>
        <Typography sx={{ width: "60%" }}>{blogDetail?.content}</Typography>
      </div>
      <div className="blog__comment">
        <Comment
          onSubmit={() => {
            setIsSubmit(!isSubmit);
          }}
        />
        <div>
          <h2>Comments</h2>
          <CommentList commentList={blogDetail?.commentList || []} />
        </div>
      </div>
    </div>
  );
}

export default FormItem;
