import { Award, Star, Target } from 'lucide-react';
export default function Rewards() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">My Rewards</h1>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-brand-gold/10 border border-brand-gold/30 p-6 rounded-xl text-center">
          <Star className="text-brand-gold mx-auto mb-2" size={40} />
          <p className="text-4xl font-bold text-brand-navy">450</p>
          <p className="text-sm text-gray-500 font-medium">Reward Points</p>
        </div>
        <div className="bg-brand-teal/10 border border-brand-teal/30 p-6 rounded-xl text-center">
          <Target className="text-brand-teal mx-auto mb-2" size={40} />
          <p className="text-4xl font-bold text-brand-navy">12</p>
          <p className="text-sm text-gray-500 font-medium">Day Streak</p>
        </div>
        <div className="bg-brand-royal/10 border border-brand-royal/30 p-6 rounded-xl text-center">
          <Award className="text-brand-royal mx-auto mb-2" size={40} />
          <p className="text-4xl font-bold text-brand-navy">3</p>
          <p className="text-sm text-gray-500 font-medium">Badges Earned</p>
        </div>
      </div>
    </div>
  );
}