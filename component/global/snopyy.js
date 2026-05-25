// ─────────────────────────────────────────
//  ILUSTRACIONES DE SNOOPY
//  Rota automáticamente según el número de mes
// ─────────────────────────────────────────

const SNOOPYS = [

  // Mes 1 — Snoopy escribiendo una carta
  `<svg width="82" height="82" viewBox="0 0 82 82" fill="none">
    <rect x="12" y="38" width="46" height="36" rx="2" fill="var(--paper2)" stroke="var(--light)" stroke-width="1.2"/>
    <line x1="20" y1="50" x2="50" y2="50" stroke="var(--light)" stroke-width="1"/>
    <line x1="20" y1="58" x2="50" y2="58" stroke="var(--light)" stroke-width="1"/>
    <line x1="20" y1="66" x2="40" y2="66" stroke="var(--light)" stroke-width="1"/>
    <path d="M52 36 L68 20 L72 28 L56 44 Z" fill="var(--ink)" opacity="0.15" stroke="var(--ink)" stroke-width="1"/>
    <circle cx="44" cy="26" r="16" fill="var(--paper)"/>
    <ellipse cx="36" cy="36" rx="5" ry="9" fill="var(--ink)" transform="rotate(-10 36 36)"/>
    <ellipse cx="56" cy="22" rx="5" ry="3" fill="var(--ink)"/>
    <circle cx="50" cy="18" r="2.5" fill="var(--ink)"/>
    <path d="M51 29 Q55 32 59 29" stroke="var(--ink)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <ellipse cx="30" cy="46" rx="16" ry="10" fill="var(--paper)"/>
  </svg>`,

  // Mes 2 — Snoopy con corazón
  `<svg width="82" height="82" viewBox="0 0 82 82" fill="none">
    <path d="M41 65 C41 65 15 50 10 36 C5 22 14 12 25 12 C32 12 38 17 41 24 C44 17 50 12 57 12 C68 12 77 22 72 36 C67 50 41 65 41 65Z" fill="none" stroke="var(--ink)" stroke-width="1.5" opacity="0.2"/>
    <circle cx="50" cy="34" r="13" fill="var(--paper)"/>
    <ellipse cx="43" cy="42" rx="4" ry="7.5" fill="var(--ink)" transform="rotate(-10 43 42)"/>
    <ellipse cx="59" cy="31" rx="4" ry="2.5" fill="var(--ink)"/>
    <circle cx="54" cy="27" r="2" fill="var(--ink)"/>
    <path d="M54 38 Q58 41 62 38" stroke="var(--ink)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <ellipse cx="41" cy="53" rx="14" ry="9" fill="var(--paper)"/>
    <ellipse cx="33" cy="62" rx="9" ry="5" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
    <ellipse cx="49" cy="62" rx="9" ry="5" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
  </svg>`,

  // Mes 3 — Snoopy pensando
  `<svg width="82" height="82" viewBox="0 0 82 82" fill="none">
    <ellipse cx="48" cy="18" rx="18" ry="11" fill="var(--paper2)" stroke="var(--light)" stroke-width="1.2"/>
    <circle cx="34" cy="28" r="3" fill="var(--paper2)" stroke="var(--light)" stroke-width="1"/>
    <circle cx="30" cy="35" r="2" fill="var(--paper2)" stroke="var(--light)" stroke-width="1"/>
    <text x="38" y="23" font-family="serif" font-size="13" fill="var(--ink)" opacity="0.5">♥</text>
    <circle cx="44" cy="56" r="14" fill="var(--paper)"/>
    <ellipse cx="36" cy="65" rx="5" ry="9" fill="var(--ink)" transform="rotate(-8 36 65)"/>
    <ellipse cx="55" cy="52" rx="5" ry="3" fill="var(--ink)"/>
    <circle cx="49" cy="48" r="2.2" fill="var(--ink)"/>
    <path d="M50 61 Q54 64 58 61" stroke="var(--ink)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <ellipse cx="38" cy="70" rx="14" ry="8" fill="var(--paper)"/>
  </svg>`,

  // Mes 4 — Snoopy bailando de alegría
  `<svg width="82" height="82" viewBox="0 0 82 82" fill="none">
    <text x="8" y="20" font-size="9" fill="var(--ink)" opacity="0.15" font-family="serif">✦</text>
    <text x="64" y="16" font-size="7" fill="var(--ink)" opacity="0.12" font-family="serif">✦</text>
    <ellipse cx="41" cy="56" rx="16" ry="18" fill="var(--paper)"/>
    <circle cx="55" cy="30" r="15" fill="var(--paper)"/>
    <ellipse cx="47" cy="39" rx="5" ry="8.5" fill="var(--ink)" transform="rotate(-12 47 39)"/>
    <ellipse cx="67" cy="27" rx="5" ry="3" fill="var(--ink)"/>
    <circle cx="61" cy="23" r="2.5" fill="var(--ink)"/>
    <path d="M57 34 Q61 37 65 34" stroke="var(--ink)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M26 52 Q18 40 22 30" stroke="var(--paper)" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    <path d="M26 52 Q18 40 22 30" stroke="var(--ink)" stroke-width="1.2" stroke-linecap="round" fill="none"/>
    <path d="M56 52 Q64 42 62 32" stroke="var(--paper)" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    <path d="M56 52 Q64 42 62 32" stroke="var(--ink)" stroke-width="1.2" stroke-linecap="round" fill="none"/>
    <path d="M32 72 Q25 78 20 75" stroke="var(--paper)" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M32 72 Q25 78 20 75" stroke="var(--ink)" stroke-width="1.2" stroke-linecap="round" fill="none"/>
    <path d="M50 72 Q57 78 62 75" stroke="var(--paper)" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M50 72 Q57 78 62 75" stroke="var(--ink)" stroke-width="1.2" stroke-linecap="round" fill="none"/>
  </svg>`,

  // Mes 5 — Snoopy mirando las estrellas
  `<svg width="82" height="82" viewBox="0 0 82 82" fill="none">
    <text x="10" y="14" font-size="10" fill="var(--ink)" opacity="0.18" font-family="serif">✦</text>
    <text x="50" y="10" font-size="7"  fill="var(--ink)" opacity="0.14" font-family="serif">✦</text>
    <text x="68" y="22" font-size="8"  fill="var(--ink)" opacity="0.12" font-family="serif">✦</text>
    <text x="30" y="18" font-size="6"  fill="var(--ink)" opacity="0.10" font-family="serif">✦</text>
    <ellipse cx="41" cy="58" rx="22" ry="16" fill="var(--paper)"/>
    <circle cx="55" cy="38" r="14" fill="var(--paper)"/>
    <ellipse cx="47" cy="46" rx="4.5" ry="8" fill="var(--ink)" transform="rotate(-10 47 46)"/>
    <ellipse cx="65" cy="35" rx="4.5" ry="3" fill="var(--ink)"/>
    <circle cx="59" cy="31" r="2.2" fill="var(--ink)"/>
    <path d="M60 42 Q64 44 68 42" stroke="var(--ink)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <ellipse cx="30" cy="70" rx="10" ry="5.5" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
    <ellipse cx="52" cy="70" rx="10" ry="5.5" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
  </svg>`,

  // Mes 6 — Snoopy tumbado descansando
  `<svg width="82" height="82" viewBox="0 0 82 82" fill="none">
    <rect x="8" y="56" width="66" height="6" rx="3" fill="var(--paper3)"/>
    <ellipse cx="41" cy="50" rx="30" ry="12" fill="var(--paper)"/>
    <circle cx="64" cy="42" r="14" fill="var(--paper)"/>
    <ellipse cx="57" cy="50" rx="4.5" ry="8" fill="var(--ink)" transform="rotate(-8 57 50)"/>
    <ellipse cx="74" cy="39" rx="5" ry="3" fill="var(--ink)"/>
    <circle cx="68" cy="35" r="2.2" fill="var(--ink)"/>
    <path d="M66 47 Q70 49 74 47" stroke="var(--ink)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <ellipse cx="18" cy="56" rx="10" ry="6" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
    <text x="28" y="30" font-size="10" fill="var(--ink)" opacity="0.12" font-family="serif">z z z</text>
  </svg>`,

  // Mes 7 — Snoopy con mariposa
  `<svg width="82" height="82" viewBox="0 0 82 82" fill="none">
    <path d="M58 18 C52 10 44 14 46 22 C48 30 58 28 58 18Z" fill="none" stroke="var(--ink)" stroke-width="1" opacity="0.25"/>
    <path d="M58 18 C64 10 72 14 70 22 C68 30 58 28 58 18Z" fill="none" stroke="var(--ink)" stroke-width="1" opacity="0.25"/>
    <circle cx="58" cy="22" r="2" fill="var(--ink)" opacity="0.3"/>
    <ellipse cx="36" cy="60" rx="20" ry="14" fill="var(--paper)"/>
    <circle cx="50" cy="40" r="14" fill="var(--paper)"/>
    <ellipse cx="42" cy="49" rx="4.5" ry="8.5" fill="var(--ink)" transform="rotate(-10 42 49)"/>
    <ellipse cx="60" cy="37" rx="5" ry="3" fill="var(--ink)"/>
    <circle cx="54" cy="33" r="2.2" fill="var(--ink)"/>
    <path d="M55 44 Q59 47 63 44" stroke="var(--ink)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <ellipse cx="26" cy="70" rx="9" ry="5" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
    <ellipse cx="46" cy="70" rx="9" ry="5" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
  </svg>`,

  // Mes 8 — Snoopy con sombrerito festivo
  `<svg width="82" height="82" viewBox="0 0 82 82" fill="none">
    <polygon points="42,8 32,26 52,26" fill="none" stroke="var(--ink)" stroke-width="1.2" opacity="0.4"/>
    <line x1="32" y1="26" x2="52" y2="26" stroke="var(--ink)" stroke-width="1.5" opacity="0.4"/>
    <circle cx="42" cy="42" r="16" fill="var(--paper)"/>
    <ellipse cx="33" cy="52" rx="5" ry="9.5" fill="var(--ink)" transform="rotate(-10 33 52)"/>
    <ellipse cx="54" cy="38" rx="5.5" ry="3.5" fill="var(--ink)"/>
    <circle cx="48" cy="34" r="2.5" fill="var(--ink)"/>
    <path d="M49 49 Q53 53 57 49" stroke="var(--ink)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    <ellipse cx="42" cy="58" rx="16" ry="10" fill="var(--paper)"/>
    <ellipse cx="32" cy="66" rx="9" ry="5" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
    <ellipse cx="52" cy="66" rx="9" ry="5" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
  </svg>`,

  // Mes 9 — Snoopy abrazando
  `<svg width="82" height="82" viewBox="0 0 82 82" fill="none">
    <circle cx="42" cy="34" r="16" fill="var(--paper)"/>
    <ellipse cx="33" cy="44" rx="5" ry="9" fill="var(--ink)" transform="rotate(-10 33 44)"/>
    <ellipse cx="54" cy="30" rx="5.5" ry="3.5" fill="var(--ink)"/>
    <circle cx="48" cy="26" r="2.5" fill="var(--ink)"/>
    <path d="M49 40 Q53 44 57 40" stroke="var(--ink)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    <ellipse cx="42" cy="56" rx="18" ry="14" fill="var(--paper)"/>
    <path d="M24 52 Q14 44 18 32" stroke="var(--paper)" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M24 52 Q14 44 18 32" stroke="var(--ink)" stroke-width="1.3" stroke-linecap="round" fill="none"/>
    <path d="M60 52 Q70 44 66 32" stroke="var(--paper)" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M60 52 Q70 44 66 32" stroke="var(--ink)" stroke-width="1.3" stroke-linecap="round" fill="none"/>
    <ellipse cx="32" cy="68" rx="10" ry="5.5" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
    <ellipse cx="52" cy="68" rx="10" ry="5.5" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
  </svg>`,

  // Mes 10 — Snoopy con globos
  `<svg width="82" height="82" viewBox="0 0 82 82" fill="none">
    <circle cx="30" cy="14" r="9" fill="none" stroke="var(--ink)" stroke-width="1" opacity="0.2"/>
    <circle cx="46" cy="10" r="7" fill="none" stroke="var(--ink)" stroke-width="1" opacity="0.15"/>
    <circle cx="60" cy="16" r="8" fill="none" stroke="var(--ink)" stroke-width="1" opacity="0.18"/>
    <line x1="30" y1="23" x2="36" y2="44" stroke="var(--ink)" stroke-width="0.8" opacity="0.2"/>
    <line x1="46" y1="17" x2="42" y2="44" stroke="var(--ink)" stroke-width="0.8" opacity="0.2"/>
    <line x1="60" y1="24" x2="50" y2="44" stroke="var(--ink)" stroke-width="0.8" opacity="0.2"/>
    <circle cx="42" cy="52" r="14" fill="var(--paper)"/>
    <ellipse cx="34" cy="61" rx="4.5" ry="8.5" fill="var(--ink)" transform="rotate(-10 34 61)"/>
    <ellipse cx="53" cy="48" rx="5" ry="3" fill="var(--ink)"/>
    <circle cx="47" cy="44" r="2.2" fill="var(--ink)"/>
    <path d="M48 57 Q52 60 56 57" stroke="var(--ink)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <ellipse cx="42" cy="66" rx="14" ry="8" fill="var(--paper)"/>
  </svg>`,

  // Mes 11 — Snoopy con bufanda (frío)
  `<svg width="82" height="82" viewBox="0 0 82 82" fill="none">
    <circle cx="42" cy="36" r="16" fill="var(--paper)"/>
    <ellipse cx="34" cy="46" rx="4.5" ry="8.5" fill="var(--ink)" transform="rotate(-10 34 46)"/>
    <ellipse cx="54" cy="32" rx="5.5" ry="3.5" fill="var(--ink)"/>
    <circle cx="48" cy="28" r="2.5" fill="var(--ink)"/>
    <path d="M49 42 Q53 45 57 42" stroke="var(--ink)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <path d="M28 48 Q32 52 42 52 Q52 52 56 48" stroke="var(--ink)" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.3"/>
    <path d="M56 48 L60 56" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.3"/>
    <ellipse cx="42" cy="60" rx="18" ry="13" fill="var(--paper)"/>
    <ellipse cx="32" cy="70" rx="9" ry="5" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
    <ellipse cx="52" cy="70" rx="9" ry="5" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
  </svg>`,

  // Mes 12 — Snoopy con champán (aniversario)
  `<svg width="82" height="82" viewBox="0 0 82 82" fill="none">
    <rect x="54" y="30" width="10" height="22" rx="2" fill="none" stroke="var(--ink)" stroke-width="1" opacity="0.25"/>
    <path d="M54 30 Q59 22 64 30" fill="none" stroke="var(--ink)" stroke-width="1" opacity="0.25"/>
    <line x1="59" y1="30" x2="59" y2="52" stroke="var(--ink)" stroke-width="0.8" opacity="0.15"/>
    <text x="50" y="20" font-size="8" fill="var(--ink)" opacity="0.2" font-family="serif">✦</text>
    <text x="66" y="26" font-size="6" fill="var(--ink)" opacity="0.15" font-family="serif">✦</text>
    <circle cx="38" cy="44" r="16" fill="var(--paper)"/>
    <ellipse cx="30" cy="54" rx="4.5" ry="8.5" fill="var(--ink)" transform="rotate(-10 30 54)"/>
    <ellipse cx="50" cy="40" rx="5" ry="3" fill="var(--ink)"/>
    <circle cx="44" cy="36" r="2.2" fill="var(--ink)"/>
    <path d="M45 50 Q49 54 53 50" stroke="var(--ink)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <ellipse cx="38" cy="60" rx="16" ry="10" fill="var(--paper)"/>
    <ellipse cx="28" cy="68" rx="9" ry="5" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
    <ellipse cx="48" cy="68" rx="9" ry="5" fill="var(--paper)" stroke="var(--light)" stroke-width="1"/>
  </svg>`,
];

// Exporta para usar en index.html y en los archivos de carta
window.SNOOPYS = SNOOPYS;