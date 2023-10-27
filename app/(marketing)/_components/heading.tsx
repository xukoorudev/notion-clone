"use client"

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react"

import { useConvexAuth } from "convex/react"
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Heading = () => {
   const { isAuthenticated, isLoading } = useConvexAuth()
   return ( 
      <div className="max-w-3xl space-y-6">
         <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gradient">
            Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline text-slate-700 dark:text-slate-300">
               Jotion </span>
         </h1>
         <h3 className="text-base sm:text-xl md:text-2xl dark:text-slate-300">
            jotion is the connected workspace where better, faster work happens.
         </h3>
         {isLoading && (
            <div className="flex w-full items-center justify-center">
               <Spinner size="lg" />
            </div>
         )}
         {isAuthenticated && !isLoading && (
            <Button asChild>
               <Link href="documents">
                  Enter Jotion
                  <ArrowRightIcon className="h-4 w-4 ml-2"/>
               </Link>
            </Button>
         )}
         {!isAuthenticated && !isLoading && (
            <SignInButton>
               <Button>
                  Get Jotion free
                  <ArrowRightIcon className="h-4 w-4 ml-2"/>
               </Button>
            </SignInButton>
         )}
      </div>
    );
}
 
