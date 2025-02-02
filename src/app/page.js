import Image from "next/image";
import ProjectSection from "@/app/components/ProjectSection";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className='relative'>
            <div className='opacity-10'>
                <div
                    className='absolute top-0 right-0 sm:w-[600px] sm:h-[600px] h-[300px] w-[300px] rounded-full bg-primary-700/50 blur-3xl'>
                </div>
                <div
                    className='absolute top-4 right-16 sm:w-[400px] sm:h-[400px] h-[150px] w-[300px] rounded-full bg-primary-500/60 blur-2xl'>
                </div>
                <div
                    className='absolute top-8 right-8 sm:w-[300px] sm:h-[300px] h-[100px] w-[100px] rounded-full bg-primary-400/70 blur-xl'>
                </div>
            </div>
            <h1 className='text-4xl font-bold tra'>Frontend <span className="block text-primary-600">Developer</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-8">
                Crafting Responsive Websites for Real Professionals
            </p>
            <div className="flex mt-10 gap-4">
                <button
                    className="px-8 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500">About
                    Me
                </button>
                <button
                    className="px-8 py-3 rounded-lg border border-gray-600 hover:border-primary-500 font-medium bg-slate-900">
                    Contact Me
                </button>
            </div>
        </div>
        <ProjectSection />
    </div>
  );
}
