import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)", paddingTop: 120, paddingBottom: 120 }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: 24 }}>Terms of Service</h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: 48, fontSize: 16 }}>Last Updated: July 2026</p>
          
          <div style={{ color: "var(--text-primary)", fontSize: 16, lineHeight: 1.8 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>1. Agreement to Terms</h2>
            <p style={{ marginBottom: 24 }}>
              By accessing our website, you agree to be bound by these Terms of Service and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>2. Use License</h2>
            <p style={{ marginBottom: 24 }}>
              Permission is granted to temporarily download one copy of the materials (information or software) on GAMA LED's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 24, color: "var(--text-secondary)" }}>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on GAMA LED's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>3. Disclaimer</h2>
            <p style={{ marginBottom: 24 }}>
              The materials on GAMA LED's website are provided on an 'as is' basis. GAMA LED makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>4. Limitations</h2>
            <p style={{ marginBottom: 24 }}>
              In no event shall GAMA LED or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GAMA LED's website, even if GAMA LED or a GAMA LED authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>5. Revisions and Errata</h2>
            <p style={{ marginBottom: 24 }}>
              The materials appearing on GAMA LED's website could include technical, typographical, or photographic errors. GAMA LED does not warrant that any of the materials on its website are accurate, complete or current. GAMA LED may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
