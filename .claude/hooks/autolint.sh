#!/usr/bin/env bash
# Lodestar autolint router (PostToolUse). Runs the owning package's eslint --fix on the
# edited file. Routes by which workspace package the file lives in; skips packages with
# no eslint. Always exits 0 — advisory, never blocks an edit.
set -uo pipefail

input="$(cat)"
file="$(printf '%s' "$input" | python3 -c 'import sys,json;print(json.load(sys.stdin).get("tool_input",{}).get("file_path",""))' 2>/dev/null)"

[ -z "$file" ] && exit 0
# only JS/TS source
case "$file" in
  *.js|*.jsx|*.ts|*.tsx) ;;
  *) exit 0 ;;
esac

root="${CLAUDE_PROJECT_DIR:-.}"
# resolve owning package dir (has package.json with eslint available)
pkg=""
case "$file" in
  "$root"/apps/api/*|apps/api/*)   pkg="$root/apps/api" ;;
  "$root"/apps/web/*|apps/web/*)   pkg="$root/apps/web" ;;
  *) exit 0 ;;  # packages/* have no eslint configured — skip
esac

[ -d "$pkg" ] || exit 0
( cd "$pkg" && pnpm exec eslint --fix "$file" ) >/dev/null 2>&1
exit 0
