import { useState } from "react";
import "./App.css";
import Button from "./components/ui/Button";
import { Eye, FileStack, Home, Option, Pencil, Plus } from "lucide-react";
import Card from "./components/ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/Table";
import Progress from "./components/ui/Progress";
import Questions from "./components/Questions";
import { DUMMY_CANDIDATES } from "./data/dummy_candidates";
import { getColorClass } from "./lib/utils";
import LeftMenu from "./components/LeftMenu";

function App() {
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="w-full flex-1 flex justify-center gap-6 p-6">
        <LeftMenu />
        {/* Center */}
        <div className="w-1/3 flex flex-col gap-3 items-center">
          <div className="space-y-2 w-full">
            <div className="text-xs">
              {/* Breadcrumb */}
              Pages <span className="font-semibold"> / Assigment</span>
            </div>
            <div className="font-semibold">Sales BDE</div>
          </div>
          <Card className="w-full shadow-sm bg-white p-4">
            <div className="w-full flex items-center justify-between">
              <div className="text-lg font-semibold">Sales BDE</div>
              <div className="flex items-center justify-center gap-3">
                <div className="text-emerald-500 text-lg font-semibold">
                  Active
                </div>
                <Button className="hover:shadow-md">
                  <Pencil className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="text-gray-500 font-semibold">Assignment Link</div>
              <a href="#" className="text-blue-500 font-semibold">
                https://inty.gaggniii/
              </a>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="text-gray-500 font-semibold">Assignment Hour</div>
              <div className="text-gray-500 font-semibold">3 Hours</div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="text-gray-500 font-semibold">
                Assignment Ends at
              </div>
              <div className="text-gray-500 font-semibold">11 March 2024</div>
            </div>
            <div className="w-full flex gap-3 items-center justify-start">
              <Button className="bg-white hover:shadow-md text-xs font-semibold hover:bg-white">
                <Eye className="w-4 h-4" />
                TO REVIEW
              </Button>
              <Button className="bg-white hover:shadow-md text-xs font-semibold hover:bg-white">
                <FileStack className="w-4 h-4" />
                SHORTLISTED
              </Button>
            </div>

            <Table className="mt-3 ">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-sm">CANDIDATE</TableHead>
                  <TableHead className="text-right">SCORE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="">
                {DUMMY_CANDIDATES.map((candidate, index) => (
                  <TableRow
                    key={candidate.name}
                    className="cursor-pointer"
                    onClick={() => setCurrentCandidateIndex(index)}
                  >
                    <TableCell className="font-medium flex items-center justify-start gap-3">
                      <img
                        src={candidate.image}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div className="space-y-1">
                        <div className="font-semibold">{candidate.name}</div>
                        <div className="text-gray-500">{candidate.email}</div>
                      </div>
                    </TableCell>
                    <TableCell
                      style={{
                        color: ` var(--${getColorClass(
                          candidate.overall_score
                        )})`,
                      }}
                      className={`text-lg font-semibold`}
                    >
                      {candidate.overall_score}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
        {/* Right */}
        <div className="w-1/2 bg-white shadow-sm p-4 rounded-xl flex items-center justify-center gap-6">
          {/* left  */}
          <div className="w-1/2 h-full flex flex-col gap-6 items-start justify-start">
            <div className="font-medium flex items-center justify-start gap-3">
              <img
                src={DUMMY_CANDIDATES[currentCandidateIndex].image}
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="space-y-1">
                <div className="font-semibold">
                  {DUMMY_CANDIDATES[currentCandidateIndex].name}
                </div>
                <div className="text-gray-500">
                  {DUMMY_CANDIDATES[currentCandidateIndex].email}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center w-full">
              {/* Behaviour */}
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-gray-400">Behavioural</div>
                <div className="w-56 flex items-center justify-center gap-3">
                  <Progress
                    className="w-full"
                    // Percentage is multiplied by 10 because the score is only from 1-10
                    percentage={
                      DUMMY_CANDIDATES[currentCandidateIndex]
                        .behavioural_score * 10
                    }
                  />
                  <div className="text-green-500 font-semibold">
                    {DUMMY_CANDIDATES[currentCandidateIndex].behavioural_score}
                    /10
                  </div>
                </div>
              </div>
              {/* Communication */}
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-gray-400">Communication</div>
                <div className="w-56 flex items-center justify-center gap-3">
                  <Progress
                    className="w-full"
                    percentage={
                      DUMMY_CANDIDATES[currentCandidateIndex]
                        .communication_score * 10
                    }
                  />
                  <div className="text-green-500 font-semibold">
                    {
                      DUMMY_CANDIDATES[currentCandidateIndex]
                        .communication_score
                    }
                    /10
                  </div>
                </div>
              </div>
              {/* Situation handling */}
              <div className="w-full flex items-center justify-between">
                <div className="text-sm text-gray-400">Situation Handling</div>
                <div className="w-56 flex items-center justify-center gap-3">
                  <Progress
                    className="w-full"
                    percentage={
                      DUMMY_CANDIDATES[currentCandidateIndex]
                        .situation_handling_score * 10
                    }
                  />
                  <div className="text-green-500 font-semibold">
                    {
                      DUMMY_CANDIDATES[currentCandidateIndex]
                        .situation_handling_score
                    }
                    /10
                  </div>
                </div>
              </div>
            </div>
            {/* ABout */}
            <div>
              <div className="font-semibold text-lg">About</div>
              <div className="text-gray-400 text-sm">
                {DUMMY_CANDIDATES[currentCandidateIndex].about}
              </div>
            </div>
            {/* Experience */}
            <div>
              <div className="font-semibold text-lg">Experience</div>
              <div className="text-gray-400 text-sm">
                {DUMMY_CANDIDATES[currentCandidateIndex].experience}
              </div>
            </div>
            {/* ABout */}
            <div>
              <div className="font-semibold text-lg">Hobbies</div>
              <div className="text-gray-400 text-sm">
                {DUMMY_CANDIDATES[currentCandidateIndex].hobbies}
              </div>
            </div>
            {/* ABout */}
            <div>
              <div className="font-semibold text-lg">Introduction</div>
              <div className="text-gray-400 text-sm">
                {DUMMY_CANDIDATES[currentCandidateIndex].introduction}
              </div>
            </div>
            <Button className="w-full bg-primary font-semibold text-white hover:bg-teal-500">
              SHORTLIST
            </Button>
          </div>
          {/* right */}
          <div className="w-1/2 h-full relative rounded-xl">
            <img
              src={DUMMY_CANDIDATES[currentCandidateIndex].image}
              className="rounded-xl  w-full h-full object-cover"
            />
            <Questions
              className="absolute bottom-0"
              questions={DUMMY_CANDIDATES[currentCandidateIndex].questions}
              currentCandidateIndex={currentCandidateIndex}
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="text-xs text-gray-500 flex items-center justify-evenly h-12">
        <div>&#64; 2024, ProfileScreener.com</div>
        <div className="flex items-center justify-center gap-6">
          <div>Contact Us</div>
          <div>Privacy</div>
          <div>Terms</div>
        </div>
      </div>
    </div>
  );
}

export default App;
