"use client"

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { MoreHorizontal, Trash } from "lucide-react";

import { Id } from "@/convex/_generated/dataModel";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface NavbarMenuProps {
   documentId: Id<"documents">
}

export const NavbarMenu = ({
   documentId
}: NavbarMenuProps) => {
   const router = useRouter();
   const { user } = useUser();

   const archive = useMutation(api.documents.archive);

   const onArchive = () => {
      const promise = archive({ id: documentId })
  
      toast.promise(promise, {
        loading: "Moving to trash...",
        success: "Note moved to trash!",
        error: "Failed to archive note."
      });
  
      router.push("/documents");
    };

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button size="sm" variant="ghost" className="focus-visible:not-sr-only">
               <MoreHorizontal className="h-4 w-4 text-muted-foreground"/>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent
            className="w-60"
            align="end"
            alignOffset={8}
            forceMount
         >
            <DropdownMenuItem onClick={onArchive}>
               <Trash className="h-4 w-4 mr-2"/>
               Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
              <div className="text-xs text-muted-foreground p-2">
                Last edited by: {user?.fullName}
              </div>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}

NavbarMenu.Skeleton = function MenuSkeleton() {
   return (
     <Skeleton className="h-4 w-6" />
   )
 }