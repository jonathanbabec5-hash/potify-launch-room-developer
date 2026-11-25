type EcosystemTab = "record" | "doctor" | "game" | "paper" | "reclaim";

const tabs = [
  { id: "reclaim", label: "Project Reclaim", href: "https://potify-reclaim.wile-e-coyot.chatgpt.site", external: true },
  { id: "record", label: "Public Record", href: "/" },
  { id: "doctor", label: "Plant Doctor", href: "/plant-doctor" },
  { id: "game", label: "Vape God", href: "https://potifywebsite.com/vape-god/", external: true },
  { id: "paper", label: "White Paper", href: "/whitepaper" },
] as const;

export function EcosystemTabs({ active }: { active: EcosystemTab }) {
  return (
    <nav className="ecosystem-tabs" aria-label="POTIFY ecosystem">
      <span>Explore</span>
      {tabs.map((tab) => (
        <a
          key={tab.id}
          href={tab.href}
          className={active === tab.id ? "active" : undefined}
          aria-current={active === tab.id ? "page" : undefined}
          target={tab.external ? "_blank" : undefined}
          rel={tab.external ? "noreferrer" : undefined}
        >
          {tab.label}
          {tab.external && <small aria-hidden="true">↗</small>}
        </a>
      ))}
    </nav>
  );
}
