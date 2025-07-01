import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#0c0c0c",
        borderBottom: "1px solid #333",
        padding: "1rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#00bfff" }}>
        AiAzure
      </div>

      {isMobile ? (
        <>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}
          >
            <div style={{ width: 25, height: 3, background: "#ccc", margin: "4px 0" }} />
            <div style={{ width: 25, height: 3, background: "#ccc", margin: "4px 0" }} />
            <div style={{ width: 25, height: 3, background: "#ccc", margin: "4px 0" }} />
          </div>

          {menuOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                backgroundColor: "#222",
                borderTop: "1px solid #333",
                textAlign: "center",
              }}
            >
              {["Services", "Process", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "1rem",
                    textDecoration: "none",
                    color: "#ccc",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </>
      ) : (
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          {["Services", "Process", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ textDecoration: "none", color: "#ccc" }}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
