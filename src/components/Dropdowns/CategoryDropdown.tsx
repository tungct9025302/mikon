import { useState } from "react";

export default function CategoryDropdown() {
  const [selected, setSelected] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  var samples = [
    {
      name: "Genshin Impact",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/ac4e7a4f341e7281b0f6f274f9ec3905.png",
    },
    {
      name: "Honkai: Star Rail",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/ec01a34f7fc3b03448cc52f2a89d52e8.png",
    },
    {
      name: "League Of Legends",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/882137f311c5728f8e257e56820af92c.png",
    },
    {
      name: "Darksouls",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/41861df08084b5a2b292dc2e106faa2c.png",
    },
    {
      name: "Strinova",
      iconUrl:
        "https://cdn2.steamgriddb.com/logo_thumb/1c31b8e34f89e0aa7823024ca0d9aa01.png",
    },
    {
      name: "Darksouls II",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/56e35bb7fdbbc6570acb607ad4ab4be0.png",
    },
    {
      name: "Darksouls II",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/56e35bb7fdbbc6570acb607ad4ab4be0.png",
    },
    {
      name: "Darksouls II",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/56e35bb7fdbbc6570acb607ad4ab4be0.png",
    },
    {
      name: "Darksouls II",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/56e35bb7fdbbc6570acb607ad4ab4be0.png",
    },
    {
      name: "Darksouls II",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/56e35bb7fdbbc6570acb607ad4ab4be0.png",
    },
    {
      name: "Darksouls II",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/56e35bb7fdbbc6570acb607ad4ab4be0.png",
    },
    {
      name: "Darksouls II",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/56e35bb7fdbbc6570acb607ad4ab4be0.png",
    },
    {
      name: "Darksouls II",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/56e35bb7fdbbc6570acb607ad4ab4be0.png",
    },
  ];

  function generateRow(item, index) {
    return (
      <div
        key={index}
        className="flex cursor-pointer w-full border-gray-300 rounded-lg hover:bg-teal-100 h-10 align-center items-center"
        onClick={() => {
          setSearchValue(item["name"]);
          setShowResult(false);
        }}
      >
        <div className="flex flex-row relative items-center m-1 mr-2 w-8 h-8 mt-1 rounded-full">
          <img className="rounded-full" alt="" src={item["iconUrl"]} />

          <p className="font-normal pl-2 w-full whitespace-nowrap">
            {item["name"]}
          </p>
        </div>
      </div>
    );
  }

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      {/* <div className="hs-dropdown relative [--placement:bottom-left] inline-flex">
        <button
          id="hs-dropdown"
          type="button"
          className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="Dropdown"
        >
          Dropdown
          <svg
            className="hs-dropdown-open:rotate-180 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>

        <div
          className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="hs-dropdown"
        >
          <div className="p-1 space-y-0.5">
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Newsletter
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Purchases
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Downloads
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Team Account
            </a>
          </div>
        </div>
      </div> */}

      <div className="inline-flex">
        <input
          readOnly={true}
          value={searchValue}
          placeholder="Add your game"
          type="text"
          onChange={() => {
            handleInputChange(event);
          }}
          className=" relative py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-s-md border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        />

        <div className="hs-dropdown relative [--placement:bottom-right] inline-flex">
          <button
            id="hs-split-dropdown"
            type="button"
            className="hs-dropdown-toggle relative -ms-px py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-e-md border border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:bg-neutral-700 dark:focus:text-white"
          >
            <span className="sr-only">Toggle Dropdown</span>
            <svg
              className="hs-dropdown-open:rotate-180 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>

          <div
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
            aria-labelledby="hs-split-dropdown"
          >
            <div className="p-1 space-y-0.5 overflow-y-auto max-h-[14vh]">
              {samples.map((item, index) => {
                return generateRow(item, index);
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
