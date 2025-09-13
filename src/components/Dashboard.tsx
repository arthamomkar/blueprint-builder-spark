import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Coffee, 
  BookOpen, 
  Car, 
  Home,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

export const Dashboard = () => {
  const budgetData = {
    totalBudget: 1200,
    spent: 720,
    remaining: 480
  };

  const expenseCategories = [
    { name: "Food & Dining", amount: 320, budget: 400, icon: Coffee, color: "text-orange-500" },
    { name: "Education", amount: 250, budget: 300, icon: BookOpen, color: "text-blue-500" },
    { name: "Transportation", amount: 100, budget: 150, icon: Car, color: "text-green-500" },
    { name: "Housing", amount: 50, budget: 100, icon: Home, color: "text-purple-500" },
  ];

  const recentTransactions = [
    { id: 1, description: "Campus Coffee Shop", amount: -4.50, category: "Food", time: "2 hours ago", status: "completed" },
    { id: 2, description: "Textbook Purchase", amount: -89.99, category: "Education", time: "1 day ago", status: "completed" },
    { id: 3, description: "Bus Pass", amount: -25.00, category: "Transportation", time: "2 days ago", status: "completed" },
    { id: 4, description: "Part-time Job", amount: 240.00, category: "Income", time: "3 days ago", status: "completed" },
  ];

  const getBudgetStatus = (spent: number, budget: number) => {
    const percentage = (spent / budget) * 100;
    if (percentage >= 90) return { color: "text-destructive", bg: "bg-destructive/10", icon: AlertTriangle };
    if (percentage >= 70) return { color: "text-warning", bg: "bg-warning/10", icon: AlertTriangle };
    return { color: "text-success", bg: "bg-success/10", icon: CheckCircle };
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Financial Dashboard</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get real-time insights into your spending patterns and budget performance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Budget Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Budget Card */}
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">Monthly Budget Overview</span>
                  <DollarSign className="h-6 w-6" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-sm opacity-80">Total Budget</p>
                    <p className="text-2xl font-bold">${budgetData.totalBudget}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm opacity-80">Spent</p>
                    <p className="text-2xl font-bold">${budgetData.spent}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm opacity-80">Remaining</p>
                    <p className="text-2xl font-bold">${budgetData.remaining}</p>
                  </div>
                </div>
                <Progress 
                  value={(budgetData.spent / budgetData.totalBudget) * 100} 
                  className="h-3 bg-primary-foreground/20"
                />
                <div className="flex justify-between mt-2 text-sm opacity-80">
                  <span>0%</span>
                  <span>{Math.round((budgetData.spent / budgetData.totalBudget) * 100)}% used</span>
                  <span>100%</span>
                </div>
              </CardContent>
            </Card>

            {/* Category Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Spending by Category
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {expenseCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    const status = getBudgetStatus(category.amount, category.budget);
                    const StatusIcon = status.icon;
                    
                    return (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-background ${category.color}`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">{category.name}</p>
                            <p className="text-sm text-muted-foreground">
                              ${category.amount} of ${category.budget}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress 
                            value={(category.amount / category.budget) * 100} 
                            className="w-20 h-2"
                          />
                          <StatusIcon className={`h-4 w-4 ${status.color}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Transactions */}
          <div>
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center">
                  Recent Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{transaction.description}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {transaction.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{transaction.time}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${transaction.amount > 0 ? 'text-success' : 'text-foreground'}`}>
                          {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                        </p>
                        {transaction.amount > 0 && (
                          <TrendingUp className="h-3 w-3 text-success ml-auto mt-1" />
                        )}
                        {transaction.amount < 0 && (
                          <TrendingDown className="h-3 w-3 text-muted-foreground ml-auto mt-1" />
                        )}
                      </div>
                    </div>
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