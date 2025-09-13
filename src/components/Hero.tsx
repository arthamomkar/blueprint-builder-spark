import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, TrendingUp, Target } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary/20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground backdrop-blur-sm border border-secondary/30 mb-8">
            <Brain className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">AI-Powered Financial Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Smart Finance
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> 
              {" "}for Students
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Take control of your financial future with AI-enhanced budgeting, 
            automated expense tracking, and intelligent spending insights designed specifically for students.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Start Managing Money
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              View Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <TrendingUp className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Smart Analytics</h3>
              <p className="text-primary-foreground/70 text-sm text-center">
                Predictive spending analysis and budget optimization powered by AI
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Brain className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Auto Categorization</h3>
              <p className="text-primary-foreground/70 text-sm text-center">
                Automated expense categorization using natural language processing
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Target className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Goal Tracking</h3>
              <p className="text-primary-foreground/70 text-sm text-center">
                Set financial goals and track progress with intelligent alerts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};