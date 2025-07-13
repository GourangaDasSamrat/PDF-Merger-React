const PrivacyPolicy = () => {
  return (
    <div className="container mt-5 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 ">Privacy Policy</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Our Commitment to Privacy
          </h2>
          <p className="text-gray-700">
            At PDF-Merger, we take your privacy seriously. Since our application
            runs entirely on the client-side (your browser) without any backend
            server, we do not collect, store, or process any of your personal
            data or PDF files.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            How Your Files Are Processed
          </h2>
          <p className="text-gray-700">When you use our PDF merger tool:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>All file processing happens directly in your browser</li>
            <li>Your PDF files never leave your device</li>
            <li>No data is uploaded to any servers</li>
            <li>No information is stored after you leave the page</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Open Source Commitment
          </h2>
          <p className="text-gray-700">
            Our project is open source, which means:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>
              The complete source code is available for review on{" "}
              <a
                href="https://github.com/GourangaDasSamrat/PDF-Merger-React"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>Anyone can verify our privacy claims by examining the code</li>
            <li>
              The community can contribute to making the tool better and more
              secure
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about our privacy practices, you can:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Open an issue on our GitHub repository</li>
            <li>Contact us through our contact form</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
