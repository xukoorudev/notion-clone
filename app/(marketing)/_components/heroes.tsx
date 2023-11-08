import Image from "next/image"
export const Heroes = () => {
   return (
      <div className="flex flex-col justify-center items-center max-w-5xl">
         <div className="flex items-center">
            <div className="relative w-[300px] h-[300px] md:h-[400px] md:w-[400px] xs:mx-16">
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