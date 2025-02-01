import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <div>
       <h1 className='text-4xl font-bold tra'>Frontend <span className="block text-primary-600">Developer</span></h1>
         <p className="mt-6 text-xl text-gray-300 leading-8">
             Crafting Responsive Websites for Real Professionals
         </p>
         <div className="flex mt-10 gap-4">
             <button className="px-8 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500">About
                 Me
             </button>
             <button
                 className="px-8 py-3 rounded-lg border border-gray-600 hover:border-primary-500 font-medium bg-slate-900">
                 Contact Me
             </button>
         </div>
     </div>
    </div>
  );
}
