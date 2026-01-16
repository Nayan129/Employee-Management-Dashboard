const Header = ({ data }) => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="font-medium text-xl">
        Hello ,<br />{" "}
        <span className="font-bold text-3xl">{data.firstName} 👋</span>
      </h1>
      <button className="bg-red-500 px-2 py-1 rounded font-semibold cursor-pointer active:scale-95 md:px-6 md:py-2">
        Log Out
      </button>
    </div>
  );
};

export default Header;
