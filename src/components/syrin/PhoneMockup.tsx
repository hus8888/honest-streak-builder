import { Flame, Mic, Briefcase, Dumbbell, Heart, DollarSign, AlertCircle } from "lucide-react";

const tasks = [
  { time: "07:00", label: "Morning workout", icon: Dumbbell, color: "bg-success/20 text-success border-success/30", status: "done" },
  { time: "09:30", label: "Deep work: Q3 roadmap", icon: Briefcase, color: "bg-primary/20 text-primary-glow border-primary/30", status: "active" },
  { time: "12:00", label: "Lunch with Maya", icon: Heart, color: "bg-pink-500/20 text-pink-400 border-pink-500/30", status: "upcoming" },
  { time: "15:00", label: "Review investor update", icon: DollarSign, color: "bg-warning/20 text-warning border-warning/30", status: "upcoming" },
  { time: "18:00", label: "Call mom (overdue)", icon: AlertCircle, color: "bg-destructive/20 text-destructive border-destructive/30", status: "upcoming" },
];

export const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[340px] animate-float">
      {/* Glow */}
      <div className="absolute -inset-12 bg-gradient-primary opacity-20 blur-3xl rounded-full" />

      {/* Phone frame */}
      <div className="relative rounded-[3rem] bg-neutral-900 p-3 shadow-2xl border border-neutral-800">
        <div className="rounded-[2.4rem] bg-background overflow-hidden border border-border relative">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-6 w-28 bg-black rounded-full z-10" />

          <div className="pt-10 px-5 pb-6 min-h-[600px] bg-gradient-to-b from-background to-background-secondary/40">
            {/* Greeting */}
            <div className="mt-2">
              <p className="text-xs text-muted-foreground">Tuesday · April 28</p>
              <h3 className="text-xl font-bold text-foreground mt-1">Good evening, Hus</h3>
            </div>

            {/* Streak + Mood */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="glass rounded-2xl p-3">
                <div className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-warning" fill="currentColor" />
                  <span className="text-2xl font-bold text-foreground">42</span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-0.5">day streak</p>
              </div>
              <div className="glass rounded-2xl p-3">
                <div className="flex gap-1 text-base">
                  <span className="opacity-30">😊</span>
                  <span className="opacity-30">😐</span>
                  <span className="opacity-30">😤</span>
                  <span className="opacity-30">😰</span>
                  <span className="scale-125">🔥</span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-1">Today's mood</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-4">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Today</p>
              <div className="space-y-2">
                {tasks.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-2.5 rounded-xl border ${t.color} ${
                        t.status === "done" ? "opacity-60" : ""
                      } ${t.status === "active" ? "ring-2 ring-primary/40 shadow-glow-soft" : ""}`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-medium text-foreground truncate ${t.status === "done" ? "line-through" : ""}`}>
                          {t.label}
                        </p>
                      </div>
                      <span className="text-[10px] text-muted-foreground tabular-nums">{t.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Voice button */}
            <div className="mt-5 flex justify-center">
              <button className="relative w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                <span className="absolute inset-0 rounded-full bg-gradient-primary animate-ping opacity-30" />
                <Mic className="w-5 h-5 text-white relative" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};