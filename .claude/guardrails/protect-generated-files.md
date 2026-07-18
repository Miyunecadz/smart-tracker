---
name: protect-generated-files
enabled: true
event: file
pattern: '(dump\.rdb$|graph\.(json|html)$|GRAPH_REPORT\.md$|/(android|ios)/.*/build/)'
severity: block
---
These paths are generated or binary artifacts — the redis `dump.rdb`, Graphify output (`graph.json` / `graph.html` / `GRAPH_REPORT.md`), and native `android`/`ios` build output. Editing them is meaningless or actively harmful; regenerate from their source instead (rerun graphify, rebuild the app, etc.).
