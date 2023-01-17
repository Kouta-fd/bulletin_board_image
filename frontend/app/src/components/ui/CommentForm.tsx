import type { FC } from "react";
type TCommetForm = {
  value: string;
  name: string;
  image: string;
  ref: any;
  changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
};
export const CommentForm: FC<TCommetForm> = (props) => {
  return (
    <div>
      <div>
        <div>名前</div>
        <input
          onChange={props.changeName}
          value={props.name}
          type="text"
          style={{ width: 100 + "%" }}
        />
      </div>
      <div>
        <div>投稿内容</div>
        <input
          onChange={props.changeValue}
          value={props.value}
          type="text"
          style={{ width: 100 + "%" }}
        />
      </div>
      <div>
        <div>画像</div>
        <input
          onChange={props.changeImage}
          ref={props.ref}
          type="file"
          accept="image/*"
          style={{ width: 100 + "%" }}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: 30 + "px" }}>
        <button onClick={props.handleClick}>投稿</button>
      </div>
    </div>
  );
};
