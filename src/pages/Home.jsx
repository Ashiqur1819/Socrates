import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RxCross1 } from "react-icons/rx";
import { FaBars, FaPlus } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import left from "../assets/left.png";
import frame1 from "../assets/frame1.png";
import profile from "../assets/profile.png";
import info from "../assets/info.png";
import cloud from "../assets/cloud.png";
import frame2 from "../assets/frame2.png";
import url from "../assets/url.png";
import dropbox from "../assets/dropbox.png";
import drive from "../assets/drive.png";
import pdf from "../assets/pdf.png";
import container from "../assets/container.png";
import tooltip from "../assets/tooltip.png";
import doc from "../assets/doc.png";
import deepDive from "../assets/deep-dive.png";
import infoCircle from "../assets/info-circle.png";

const Home = () => {
  const [value, setValue] = useState(false);

  console.log(value);
  return (
    <div className="flex min-h-screen bg-[#242424]">
      <div
        className={`w-72 min-h-screen bg-[#242424] p-6 md:flex flex-col justify-between absolute z-10 ${
          value ? "-left-0" : "-left-72"
        } md:left-0 md:relative`}
      >
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" />
              <h2 className="text-xl font-semibold text-white">Socrates</h2>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-5" src={search} alt="" />
              <img className="w-5" src={left} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 mt-12">
            <Button className="border border-gray-700 bg-[#242424] w-full rounded-full cursor-pointer">
              <FaPlus />
              Add Folder
            </Button>
            <Button className="bg-[#ffffff1c] border border-[#75474700] w-full rounded-full cursor-pointer">
              <FaPlus />
              Create Chat
            </Button>
          </div>
        </div>
        <div>
          <div className="bg-[#ffffff1c] p-3 rounded-xl mt-6">
            <h3 className="text-white font-semibold">Upgrade To Premium</h3>
            <small className="text-[#868686]">
              Make the most of all features!
            </small>
            <Button className="border border-[#F37F0C] bg-[#ffffff00] w-full rounded-full mt-2 cursor-pointer">
              Upgrade Plan
            </Button>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <img src={frame1} alt="" />
            <h3 className="text-white font-medium">Flow AI Templates</h3>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <img src={profile} alt="" />
              <h3 className="text-white font-medium">Jessica Mills</h3>
            </div>
            <img src="/src/assets/setting.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#2B2B2B]  md:my-4 md:mr-4 md:rounded-lg">
        <div
          onClick={() => setValue(!value)}
          className="p-4 flex justify-end md:hidden"
        >
          <FaBars className="text-xl text-white"></FaBars>
        </div>
        <div className="w-11/12 md:w-fit mx-auto flex items-center gap-2 bg-[#242424] px-4 py-2 rounded-full mt-6">
          <img src={info} alt="" />
          <p className="text-white text-sm md:text-base">
            The web version does not display local chats. To access all
            features, please{" "}
            <span className="text-[#FB9937]">install the app.</span>
          </p>
        </div>
        <h1 className="flex items-center gap-4 justify-center text-center text-2xl md:text-3xl lg:text-5xl font-bold text-white mt-6">
          Add Files To
          <span>
            <img
              className="bg-[#242424] p-2 rounded-xl -rotate-6 w-12 md:w-full"
              src={cloud}
              alt=""
            />
          </span>
          Cloud Chat
        </h1>
        <div className="max-w-7xl mx-auto">
          <p className="w-11/12 md:w-7/12 mx-auto text-center text-[#B7B7B7] mt-3 text-sm md:text-base">
            Your files will not be stored on our servers and no AI models will
            be trained.{" "}
            <span className="text-[#FB9937]">
              Supported File Types: .docx, .pdf, .epub, and many text filetypes
            </span>
          </p>

          <div className="w-11/12 lg:w-10/12 mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 bg-[#242424] p-4 rounded-2xl">
              <img src={frame2} alt="" />
              <p className="text-white">
                Drag & drop local files here, or click to select
              </p>
            </div>
            <div className="flex items-center gap-2 bg-[#242424] p-4 rounded-2xl">
              <img src={url} alt="" />
              <div className="w-full">
                <p className="text-white">Enter in a public URL:</p>
                <div className="flex mt-2">
                  <Input
                    className="rounded-full bg-[#2B2B2B] border-none w-full"
                    placeholder="https://example.com/file.pdf"
                  ></Input>
                  <Button className="rounded-full bg-[#464646] -ml-12 cursor-pointer">
                    Add
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#242424] p-4 rounded-2xl">
              <img src={dropbox} alt="" />
              <p className="text-white">Add files from Dropbox</p>
            </div>
            <div className="flex items-center gap-2 bg-[#242424] p-4 rounded-2xl">
              <img src={drive} alt="" />
              <p className="text-white">Add files from Google Drive</p>
            </div>
          </div>

          <div className="w-11/12 lg:w-10/12 mx-auto bg-[#242424] text-white  flex flex-wrap items-center gap-3  mt-6 rounded-xl  text-sm md:text-base md:p-4">
            <div className="flex flex-wrap items-center gap-6  bg-[#2B2B2B] px-4 py-2 rounded-xl mx-3 mt-3 md:mt-0">
              <div className="flex items-center gap-2">
                <img src={pdf} alt="" />
                <p>Report_file.pdf</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={container} alt="" />
                <p>Force OCR</p>
                <img src={tooltip} alt="" />
              </div>
              <RxCross1></RxCross1>
            </div>
            <div className="flex flex-wrap items-center gap-6  bg-[#2B2B2B] px-4 py-2 rounded-xl mx-3 mb-3 md:mb-0">
              <div className="flex items-center gap-2">
                <img src={doc} alt="" />
                <p>Article.docs</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={container} alt="" />
                <p>Force OCR</p>
                <img src={tooltip} alt="" />
              </div>
              <RxCross1></RxCross1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center mt-6 mb-6 gap-3">
            <Button className="border border-[#F37F0C] bg-[#242424] w-52 rounded-full cursor-pointer py-6">
              Start
            </Button>
            <p className="text-white">Or</p>
            <Button className="border border-[#FB9937] bg-gradient-to-b from-[#FFBF00] to-[#FB9937] w-60 rounded-full cursor-pointer py-6 hover:from-[#FB9937] hover:to-[#FFBF00]">
              <img src={deepDive} alt="" />
              Start with Deep Dive
            </Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img className="cursor-pointer" src={infoCircle} alt="" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-60 bg-black text-white p-2 rounded-xl text-sm md:text-base">
                    Deep Dive processes documents section by section for
                    "unlimited" context, enabling complete answers. Run once per
                    chat to unlock Table AI and Prompt Loops
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
