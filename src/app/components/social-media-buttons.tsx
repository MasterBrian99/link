import { Button } from "@/components/ui/button";
import Image from "next/image";
import githubIcon from "../logos/github-svgrepo-com.svg";
import linkedInIcon from "../logos/linkedin.svg";
import codebergIcon from "../logos/codeberg.svg";
import mastodonIcon from "../logos/mastodon.svg";
import Link from "next/link";
export default function SocialMediaButtons() {
   
  return (
 <div className="2xl:flex xl:flex lg:flex md:flex sm:flex flex-col justify-center items-center px-4">
       <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4  lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 gap-4">
      <Link href="https://github.com/MasterBrian99" target="_blank" rel="noopener noreferrer">
        <Button  size="xl" className="w-full sm:w-auto">
        <Image src={githubIcon} alt="github icon" className="mr-2 h-6 w-5" />
          GitHub
        </Button>
      </Link>
      <Link href="https://codeberg.org/masterbr1an" target="_blank" rel="noopener noreferrer">
        <Button size="xl"   className="w-full sm:w-auto bg-slate-300  text-black">
        <Image src={codebergIcon} alt="codeberg icon" className="mr-2 h-6 w-5" />
          Codeberg
        </Button>
      </Link>
      <Link href="https://www.linkedin.com/in/pasindu-p-konghawaththa-3808861a0/" target="_blank" rel="noopener noreferrer">
        <Button size="xl"   className="w-full sm:w-auto bg-blue-700  ">
        <Image src={linkedInIcon} alt="linkedin icon" className="mr-2 h-6 w-5" />
          LinkedIn
        </Button>
      </Link>
      <Link href="https://fosstodon.org/@masterbr1an" target="_blank" rel="noopener noreferrer">
        <Button size="xl"   className="w-full sm:w-auto bg-purple-900  ">
        <Image src={mastodonIcon} alt="mastodon icon" className="mr-2 h-6 w-5" />
          Mastodon
        </Button>
      </Link>

    </div>
 </div>
  );
}

