import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

import { ArrowUpRight } from "lucide-react";
import { SocialIcon } from "react-social-icons";


const projects = [
  {
    title: "Simple Portfolio",
    description:
      "A personal portfolio website showcasing my web development projects, skills, and creative work. Built with HTML, CSS, and JavaScript, with custom visuals and interactive elements to present my projects and experience.",
    image: "/projects/project2.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://lajaln.github.io",
    github: "https://github.com/lajaln/lajaln.github.io",
  },
  {
    title: "MERN stack Registration form",
    description:
      "A full-stack user registration application built with the MERN stack (MongoDB, Express.js, React, and Node.js). It includes a client and server setup with authentication-related dependencies such as bcrypt, along with Axios, CORS, dotenv, Mongoose, and Nodemon.",
    image: "/projects/project3.png",
    tags: ["React", "MongoDB", "Express", "Node.js"],
    link: "https://github.com/lajaln/MERN-stack-Registration-form",
    github: "https://github.com/lajaln/MERN-stack-Registration-form",
  },
  {
    title: "Pokedex",
    description:
      "A responsive Pokédex web app that fetches Pokémon data from the PokeAPI, with real-time search and interactive stats..",
    image: "/projects/project4.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Public API"],
    link: "https://pokedex-lajaln.netlify.app/",
    github: "https://github.com/lajaln/Pokemon-API-fetching-data",
  },
  {
    title: "React Portfolio",
    description:
      "A personal portfolio website showcasing my web development projects, skills, and experience with a clean and responsive design.",
    image: "/projects/project1.jpg",
    tags: ["React", "Tailwind CSS"],
    link: "https://laurencenase.netlify.app",
    github: "https://github.com/lajaln/React-Portfolio-website",
  },
];

export const Projects = () => {
    return (
    <section id="projects" className="py-32 relative overflow-hidden">
       {/* BG glows */}
       <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/> 
       <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/> 
       <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                Featured work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                <span className="font-serif italic font-normal text-white">
                    {" "}
                    Make an impact
                </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
                A selection of my recent work, from simple web application to complex tools that showcase my skills
            </p>
        </div>


        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
                <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay: `${(idx + 1) * 100 }ms`}}>
                    <div className="relative overflow-hidden aspect-video">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition -transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>

                        <div className="absolute inset-0 flex items-center justify-center gap-4  group-hover:opacity-100 transition-opacity duration-300">
                            <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"><ArrowUpRight className="w-5 h-5"/></a>

                            <a href={project.github} className=" rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"><SocialIcon network="github" style={{width: 45, height:45}}/></a>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex  items-start justfy-between">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                        </div>
                        <p className="text-muted-foreground text-sm ">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIdx) => (
                                <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton>
                    View All Projects
                    <ArrowUpRight className="w-5 h-5"/>
                </AnimatedBorderButton>
            </div>
        </div>  

    </section>
    )}