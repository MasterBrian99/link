import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function ContactMe() {
  return (
    <Card className="w-full max-w-md mx-auto mt-12">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Contact Me</CardTitle>
        <CardDescription className="text-center">
          I&apos;m always open to new opportunities and collaborations.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <p className="text-center text-muted-foreground">
          Feel free to reach out if you have any questions or just want to connect!
        </p>
        <div className="flex items-center space-x-2 text-primary">
          <Mail className="h-5 w-5" />
          <a href="mailto:mail@pasindupramodya.com" className="text-lg font-medium hover:underline">
          mail@pasindupramodya.com
          </a>
        
        </div>
        
      </CardContent>
      
    </Card>
  )
}