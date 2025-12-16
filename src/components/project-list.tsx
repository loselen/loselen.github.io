import type { JSX } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ArrowLeft,
  ChevronRight,
  MousePointer2,
  ScrollText,
} from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import projects from "../data/projects.json";
import { Link } from "react-router-dom";

const ProjectList = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl p-8 flex flex-col gap-6 sm:gap-8">
        <div className="flex justify-between">
          <h1 className="text-2xl sm:text-3xl font-semibold font-montserrat">
            Project{" "}
            <span className="font-kaushan font-normal text-primary">List</span>
          </h1>
          <Link to="/">
            <Button variant="outline" size="lg">
              <ArrowLeft /> Back
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <CardAction>
                    <ChevronRight />
                  </CardAction>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  {project.type === "interactive" && (
                    <Badge>
                      <MousePointer2 /> Interactive
                    </Badge>
                  )}
                  {project.type === "source-code" && (
                    <Badge variant="secondary">
                      <ScrollText /> Source Code
                    </Badge>
                  )}
                  <AspectRatio ratio={16 / 9}>
                    <img
                      className="rounded-lg"
                      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProjectList };
