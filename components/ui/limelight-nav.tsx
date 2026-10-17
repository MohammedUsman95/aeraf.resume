"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  cloneElement,
  ReactElement,
} from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export type NavItem = {
  id: string;
  icon: ReactElement<{ className?: string }>;
  label: string;
  targetId?: string;
  onClick?: () => void;
};

// --- Custom Section Icons ---
export const HomeNavIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const ServicesNavIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="14" x="2" y="7" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const TestimonialsNavIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 9h8" />
    <path d="M8 13h5" />
  </svg>
);

export const JourneyNavIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export const BenefitsNavIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

export const AboutNavIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 0 0-16 0" />
  </svg>
);

export const defaultSiteNavItems: NavItem[] = [
  { id: "home", label: "Home", targetId: "home", icon: <HomeNavIcon /> },
  { id: "services", label: "Services", targetId: "services", icon: <ServicesNavIcon /> },
  { id: "testimonials", label: "Reviews", targetId: "testimonials", icon: <TestimonialsNavIcon /> },
  { id: "journey", label: "How It Works", targetId: "journey", icon: <JourneyNavIcon /> },
  { id: "benefits", label: "Why Choose Us", targetId: "benefits", icon: <BenefitsNavIcon /> },
  { id: "about", label: "About Me", targetId: "about", icon: <AboutNavIcon /> },
];

interface LimelightNavProps {
  items?: NavItem[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
  enableScrollSpy?: boolean;
}

export function LimelightNav({
  items = defaultSiteNavItems,
  defaultActiveIndex = 0,
  onTabChange,
  className = "",
  limelightClassName = "",
  iconContainerClassName = "",
  iconClassName = "",
  enableScrollSpy = true,
}: LimelightNavProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);
  const isManualScrollRef = useRef(false);
  const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Position limelight spotlight above the active item
  useIsomorphicLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];

    if (limelight && activeItem) {
      const newLeft =
        activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 40);
      }
    }
  }, [activeIndex, isReady, items]);

  // Track window resize to recalculate limelight position
  useEffect(() => {
    const handleResize = () => {
      const limelight = limelightRef.current;
      const activeItem = navItemRefs.current[activeIndex];
      if (limelight && activeItem) {
        const newLeft =
          activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
        limelight.style.left = `${newLeft}px`;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  // Scrollspy: update active index as user scrolls past sections (only during organic user scrolling)
  useEffect(() => {
    if (!enableScrollSpy) return;

    const handleScroll = () => {
      // If user clicked a button, don't let intermediate sections hijack active state
      if (isManualScrollRef.current) return;

      // At top of page
      if (window.scrollY < 200) {
        setActiveIndex(0);
        return;
      }

      // At bottom of page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveIndex(items.length - 1);
        return;
      }

      const scrollPosition = window.scrollY + 140;

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        if (item.targetId && item.targetId !== "home") {
          const el = document.getElementById(item.targetId);
          if (el) {
            const top = el.offsetTop - 100;
            if (scrollPosition >= top) {
              setActiveIndex(i);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, [items, enableScrollSpy]);

  const handleItemClick = (
    e: React.MouseEvent,
    index: number,
    item: NavItem
  ) => {
    e.preventDefault();

    // Lock to clicked item so spotlight glides directly without back-and-forth jitter
    setActiveIndex(index);
    onTabChange?.(index);
    item.onClick?.();

    isManualScrollRef.current = true;
    if (manualScrollTimeoutRef.current) {
      clearTimeout(manualScrollTimeoutRef.current);
    }
    manualScrollTimeoutRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
    }, 900);

    if (item.targetId) {
      if (item.targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetElement = document.getElementById(item.targetId);
        if (targetElement) {
          const headerOffset = 90;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }
  };

  if (items.length === 0) return null;

  return (
    <nav
      className={`relative inline-flex items-center h-12 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200/90 shadow-sm px-1.5 select-none ${className}`}
      aria-label="Section Navigation"
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <a
            key={item.id}
            ref={(el) => {
              navItemRefs.current[index] = el;
            }}
            href={`#${item.targetId || ""}`}
            className={`group relative z-20 flex h-full cursor-pointer items-center justify-center px-3 sm:px-3.5 transition-colors duration-200 ${iconContainerClassName}`}
            onClick={(e) => handleItemClick(e, index, item)}
            aria-label={item.label}
          >
            {cloneElement(item.icon, {
              className: `w-[18px] h-[18px] sm:w-5 sm:h-5 transition-all duration-200 ${
                isActive
                  ? "text-blue-600 opacity-100 scale-105"
                  : "text-zinc-600 opacity-55 hover:opacity-100 hover:text-zinc-950"
              } ${item.icon.props.className || ""} ${iconClassName}`,
            })}

            {/* Hover Tooltip Pill */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-zinc-900 text-white text-[11px] font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md z-30">
              {item.label}
            </span>
          </a>
        );
      })}

      {/* The Limelight Spotlight Beam */}
      <div
        ref={limelightRef}
        className={`absolute top-0 z-10 w-8 h-[3px] rounded-full bg-blue-600 shadow-[0_8px_16px_rgba(37,99,235,0.8)] ${
          isReady ? "transition-[left] duration-300 ease-out" : ""
        } ${limelightClassName}`}
        style={{ left: "-999px" }}
      >
        {/* Trapezoid light cone projection shining down on the active icon */}
        <div className="absolute left-[-40%] top-[3px] w-[180%] h-11 [clip-path:polygon(10%_100%,30%_0,70%_0,90%_100%)] bg-gradient-to-b from-blue-500/25 to-transparent pointer-events-none" />
      </div>
    </nav>
  );
}

export default LimelightNav;
