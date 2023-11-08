import Image from "next/image"
export const Heroes = () => {
   return (
      <div className="flex flex-col justify-center items-center max-w-5xl">
         <div className="flex items-center">
            <div className="relative w-[400px] h-[400px] sm:w-[350px] sm:h-[350px] md:h-[600px] md:w-[600px]">
               <Image 
                  src="/documents.svg"
                  fill
                  alt="documents.svg"
                  className="dark:hidden"                 
               />
               <Image 
                  src="/reading.svg"
                  fill
                  alt="documents.svg"
                  className="hidden dark:block"                  
               />
            </div>
         </div>
      </div>
   )
}