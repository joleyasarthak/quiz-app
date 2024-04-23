import React from "react";
import sourabh from "./images/sourabh.jpg";
import snake from "./images/shivshankar2.jpeg";
import god from "./images/pfp3.jfif";
import ravi from "./images/ravi2.jpeg";

function AboutUs() {
  return (
    <div className="w-full py-12 lg:py-24">
      <div className="container px-4 space-y-6 text-center md:space-y-10 lg:space-y-16">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Team
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Meet the amazing people behind this amazing platform.
          </p>
        </div>
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2 items-center">
            <img
              alt="Jane Cooper"
              className="rounded-full overflow-hidden object-cover object-center border-2 border-gray-100"
              height="160"
              src={sourabh}
              style={{
                aspectRatio: "160/160",
                objectFit: "cover",
              }}
              width="160"
            />
            <div className="space-y-1 text-lg">
              <h3 className="font-semibold">Sourabh Tanwar</h3>
              <p className="text-sm text-gray-500">Team Leader</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              alt="Jane Cooper"
              className="rounded-full overflow-hidden object-cover object-center border-2 border-gray-100"
              height="160"
              src={god}
              style={{
                aspectRatio: "160/160",
                objectFit: "cover",
              }}
              width="160"
            />
            <div className="space-y-1 text-lg">
              <h3 className="font-semibold">Sarthak Joleya</h3>
              <p className="text-sm text-gray-500">Project Engineer</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              alt="Jane Cooper"
              className="rounded-full overflow-hidden object-cover object-center border-2 border-gray-100"
              height="160"
              src={snake}
              style={{
                aspectRatio: "160/160",
                objectFit: "cover",
              }}
              width="160"
            />
            <div className="space-y-1 text-lg">
              <h3 className="font-semibold">Shivshankar Dangi</h3>
              <p className="text-sm text-gray-500">Frontend Developer</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              alt="Jane Cooper"
              className="rounded-full overflow-hidden object-cover object-center border-2 border-gray-100"
              height="160"
              src={ravi}
              style={{
                aspectRatio: "160/160",
                objectFit: "cover",
              }}
              width="160"
            />
            <div className="space-y-1 text-lg">
              <h3 className="font-semibold">Ravi Gupta</h3>
              <p className="text-sm text-gray-500">Backend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
