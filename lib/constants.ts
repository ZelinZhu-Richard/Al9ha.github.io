export const SITE = {
  name: "Al9ha",
  tagline: "AI-native research operating system for evidence-backed equity research",
  description:
    "Al9ha — AI-native research operating system for evidence-backed equity research and approval-gated paper trading.",
  url: "https://al9ha.com",
  github: "https://github.com/ZelinZhu-Richard/Nexus-Tensor-Alpha",
  email: "hello@al9ha.com",
} as const;

export const NAV_LINKS = [
  { label: "Problem", href: "#problem" },
  { label: "Architecture", href: "#architecture" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Stack", href: "#stack" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Open Source", href: "#open-source" },
  { label: "Contact", href: "#contact" },
] as const;

export const PIPELINE_NODES = [
  {
    id: "ingestion",
    label: "Ingestion",
    highlight: "Point-in-time correctness",
    description:
      "Every data access is timestamped and gated. No future leakage, ever. Fixture-backed today; live feeds in flight.",
  },
  {
    id: "normalization",
    label: "Normalization",
    description:
      "Heterogeneous inputs — filings, transcripts, fundamentals, alt-data — collapse onto typed schemas with explicit units.",
  },
  {
    id: "evidence",
    label: "Evidence Extraction",
    description:
      "LLM agents distill unstructured artifacts into structured, citation-linked evidence. Every claim points back to a source span.",
  },
  {
    id: "hypothesis",
    label: "Hypothesis + Critique",
    highlight: "Adversarial counter-hypotheses",
    description:
      "For every thesis, the system generates structured counter-hypotheses. Disagreement is a feature, not a bug.",
  },
  {
    id: "features",
    label: "Feature + Signal Generation",
    description:
      "Specialist models produce typed signals over a regime-aware feature space. Each signal carries a confidence and a provenance graph.",
  },
  {
    id: "arbitration",
    label: "Arbitration",
    highlight: "Deterministic conflict resolution",
    description:
      "Conflicting signals are resolved through explicit, deterministic rules — not opaque blending. Every output traces to its inputs.",
  },
  {
    id: "portfolio",
    label: "Portfolio Proposal",
    description:
      "Candidate positions are sized against constraints, exposures, and prior attribution. The proposal is the artifact, not the trade.",
  },
  {
    id: "risk",
    label: "Risk Review",
    highlight: "Human-in-the-loop approval gate",
    description:
      "No proposal becomes a trade without operator approval. The review queue is the production interface, not an afterthought.",
  },
  {
    id: "paper",
    label: "Paper-Trade Candidate",
    description:
      "Approved proposals enter paper-trade execution against simulated fills. Live execution is gated behind validated alpha.",
  },
  {
    id: "monitoring",
    label: "Monitoring",
    description:
      "Position-level attribution streams back into the system. Drift, breach, and regime-shift events trigger reviewer alerts.",
  },
  {
    id: "audit",
    label: "Audit Trail",
    highlight: "Full provenance chain",
    description:
      "Every artifact — from ingested byte to executed candidate — is reconstructable. Auditability is the product.",
  },
] as const;

export const BUILT = [
  "Fixture-backed ingestion pipeline",
  "Structured evidence extraction",
  "Research artifact generation",
  "Signal arbitration engine",
  "Portfolio proposal synthesis",
  "Operator review queue",
  "Paper-trade candidate execution",
  "Append-only audit logging",
  "Daily orchestration runtime",
] as const;

export const ROADMAP = [
  "Live market data integration",
  "Multi-asset class expansion (options, futures, crypto)",
  "Semantic retrieval at scale",
  "Validated alpha measurement framework",
  "Production execution infrastructure",
  "Institutional-grade risk engine",
  "Real-time regime detection dashboard",
  "Investor portal with transparent attribution",
] as const;

export const STACK = [
  {
    title: "Mixture-of-Experts Architecture",
    body: "Regime-aware routing activates specialist models conditional on market state. The router is observable, not magical.",
    code: `route(state) -> expert
  if regime == "trend":   return MomentumExpert
  if regime == "mean":    return RevertExpert
  if regime == "stress":  return DefensiveExpert`,
  },
  {
    title: "LLM Agent Pipeline",
    body: "Autonomous agents convert filings, earnings calls, and news into typed evidence. Hallucinations get filtered at the schema boundary.",
    code: `Evidence {
  claim: str
  source_uri: str
  span: (int, int)
  ts_observed: datetime
  confidence: float
}`,
  },
  {
    title: "Deterministic Arbitration",
    body: "No black-box signal blending. Conflicting signals resolve through explicit rules — every decision is replayable.",
    code: `arbitrate(signals: list[Signal]) -> Decision
  ranked = sort_by(signals, "evidence_strength")
  return resolve(ranked, policy=POLICY_V3)`,
  },
  {
    title: "Point-in-Time Discipline",
    body: "Every read is gated against an as-of timestamp. Lookahead bias is impossible at the data-access layer, not by convention.",
    code: `with as_of(ts):
    fundamentals = store.get("AAPL")
    # raises if any field was published after ts`,
  },
  {
    title: "Typed Data Contracts",
    body: "Schema-enforced boundaries between every service. Implicit coupling is prohibited; breaking changes are visible.",
    code: `class Signal(BaseModel):
  ticker: Ticker
  horizon: Horizon
  score: float
  provenance: ProvenanceGraph`,
  },
  {
    title: "Approval-Gated Execution",
    body: "Nothing trades without human review. The reviewer queue is a first-class production system, not an admin panel.",
    code: `def execute(proposal: Proposal) -> Trade:
  approval = require_review(proposal)
  if not approval.granted:
    raise BlockedByGate(approval.reason)`,
  },
] as const;
