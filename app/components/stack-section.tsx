"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Matter from "matter-js";
import { FaAws } from "react-icons/fa";
import {
  SiShopify,
  SiCloudflare,
  SiFlutter,
  SiMongodb,
  SiReact,
  SiWordpress,
  SiFigma,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiMysql,
  SiJavascript,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

/* ─── badge data ─── */
const stackItems = [
  { name: "AWS",          bg: "#000000", text: "#ffffff", icon: FaAws },
  { name: "MongoDB",      bg: "#ff5c00", text: "#ffffff", icon: SiMongodb },
  { name: "Framer",       bg: "#000000", text: "#ffffff", icon: SiFramer },
  { name: "React",        bg: "#ff5c00", text: "#ffffff", icon: SiReact },
  { name: "Cloudflare",   bg: "#000000", text: "#ffffff", icon: SiCloudflare },
  { name: "Tailwind CSS", bg: "#ff5c00", text: "#ffffff", icon: SiTailwindcss },
  { name: "Shopify",      bg: "#000000", text: "#ffffff", icon: SiShopify },
  { name: "Node.js",      bg: "#ff5c00", text: "#ffffff", icon: SiNodedotjs },
  { name: "MySQL",        bg: "#000000", text: "#ffffff", icon: SiMysql },
  { name: "Flutter",      bg: "#ff5c00", text: "#ffffff", icon: SiFlutter },
  { name: "JavaScript",   bg: "#000000", text: "#ffffff", icon: SiJavascript },
  { name: "Figma",        bg: "#ff5c00", text: "#ffffff", icon: SiFigma },
  { name: "Tailwind CSS", bg: "#000000", text: "#ffffff", icon: SiTailwindcss },
  { name: "Firebase",     bg: "#ff5c00", text: "#ffffff", icon: SiFirebase },
  { name: "WordPress",    bg: "#000000", text: "#ffffff", icon: SiWordpress },
  { name: "Next.js",      bg: "#ff5c00", text: "#ffffff", icon: SiNextdotjs },
];

/* ─── measure badge sizes with a hidden probe ─── */
function useBadgeSizes() {
  const [sizes, setSizes] = useState<{ w: number; h: number }[]>([]);
  const probeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!probeRef.current) return;
    const els = probeRef.current.children;
    const measured: { w: number; h: number }[] = [];
    for (let i = 0; i < els.length; i++) {
      const rect = els[i].getBoundingClientRect();
      measured.push({ w: rect.width, h: rect.height });
    }
    setSizes(measured);
  }, []);

  const probeEl = (
    <div
      ref={probeRef}
      aria-hidden
      style={{
        position: "absolute",
        visibility: "hidden",
        pointerEvents: "none",
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
      }}
    >
      {stackItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 32px",
              borderRadius: 9999,
              fontSize: 20,
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            <Icon style={{ fontSize: 26 }} />
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );

  return { sizes, probeEl };
}

