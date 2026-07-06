import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)", paddingTop: 120, paddingBottom: 120 }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: 24 }}>Privacy Policy</h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: 48, fontSize: 16 }}>Last Updated: July 2026</p>
          
          <div style={{ color: "var(--text-primary)", fontSize: 16, lineHeight: 1.8 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>1. Introduction</h2>
            <p style={{ marginBottom: 24 }}>
              At GAMA LED, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>

            <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>2. The Data We Collect About You</h2>
            <p style={{ marginBottom: 24 }}>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 24, color: "var(--text-secondary)" }}>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            </ul>

            <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>3. How We Use Your Personal Data</h2>
            <p style={{ marginBottom: 24 }}>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 24, color: "var(--text-secondary)" }}>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>4. Data Security</h2>
            <p style={{ marginBottom: 24 }}>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>5. Contact Us</h2>
            <p style={{ marginBottom: 24 }}>
              If you have any questions about this privacy policy or our privacy practices, please contact us.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
