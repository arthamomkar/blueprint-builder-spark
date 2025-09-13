import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";
import { GoalSetting } from "@/components/GoalSetting";
import { Features } from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Dashboard />
      <GoalSetting />
      <Features />
    </div>
  );
};

export default Index;