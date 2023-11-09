
import { Logo } from "@/app/(marketing)/_components/logo"
import { Button } from "@/components/ui/button"
import { useSettings } from "@/hooks/use-settings"
import { Settings } from "lucide-react"
import Link from "next/link"



export const Footer = () => {
   const settings = useSettings()
   return (
      <div className="flex items-center w-full p-2 bg-background z-[50] mt-10">
         <Link href={'/documents'}>
            <Logo />
         </Link>
         <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
            <Button variant='ghost' size='sm'>
               Privacy Policy
            </Button>
            <Button variant='ghost' size='sm'>
               Terms & Conditions
            </Button>
            <Button variant='ghost' size='sm'>
               <Settings onClick={settings.onOpen} />
            </Button>

         </div> 
         
      </div>
   )
}