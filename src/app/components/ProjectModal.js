import Image from "next/image";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";

export default function ProjectModal({ project, onClose, onNext, onPrev }) {
    const modalRef = useRef();

    const handleOutsideClick = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleOutsideClick}
            ref={modalRef}
        >
            <div
                className="bg-gray-900 rounded-lg max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto p-12 h-10/12"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between mb-3">
                    <h2 className="text-2xl font-bold text-primary-600">{project.title}</h2>
                    <button
                        onClick={onClose}
                        className="text-primary-50 hover:text-primary-400 rounded-full
            p-2 bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="space-y-4 md:w-1/2">
                        <p className="text-gray-300">{project.description}</p>
                        <p className="text-gray-300">{project.fullDescription}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg mt-10 text-center block  bg-primary-600 text-white font-medium hover:bg-primary-500"
                        >
                            Go to Project
                        </a>
                    </div>
                    <div className="relative h-64 w-full md:w-1/2">
                        <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-11/12 max-w-4xl">
                        <button
                            onClick={onPrev}
                            className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70 transition-colors -translate-x-full"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={onNext}
                            className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70 transition-colors -translate-x-[120%]"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
