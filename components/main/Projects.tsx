import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { useRouter } from "next/navigation";
import Link from "antd/es/typography/Link";

const Projects = () => {
  // const router = useRouter()
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <Link href="https://www.examap.in/" target="_blank">
          <ProjectCard
        
            src="/Examap.png"
            title="ExamAp"
            description="Types of Online Exams: Various types of exams can be conducted online, including multiple-choice tests, essay exams, practical assessments, and more."
          />
        </Link>
        <ProjectCard
          src="/logo.png"
          title="Trisandya Mart"
          description="Online shopping marts are typically accessible ,through websites or mobile applications.
           Users can browse products, view details, and make purchases through the digital interface.These platforms host a diverse range of products, spanning various categories such as Groceries, Personal Care, Beauty Products, and more."
        />
        <ProjectCard
          src="/logo.png"
          title="Trisandya Mart"
          description="Online shopping marts are typically accessible ,through websites or mobile applications.
           Users can browse products, view details, and make purchases through the digital interface.These platforms host a diverse range of products, spanning various categories such as Groceries, Personal Care, Beauty Products, and more."
        />
      </div>
    </div>
  );
};

export default Projects;