/* ─── main component ─── */
export function StackSection() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const bodiesRef = useRef<Matter.Body[]>([]);
  const wallsRef = useRef<Matter.Body[]>([]);
  const hasInitRef = useRef(false);
  const mouseConstraintRef = useRef<Matter.MouseConstraint | null>(null);
  const rafRef = useRef<number>(0);
  const [positions, setPositions] = useState<
    { x: number; y: number; angle: number }[]
  >([]);
  const [isReady, setIsReady] = useState(false);
  const [isInView, setIsInView] = useState(false);

  /* trigger physics only when section scrolls into view */
  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { sizes, probeEl } = useBadgeSizes();

  /* sync DOM to physics bodies at ~60fps */
  const syncPositions = useCallback(() => {
    const bodies = bodiesRef.current;
    if (bodies.length === 0) return;
    setPositions(
      bodies.map((b) => ({ x: b.position.x, y: b.position.y, angle: b.angle }))
    );
    rafRef.current = requestAnimationFrame(syncPositions);
  }, []);

  /* initialise Matter world — only after section is in view */
  useEffect(() => {
    if (!isInView || hasInitRef.current || sizes.length === 0 || !sceneRef.current) return;
    hasInitRef.current = true;

    const container = sceneRef.current;
    const W = container.offsetWidth;
    const H = container.offsetHeight;

    const { Engine, Runner, Composite, Bodies, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create({ gravity: { x: 0, y: 1.8, scale: 0.001 } });
    engineRef.current = engine;

    /* walls */
    const wallOpts: Matter.IBodyDefinition = {
      isStatic: true,
      restitution: 0.5,
      friction: 0.3,
    };
    const t = 60; // wall thickness
    const floor  = Bodies.rectangle(W / 2, H + t / 2, W + t * 2, t, wallOpts as any);
    const leftW  = Bodies.rectangle(-t / 2, H / 2, t, H * 2, wallOpts as any);
    const rightW = Bodies.rectangle(W + t / 2, H / 2, t, H * 2, wallOpts as any);
    wallsRef.current = [floor, leftW, rightW];
    Composite.add(engine.world, [floor, leftW, rightW]);

    /* badge bodies — drop from above at staggered x positions */
    const bodies: Matter.Body[] = [];
    const cornerRadius = 24; // visual rounding approximation via chamfer
    sizes.forEach((s, i) => {
      const padW = s.w;
      const padH = s.h;
      const startX = (W / (sizes.length + 1)) * (i + 1);
      const startY = -padH - i * 80 - 50; // stagger vertically above viewport

      const body = Bodies.rectangle(startX, startY, padW, padH, {
        restitution: 0.45,
        friction: 0.4,
        frictionAir: 0.02,
        density: 0.002,
        chamfer: { radius: Math.min(cornerRadius, padH / 2) },
        angle: ((Math.random() - 0.5) * Math.PI) / 8,
      });
      bodies.push(body);
    });
    bodiesRef.current = bodies;
    Composite.add(engine.world, bodies);

    /* mouse interaction — drag & throw */
    const mouse = Mouse.create(container);
    // Fix for high-DPI / CSS scaling
    (mouse as any).pixelRatio = 1;

    const mConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      } as any,
    });
    mouseConstraintRef.current = mConstraint;
    Composite.add(engine.world, mConstraint);

    /* runner */
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    setIsReady(true);
    rafRef.current = requestAnimationFrame(syncPositions);

    /* handle resize */
    const handleResize = () => {
      if (!sceneRef.current) return;
      const nW = sceneRef.current.offsetWidth;
      const nH = sceneRef.current.offsetHeight;

      Matter.Body.setPosition(floor, { x: nW / 2, y: nH + t / 2 });
      Matter.Body.setVertices(floor, Bodies.rectangle(nW / 2, nH + t / 2, nW + t * 2, t).vertices);

      Matter.Body.setPosition(leftW, { x: -t / 2, y: nH / 2 });
      Matter.Body.setVertices(leftW, Bodies.rectangle(-t / 2, nH / 2, t, nH * 2).vertices);

      Matter.Body.setPosition(rightW, { x: nW + t / 2, y: nH / 2 });
      Matter.Body.setVertices(rightW, Bodies.rectangle(nW + t / 2, nH / 2, t, nH * 2).vertices);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      Runner.stop(runner);
      Engine.clear(engine);
      window.removeEventListener("resize", handleResize);
      hasInitRef.current = false;
    };
  }, [sizes, syncPositions, isInView]);

  return (
    <section className="py-24 md:py-8 bg-white overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Heading & Subtext */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-12">
          <div className="max-w-[800px]">
            <h2 className="text-4xl md:text-7xl font-bold text-black leading-tight tracking-tight">
              <span className="text-orange-500 font-serif italic font-light">
                Stack:
              </span>{" "}
              Powering ideas with fast, scalable technologies.
            </h2>
          </div>

          <div className="max-w-[500px] md:mt-4">
            <p className="text-gray-600 text-base md:text-xl font-normal leading-relaxed">
              We use industry-leading technologies and tools to design, develop,
              and deliver high-performance digital experiences. From frontend
              frameworks to backend systems and design tools, every choice is
              made to ensure speed, scalability, and seamless user experience.
            </p>
          </div>
        </div>

        {/* Physics container */}
        <div
          ref={sceneRef}
          style={{
            position: "relative",
            width: "100%",
            height: 500,
            marginTop: 64,
            overflow: "hidden",
            borderRadius: 24,
            background: "#ffffff",
            touchAction: "none",       // prevent scroll on touch drag
            userSelect: "none",
            cursor: "default",
          }}
        >
          {/* hidden probe to measure badge sizes */}
          {probeEl}

          {/* rendered badges — positioned by physics */}
          {isReady &&
            stackItems.map((item, i) => {
              const Icon = item.icon;
              const pos = positions[i];
              if (!pos) return null;
              const s = sizes[i];
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: pos.x - s.w / 2,
                    top: pos.y - s.h / 2,
                    width: s.w,
                    height: s.h,
                    transform: `rotate(${pos.angle}rad)`,
                    background: item.bg,
                    color: item.text,
                    borderRadius: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: "12px 32px",
                    fontSize: 20,
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    cursor: "grab",
                    pointerEvents: "none", // let mouse events pass through to Matter mouse
                    boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
                    willChange: "transform",
                  }}
                >
                  <Icon style={{ fontSize: 26, flexShrink: 0 }} />
                  <span style={{ letterSpacing: "-0.02em" }}>{item.name}</span>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
