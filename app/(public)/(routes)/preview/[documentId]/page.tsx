"use client"

import { useMutation, useQuery } from "convex/react"
import dynamic from "next/dynamic"
import { useMemo } from "react"

import { Id } from "@/convex/_generated/dataModel"
import { api } from "@/convex/_generated/api"

import { Toolbar } from "@/components/toolbar"
import { Cover } from "@/components/cover"
import { Skeleton } from "@/components/ui/skeleton"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Footer } from "@/app/(marketing)/_components/footer"




interface DocumentIdPageProps {
   params: {
      documentId: Id<"documents">
   }
}

const DocumentIdPage = ({
   params
}: DocumentIdPageProps) => {

   const Editor = useMemo(() => dynamic(() => import("@/components/eidtor"), {ssr: false}) ,[])

   const document = useQuery(api.documents.getById, {
      documentId: params.documentId
   })

   const update = useMutation(api.documents.update)

   const onChange = (content: string) => {
      update({
         id: params.documentId,
         content
      })
   }

   if (document === undefined) {
      return (
         <div>
            <Cover.Skeleton />
            <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10 space-y-10">
               <div className="space-y-4 pl-8 pt-4">
                  <Skeleton className="h-20 w-[50%]"/>
                  <Skeleton className="h-4 w-[40%]"/>
                  <Skeleton className="h-4 w-[60%]"/>
                  <Skeleton className="h-4 w-[80%]"/>
               </div>
               <div className="space-y-4 pl-8 pt-4">
                  <Skeleton className="h-20 w-[50%]"/>
                  <Skeleton className="h-4 w-[40%]"/>
                  <Skeleton className="h-4 w-[60%]"/>
                  <Skeleton className="h-4 w-[80%]"/>
               </div>
               <div className="space-y-4 pl-8 pt-4">
                  <Skeleton className="h-20 w-[50%]"/>
                  <Skeleton className="h-4 w-[40%]"/>
                  <Skeleton className="h-4 w-[60%]"/>
                  <Skeleton className="h-4 w-[80%]"/>
               </div>
            </div>
         </div>
      )
   }
   if (document === null) {
      return (
         <div>
            Not found
         </div>
      )
   }

   return ( 
      <div className="pb-40">
         <ScrollArea className="h-screen w-full">
            <Cover url={document.coverImage}/>
            <div className="md:max-w-3xl lg:max-w-4xl mx-auto mb-20">
               <Toolbar initialData={document} />
               <Editor
                  onChange={onChange}
                  initialContent={document.content}
               />
            </div>       
            <Footer />
         </ScrollArea>
      </div>
    );
}
 
export default DocumentIdPage;