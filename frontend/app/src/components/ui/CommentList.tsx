import type { FC } from "react";
type TCommetnList = {
  comments: {
    name: string;
    comment: string;
    created_at: string;
    image: string;
  }[];
};
export const CommentList: FC<TCommetnList> = (props) => {
  return (
    <div>
      {props.comments.map((commentItem) => (
        <li
          key={commentItem.name}
          style={{ listStyle: "none", marginTop: 30 + "px" }}
        >
          <div>投稿者</div>
          <div>{commentItem.name}</div>
          <div>投稿内容</div>
          <div>{commentItem.comment}</div>
          <div>画像</div>
          <img src={commentItem.image} />
          <div style={{ fontSize: 0.7 + "rem" }}>
            （{commentItem.created_at}）
          </div>
        </li>
      ))}
    </div>
  );
};
