
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for learning and small projects",
    features: [
      "5 AI generations per day",
      "Basic templates",
      "Community support",
      "Next.js starter kits",
      "Basic documentation"
    ],
    badge: null,
    buttonVariant: "outline" as const
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious developers and teams",
    features: [
      "Unlimited AI generations",
      "Advanced templates",
      "Priority support",
      "Full-stack templates",
      "Advanced documentation",
      "Custom integrations",
      "Team collaboration"
    ],
    badge: "Most Popular",
    buttonVariant: "default" as const
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams and organizations",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom AI training",
      "On-premise deployment",
      "SLA guarantees",
      "Advanced analytics",
      "Custom integrations",
      "Training sessions"
    ],
    badge: "Enterprise",
    buttonVariant: "outline" as const
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your AI development journey. Start free and scale as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                plan.badge === "Most Popular" ? "border-purple-500/50 bg-purple-500/5" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="flex justify-center">
                    <Badge 
                      className={`${
                        plan.badge === "Most Popular" 
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white" 
                          : "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                      } px-3 py-1 rounded-b-lg border-0`}
                    >
                      {plan.badge === "Most Popular" && <Star className="h-3 w-3 mr-1" />}
                      {plan.badge}
                    </Badge>
                  </div>
                </div>
              )}
              
              <CardHeader className={plan.badge ? "pt-8" : ""}>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant} 
                  className={`w-full ${
                    plan.buttonVariant === "default" 
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600" 
                      : ""
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
