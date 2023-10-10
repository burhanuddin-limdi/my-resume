import buildResume from "@/lib/resume";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // res.status(200).json({ message: "Hello from Next.js!" });
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment;filename=resume.pdf:",
  });
  buildResume(
    (chunk) => stream.write(chunk),
    () => stream.end()
  );
}
