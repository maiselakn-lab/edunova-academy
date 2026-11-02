"use client";
import { useState, useEffect } from "react";
import LearnerSidebar from "@/components/sidebars/LearnerSidebar";
import TopNav from "@/components/TopNav";
import { ArrowLeft, PlayCircle, FileText, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

export default function LessonViewerPage({ params }: { params: { id: string } }) {
  const [lessons, setLessons] = useState<any[]>([]);
  const [activeLesson, setActiveLesson] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [testResult, setTestResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch lessons for this course
    fetch(`https://edunova-academy-qkk5.onrender.com/api/courses/${params.id}/lessons`)
      .then(res => res.json())
      .then(data => {
        setLessons(data);
        if (data.length > 0) {
          loadLesson(data[0].id);
        } else {
          setLoading(false);
        }
      });
  }, [params.id]);

  const loadLesson = async (lessonId: number) => {
    setLoading(true);
    try {
      const res = await fetch(`https://edunova-academy-qkk5.onrender.com/api/lessons/${lessonId}`);
      const data = await res.json();
      setActiveLesson(data.lesson);
      setQuestions(data.questions);
      setAnswers({});
      setTestResult(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitTest = async () => {
    const submissions = Object.keys(answers).map(qId => ({
      question_id: parseInt(qId),
      selected_answer: answers[parseInt(qId)]
    }));

    try {
      const res = await fetch(`https://edunova-academy-qkk5.onrender.com/api/lessons/${activeLesson.id}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissions)
      });
      const data = await res.json();
      setTestResult(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex flex-col">
      <LearnerSidebar />
      <TopNav />
      <main className="ml-[260px] pt-[72px] flex-grow flex overflow-hidden">
        
        {/* Sidebar for Lessons List */}
        <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <Link href="/dashboard/learner/subjects" className="text-sm font-bold text-blue-600 flex items-center gap-2 mb-2 hover:underline">
              <ArrowLeft size={16}/> Back to Subjects
            </Link>
            <h2 className="font-bold text-gray-800">Course Lessons</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {lessons.map((lesson) => (
              <button 
                key={lesson.id} 
                onClick={() => loadLesson(lesson.id)}
                className={`w-full text-left p-4 hover:bg-blue-50 transition-colors ${activeLesson?.id === lesson.id ? 'bg-blue-50 border-l-4 border-blue-600' : ''}`}
              >
                <p className="text-xs text-gray-500 font-bold mb-1">Lesson {lesson.order}</p>
                <p className="text-sm font-medium text-gray-800">{lesson.title}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow overflow-y-auto p-8 bg-[#F8FAFC]">
          {loading ? (
            <div className="text-center py-20">Loading lesson...</div>
          ) : !activeLesson ? (
            <div className="text-center py-20">No lessons found for this course.</div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Video Player */}
              <div className="bg-black rounded-xl overflow-hidden shadow-lg aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={activeLesson.video_url} 
                  title="Lesson Video" 
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
              </div>

              {/* Text Notes */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">{activeLesson.title}</h1>
                <div className="prose max-w-none text-gray-600">
                  <p>{activeLesson.content}</p>
                </div>
              </div>

              {/* Assessment Section */}
              {questions.length > 0 && (
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <FileText className="text-blue-500"/> Lesson Assessment
                  </h2>
                  
                  <div className="space-y-6">
                    {questions.map((q, index) => (
                      <div key={q.id} className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                        <p className="font-bold text-gray-800 mb-3">{index + 1}. {q.question_text}</p>
                        <div className="grid grid-cols-2 gap-3">
                          {['A', 'B', 'C', 'D'].map(opt => {
                            const optionText = q[`option_${opt.toLowerCase()}`];
                            if (!optionText) return null;
                            return (
                              <label key={opt} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${answers[q.id] === opt ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:bg-gray-50'}`}>
                                <input 
                                  type="radio" 
                                  name={`q_${q.id}`} 
                                  value={opt} 
                                  checked={answers[q.id] === opt}
                                  onChange={() => setAnswers({...answers, [q.id]: opt})}
                                  className="accent-blue-600"
                                />
                                <span className="text-sm text-gray-700">{opt}. {optionText}</span>
                              </label>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={handleSubmitTest}
                    disabled={Object.keys(answers).length !== questions.length}
                    className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-colors disabled:opacity-50"
                  >
                    Submit Assessment
                  </button>

                  {/* Result Display */}
                  {testResult && (
                    <div className={`mt-6 p-6 rounded-xl border ${testResult.percentage >= 50 ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
                      <div className="flex items-center gap-3 mb-2">
                        {testResult.percentage >= 50 ? <CheckCircle2 className="text-emerald-600"/> : <XCircle className="text-red-600"/>}
                        <h3 className="text-lg font-bold text-gray-800">
                          Score: {testResult.percentage}%
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600">You got {testResult.score} out of {testResult.total} questions correct.</p>
                    </div>
                  )}
                </div>
              )}

            </div>
          )}
        </div>
      </main>
    </div>
  );
}