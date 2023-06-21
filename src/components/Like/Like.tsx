import { AiFillHeart } from "react-icons/ai";

interface Props {
  color: string;
  click: () => void;
}

function Like({ color, click }: Props) {
  return (
    <div>
      <AiFillHeart color={color} onClick={click}></AiFillHeart>
    </div>
  );
}

export default Like;
