
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Define Your Vision",
    description: "Start with a clear product idea. Example: 'A job board for remote developers using Next.js and MongoDB.'",
    badge: "Ideation"
  },
  {
    number: "02", 
    title: "Prompt the AI",
    description: "Use natural language to describe features: 'Create the folder structure for a full-stack Next.js app with login and job listings.'",
    badge: "Architecture"
  },
  {
    number: "03",
    title: "Build Modularly",
    description: "Break down into features: 'Build the login/signup page with JWT auth' then 'Create an API route for job listings.'",
    badge: "Development"
  },
  {
    number: "04",
    title: "Iterate & Polish",
    description: "Refine with AI: 'Why is the login redirect not working?' or 'Style the job card with Tailwind CSS and animations.'",
    badge: "Optimization"
  }
];

const benefits = [
  "⚡ Rapid Prototyping - Build MVPs in hours",
  "🧠 No Syntax Memorization - Just describe what you want",
  "🤝 Collaborative Coding - AI as your coding partner",
  "🌐 Cross-Stack Coverage - Frontend to backend",
  "🧰 Perfect for Non-Experts - Designers and PMs can build too"
];

const VibeCoding = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Is{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Vibe Coding?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A modern, AI-augmented way of building software by prompting AI tools to code, design, 
            debug, and deploy entire products using natural language instructions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">How to Start Vibe Coding</h3>
            {steps.map((step, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {step.badge}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pl-16">
                  <CardDescription className="text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Benefits of Vibe Coding</CardTitle>
                <CardDescription>
                  Transform your development workflow with AI-powered assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
                
                <div className="pt-4">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 group">
                    Start Your AI Journey
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-lg">Recommended Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel", "Prisma"].map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-purple-500/10 border-purple-500/20 text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeCoding;
