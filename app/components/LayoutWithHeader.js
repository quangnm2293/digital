import { cookies } from "next/headers";

const { ThemeSwitcher } = require("./theme");

const LayoutWithHeader = ({ children }) => {
  const theme = cookies().get("theme")?.value === "dark" ? "dark" : "light";
  return (
    <main>
      <header className="h-20 bg-blue-50 dark:bg-gray-500 flex justify-between px-5 items-center">
        <h1>DIGITAL FORTRESS</h1>
        <ThemeSwitcher theme={theme} />
      </header>
      {children}
    </main>
  );
};
export default LayoutWithHeader;
