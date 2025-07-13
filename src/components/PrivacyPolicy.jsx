const PrivacyPolicy = () => {
  return (
    <div className="container mt-5 pt-5 px-4">
      <h1 className="display-4 fw-bold mb-4">Privacy Policy</h1>
      <p className="text-secondary mb-4">Last Updated: July 13, 2025</p>

      <div className="mb-5">
        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">Our Commitment to Privacy</h2>
          <p className="text-secondary">
            At PDF-Merger, we prioritize your privacy and data security above
            all else. Our application is designed with a "privacy-first"
            approach, running entirely on your local device without any backend
            servers. This means we don't collect, store, or process any of your
            personal data or PDF files. This privacy policy explains in detail
            how we handle your information and protect your privacy.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">How Your Files Are Processed</h2>
          <p className="text-secondary">
            When you use our PDF merger tool, here's what happens:
          </p>
          <ul className="list-unstyled ps-4 mt-3 text-secondary">
            <li>
              • All file processing happens directly in your browser using
              PDF.js, a widely-trusted open-source PDF manipulation library
            </li>
            <li>
              • Your PDF files never leave your device - they are processed
              entirely in your browser's memory
            </li>
            <li>
              • No data is uploaded to any servers - we don't even have servers
              to upload to
            </li>
            <li>
              • No information is stored after you leave the page - all data is
              cleared when you close the tab
            </li>
            <li>
              • The merged PDF is generated locally and downloaded directly to
              your device
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">Technical Implementation</h2>
          <p className="text-secondary">
            Our application is built using React and runs entirely in your web
            browser. Here's the technical breakdown of how we ensure your
            privacy:
          </p>
          <ul className="list-unstyled ps-4 mt-3 text-secondary">
            <li>
              • We use the File API to read files directly in your browser
              without uploading
            </li>
            <li>
              • PDF processing is handled by PDF.js, Mozilla's battle-tested PDF
              library
            </li>
            <li>
              • All computations happen in your device's RAM and are cleared
              automatically
            </li>
            <li>
              • We use React's strict mode and proper garbage collection to
              ensure data cleanup
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">Data We Don't Collect</h2>
          <p className="text-secondary">
            Unlike many other online services, we don't collect:
          </p>
          <ul className="list-unstyled ps-4 mt-3 text-secondary">
            <li>
              • Personal Information - We don't ask for or store any personal
              details
            </li>
            <li>
              • PDF Content - Your documents are never stored or transmitted
            </li>
            <li>• Usage Data - We don't track how you use the application</li>
            <li>• Cookies - We don't use any cookies or local storage</li>
            <li>
              • IP Addresses - We don't log or collect any network information
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">Browser Storage and Cookies</h2>
          <p className="text-secondary">
            Our application uses minimal browser resources:
          </p>
          <ul className="list-unstyled ps-4 mt-3 text-secondary">
            <li>
              • No Local Storage - We don't store any data in your browser's
              local storage
            </li>
            <li>• No Session Storage - No data is kept between sessions</li>
            <li>
              • No Cookies - We don't use any cookies, neither first-party nor
              third-party
            </li>
            <li>
              • Temporary Memory - Files are held in RAM only while being
              processed
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">Open Source Commitment</h2>
          <p className="text-secondary">
            Our commitment to privacy is backed by our open source approach:
          </p>
          <ul className="list-unstyled ps-4 mt-3 text-secondary">
            <li>
              • The complete source code is available for review on{" "}
              <a
                href="https://github.com/GourangaDasSamrat/PDF-Merger-React"
                className="text-primary text-decoration-none"
              >
                GitHub
              </a>
            </li>
            <li>
              • Security researchers and privacy advocates can verify our claims
              by examining the code
            </li>
            <li>
              • The community can contribute to making the tool better and more
              secure
            </li>
            <li>
              • All changes go through public code review before being deployed
            </li>
            <li>
              • Security vulnerabilities can be reported through GitHub's
              security features
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">Third-Party Services</h2>
          <p className="text-secondary">
            We use a minimal set of third-party services:
          </p>
          <ul className="list-unstyled ps-4 mt-3 text-secondary">
            <li>
              • GitHub Pages - For hosting our static website (subject to
              GitHub's privacy policy)
            </li>
            <li>
              • PDF.js - Mozilla's open-source PDF library that runs locally in
              your browser
            </li>
            <li>
              • React - Facebook's open-source UI library that runs entirely on
              the client side
            </li>
            <li>
              • No Analytics - We don't use Google Analytics or any other
              tracking tools
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">Your Rights and Choices</h2>
          <p className="text-secondary">
            Since we don't collect any personal data, many standard privacy
            rights don't apply. However, you still have important rights:
          </p>
          <ul className="list-unstyled ps-4 mt-3 text-secondary">
            <li>
              • Right to Know - You can inspect our source code to see exactly
              how your data is handled
            </li>
            <li>• Right to Privacy - Your files never leave your device</li>
            <li>
              • Right to Security - All processing happens locally with
              industry-standard libraries
            </li>
            <li>
              • Right to Access - You can use our tool without creating an
              account or providing any information
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">Security Measures</h2>
          <p className="text-secondary">
            While we don't store any data, we still implement security best
            practices:
          </p>
          <ul className="list-unstyled ps-4 mt-3 text-secondary">
            <li>• HTTPS - All communication is encrypted using TLS</li>
            <li>• CSP Headers - We use strict Content Security Policies</li>
            <li>
              • Regular Updates - Dependencies are kept up to date to patch
              security vulnerabilities
            </li>
            <li>
              • Secure Development - We follow secure coding practices and
              perform regular code reviews
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">Changes to This Policy</h2>
          <p className="text-secondary">
            We may update this privacy policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. All changes will be documented in our GitHub
            repository's commit history, providing complete transparency about
            when and how our privacy policy evolves.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">Contact Us</h2>
          <p className="text-secondary">
            If you have questions or concerns about our privacy practices:
          </p>
          <ul className="list-unstyled ps-4 mt-3 text-secondary">
            <li>
              • Open an issue on our{" "}
              <a
                href="https://github.com/GourangaDasSamrat/PDF-Merger-React/issues"
                className="text-primary text-decoration-none"
              >
                GitHub repository
              </a>
            </li>
            <li>
              • Contact us through our{" "}
              <a href="/contact" className="text-primary text-decoration-none">
                contact form
              </a>
            </li>
            <li>
              • Review our codebase on GitHub to understand how we handle your
              data
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">Legal Compliance</h2>
          <p className="text-secondary">
            While we don't collect personal data, we're committed to complying
            with privacy laws and regulations including:
          </p>
          <ul className="list-unstyled ps-4 mt-3 text-secondary">
            <li>
              • GDPR - European Union's General Data Protection Regulation
            </li>
            <li>• CCPA - California Consumer Privacy Act</li>
            <li>
              • PIPEDA - Personal Information Protection and Electronic
              Documents Act
            </li>
            <li>• Other applicable data protection laws</li>
          </ul>
          <p className="text-secondary mt-3">
            Since we don't collect any personal data, our compliance mainly
            focuses on transparency and providing you with information about our
            privacy practices.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
