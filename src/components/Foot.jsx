import FootLogo from "../assets/images/footer.svg";

const footerItems = [
  {
    title: "share",
    subs: [
      { title: "X (TWITTER)", path: "" },
      { title: "Facebook", path: "" },
      { title: "LinkedIn", path: "" },
      { title: "Hacker News", path: "" },
      { title: "Reddit", path: "" },
    ],
  },
  {
    title: "share",
    subs: [
      { title: "X (TWITTER)", path: "" },
      { title: "Facebook", path: "" },
      { title: "LinkedIn", path: "" },
      { title: "Hacker News", path: "" },
      { title: "Reddit", path: "" },
    ],
  },
  {
    title: "share",
    subs: [
      { title: "X (TWITTER)", path: "" },
      { title: "Facebook", path: "" },
      { title: "LinkedIn", path: "" },
      { title: "Hacker News", path: "" },
      { title: "Reddit", path: "" },
    ],
  },
];

export const Foot = () => {
  return (
    <div className="py-[139px] px-[96px] font-robotoMono text-[#f3f0e0] bg-black">
      {/* Logo */}
      <div className="flex justify-center md:justify-start">
        <img src={FootLogo} alt="foot logo" className="w-auto" />
      </div>

      {/* Rights Section */}
      <div className="w-full text-center md:text-right mt-[50px] text-4 leading-[26px] uppercase">
        <div>© 2024 Apptware Solutions LLP</div>
        <div>All Rights Reserved.</div>
      </div>

      {/* Footer Items */}
      <div className="mt-[170px] md:ml-[602px] flex flex-col md:flex-row gap-[20px] md:gap-[256px] uppercase leading-[26px] text-4">
        {footerItems.map((each, index) => (
          <div key={index}>
            <div className="font-bold mb-5">{each.title}</div>
            <div className="border-2 w-[40px] mb-5"></div>
            {each.subs.map((item, subIndex) => (
              <div key={subIndex}>
                <a
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};