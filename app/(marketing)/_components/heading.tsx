"use client"

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export const Heading = () => {
   return ( 
      <div className="max-w-3xl space-y-4">
         <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gradient">
            Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline text-slate-700 dark:text-slate-300">
               Jotion </span>
         </h1>
         <h3 className="text-base sm:text-xl md:text-2xl dark:text-slate-300">
            jotion is the connected workspace where better, faster work happens.
         </h3>
         <Button className="mx-2 gap-2">Enter Jotion <ArrowRightIcon className="h-4 w-4"/></Button>
      </div>
    );
}
 
