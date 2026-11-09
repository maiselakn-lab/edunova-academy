export default function AuditLogs() {
  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-brand-navy mb-6">System Audit Logs</h1>
      <div className="bg-[#081020] rounded-xl border border-white/10 shadow-sm p-6 text-green-400 font-mono text-sm overflow-x-auto">
        <p>[2026-03-15 09:12:01] USER_LOGIN: student@test.com (IP: 192.168.1.1)</p>
        <p>[2026-03-15 09:15:22] PAYMENT_SUCCESS: INV-2026-001 (R 850.00)</p>
        <p>[2026-03-15 10:05:11] TUTOR_REPORT_SUBMITTED: Mr. T. Nkosi</p>
        <p>[2026-03-15 11:30:00] ADMIN_LOGIN: admin@test.com (IP: 192.168.1.5)</p>
      </div>
    </div>
  );
}