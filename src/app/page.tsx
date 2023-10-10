"use client";
export default function Home() {
  async function getData() {
    try {
      const response = await fetch("/api/hello", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.arrayBuffer();
          }
          throw new Error("Unable to download PDF");
        })
        .then((arrayBuffer) => {
          const blob = new Blob([arrayBuffer], { type: "application/pdf" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "resume.pdf";
          document.body.appendChild(link);
          link.click();
        })
        .catch((error) => {
          console.error(error);
        });
      const json = await response;
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <div className="container max-w-2xl">
        <div className="flex">
          <button onClick={getData}>get</button>
        </div>
      </div>
    </main>
  );
}
