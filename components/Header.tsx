import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex justify-center gap-10 mt-10">
      <Button className="bg-black text-white" variant={"outline"}>
        Home
      </Button>
      <Button className="bg-black text-white" variant={"outline"}>
        Support Me
      </Button>
      <Button className="bg-black text-white" variant={"outline"}>
        Projects
      </Button>
    </header>
  );
}
