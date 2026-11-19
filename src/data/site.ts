export const socials = [
  { href: "https://github.com/riverBanjo", label: "GitHub" },
  // TODO: add your LinkedIn profile URL, then uncomment.
  { href: "https://www.linkedin.com/in/river-c-fisher/", label: "LinkedIn" },
];

/**
 * Real commits, lightly trimmed. Keep this list short and current —
 * it's the "we ship daily" proof on the homepage.
 */
export const shipped = [
  {
    date: "2026-10-27",
    project: "The World Was Young",
    what: "Keep unsaved drafts through failed saves, and answer every intent",
    kind: "fix",
  },
  {
    date: "2026-10-14",
    project: "The World Was Young",
    what: "Validate each intent and its event append as one step",
    kind: "fix",
  },
  {
    date: "2026-10-13",
    project: "The World Was Young",
    what: "Close the seat-change and deal races around a reopened lobby",
    kind: "fix",
  },
  {
    date: "2026-10-26",
    project: "Just Dash",
    what: "Switch to continuous collision so fast players can't tunnel through walls",
    kind: "fix",
  },
  {
    date: "2026-08-03",
    project: "The World Was Young",
    what: "Replace a shared signup secret with per-code, max-use invites",
    kind: "feature",
  },
  {
    date: "2026-07-30",
    project: "The World Was Young",
    what: "Let players report a problem straight into GitHub Issues",
    kind: "feature",
  },
  {
    date: "2026-07-27",
    project: "The World Was Young",
    what: "Say why the map went read-only when you scrub into history",
    kind: "polish",
  },
  {
    date: "2026-07-23",
    project: "The World Was Young",
    what: "Migrate auth and storage from SQLite to Postgres + Better Auth",
    kind: "feature",
  },
] as const;
