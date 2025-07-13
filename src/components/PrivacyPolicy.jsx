const PrivacyPolicy = () => {
  return (
    <div className="container mt-5 pt-5 px-4">
      <h1 className="display-4 fw-bold mb-4">Privacy Policy</h1>

      <div className="mb-5">
        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">Our Commitment to Privacy</h2>
          <p className="text-secondary">
            At PDF-Merger, we take your privacy seriously. Since our application
            runs entirely on the client-side (your browser) without any backend
            server, we do not collect, store, or process any of your personal
            data or PDF files.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">How Your Files Are Processed</h2>
          <p className="text-secondary">When you use our PDF merger tool:</p>
          <ul className="list-unstyled ps-4 mt-3 text-secondary">
            <li>• All file processing happens directly in your browser</li>
            <li>• Your PDF files never leave your device</li>
            <li>• No data is uploaded to any servers</li>
            <li>• No information is stored after you leave the page</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">Open Source Commitment</h2>
          <p className="text-secondary">
            Our project is open source, which means:
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
              • Anyone can verify our privacy claims by examining the code
            </li>
            <li>
              • The community can contribute to making the tool better and more
              secure
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h3 fw-bold mb-3">Contact Us</h2>
          <p className="text-secondary">
            If you have any questions about our privacy practices, you can:
          </p>
          <ul className="list-unstyled ps-4 mt-3 text-secondary">
            <li>• Open an issue on our GitHub repository</li>
            <li>• Contact us through our contact form</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
