import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Bell, 
  Smartphone,
  Shield,
  BarChart3,
  Zap,
  Users
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Categorization",
      description: "Automatically categorize your expenses using advanced natural language processing. No more manual tagging - our AI understands your spending patterns.",
      color: "text-purple-500",
      gradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Get insights into your future spending patterns and receive personalized budget recommendations based on your habits and goals.",
      color: "text-blue-500",
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Target,
      title: "Smart Goal Setting",
      description: "Set financial goals and let AI create personalized saving strategies. Track progress with intelligent milestones and achievable targets.",
      color: "text-green-500",
      gradient: "from-green-500/20 to-green-600/20"
    },
    {
      icon: Bell,
      title: "Intelligent Alerts",
      description: "Receive smart notifications about budget thresholds, unusual spending patterns, and opportunities to save money.",
      color: "text-orange-500",
      gradient: "from-orange-500/20 to-orange-600/20"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Visualize your financial data with interactive charts and gain deep insights into your spending behavior and trends.",
      color: "text-indigo-500",
      gradient: "from-indigo-500/20 to-indigo-600/20"
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your financial data is protected with enterprise-level encryption and security measures used by major financial institutions.",
      color: "text-red-500",
      gradient: "from-red-500/20 to-red-600/20"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Manage your finances anywhere with our responsive design optimized for mobile devices and tablets.",
      color: "text-teal-500",
      gradient: "from-teal-500/20 to-teal-600/20"
    },
    {
      icon: Zap,
      title: "Real-Time Sync",
      description: "Connect your bank accounts and credit cards for automatic transaction import and real-time balance updates.",
      color: "text-yellow-500",
      gradient: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      icon: Users,
      title: "Student Community",
      description: "Join a community of students sharing tips, challenges, and success stories about financial management and budgeting.",
      color: "text-pink-500",
      gradient: "from-pink-500/20 to-pink-600/20"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features for 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Smart Students
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI-enhanced platform provides everything you need to take control of your finances, 
            build healthy spending habits, and achieve your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30"
              >
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Financial Future?
            </h3>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already using AI to make smarter financial decisions and build lasting wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Journey
              </button>
              <button className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};