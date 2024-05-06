import React from "react";
import { Home, Option, Plus } from "lucide-react";
import Button from "./ui/Button";
import Card from "./ui/Card";

type Props = {};

function LeftMenu() {
  return (
    <div className="w-1/5 flex flex-col gap-8 items-start">
      <div className="w-full h-12 flex font-semibold gap-3 items-center ml-3">
        <Option className="w-4 h-4" />
        Hi, AltWorld
      </div>

      <Button className="">
        <div className="w-6 h-6 flex items-center justify-center">
          <Home className="w-4 h-4 fill-primary stroke-white" />
        </div>
        Dashboard
      </Button>

      <Card className="bg-primary w-full text-white items-start rounded-xl gap-6">
        <Button className="bg-white px-3">
          <Plus className="w-4 h-4 stroke-gray-500" />
        </Button>
        <div className="flex flex-col gap-3">
          <div className="text-sm font-semibold">New Assignment?</div>
          <div className="text-sm">
            Select from pre-defined questions to have a quick turnaround.
          </div>
          <Button className="bg-white w-full font-semibold text-black text-xs">
            Create New Assignment
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default LeftMenu;
