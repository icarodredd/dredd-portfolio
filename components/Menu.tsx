import Image from "next/image";
import pic from "@/public/pic.jpg";
import hai from "@/public/hai.jpeg";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Menu() {
  return (
    <main className="mt-8">
      <h1 className="italic text-3xl text-white">Hello There!</h1>
      <p className="text-lg text-white mt-4 light">
        Hey, this website tells a little story about me, professionally. You can
        check out a few projects and my social media.
      </p>
      <p className="text-lg text-white mt-4">
        {"You'll also find some random pictures that just make sense."}
      </p>
      <div className="flex justify-center mt-4 relative">
        <Image
          className="rounded-lg outline outline-1 outline-offset-2 outline-gray-600"
          width={400}
          src={pic}
          alt="Picture of a pool in a beautiful green place"
        />
        <p className="absolute text-white bottom-1">
          Juazeiro do Norte, CE, Brazil.
        </p>
      </div>
      <h1 className="italic text-3xl text-white mt-20">Latest Projects</h1>
      <p className="text-lg text-white mt-4 light">
        Here are some of my projects that I have done throughout my career as a
        fullstack developer.
      </p>
    </main>
  );
}
