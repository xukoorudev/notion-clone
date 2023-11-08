"use client"

import { useConvexAuth } from "convex/react"

import { Spinner } from "@/components/spinner"




const MainLayout = ({
   children
}: {
   children: React.ReactNode
}) => {
   const { isLoading } = useConvexAuth()

   if (isLoading) {
      return (
         <div className="flex h-full items-center justify-center">
            <Spinner size="lg"/>
         </div>
      )
   }

   return ( 
      <div className="h-full flex dark:bg-[#1F1F1F]">     
         <main className="flex-1 h-full overflow-hidden">
            {children}
         </main>
      </div>
    );
}
 
export default MainLayout;