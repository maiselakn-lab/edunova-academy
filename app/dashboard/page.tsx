import { Users, CreditCard, BookOpen, TrendingUp, Plus } from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back to THINK Academy</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
          <Plus size={16} /> Add Student
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<Users size={20} />} label="Total Students" val="0" color="text-blue-500" bg="bg-blue-500/10" />
        <StatCard icon={<CreditCard size={20} />} label="Fees Collected" val="R 0.00" color="text-emerald-500" bg="bg-emerald-500/10" />
        <StatCard icon={<BookOpen size={20} />} label="Active Classes" val="0" color="text-purple-500" bg="bg-purple-500/10" />
        <StatCard icon={<TrendingUp size={20} />} label="Attendance Rate" val="0%" color="text-orange-500" bg="bg-orange-500/10" />
      </div>

      {/* Empty State Section */}
      <div className="bg-card rounded-xl border border-border p-12 text-center mt-8">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <Users size={24} className="text-muted-foreground" />
        </div>
        <h2 className="text-lg font-bold text-foreground mb-2">No Students Yet</h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">Your school is set up on AcadCoreOS. Start by adding your first student to see the dashboard come alive.</p>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 rounded-lg text-sm font-bold transition-colors">
          Add First Student
        </button>
      </div>
    </div>
  );
}

function StatCard({ icon, label, val, color, bg }: { icon: React.ReactNode, label: string, val: string, color: string, bg: string }) {
  return (
    <div className="bg-card p-6 rounded-xl border border-border">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${bg} ${color}`}>
        {icon}
      </div>
      <p className="text-2xl font-bold text-foreground mb-1">{val}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}