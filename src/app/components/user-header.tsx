import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function UserHeader() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6 sm:p-8">
        <div className="space-y-4 text-center">
          <p className="text-lg text-muted-foreground">Hello, I&apos;m</p>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Pasindu Pramodya
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          DataHoarder, Selfhosted Enthusiast, Low Level System, WebRTC/WASM, 
           <Link className="text-blue-600" href="https://archive.org/details/GuerillaOpenAccessManifesto/mode/2up" target="_blank" rel="noopener noreferrer">
           {" "} Internet Activist
          </Link>
          </p>
          <p>
          &quot;We live in a world in which we need to share responsibility. It’s easy to say it’s not my child, not my community, not my world, not my problem, then there are those who see the need and respond. I consider those people my heroes.&quot;-Fred Rogers 
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
