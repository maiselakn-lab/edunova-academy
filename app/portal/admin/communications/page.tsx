export default function CommsAudit() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">Communication Audit</h1>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-brand-navy mb-4">Flagged Messages</h2>
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <p className="text-sm text-gray-800 font-medium mb-2">Tutor attempted to share a personal WhatsApp number with a minor.</p>
          <button className="bg-orange-600 text-white px-4 py-2 rounded text-xs font-bold">Review Conversation</button>
        </div>
      </div>
    </div>
  );
}