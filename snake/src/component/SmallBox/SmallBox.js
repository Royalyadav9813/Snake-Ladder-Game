import Player from "../Player/Player";
import Player2 from "../Player/Player2";
const SmallBox = ({ value, value2, pos, pos2 }) => {
  return (
    <>
      <div className="box">
        {value}
        {value == pos && <Player />}
        {value2 === pos2 && <Player2 />}
      </div>
    </>
  );
};

export default SmallBox;
