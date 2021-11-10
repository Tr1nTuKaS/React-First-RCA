// MyPicCard()
import BtnBlack from "./BtnBlack";
import CardBottomText from "./CardBottomText";
import TopCardImage from "./TopCardImage";

export default function MyPicCard(props) {
  return (
    <div>
      <TopCardImage />
      <CardBottomText town={props.town} />
      <BtnBlack />
    </div>
  );
}
