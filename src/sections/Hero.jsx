import { Button } from "@/components/Button"
import { ArrowRight, ChevronDown} from "lucide-react";
import { SocialIcon } from "react-social-icons";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
    "Html", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Tailwind CSS", "Github", "WordPress", "Shopify", "Canva", "Capcut", "Google Workspace"
]

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img src="/projects/hero-bg.jpg" alt="hero img" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
           
            </div> 
            <div className="absolute inset-0 overflow-hidden pointer-events-none"> 
                {[...Array(30)].map((_, index) => (
                    <div className="absolute w-1.5 h-1.5 rounded-full opacity-50" style={{
                        backgroundColor: "#e90c59",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `Math.random() * 5}s`
                    }}
                />
             ))}
            </div>
            {/* Hero Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Software Engineer • React Developer
                            </span>
                        </div>
                        {/* Main Heading */}
                        <div className="space-y-4 ">
                            <h1 className="text-5xl md:text-5xl font-bold leading-tight text-white animate-fade-in animation-delay-100">
                               Crafting <span className="text-primary glow-text">Digital</span>
                               <br />
                               experiences with
                               <br />
                               <span className="font-serif italic font-normal text-white">precision.</span>
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-lg animate-fade-in animation-delay-300">
                                I am a passionate software engineer and React developer dedicated to creating seamless and engaging digital experiences. With a strong focus on front-end development, I specialize in building responsive and user-friendly web applications that leave a lasting impact.
                            </p>
                        </div>
                        {/* Call-to-Action Buttons */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact me<ArrowRight className="w-5 h-5"/>
                            </Button>
                            <AnimatedBorderButton/>
                        </div>
                        {/* Social Media Links */}
                          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me:</span>
                            {[
                                { network: "github", href: "#" },
                                { network: "linkedin", href: "#" },
                                { network: "twitter", href: "#" }
                            ].map((social, idx) => (
                               <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">{<SocialIcon network={social.network} className="w-5 h-5"/>}</a>
                            ))}
                        </div>
                    </div>
                    {/* Right Column - Image Content */}
                    <div className="relative animate-fade-in animation-delay-300"> 
                        {/* Profile Image */}
                        <div className="relative max-w-md  mx-auto px-10 pb-10">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
                            <div className="relative glass rounded-3xl glow-border">
                                <img src="/projects/profile-img1.png" alt="Laurence Nase" className="w-full aspect-[4/5] object-cover rounded-2xl opacity-50" />
                                {/* floatng badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                            <span className="text-sm font-md">Available for work</span>
                                        
                                    </div>
                                </div>
                                {/* Stats badge - add when have experience*/}
                            </div>
                        </div>
                    </div>
                </div>

            {/* Skills List */}
            <div className="mt-20 animate-fade-in animation-delay-600"> 
                <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">{[...skills, ...skills].map((skill, idx) => ( <div key={idx} className="flex-shrink-0 px-8 py-4"><span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foregroun transition-colors">{skill}</span></div>  ))}
                    </div>
                </div>
            </div>
            
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a href="#About" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
                      <span className="text-xs uppercase tracking-wider">Scroll</span>  
                      <ChevronDown className="w-6 h-6 animate-bounce"/>    
                </a>            
            </div>
        </section>
    );
};