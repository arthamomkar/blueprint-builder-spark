import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Target, Calendar, TrendingUp, Plus, CheckCircle } from "lucide-react";

export const GoalSetting = () => {
  const goals = [
    {
      id: 1,
      title: "Emergency Fund",
      description: "Build a safety net for unexpected expenses",
      target: 1000,
      current: 650,
      deadline: "Dec 2024",
      status: "on_track",
      category: "Savings"
    },
    {
      id: 2,
      title: "New Laptop",
      description: "Save for a new laptop for studies",
      target: 1200,
      current: 320,
      deadline: "Mar 2024",
      status: "behind",
      category: "Purchase"
    },
    {
      id: 3,
      title: "Spring Break Trip",
      description: "Save for vacation with friends",
      target: 800,
      current: 800,
      deadline: "Feb 2024",
      status: "completed",
      category: "Travel"
    },
    {
      id: 4,
      title: "Reduce Food Spending",
      description: "Limit dining out to $300/month",
      target: 300,
      current: 280,
      deadline: "Monthly",
      status: "on_track",
      category: "Budget"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success text-success-foreground';
      case 'on_track':
        return 'bg-secondary text-secondary-foreground';
      case 'behind':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'on_track':
        return <TrendingUp className="h-4 w-4" />;
      case 'behind':
        return <Target className="h-4 w-4" />;
      default:
        return <Target className="h-4 w-4" />;
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Financial Goals</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Set, track, and achieve your financial milestones with AI-powered insights and progress monitoring
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-1">4</div>
                <div className="text-sm text-muted-foreground">Active Goals</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-success mb-1">1</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-secondary mb-1">$2,050</div>
                <div className="text-sm text-muted-foreground">Total Saved</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-accent mb-1">68%</div>
                <div className="text-sm text-muted-foreground">Avg Progress</div>
              </CardContent>
            </Card>
          </div>

          {/* Goals List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {goals.map((goal) => (
              <Card key={goal.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{goal.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
                    </div>
                    <Badge className={getStatusColor(goal.status)}>
                      {getStatusIcon(goal.status)}
                      <span className="ml-1 capitalize">{goal.status.replace('_', ' ')}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">
                        ${goal.current} / ${goal.target}
                      </span>
                    </div>
                    
                    <Progress 
                      value={Math.min((goal.current / goal.target) * 100, 100)} 
                      className="h-2"
                    />
                    
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {goal.deadline}
                      </div>
                      <Badge variant="outline">{goal.category}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add New Goal */}
          <Card className="border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 transition-colors">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Plus className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Set a New Financial Goal</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Whether it's saving for something special or building better spending habits, 
                let AI help you create a personalized plan.
              </p>
              <Button size="lg" className="rounded-full">
                <Plus className="h-4 w-4 mr-2" />
                Create Goal
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};