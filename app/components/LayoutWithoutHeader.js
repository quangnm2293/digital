import { cookies } from "next/headers";

const { ThemeSwitcher } = require("./theme");

const LayoutWithoutHeader = ({ children }) => {
  const theme = cookies().get("theme")?.value === "dark" ? "dark" : "light";
  return (
    <main className="relative pt-20">
      <div className="absolute top-10 right-10">
        <ThemeSwitcher theme={theme} />
      </div>
      {children}
    </main>
  );
};
export default LayoutWithoutHeader;
