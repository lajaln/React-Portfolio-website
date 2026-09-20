import { Code2, Lightbulb, Rocket, User, Users } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Peformance",
        description: "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Staying ahead with latest technologies and best practices.",
    }
];

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-primary/100 text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary">Building the future, 
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            one component at a time.   
                        </span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius corporis harum quis consequuntur praesentium, animi odit, nobis labore corrupti eum hic explicabo esse voluptatum, sunt distinctio rerum. Non, rem omnis.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius corporis harum quis consequuntur praesentium, animi odit, nobis labore corrupti eum hic explicabo esse voluptatum, sunt distinctio rerum. Non, rem omnis.
                        </p>
                       
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div 
                            key={idx}
                            className="glass p-6 rounded-2xl animate-fade-in"
                            style={{animationDelay: `${(idx + 1) * 100}ms`}}
                            >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    </section>)}