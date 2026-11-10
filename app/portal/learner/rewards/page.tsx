"use client";

import { useState, useEffect } from 'react';
import { Award, Star, Target, Heart } from 'lucide-react';

export default function Rewards() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRewards = async () => {
      const token = localStorage.getItem('edunova_token');
      try {
        const response = await fetch('https://edunova-academy-qkk5.onrender.com/api/learner/rewards', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          setData(await response.json());
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRewards();
  }, []);

  if (isLoading) return <div className="p-8 text-gray-500">Loading rewards...</div>;

  const iconMap: any = {
    award: <Award className="text-brand-royal" size={32} />,
    star: <Star className="text-brand-gold" size={32} />,
    heart: <Heart className="text-brand-teal" size={32} />,
  };

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">My Rewards</h1>
      
      {/* Stats Row */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-brand-gold/10 border border-brand-gold/30 p-6 rounded-xl text-center">
          <Star className="text-brand-gold mx-auto mb-2" size={40} />
          <p className="text-4xl font-bold text-brand-navy">{data?.reward_points}</p>
          <p className="text-sm text-gray-500 font-medium">Reward Points</p>
        </div>
        <div className="bg-brand-teal/10 border border-brand-teal/30 p-6 rounded-xl text-center">
          <Target className="text-brand-teal mx-auto mb-2" size={40} />
          <p className="text-4xl font-bold text-brand-navy">{data?.attendance_streak}</p>
          <p className="text-sm text-gray-500 font-medium">Day Streak</p>
        </div>
        <div className="bg-brand-royal/10 border border-brand-royal/30 p-6 rounded-xl text-center">
          <Award className="text-brand-royal mx-auto mb-2" size={40} />
          <p className="text-4xl font-bold text-brand-navy">{data?.badges_earned}</p>
          <p className="text-sm text-gray-500 font-medium">Badges Earned</p>
        </div>
      </div>

      {/* Recent Badges */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-brand-navy mb-6">Recent Badges</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {data?.recent_badges?.map((badge: any, i: number) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-brand-grey rounded-lg border border-gray-200">
              <div className="mb-3">{iconMap[badge.icon] || <Award size={32} />}</div>
              <h3 className="font-bold text-brand-navy">{badge.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}