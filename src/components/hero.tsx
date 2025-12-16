import type { JSX } from "react";
import { Button } from "./ui/button";
import { FolderGit2, SquareArrowOutUpRight } from "lucide-react";

const Hero = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl p-8 min-h-dvh flex flex-col justify-center items-center gap-4 sm:gap-6">
        <h1 className="text-5xl sm:text-7xl font-semibold font-montserrat leading-11 sm:leading-15">
          Hello
          <br />I am{" "}
          <span className="font-kaushan font-normal text-primary">Loselen</span>
        </h1>
        <p className="text-md sm:text-xl">
          A curious person who loves full-stack development.
        </p>

        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <a href="/projects/">
            <Button className="sm:p-5 sm:text-lg">
              <FolderGit2 /> See My Projects
            </Button>
          </a>
          <a href="https://github.com/loselen" target="_blank">
            <Button variant="outline" className="sm:p-5 sm:text-lg">
              <SquareArrowOutUpRight /> GitHub Profile
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export { Hero };
