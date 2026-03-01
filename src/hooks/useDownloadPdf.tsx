import { jsPDF } from "jspdf";

/**
 * Custom hook to download any string content as a PDF.
 * @param content Text to include in PDF
 * @param fileName Optional file name (default: "document.pdf")
 */
const useDownloadPdf = (content: string, fileName = "document.pdf") => {
  const downloadPDF = () => {
    if (!content) return;

    const doc = new jsPDF();

    doc.setFont("Times", "Normal");
    doc.setFontSize(12);

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    const maxWidth = pageWidth - margin * 2;

    doc.text(content, margin, 20, { maxWidth, align: "left" });
    doc.save(fileName);
  };

  return downloadPDF;
};

export default useDownloadPdf;