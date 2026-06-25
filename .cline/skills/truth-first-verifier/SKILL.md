---
name: truth-first-verifier
description: Enforces code completeness and logical parity. Trigger this during the final code review or verification phase of any migrated component.
---

## Complete Parity Checklist
1. **Zero Placeholders:** You are strictly forbidden from writing `// TODO` or leaving functions empty. Every single line of code must be fully implemented.
2. **Logic Check:** Line by line, confirm that no utility calculations, edge case handlers, or variable data types from the source file were lost or altered during transpilation.
3. **Compilability:** Prior to declaring a task finished, run a validation check on imports to ensure no nonexistent Android dependencies were hallucinated.