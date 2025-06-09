
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Zap, Brain, Palette, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Prompt-Driven Development",
    description: "Write code using natural language prompts. Let AI handle the syntax while you focus on the vision.",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast Iteration",
    description: "Build MVPs in hours, not weeks. Rapid prototyping with AI-powered code generation.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Brain,
    title: "AI Pair Programming",
    description: "Collaborate with intelligent AI that understands context and suggests optimal solutions.",
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    icon: Palette,
    title: "Web3 Design Language",
    description: "Modern UI components designed for the decentralized web with glass morphism and gradients.",
    gradient: "from-teal-500 to-green-500"
  },
  {
    icon: Globe,
    title: "Cross-Stack Support",
    description: "Frontend, backend, APIs, databases - all covered with consistent AI assistance.",
    gradient: "from-green-500 to-yellow-500"
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    description: "Built for scale with security, performance, and reliability as core principles.",
    gradient: "from-yellow-500 to-orange-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Vibe Coding?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of development with AI-powered tools designed for the modern web.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${feature.gradient} mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
              
              {/* Hover gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
