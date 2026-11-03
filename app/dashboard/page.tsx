"use client";
import { useEffect, useState } from "react";
import { Users, CreditCard, BookOpen, TrendingUp, Plus, Loader2 } from "lucide-react";
import { fetchApi } from "@/lib/api";

export default function DashboardHome() {
  const [stats, setStats] = useState({ students: 0, fees: "R 0.00", classes: 0, attendance: "0%" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch real stats from FastAPI
    async function loadStats() {
      try {
        // Replace these with your actual backend endpoints if they differ
        const data = await fetchApi("/dashboard/stats");
        setStats({
          students: data.total_students || 0,
          fees: data.fees_collected || "R 0.00",
          classes: data.active_classes || 0,
          attendance: data.attendance_rate || "0%",
        });
      } catch (err) {
        console.error("Failed to load stats", err);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

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
        <StatCard icon={<Users size={20} />} label="Total Students" val={loading ? "..." : stats.students.toString()} color="text-blue-500" bg="bg-blue-500/10" />
        <StatCard icon={<CreditCard size={20} />} label="Fees Collected" val={loading ? "..." : stats.fees} color="text-emerald-500" bg="bg-emerald-500/10" />
        <StatCard icon={<BookOpen size={20} />} label="Active Classes" val={loading ? "..." : stats.classes.toString()} color="text-purple-500" bg="bg-purple-500/10" />
        <StatCard icon={<TrendingUp size={20} />} label="Attendance Rate" val={loading ? "..." : stats.attendance} color="text-orange-500" bg="bg-orange-500/10" />
      </div>

      {/* Empty State or Table */}
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