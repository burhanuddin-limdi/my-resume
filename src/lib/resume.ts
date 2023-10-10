import PDFDocument from "pdfkit";

export default function buildResume(dataCallBack, endCallBack) {
  const doc = new PDFDocument({
    size: "A4", //595.28 X 841.89
  });

  doc.on("data", dataCallBack);
  doc.on("end", endCallBack);

  doc.end();

  //   return doc;
}
