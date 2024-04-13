export default function SignIn() {
  return (
    <div className="flex flex-col  justify-center items-center h-screen">
      <h1 className="mb-10">Sign In</h1>
      <form className="flex gap-10 flex-col">
        <input type="email" className="bg-red-100 dark:bg-white rounded" />
        <input type="password" className="bg-red-100 dark:bg-white rounded" />
        <button className="border border-red-100 dark:border-gray-100 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
}
