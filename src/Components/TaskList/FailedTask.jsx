const FailedTask = ({ data }) => {
  return (
    <div
      className="w-[92vw] sm:w-85 md:w-90 lg:w-95 xl:w-100
    rounded-2xl p-5 shadow-lg
    bg-linear-to-br from-yellow-500/60 via-slate-900/60 to-slate-950/70
    border border-white/10 text-white"
    >
      <div className="flex justify-between items-center">
        <h3 className="bg-white/15 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-white/10">
          {data.tasks[2].category}
        </h3>

        <h4 className="text-xs sm:text-sm font-semibold text-white/80">
          {data.tasks[2].date}
        </h4>
      </div>

      <h2 className="mt-3 font-bold text-lg sm:text-xl leading-snug text-white">
        {data.tasks[2].title}
      </h2>

      <p className="text-sm sm:text-[15px] mt-2 text-white/85 leading-relaxed">
        {data.tasks[2].description}
      </p>

      <div className="mt-6 md:mt-10">
        <button
          className="w-full text-white bg-red-500/90 py-1.5 font-bold rounded-xl
        outline-none active:scale-95 cursor-pointer "
        >
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
