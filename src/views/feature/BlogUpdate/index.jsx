import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "../../components/Form/InputFields";
import MultiField from "../../components/Form/MultiplyFields";
import myblog from "../../model/blogModel";
function BlogUpdate(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const blog = myblog.find((item) => item.id == id);
  console.log(blog)
  const handleSubmit = (values) => {
    
    if (values) {
        console.log(values)
      let data = {
        id: id,
        title: values.title.length>0?values.title:blog.title,
        content: values.content.length>0?values.content:blog.content,
        commentList: blog.commentList,
      };
      let index = myblog.findIndex((item) => item.id == id);
      if (index !== -1) {
        myblog[index] = data;
      }
      navigate("/");
    }
  };
  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField
          name="title"
          label="Tieu de blog"
          form={form}
          value={blog.title}
        />
        <MultiField
          name="content"
          label="Noi dung"
          form={form}
          value={blog.content}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ m: "20px 0px 2px 0px" }}
          type="submit"
        >
          Upload
        </Button>
      </form>
    </div>
  );
}
export default BlogUpdate;
