"use client";

import { useEffect, useMemo, useState } from "react";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Goals from "./Goals";
import Hero from "./Hero";
import Loader from "./Loader";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import Services from "./Services";
import Vision from "./Vision";
import Why from "./Why";
import { content } from "../content";

const HERO_SELECTORS = [
  ".hero-tag",
  ".hero-title",
  ".hero-subtitle",
  ".hero-btns",
  ".hero-scroll",
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("ar");
  const [theme, setTheme] = useState("light");

  const t = useMemo(() => content[lang] || content.ar, [lang]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedLang = window.localStorage.getItem("ci-lang");
    const savedTheme = window.localStorage.getItem("ci-theme");
    if (savedLang === "ar" || savedLang === "en") setLang(savedLang);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("ci-lang", lang);
    window.localStorage.setItem("ci-theme", theme);
  }, [lang, theme]);

  useEffect(() => {
    let isMounted = true;
    let cursorRaf = null;
    let sceneRaf = null;
    let renderer = null;
    let loaderTimeout = null;

    const cleanupFns = [];

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setStaticVisibility = () => {
      HERO_SELECTORS.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      });
      document.querySelectorAll(".reveal, .goal-item").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    };

    const runLoader = () => {
      loaderTimeout = window.setTimeout(() => {
        const loader = document.getElementById("loader");
        loader?.classList.add("hidden");
        void initGsap();
      }, 1400);
      cleanupFns.push(() => {
        if (loaderTimeout) window.clearTimeout(loaderTimeout);
      });
    };

    const attachLoadListener = () => {
      if (document.readyState === "complete") {
        runLoader();
      } else {
        window.addEventListener("load", runLoader);
        cleanupFns.push(() => window.removeEventListener("load", runLoader));
      }
    };

    const initCursor = () => {
      const cursor = document.getElementById("cursor");
      const ring = document.getElementById("cursor-ring");
      if (!cursor || !ring) return;

      if (prefersReducedMotion) {
        cursor.style.display = "none";
        ring.style.display = "none";
        document.body.style.cursor = "auto";
        return;
      }

      let mx = 0;
      let my = 0;
      let rx = 0;
      let ry = 0;

      const onMove = (e) => {
        mx = e.clientX;
        my = e.clientY;
      };
      document.addEventListener("mousemove", onMove);
      cleanupFns.push(() => document.removeEventListener("mousemove", onMove));

      const animateCursor = () => {
        if (!isMounted) return;
        cursor.style.left = `${mx}px`;
        cursor.style.top = `${my}px`;
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = `${rx}px`;
        ring.style.top = `${ry}px`;
        cursorRaf = requestAnimationFrame(animateCursor);
      };
      animateCursor();
    };

    const initThree = async () => {
      if (prefersReducedMotion) return;

      const canvas = document.getElementById("hero-canvas");
      if (!canvas) return;

      let THREE;
      try {
        THREE = await import("three");
      } catch (error) {
        console.warn("Three.js failed to load.", error);
        return;
      }
      if (!isMounted) return;

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio || 1);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        100
      );
      camera.position.z = 5;

      const resizeRenderer = () => {
        const w = canvas.parentElement.clientWidth;
        const h = canvas.parentElement.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resizeRenderer();
      window.addEventListener("resize", resizeRenderer);
      cleanupFns.push(() => window.removeEventListener("resize", resizeRenderer));

      const shapes = [];
      const geoms = [
        new THREE.TorusGeometry(0.5, 0.15, 16, 50),
        new THREE.OctahedronGeometry(0.5),
        new THREE.TetrahedronGeometry(0.5),
        new THREE.TorusGeometry(0.3, 0.1, 12, 40),
        new THREE.OctahedronGeometry(0.35),
      ];
      const greenColors = [0x7ac043, 0x2d8a4e, 0x1a5c2e, 0xa8d870, 0x4caf50];

      for (let i = 0; i < 18; i += 1) {
        const geom = geoms[i % geoms.length];
        const mat = new THREE.MeshPhongMaterial({
          color: greenColors[i % greenColors.length],
          wireframe: i % 3 === 0,
          transparent: true,
          opacity: 0.15 + Math.random() * 0.25,
          shininess: 80,
        });
        const mesh = new THREE.Mesh(geom, mat);
        mesh.position.set(
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 4 - 2
        );
        mesh.rotation.set(
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          0
        );
        mesh.userData = {
          rotSpeedX: (Math.random() - 0.5) * 0.006,
          rotSpeedY: (Math.random() - 0.5) * 0.008,
          floatSpeed: 0.3 + Math.random() * 0.5,
          floatOffset: Math.random() * Math.PI * 2,
          baseY: mesh.position.y,
        };
        scene.add(mesh);
        shapes.push(mesh);
      }

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);
      const dirLight = new THREE.DirectionalLight(0x7ac043, 0.8);
      dirLight.position.set(5, 5, 5);
      scene.add(dirLight);
      const dirLight2 = new THREE.DirectionalLight(0x1a5c2e, 0.5);
      dirLight2.position.set(-5, -3, -5);
      scene.add(dirLight2);

      let mouseX = 0;
      let mouseY = 0;
      const onMouseMove = (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      document.addEventListener("mousemove", onMouseMove);
      cleanupFns.push(() => document.removeEventListener("mousemove", onMouseMove));

      const clock = new THREE.Clock();
      const animateScene = () => {
        if (!isMounted) return;
        const t = clock.getElapsedTime();
        shapes.forEach((m) => {
          m.rotation.x += m.userData.rotSpeedX;
          m.rotation.y += m.userData.rotSpeedY;
          m.position.y =
            m.userData.baseY +
            Math.sin(t * m.userData.floatSpeed + m.userData.floatOffset) * 0.3;
        });
        camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 0.2 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
        sceneRaf = requestAnimationFrame(animateScene);
      };
      animateScene();
    };

    const initGsap = async () => {
      if (prefersReducedMotion) {
        setStaticVisibility();
        return;
      }

      let gsapModule;
      let scrollTriggerModule;
      try {
        gsapModule = await import("gsap");
        scrollTriggerModule = await import("gsap/ScrollTrigger");
      } catch (error) {
        console.warn("GSAP failed to load.", error);
        setStaticVisibility();
        return;
      }
      if (!isMounted) return;

      const gsap = gsapModule.gsap || gsapModule.default;
      const ScrollTrigger =
        scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".hero-tag", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });
      gsap.to(".hero-title", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: 0.45,
        ease: "power3.out",
      });
      gsap.to(".hero-subtitle", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: 0.65,
        ease: "power3.out",
      });
      gsap.to(".hero-btns", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.85,
        ease: "power3.out",
      });
      gsap.to(".hero-scroll", { opacity: 1, duration: 0.8, delay: 1.3 });

      gsap.utils.toArray(".reveal").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: (i % 3) * 0.1,
          }
        );
      });

      gsap.utils.toArray(".goal-item").forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    };

    const initCardTilt = () => {
      if (prefersReducedMotion) return;
      const card3d = document.getElementById("aboutCard3d");
      if (!card3d) return;

      const inner = card3d.querySelector(".about-card-inner");
      const onMove = (e) => {
        const rect = card3d.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        if (inner) {
          inner.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 15}deg) scale3d(1.03,1.03,1.03)`;
        }
      };
      const onLeave = () => {
        if (inner) inner.style.transform = "";
      };
      card3d.addEventListener("mousemove", onMove);
      card3d.addEventListener("mouseleave", onLeave);
      cleanupFns.push(() => card3d.removeEventListener("mousemove", onMove));
      cleanupFns.push(() => card3d.removeEventListener("mouseleave", onLeave));
    };

    const initServiceTilt = () => {
      if (prefersReducedMotion) return;
      const serviceCards = Array.from(document.querySelectorAll(".service-card"));
      serviceCards.forEach((card) => {
        const onMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `translateY(-8px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
        };
        const onLeave = () => {
          card.style.transform = "";
        };
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        cleanupFns.push(() => card.removeEventListener("mousemove", onMove));
        cleanupFns.push(() => card.removeEventListener("mouseleave", onLeave));
      });
    };

    const initNavScroll = () => {
      const onScroll = () => {
        const navbar = document.getElementById("navbar");
        if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
      };
      window.addEventListener("scroll", onScroll);
      cleanupFns.push(() => window.removeEventListener("scroll", onScroll));
      onScroll();
    };

    const init = async () => {
      attachLoadListener();
      initCursor();
      initNavScroll();
      initCardTilt();
      initServiceTilt();
      await initThree();
    };

    init();

    return () => {
      isMounted = false;
      if (cursorRaf) cancelAnimationFrame(cursorRaf);
      if (sceneRaf) cancelAnimationFrame(sceneRaf);
      if (renderer) renderer.dispose();
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const toggleLang = () => {
    setLang((current) => (current === "ar" ? "en" : "ar"));
  };

  return (
    <>
      <Loader />
      <Cursor />
      <Navbar
        t={t}
        lang={lang}
        theme={theme}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onToggleTheme={toggleTheme}
        onToggleLang={toggleLang}
      />
      <MobileMenu
        t={t}
        lang={lang}
        theme={theme}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onToggleTheme={toggleTheme}
        onToggleLang={toggleLang}
      />
      <Hero t={t.hero} />
      <About t={t.about} />
      <Services t={t.services} />
      <Vision t={t.vision} />
      <Goals t={t.goals} />
      <Why t={t.why} />
      <Clients t={t.clients} />
      <Contact t={t.contact} />
      <Footer t={t.footer} />
    </>
  );
}
