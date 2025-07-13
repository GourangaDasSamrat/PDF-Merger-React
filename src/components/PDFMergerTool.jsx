import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import PDFMerger from "pdf-merger-js";
import { useCallback, useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { useAppContext } from "../hooks/useAppContext";

export default function PDFMergerTool() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mergedPdfUrl, setMergedPdfUrl] = useState(null);
  const [autoDownload, setAutoDownload] = useState(true);
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

  const moveFile = (index, direction) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      if (direction === "up" && index > 0) {
        [newFiles[index], newFiles[index - 1]] = [
          newFiles[index - 1],
          newFiles[index],
        ];
      } else if (direction === "down" && index < newFiles.length - 1) {
        [newFiles[index], newFiles[index + 1]] = [
          newFiles[index + 1],
          newFiles[index],
        ];
      }
      return newFiles;
    });
    // Clear merged PDF URL when files are reordered
    setMergedPdfUrl(null);
  };

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
      setMergedPdfUrl(url);
      incrementMergeCount();

      if (autoDownload) {
        const link = document.createElement("a");
        link.href = url;
        link.download = "merged.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      setError("Error merging PDFs. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!mergedPdfUrl) return;

    const link = document.createElement("a");
    link.href = mergedPdfUrl;
    link.download = "merged.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    // Clear merged PDF URL when files are modified
    setMergedPdfUrl(null);
  };

  return (
    <Container fluid className="py-5 mt-5">
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

            <Form className="mt-3">
              <Form.Group controlId="autoDownload">
                <Form.Check
                  type="checkbox"
                  label="Automatically download after merging"
                  checked={autoDownload}
                  onChange={(e) => setAutoDownload(e.target.checked)}
                  id="auto-download-checkbox"
                />
              </Form.Group>
            </Form>

            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}

            {files.length > 0 && (
              <div className="mt-3">
                <h5>Selected Files:</h5>
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center mb-2 border rounded p-2"
                  >
                    <i className="fas fa-file-pdf me-2"></i>
                    <span>{file.name}</span>
                    <div className="ms-auto d-flex align-items-center">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="me-2"
                        onClick={() => moveFile(index, "up")}
                        disabled={index === 0}
                      >
                        <i className="fas fa-arrow-up"></i>
                      </Button>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="me-2"
                        onClick={() => moveFile(index, "down")}
                        disabled={index === files.length - 1}
                      >
                        <i className="fas fa-arrow-down"></i>
                      </Button>
                      <Button
                        variant="link"
                        className="text-danger"
                        onClick={() => removeFile(index)}
                      >
                        <i className="fas fa-times"></i>
                      </Button>
                    </div>
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

                {mergedPdfUrl && !autoDownload && (
                  <div className="mt-3">
                    <Button
                      variant="success"
                      onClick={handleDownload}
                      disabled={loading}
                    >
                      <i className="fas fa-download me-2"></i>
                      Download Merged PDF
                    </Button>
                  </div>
                )}
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
