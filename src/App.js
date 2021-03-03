import "./styles.css";
import Counter from "./Counter";
import CharacterLimiter from "./CharacterLimiter";
import PasswordMatch from "./PasswordMatch";
import DisableButton from "./DisableButton";
import ShowHidePass from "./ShowHidePass";
import DesignTool from "./DesignTool";
import AddToCart from "./AddToCart";
import SwitchTabs from "./SwitchTabs";
import Toast from "./Toast";
import Todo from "./Todo";
import DarkMode from "./DarkMode";
import LikeAList from "./LikeAList";
import OutOfStock from "./OutOfStock";
export default function App() {
  return (
    <div className="App">
      <Counter />
      <CharacterLimiter />
      <PasswordMatch />
      <DisableButton />
      <ShowHidePass />
      <DesignTool />
      <AddToCart />
      <SwitchTabs />
      <Toast />
      <Todo />
      <DarkMode />
      <LikeAList />
      <OutOfStock />
    </div>
  );
}
