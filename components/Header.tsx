import { Press_Start_2P } from "next/font/google";

const ps = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <div className="fixed w-full flex justify-center">
      <h1
        className={
          "text-center text-white text-3xl p-4 backdrop-blur fixed inset-x-0 top-0 w-full " +
          ps.className
        }
      >
        D
      </h1>
    </div>
  );
}
