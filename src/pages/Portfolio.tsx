import React from 'react';
import { SparkleNavbar } from '@/components/ui/sparkle-navbar';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { ShinyText } from '@/components/ui/shiny-text';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Layout, Smartphone, Bot, ShoppingBag } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  link: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Project Alpha',
    description: 'A cutting-edge web application built with React and Node.js.',
    link: '#',
    header: (
      <img
        src="https://via.placeholder.com/300x200/2D3748/A0AEC0?text=Web+App"
        alt="Project Alpha"
        className="object-cover object-center w-full h-full rounded-lg"
      />
    ),
    icon: <Code className="h-4 w-4 text-gray-400" />,
  },
  {
    id: '2',
    title: 'Design System Beta',
    description: 'Developed a scalable design system for enterprise applications.',
    link: '#',
    header: (
      <img
        src="https://via.placeholder.com/300x200/2D3748/A0AEC0?text=Design+System"
        alt="Design System Beta"
        className="object-cover object-center w-full h-full rounded-lg"
      />
    ),
    icon: <Layout className="h-4 w-4 text-gray-400" />,
  },
  {
    id: '3',
    title: 'Mobile App Gamma',
    description: 'Cross-platform mobile application for productivity.',
    link: '#',
    header: (
      <img
        src="https://via.placeholder.com/300x200/2D3748/A0AEC0?text=Mobile+App"
        alt="Mobile App Gamma"
        className="object-cover object-center w-full h-full rounded-lg"
      />
    ),
    icon: <Smartphone className="h-4 w-4 text-gray-400" />,
  },
  {
    id: '4',
    title: 'AI Chatbot Delta',
    description: 'An intelligent chatbot integrated with various APIs.',
    link: '#',
    header: (
      <img
        src="https://via.placeholder.com/300x200/2D3748/A0AEC0?text=AI+Chatbot"
        alt="AI Chatbot Delta"
        className="object-cover object-center w-full h-full rounded-lg"
      />
    ),
    icon: <Bot className="h-4 w-4 text-gray-400" />,
  },
  {
    id: '5',
    title: 'E-commerce Redesign',
    description: 'Revamped an existing e-commerce platform for better UX.',
    link: '#',
    header: (
      <img
        src="https://via.placeholder.com/300x200/2D3748/A0AEC0?text=E-commerce"
        alt="E-commerce Redesign"
        className="object-cover object-center w-full h-full rounded-lg"
      />
    ),
    icon: <ShoppingBag className="h-4 w-4 text-gray-400" />,
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SparkleNavbar />
      <AuroraBackground>
        <main className="container mx-auto px-4 py-16 text-center relative z-10">
          <ShinyText text="My Advanced Portfolio" className="text-5xl md:text-7xl font-bold mb-8" />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Showcasing a collection of my most impactful and innovative projects.
          </p>

          <BentoGrid className="max-w-4xl mx-auto">
            {portfolioItems.map((item, i) => (
              <BentoGridItem
                key={item.id}
                title={item.title}
                description={item.description}
                header={item.header}
                className={i === 0 || i === 3 ? "md:col-span-2" : ""}
                icon={item.icon}
              />
            ))}
          </BentoGrid>

          <div className="mt-16">
            <Button className="px-8 py-4 text-lg" variant="secondary">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </main>
      </AuroraBackground>
    </div>
  );
};

export default Portfolio;
