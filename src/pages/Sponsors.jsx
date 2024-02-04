import React from "react";
import "../index.css";
import Nav from "../components/nav";

function Sponsors() {
  const SponsorData = [
    {
      name: "BMW",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1024px-BMW.svg.png",
    },
    {
      name: "Mind Faces",
      description:
        "Mind Faces is a leading provider of AI-based facial recognition software. We provide solutions for security, retail, and marketing. Our software is designed to be user-friendly and easy to integrate with existing systems. We offer a range of features, including",
      url: "/mindfaces.png",
    },
    {
      name: "Unstop",
      description:
        "Unstop is a leading provider of AI-based facial recognition software. We provide solutions for security, retail, and marketing. Our software is designed to be user-friendly and easy to integrate with existing systems. We offer a range of features, including",
      url: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/blue/Unstop-Logo-Blue-Medium.jpg",
    },
    {
      name: "Fetch AI",
      description:
        "Fetch.AI is a decentralized digital representation of the world in which autonomous software agents perform useful economic work. This means that they can perform tasks, such as delivering data or providing services, and are rewarded with a digital currency for their efforts.",
      url: "https://fetch.ai/Images/logo/fetch-logo.svg",
    },
	{
		name: "Apple",
		description:"Apple Inc. (formerly Apple Computer, Inc.), is an American multinational technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services. Devices include the iPhone, iPad, Mac, Apple Watch, and Apple TV; operating systems include iOS and macOS; and software applications and services include iTunes, iCloud, and Apple Music.",
		url: "/Apple_logo_black.svg",
	  },
	  {
		name: "Jetbrains",
		description:"JetBrains s.r.o. (formerly IntelliJ Software s.r.o.) is a Czech[2] software development private limited company which makes tools for software developers and project managers.[3][4] The company has its headquarters in Prague, and has offices in China, Europe, and the United States.The company offers integrated development environments (IDEs) for a variety of programming languages. The company created the Kotlin programming language, which can run in a Java virtual machine (JVM), in 2011..",
		url: "/jetbrains.svg",
	  },
  ];
  return (
    <>
      <Nav />
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-red-600 mt-32 md:text-5xl lg:text-6xl text-center ">
        Sponsor For TQ 16.0
      </h1>
      {/* https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/nucor-logo.svg */}
      <div className="flex justify-center m-24 gap-4 flex-wrap">
        {SponsorData.map((sponsor, index) => (
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a class="flex justify-center align-middle m-10">
              <img class=" max-w-24 text-white max-h-24 " src={sponsor.url} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {sponsor.name}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {sponsor.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sponsors;
