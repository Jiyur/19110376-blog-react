import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/Form/InputFields";
import { Button } from "@mui/material";
import "./style.scss";
import myblog from "../../model/blogModel";
import { useParams } from "react-router-dom";

function CommentForm(props) {
  const { id } = useParams();
  const form = useForm({
    defaultValues: {
      content: "",
    },
  });
  const handleSubmit = (values) => {
    const { onSubmit } = props;
    console.log(values.content);
    if (onSubmit) {
      let index = myblog.findIndex((item) => item.id == id);
      let blog=myblog.find((item) => item.id == id);
      let data = {
        id:blog.commentList.length+1,
        content: values.content,
      };

      myblog[index].commentList.push(data);
      console.log(myblog[index].commentList);
    }
    form.reset();
  };
  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="content" label="Content" form={form} />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ m: "20px 0px 2px 0px" }}
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default CommentForm;
