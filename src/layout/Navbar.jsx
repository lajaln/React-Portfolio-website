import { Button } from "@/components/Button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "Testimonials"},
    
]

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => window.removeEventListener("scroll", handleScroll);
    },[]);

    return (
        <header className={`fixed top-0 left-0 right-0 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}  z-50`}>
            <nav className="container mx-auto flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                   <img src="/projects/LN.png" alt="LA logo" className="w-12 h-12 mx-2"  />
                </a>
                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-4 py-2 flex items-center gap-4 text-sm font-medium">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="hidden md:block">
                    <Button size="sm">Contact Me</Button>
                </div>
                <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                   {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {isMenuOpen && (
                <div className={`md:hidden ${isScrolled ? "bg-transparent" : "glass-strong"} rounded-xl p-4 mt-2 animate-fade-in`} >
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className="text-lg text-muted-foreground hover:text-foreground py-2">
                                {link.label}
                            </a>
                        ))}
                        <Button size="sm">
                            Contact Me
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}