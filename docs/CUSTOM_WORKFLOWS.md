# Custom Cline Workflows for Word Pairing: Category Match

> Three adapted multi-step audit workflows for the React + TypeScript + Capacitor codebase.
> Accessible as MCP server tools via the `word-pairing-mcp-server`.

---

## Workflow 1: Component & Convention Compliance Auditor

**MCP Tool:** `audit_component_conventions`

### What It Does
Scans all React components (or a single specified component) in `components/` for `.clinerules` compliance across five dimensions:

| Check | What It Validates | Severity |
|-------|-------------------|----------|
| `imports` | Import ordering: React → Types → Services → Components | Warning |
| `touch-targets` | All `<button>` elements have `min-w-[48px] min-h-[48px]` classes | Error (for small buttons) / Warning |
| `aria-labels` | Icon-only buttons have `aria-label` attributes; self-closing buttons have text or aria-label | Error / Warning |
| `neon-colors` | No inline `style={{ color/background }}` bypassing the neon Tailwind scheme | Info |
| `naming` | Component exports use PascalCase; filenames match component names | Error (case) / Info (filename) |

### How to Use

```
# Audit all components with all checks:
Use audit_component_conventions

# Audit a single file with specific checks:
Use audit_component_conventions with:
  componentPath: "components/Header.tsx"
  checks: ["touch-targets", "aria-labels"]
```

### Sample Output
```
## 🔍 Component & Convention Compliance Audit

| Severity   | Count |
|------------|-------|
| ❌ Error   | 3     |
| ⚠️ Warning | 12    |
| ℹ️ Info    | 5     |
| **Total**  | **20** |

### By Check Type
#### touch-target-size (14 issues)
- **Header.tsx:42** — <button> at line 42 is missing touch target classes: min-w-[48px], min-h-[48px]
  ↳ *Fix:* Add classes: min-w-[48px] min-h-[48px] to this button element.

### 🚨 Priority Fixes (Errors - 3)
- `SettingsMenu.tsx:88` — Icon button is missing aria-label.
  ↳ Add aria-label="Close settings" to this button.
```

---

## Workflow 2: Data Pipeline Integrity Validator

**MCP Tool:** `validate_data_pipeline`

### What It Does
Cross-validates the full data pipeline from CSVs → services → localStorage → components.

| Scope | What It Validates |
|-------|-------------------|
| `storage` | Every `localStorage` key in `storage.ts` and `App.tsx` is documented, no orphaned keys defined, no unlisted keys in use |
| `mode-mappings` | Game mode → data source file mappings (`.clinerules` Rule #11): THEMED→csvThemeData, EMOJI→emojiData, SYNONYMS→CSV_SYNONYMS, etc. |
| `csv-format` | 13-char word limit, word-definition pairings have equal counts, difficulty is 1/3/5, broadCategory is a known value |
| `word-uniqueness` | No duplicate word tiles across categories (Rule #8) |

### How to Use

```
# Full pipeline audit:
Use validate_data_pipeline

# Check only storage schema:
Use validate_data_pipeline with scope: "storage"

# Check only mode mappings (Rule #11):
Use validate_data_pipeline with scope: "mode-mappings"
```

### Sample Output
```
## 🔍 Data Pipeline Integrity Validation

**Scope:** all

### ✅ Passes
- ✅ Storage: 19 localStorage keys in active use.
- ✅ CLASSIC: Data source verified — 13 file(s) matching 'csvPoolData'.
- ✅ CSV format: 847 rows checked — no format violations.
- ✅ Word uniqueness: All 3,388 words are unique across categories.

### ⚠️ Warnings (2)
- Known storage key "wpm_expansion_level_easy" is not found in any getItem/setItem call.
- ⚠️ Word uniqueness: 42 word(s) appear in multiple categories (rule #8).
```

---

## Workflow 3: Level Sequence & Coverage Auditor

**MCP Tool:** `audit_level_coverage`

### What It Does
Cross-references `DETERMINISTIC_LEVEL_SEQUENCE` against:
- Component files: Does every game mode have a rendering component?
- Data source files: Do the required CSV/TS data files exist?
- Stub detection: Is the component a stub? (detects `// stub`, `// TODO`, `return null`, minimal <30-line files)
- Orphan detection: Are there `Level*.tsx` files not mapped to any mode?

Optionally generates a `PORTING_ROADMAP.md` prioritized by dependency.

### How to Use

```
# Report-only audit:
Use audit_level_coverage

# Report + generate PORTING_ROADMAP.md:
Use audit_level_coverage with outputRoadmap: true
```

### Sample Output
```
## 🔍 Level Coverage Audit

### 📊 Summary
| Status               | Count |
|----------------------|-------|
| ✅ OK                | 8     |
| 📝 Stub/Incomplete   | 3     |
| ❌ Missing           | 0     |
| ❓ Unverified        | 2     |
| **Total modes**      | **10** |

### 🔴 High Priority
- ✅ **CLASSIC** → `Level1_Standard.tsx`
  - Data source: `csvPoolData` (✅ found)

### 🟡 Medium Priority
- 📝 **LEVEL_CASCADE** → `Level8_Cascade.tsx`
  - Data source: `csvPoolData` (✅ found)
  - Component appears to be a stub or minimal implementation.
```

### PORTING_ROADMAP.md Output
```markdown
# Porting Roadmap — Level Coverage Audit

## High Priority
- [ ] **LEVEL_EXPANSION_TEST** — LevelExpansionTest_Easy.tsx — Data source csvExpansionData not verified

## Medium Priority
- [ ] **LEVEL_CASCADE** — Level8_Cascade.tsx — Stub implementation detected
- [ ] **SCORE_BREAKDOWN_OVERLAY** — ScoreBreakdownOverlay.tsx — Minimal implementation
```

---

## Architecture Mapping: How the Workflows Were Adapted

The three workflows were originally described for a **React → Kotlin Compose** transpilation context with **Firebase** and separate **web/native** directory structures. They've been adapted for this **React + TypeScript + Capacitor** codebase as follows:

| Original Concept | Adapted Implementation |
|-----------------|----------------------|
| "Logic-to-Compose" Transpiler (React→Kotlin) | **Component Convention Auditor** — validates component code against `.clinerules` conventions instead of transpiling to Kotlin |
| Firebase Realtime Database Sync & Rules Guard | **Data Pipeline Integrity Validator** — validates localStorage schema, CSV format, and game-mode→data-source mappings |
| Web→Native Directory Sync Audit + PORTING_ROADMAP | **Level Sequence & Coverage Auditor** — validates the deterministic level sequence against component/data files and generates a coverage gap report |

### Why No Kotlin/Firebase Transpilation?

This project is a **Capacitor hybrid app** where:
- All UI is **React/TypeScript** running in a WebView (no Kotlin Compose code)
- Persistence uses **localStorage** (not Firebase)
- There is no separate "native" project directory to sync — the `android/` directory contains only Capacitor-generated shell code

The adapted workflows provide equivalent architectural validation value — ensuring codebase consistency, data integrity, and level coverage — without attempting to transpile to a target that doesn't exist in this architecture.

---

## Best Practices for Running These Workflows
1. Use the MCP server's tools directly (no CLI commands needed)
2. Run all three audits after major feature additions or CSV data changes
3. Use `outputRoadmap: true` with `audit_level_coverage` to track implementation progress
4. Run `audit_component_conventions` with `checks: ["touch-targets", "aria-labels"]` before accessibility-focused sprints
5. Run `validate_data_pipeline` with `scope: "mode-mappings"` after adding new game modes