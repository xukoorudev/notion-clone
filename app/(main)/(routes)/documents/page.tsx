"use client"

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react"
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api"
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
   const router = useRouter()
   const { user } = useUser()
   const create = useMutation(api.documents.create)

   const onCreate = () => {
      const promise = create({ title: "Untitled"})
         .then((documentId) => router.push(`/documents/${documentId}`))

      toast.promise(promise, {
         loading: "Creating a new note...",
         success: "New note created",
         error: "Failed to create a new note."
      })
   }

   return ( 
      <div className="h-full flex flex-col items-center justify-center space-y-5">
         <Image 
            src="/empty.svg"
            height="500"
            width="500"
            alt="Empty"
         />
         <h2 className="text-lg font-medium">
            Welcome to <span className="underline capitalize font-bold">{user?.username}&apos;s</span> Jotion
         </h2>
         <Button onClick={onCreate} variant="gradient">
            <PlusCircle className="h-4 w-4 me-2"/>
            Create a note
         </Button>
      </div>
    );
}
 
export default DocumentsPage;