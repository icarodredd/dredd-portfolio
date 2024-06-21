import Image from "next/image";
import pic from "@/public/pic.jpg";
import hai from "@/public/hai.jpeg";
import kodis from "@/public/kodis.jpeg";
import { Button } from "./ui/button";

export default function Menu() {
  return (
    <main className="mt-20">
      <h1 className="italic text-3xl text-white">Hello There!</h1>
      <p className="text-lg text-white mt-4 light">
        Hey, this website tells a little story about me, professionally. You can
        check out a few projects and my social media.
      </p>
      <p className="text-lg text-white mt-4">
        {"You'll also find some random pictures that just make sense."}
      </p>
      <div className="flex justify-center mt-4">
        <Image
          className="rounded-lg outline outline-1 outline-offset-2 outline-gray-600"
          width={400}
          src={pic}
          alt="Picture of a pool in a beautiful green place"
        />
      </div>
      <p className="text-lg text-white text-center p-2">
        Juazeiro do Norte, CE, Brazil.
      </p>
      <h1 className="italic text-3xl text-white mt-20">Latest Projects</h1>
      <p className="text-lg text-white mt-4 light mb-8">
        Here are some of my projects that I have done throughout my career as a
        fullstack developer.
      </p>
      <div className="flex justify-center mb-8">
        <div className="outline outline-1 outline-offset-2 outline-gray-600 rounded-lg">
          <div>
            <Image src={hai} width={500} alt="Image of the HAI project" />
          </div>
          <a href="https://github.com/icarodredd/HumanizeAI">
            <Button
              className="text-white w-full rounded-none"
              variant={"ghost"}
            >
              Visit
            </Button>
          </a>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <div className="outline outline-1 outline-offset-2 outline-gray-600 rounded-lg">
          <div>
            <Image src={kodis} width={500} alt="Image of the HAI project" />
          </div>
          <a href="https://kodis-nu.vercel.app/">
            <Button
              className="text-white w-full rounded-none"
              variant={"ghost"}
            >
              Visit
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
}
