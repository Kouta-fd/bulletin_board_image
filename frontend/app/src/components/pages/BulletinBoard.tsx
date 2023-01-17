import type { FC } from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { CommentForm } from "../ui/CommentForm";
import { CommentList } from "../ui/CommentList";
type TComments = {
  name: string;
  comment: string;
  created_at: string;
  image: string;
}[];
export const BulletinBord: FC = () => {
  const ref = useRef(null);
  const [comments, setComments] = useState<TComments>([]);
  const [comment, setComment] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const handleClick = async () => {
    let date = new Date().toLocaleString();
    const newComment = {
      name: name,
      comment: comment,
      image: image,
      created_at: date,
    };
    await axios.post(`${process.env.REACT_APP_API}/posts`, {
      name: name,
      comment: comment,
      image: image,
    });
    const newComments = [...comments, newComment];
    setComments(newComments);
    setComment("");
    setName("");
    setImage("");
  };
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(() => e.target.value);
  };
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(() => e.target.value);
  };
  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        console.log(e.target.result);
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    }
  };
  useEffect(() => {
    const listPost = async () => {
      try {
        await axios.get(`${process.env.REACT_APP_API}/posts`).then((res) => {
          setComments(res.data);
        });
      } catch (e) {
        console.log(e);
      }
    };
    listPost();
  }, []);

  return (
    <div style={{ width: 80 + "%", margin: "auto" }}>
      <h1>掲示板</h1>
      <CommentForm
        changeValue={changeValue}
        handleClick={handleClick}
        changeImage={changeImage}
        value={comment}
        name={name}
        changeName={changeName}
        image={image}
        ref={ref}
      />
      <CommentList comments={comments} />
    </div>
  );
};
