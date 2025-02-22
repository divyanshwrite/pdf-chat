import Image from "next/image";
// import { BrainCogIcon, EyeIcon, GlobeIcon, MonitorSmartphoneIcon, ServerCogIcon, ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// const features = [
//   {
//     name: "Store Your PDF Here",
//     description: "Store your PDF files in the cloud",
//     icon: GlobeIcon,
//   },
//   {
//     name: "Blazing Fast Response",
//     description: "Experience blazing fast response time",
//     icon: ZapIcon,
//   },
//   {
//     name: "Chat Memorization",
//     description: "Our intelligent chat memorizes your previous chats",
//     icon: BrainCogIcon,
//   },
//   {
//     name: "Interactive PDF Viewer",
//     description: "Engage with your PDF files like never before",
//     icon: EyeIcon,
//   },
//   {
//     name: "Cloud Backup",
//     description: "Rest easy knowing your data is backed up",
//     icon: ServerCogIcon,
//   },
//   {
//     name: "Responsive Design",
//     description: "Access your files from any device",
//     icon: MonitorSmartphoneIcon,
//   }
// ];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-700">
              Your Interactive Document Companion
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your PDFs Into Interactive Conversations
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Introducing <span className="font-bold text-indigo-600">Chat With PDF.</span>
              <br />
              Upload your PDF files and engage with them like never before.
              <br />
              Experience the power of interactive PDFs. Turn static documents into dynamic, conversational experiences.
            </p>
          </div>
          <Button asChild className="mt-10">
            <a href="/dashboard">Get Started</a>
          </Button>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image 
            alt="App Screenshot"
            src="https://i.imgur.com/VciRSTI.jpeg"
            width={2432}
            height={1442}
            className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 bg-gradient-to-t from-white/95 pt-[5%]"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
