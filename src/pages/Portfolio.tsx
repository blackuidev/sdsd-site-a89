import React from "react";
import { cn } from "@/components/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShinyText } from "@/components/ui/shiny-text";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const projects = [
  {
    title: "Project Alpha",
    description: "A groundbreaking web application built with cutting-edge technologies.",
    link: "#",
    image: "https://via.placeholder.com/300x200?text=Project+Alpha",
  },
  {
    title: "Project Beta",
    description: "An innovative mobile experience designed for seamless user interaction.",
    link: "#",
    image: "https://via.placeholder.com/300x200?text=Project+Beta",
  },
  {
    title: "Project Gamma",
    description: "A robust backend system optimizing data processing and API performance.",
    link: "#",
    image: "https://via.placeholder.com/300x200?text=Project+Gamma",
  },
  {
    title: "Project Delta",
    description: "A creative design system enhancing brand consistency across platforms.",
    link: "#",
    image: "https://via.placeholder.com/300x200?text=Project+Delta",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <ShinyText text="Hello, I'm [Your Name]" className="text-5xl md:text-7xl font-bold" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A passionate full-stack developer crafting engaging web experiences.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button size="lg">View My Work</Button>
            <Button size="lg" variant="outline">Contact Me</Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-3xl mx-auto">
          <Card className="p-8 flex flex-col md:flex-row items-center gap-8 bg-card/50 backdrop-blur-sm">
            <Avatar className="w-24 h-24 md:w-32 md:h-32">
              <AvatarImage src="https://github.com/shadcn.png" alt="Your Name" />
              <AvatarFallback>YN</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <CardTitle className="text-3xl mb-2">About Me</CardTitle>
              <CardDescription className="text-lg leading-relaxed">
                I specialize in building responsive and performant web applications using modern technologies like React, Next.js, and Node.js. With a keen eye for detail and a passion for problem-solving, I strive to deliver high-quality code and exceptional user experiences.
              </CardDescription>
            </div>
          </Card>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <h2 className="text-4xl font-bold text-center">My Projects</h2>
          <BentoGrid className="max-w-4xl mx-auto">
            {projects.map((project, i) => (
              <BentoGridItem
                key={i}
                className={cn(
                  i === 0 && "md:col-span-2",
                  "flex flex-col justify-between p-6 bg-card/50 backdrop-blur-sm"
                )}
              >
                <CardHeader className="p-0">
                  <img src={project.image} alt={project.title} className="rounded-md object-cover h-48 w-full mb-4" />
                  <CardTitle className="text-2xl font-semibold">{project.title}</CardTitle>
                  <CardDescription className="mt-2 text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-0 mt-4">
                  <Button variant="link" className="px-0">
                    Learn More &rarr;
                  </Button>
                </CardFooter>
              </BentoGridItem>
            ))}
          </BentoGrid>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
          <Card className="p-8 bg-card/50 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
