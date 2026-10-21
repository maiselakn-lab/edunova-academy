"use client";
import TutorSidebar from "@/components/sidebars/TutorSidebar";
import TopNav from "@/components/TopNav";
import { Star, MessageSquare, ThumbsUp, TrendingUp } from "lucide-react";

export default function TutorReviewsPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <TutorSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] pb-[70px] flex-grow overflow-y-auto">
        <div className="p-8 max-w-[1000px] mx-auto">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Reviews & Rating</h1>
            <p className="text-sm text-gray-500">See what your students are saying about your sessions.</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                <p className="text-5xl font-bold text-gray-800 mb-2">4.9</p>
                <div className="flex justify-center text-yellow-500 mb-2"><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/></div>
                <p className="text-xs text-gray-500 font-medium">Based on 124 reviews</p>
             </div>
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm col-span-2">
                <h3 className="font-bold text-gray-800 mb-3 text-sm">Rating Breakdown</h3>
                {[5, 4, 3, 2, 1].map((stars) => (
                   <div key={stars} className="flex items-center gap-3 mb-2">
                     <span className="text-xs font-bold text-gray-600 w-8">{stars} Star</span>
                     <div className="flex-grow bg-gray-100 rounded-full h-2"><div className={`h-2 rounded-full ${stars === 5 ? 'bg-emerald-500 w-[85%]' : stars === 4 ? 'bg-emerald-400 w-[10%]' : 'bg-gray-300 w-[5%]'}`}></div></div>
                   </div>
                ))}
             </div>
          </div>

          <div className="space-y-4">
             <h2 className="text-lg font-bold text-gray-800 mb-2">Recent Feedback</h2>
             {[
               { name: "Maisela Norman", date: "2 days ago", rating: 5, text: "Dr. Thabo is incredibly patient. He explained quadratic equations in a way that finally made sense to me!" },
               { name: "Sipho Dlamini", date: "1 week ago", rating: 5, text: "Very knowledgeable about Physics. Helped me prepare for my exam with practical examples." },
               { name: "Lerato Khumalo", date: "2 weeks ago", rating: 4, text: "Great session, but sometimes the connection lagged a bit. Overall very helpful." },
             ].map((review, i) => (
               <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                 <div className="flex justify-between items-start mb-2">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold">{review.name.charAt(0)}</div>
                     <div>
                       <p className="font-bold text-gray-800 text-sm">{review.name}</p>
                       <p className="text-[10px] text-gray-500">{review.date}</p>
                     </div>
                   </div>
                   <div className="flex text-yellow-500">
                     {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={14}/>)}
                   </div>
                 </div>
                 <p className="text-sm text-gray-600 leading-relaxed mt-2">{review.text}</p>
                 <button className="text-xs text-emerald-600 font-medium mt-3 hover:underline flex items-center gap-1"><MessageSquare size={12}/> Reply to Review</button>
               </div>
             ))}
          </div>

        </div>
      </main>
    </div>
  );
}