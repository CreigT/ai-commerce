import { store } from "@/lib/config";

export const metadata = { title: "Agents" };

const agents = [
  ["CEO Agent", "Sets weekly priorities and keeps offers simple."],
  ["Sales Agent", "Watches checkout drop-off and product mix."],
  ["Support Agent", "Drafts replies for refunds and access issues."],
  ["Content Agent", "Refreshes landing copy and library files."],
  ["Finance Agent", "Tracks $9 / $29 / $19 price performance."],
  ["Risk Agent", "Flags odd refunds and failed payments."],
];

export default function AgentsPage() {
  return (
    <div className="wrap section">
      <h1>Store agents</h1>
      <p className="lede">
        {store.name} is designed so people browse and buy, while small agents
        watch the shop. You are the owner, not the operator.
      </p>
      <div className="card" style={{ marginTop: 24 }}>
        {agents.map(([name, job]) => (
          <div className="agent-row" key={name}>
            <div>
              <span className="dot" />
              <strong>{name}</strong>
              <div className="muted">{job}</div>
            </div>
            <span className="muted">On</span>
          </div>
        ))}
      </div>
      <p className="notice" style={{ marginTop: 20 }}>
        These agents are the operating plan for the store. Wire real model keys
        later. The shop already sells without them.
      </p>
    </div>
  );
}
