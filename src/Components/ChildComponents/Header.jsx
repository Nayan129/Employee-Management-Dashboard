const Header = (props) => {
  const userName = props.data?.firstName ? props.data.firstName : "Admin";

  const logoutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="font-medium text-xl">
        Hello ,<br />
        <span className="font-bold text-3xl">{userName} 👋</span>
      </h1>

      <button
        className="bg-red-500 px-2 py-1 rounded font-semibold cursor-pointer active:scale-95 md:px-6 md:py-2"
        onClick={() => {
          const confirmLogout = window.confirm("are you sure want to logout!");
          if (confirmLogout) logoutUser();
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
