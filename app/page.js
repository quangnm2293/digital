import LayoutWithoutHeader from "./components/LayoutWithoutHeader";
import SignIn from "./components/SignIn";

export default function Home() {
  return (
    <LayoutWithoutHeader>
      <SignIn />
    </LayoutWithoutHeader>
  );
}
