import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #081321 0%, #12314d 55%, #1c5d74 100%)",
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 7,
            border: "2px solid rgba(224, 247, 255, 0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            boxShadow: "inset 0 0 0 1px rgba(111, 218, 230, 0.2)",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 3,
              background: "#8ee7ef",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
