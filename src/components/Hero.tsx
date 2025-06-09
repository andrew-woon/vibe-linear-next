
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-cyan-500/10" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
            <Brain className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">AI-Powered Development</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block">Code with</span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Vibes
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your development workflow with AI-powered vibe coding. Build faster, 
            think bigger, and ship products that matter in the Web3 era.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full group"
            >
              Start Vibe Coding
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 rounded-full">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-purple-400" />
              <span>Next.js Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-400" />
              <span>AI-First</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-cyan-400" />
              <span>Web3 Native</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
