import { BsBell, BsTwitter, BsEnvelope, BsBookmark } from "react-icons/bs";
import { ReactNode } from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebarButton {
  title: string;
  icon: ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  { title: "Home", icon: <BiHomeCircle /> },
  { title: "Explore", icon: <BiHash /> },
  { title: "Notifications", icon: <BsBell /> },
  { title: "Messages", icon: <BsEnvelope /> },
  { title: "Bookmarks", icon: <BsBookmark /> },
  { title: "Twitter Blue", icon: <BiMoney /> },
  { title: "Profile", icon: <BiUser /> },
  { title: "Options", icon: <SlOptions /> },
];

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-28">
          <div className="text-2xl hover:bg-gray-800 rounded-full p-4 w-fit h-fit cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-start items-center gap-3 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-4"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 px-3">
              <button
                type="button"
                className="bg-[#1d9bf0] py-2 px-4 rounded-full w-full text-lg font-semibold"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </>
  );
}

// react-icons
