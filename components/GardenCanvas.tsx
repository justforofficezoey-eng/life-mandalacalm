"use client";

import { useEffect, useMemo, useState } from "react";

export default function GardenCanvas({ garden }: any) {
  const elements = garden?.elements || [];
  const [selected, setSelected] = useState<any>(null);

  const now = new Date();

  const currentTime = now.toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const arranged = useMemo(() => {
    const count = elements.length || 1;
    const radius = 190;

    return elements.map((e: any, i: number) => {
      const angle = (Math.PI * 2 * i) / count - Math.PI / 2;

      const size = e.size || 90;

      return {
        ...e,
        displayX:
          310 + Math.cos(angle) * radius - size / 2,
        displayY:
          310 + Math.sin(angle) * radius - size / 2,
        delay: `${i * 0.7}s`,
      };
    });
  }, [elements]);

  return (
    <section
      style={{
        margin: "70px auto",
        maxWidth: 760,
        textAlign: "center",
      }}
    >
      <div
        style={{
          marginBottom: 25,
          fontFamily: "Georgia, 'Times New Roman', serif",
          color: "#756d5b",
          letterSpacing: 3,
        }}
      >
        LIFE MANDALA
      </div>

      <div
        style={{
          position: "relative",
          width: 620,
          height: 620,
          maxWidth: "90vw",
          maxHeight: "90vw",
          margin: "0 auto",
          borderRadius: "50%",
          overflow: "hidden",
          background:
            "radial-gradient(circle at center, #fff9e8 0%, #edf0e4 45%, #dce2d5 100%)",
          boxShadow:
            "0 45px 120px rgba(65,58,43,.18), inset 0 0 90px rgba(255,255,255,.8)",
        }}
      >
        {/* 中央呼吸光 */}
        <div
          style={{
            position: "absolute",
            width: 230,
            height: 230,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,239,181,.95), rgba(255,239,181,.15), transparent 72%)",
            animation: "mandalaBreath 9s ease-in-out infinite",
          }}
        />

        {/* 中央时间 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            color: "#6e6756",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          <div
            style={{
              fontSize: 24,
              letterSpacing: 7,
            }}
          >
            此刻
          </div>

          <div
            style={{
              marginTop: 14,
              fontSize: 13,
              letterSpacing: 1.5,
              opacity: 0.75,
            }}
          >
            {currentTime}
          </div>
        </div>

        {/* 时间轨道 */}
        <div
          style={{
            position: "absolute",
            inset: 85,
            borderRadius: "50%",
            border: "1px solid rgba(120,115,95,.13)",
          }}
        />

        {/* 记忆节点 */}
        {arranged.map((e: any, i: number) => (
          <button
            key={i}
            onClick={() => setSelected(e)}
            style={{
              position: "absolute",
              left: e.displayX,
              top: e.displayY,
              width: e.size || 90,
              padding: 0,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              opacity: 0,
              animation: `memoryAppear 1.8s ease ${e.delay} forwards`,
            }}
          >
            <img
              src={e.image}
              alt="memory"
              style={{
                width: "100%",
                display: "block",
                filter:
                  "drop-shadow(0 18px 25px rgba(60,50,30,.16))",
                animation: `memoryFloat ${7 + i}s ease-in-out ${e.delay} infinite`,
              }}
            />

            <div
              style={{
                marginTop: 7,
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 11,
                color: "#77715f",
                whiteSpace: "nowrap",
              }}
            >
              {e.localTime || ""}
            </div>
          </button>
        ))}

        {/* 回顾 */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 20,
              background: "rgba(249,245,234,.94)",
              backdropFilter: "blur(14px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 45,
              color: "#575346",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 13,
                letterSpacing: 3,
              }}
            >
              {selected.localTime || "那一刻"}
            </div>

            <div
              style={{
                marginTop: 28,
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 25,
                fontWeight: 400,
              }}
            >
              {selected.mood || "一个瞬间"}
            </div>

            {selected.text && (
              <p
                style={{
                  maxWidth: 400,
                  marginTop: 25,
                  lineHeight: 2.2,
                  fontSize: 16,
                }}
              >
                「{selected.text}」
              </p>
            )}

            <div
              style={{
                marginTop: 35,
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 12,
                color: "#999",
              }}
            >
              再次经过这个时刻
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
