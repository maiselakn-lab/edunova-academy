import PublicNavbar from '@/components/layout/PublicNavbar';

export default function Strategy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNavbar />
      <section className="bg-brand-navy py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Strategic Plan</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Our roadmap to transforming digital education in South Africa.</p>
        </div>
      </section>
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-grey p-8 rounded-lg"><h2 className="text-xl font-bold text-brand-navy mb-2">Objective 1: Education</h2><p className="text-gray-600">Provide accessible, quality, and personalised education through human tutors and AI-assisted learning.</p></div>
          <div className="bg-brand-grey p-8 rounded-lg"><h2 className="text-xl font-bold text-brand-navy mb-2">Objective 2: Employment</h2><p className="text-gray-600">Create a structured platform where graduates can apply, demonstrate competency, teach, and earn income.</p></div>
        </div>
      </section>
    </div>
  );
}