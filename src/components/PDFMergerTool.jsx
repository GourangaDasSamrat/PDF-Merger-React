import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import PDFMerger from "pdf-merger-js";
import { useCallback, useState } from "react";
import { Alert, Button, Card, Container } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { useAppContext } from "../hooks/useAppContext";

export default function PDFMergerTool() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { mergeCount, incrementMergeCount } = useAppContext();
  const { user } = useUser();

  const onDrop = useCallback((acceptedFiles) => {
    const pdfFiles = acceptedFiles.filter(
      (file) => file.type === "application/pdf"
    );
    if (pdfFiles.length !== acceptedFiles.length) {
      setError("Only PDF files are allowed");
      return;
    }
    setFiles((prevFiles) => [...prevFiles, ...pdfFiles]);
    setError("");
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  const handleMerge = async () => {
    if (files.length < 2) {
      setError("Please select at least 2 PDF files to merge");
      return;
    }

    if (mergeCount >= 5 && !user.publicMetadata.isPremium) {
      setError(
        "You have reached the maximum number of free merges. Please upgrade to premium."
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      const merger = new PDFMerger();

      for (const file of files) {
        await merger.add(file);
      }

      const mergedPdf = await merger.saveAsBlob();
      const url = URL.createObjectURL(mergedPdf);

      // Create a download link and click it
      const link = document.createElement("a");
      link.href = url;
      link.download = "merged.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      incrementMergeCount();
      setFiles([]);
    } catch (err) {
      setError("Error merging PDFs. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <Container className="py-5">
      <SignedOut>
        <Alert variant="info">Please sign in to merge PDFs</Alert>
      </SignedOut>

      <SignedIn>
        <Card className="shadow-sm">
          <Card.Body>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded p-4 text-center ${
                isDragActive ? "bg-light" : ""
              }`}
            >
              <input {...getInputProps()} />
              <i className="fas fa-file-pdf fa-3x mb-3"></i>
              <p>Drag and drop PDF files here, or click to select files</p>
            </div>

            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}

            {files.length > 0 && (
              <div className="mt-3">
                <h5>Selected Files:</h5>
                {files.map((file, index) => (
                  <div key={index} className="d-flex align-items-center mb-2">
                    <i className="fas fa-file-pdf me-2"></i>
                    <span>{file.name}</span>
                    <Button
                      variant="link"
                      className="ms-auto text-danger"
                      onClick={() => removeFile(index)}
                    >
                      <i className="fas fa-times"></i>
                    </Button>
                  </div>
                ))}

                <Button
                  variant="primary"
                  className="mt-3"
                  onClick={handleMerge}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Merging...
                    </>
                  ) : (
                    "Merge PDFs"
                  )}
                </Button>
              </div>
            )}

            {mergeCount > 0 && (
              <div className="mt-3">
                <small className="text-muted">
                  You have used {mergeCount}/5 free merges
                </small>
              </div>
            )}
          </Card.Body>
        </Card>
      </SignedIn>
    </Container>
  );
}
