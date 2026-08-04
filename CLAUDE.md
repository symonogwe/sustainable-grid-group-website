# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 1. Project overview

A single-page marketing/brochure website for **Sustainable Grid Group** (branded "SGGL" in the logo), an ESG (Environmental, Social, Governance) consulting firm based in Nairobi, Kenya. The `<title>` in `index.html` is "Sustainable Grid Group | Expert ESG Consulting".

Audience: prospective corporate/NGO/public-sector clients evaluating the firm for ESG advisory, compliance, and reporting work. The entire site is one long scrolling page — there are no separate pages, only in-page sections a visitor scrolls or nav-jumps between: Hero → Stats → Services → Industries → Case Studies → Testimonials → Team → Contact → Footer.

There is **no backend** in this repo. The contact form (`ContactForm.jsx`) posts directly to a third-party form-relay service (`formsubmit.co`) and offers a WhatsApp deep-link as a fallback. All other content is static and hardcoded in JSX.

## 2. Tech stack

| Concern | Choice | Version (installed) |
|---|---|---|
| UI library | React | `18.2.0` |
| Component/design system | Chakra UI (`@chakra-ui/react`) | `2.10.9` |
| CSS engine (Chakra peer deps) | `@emotion/react` / `@emotion/styled` | `11.14.0` / `11.14.1` |
| Build tool | Vite | `7.2.6` (created from the `create-vite` React template) |
| Routing | `react-router-dom` | `7.9.6` — installed and wraps the app in `BrowserRouter`, but **no `<Routes>`/`<Route>` are defined anywhere**; it's used only for `Link` (logo → `/`, footer quick links → dead hash-style paths) and isn't doing real page routing. See §4. |
| Animation | `framer-motion` | `10.18.0`, used only via the `AnimateOnScroll` wrapper in `MotionBox.jsx` |
| Carousel | `swiper` (`swiper/react`, `swiper/modules`) | `12.0.3`, used only in `TestimonialsSection.jsx` |
| Counting-up numbers | `react-countup` | `6.5.3`, used only in `StatCard.jsx` |
| Icons | `react-icons` (Feather set, `react-icons/fi`) | `^5.5.0` |
| State management | None — no Redux/Zustand/Context. All state is local `useState`/`useDisclosure` per component. |
| Linting | ESLint | `9.39.1`, flat config (`eslint.config.js`) with `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` |
| Testing | **None configured** — no test runner, no test files anywhere in the repo. |
| Package manager | npm (`package-lock.json` present) |

## 3. Folder structure

```
.
├── public/              # Files copied to dist/ root untouched. Only SGGL-logo.svg (favicon, referenced by index.html).
├── src/
│   ├── assets/          # Imported image assets (logo + 4 case-study/photo JPGs). See §9.
│   ├── theme/
│   │   └── theme.js     # The single Chakra extendTheme() call — all brand colors/fonts/variants. See §6.
│   ├── App.jsx          # Root component: composes the section components in page order.
│   ├── main.jsx         # Entry point: mounts React, wraps app in BrowserRouter + ChakraProvider.
│   ├── App.css          # Leftover create-vite template CSS. NOT imported anywhere — dead file.
│   ├── index.css        # Leftover create-vite template CSS. NOT imported anywhere — dead file.
│   └── *.jsx            # ~20 flat component files (sections, cards, and a couple of shared utilities). See §5.
├── index.html           # Vite HTML entry; sets <title> and favicon, mounts #root, loads src/main.jsx.
├── vite.config.js        # Minimal Vite config — just the @vitejs/plugin-react plugin, no aliases/env config.
├── eslint.config.js      # Flat ESLint config (see §11).
├── package.json / package-lock.json
└── README.md            # Unmodified create-vite boilerplate text (no project-specific content).
```

There is no `src/components/`, `src/pages/`, `src/hooks/`, `src/utils/`, or `src/api/` directory — despite several files having a stale header comment reading `// src/components/Foo.jsx`, every component actually lives flat at `src/Foo.jsx`. Follow that existing (flat) convention for new files rather than the comment.

## 4. Routing map

There is no multi-page routing. `main.jsx` wraps `<App />` in `react-router-dom`'s `BrowserRouter`, but no `<Routes>`element is defined anywhere in the codebase — so `react-router-dom` is effectively inert as a router. Its only real uses are:

- `Header.jsx`'s `Logo` sub-component: `<ChakraLink as={ReactRouterLink} to="/">` — clicking the logo navigates to `/` (which is the same page) and smooth-scrolls to the top.
- `Footer.jsx`'s "Quick Links" (`About Us`, `Services`, `Case Studies`, `ESG Framework`, `Careers`): rendered as `<ChakraLink as={ReactRouterLink} to={"/" + slug}>`, e.g. `/about-us`. **These paths do not correspond to any actual page/route** — clicking one would render a blank `App` again with no scroll or highlight behavior (React Router with no matching `<Route>` just renders whatever is mounted at that path level, i.e. nothing changes visually, no 404).

The real "navigation" on this site is anchor-scrolling to DOM element `id`s within the single page, driven manually in `Header.jsx` (see §7). The section IDs that exist and are targets of nav links are:

| Nav label | Target `id` | Rendered by |
|---|---|---|
| About | `about` | *(no section currently has `id="about"` — this nav item is currently a dead link, see §12)* |
| Services | `services` | `ServiceSection.jsx` (`ServicesSection` component) |
| Industries | `industries` | `IndustriesSection.jsx` |
| Case Studies | `case-studies` | `CaseStudiesSection.jsx` |
| Clients | `clients` | `TestimonialsSection.jsx` |
| (Contact CTA) | `contact` | `ContactSection.jsx` |
| (not in nav, exists) | `team` | `TeamSection.jsx` |

## 5. Component inventory

All files are at `src/<Name>.jsx` (flat, no subfolder) unless noted.

| Component | Purpose | Key props | Used by |
|---|---|---|---|
| `App.jsx` | Root layout — renders `Header`, then `<main>` with all page sections in order, then implicitly nothing after (Footer is rendered inside `<main>` too). | none | `main.jsx` |
| `Header.jsx` | Sticky top nav bar: logo (inner `Logo` sub-component, not separately exported), desktop nav links, "Go to Contact" CTA button, `ThemeToggle`, and mobile menu trigger. Owns the `navItems` array and the scroll-to-section logic (`scrollToSection`, offset by 90px header height). | none (self-contained) | `App.jsx` |
| `MobileMenu.jsx` | Chakra `Drawer` (slides from right) with the same nav links + contact CTA, for mobile/tablet widths. | `isOpen`, `onClose`, `navItems`, `handleScrollToSection` *(see §12 — `Header.jsx` actually passes different prop names)* | `Header.jsx` |
| `ThemeToggle.jsx` | Sun/moon `IconButton` that calls Chakra's `useColorMode().toggleColorMode`. | none | `Header.jsx` |
| `HeroSection.jsx` | Full-width gradient hero banner with heading/subhead, two CTAs: "Start the Project" (opens a Chakra `Modal` embedding `ContactForm`) and "Case Studies" (scrolls to `#case-studies`). | none | `App.jsx` |
| `StatsBar.jsx` | Grid of 3 animated stat counters, overlapping the Hero section via negative margin. Owns `statsData` (`{number, suffix, label}[]`). | none | `App.jsx` |
| `StatCard.jsx` | One stat tile: gradient-text `CountUp` number + suffix + label, hover-lift effect with a top accent bar. | `number`, `suffix` (default `"+"`), `label` | `StatsBar.jsx` |
| `ServiceSection.jsx` | "Our Core Services" section; owns `servicesData` (6 items: icon + title + description) and staggers card entrance delay. | none | `App.jsx` (imported as `ServicesSection`) |
| `ServiceCard.jsx` | One service tile: icon, title, description, hover border accent. | `icon` (react-icons component), `title`, `description`, `delay` | `ServiceSection.jsx` |
| `IndustriesSection.jsx` | "Industries We Serve" section; owns `industriesData` (6 items: icon + label, e.g. Corporate/Public Sector/NGOs/Manufacturing/Energy/Healthcare). | none | `App.jsx` |
| `IndustryCard.jsx` | One industry badge: circular icon avatar + label, color inverts on hover. | `icon`, `label`, `delay` | `IndustriesSection.jsx` |
| `CaseStudiesSection.jsx` | "Our Impact & Case Studies" section; owns `caseStudiesData` (3 items: title, impact tag, image, full narrative). Clicking a card opens a Chakra `Modal` with the full case-study text. | none | `App.jsx` |
| `CaseStudyCard.jsx` | Image card with a dark gradient overlay, impact tag, title, and a "Read More" link (visual only — actual "read more" behavior is handled by the parent's click handler + modal, not by this link's `href="#"`). | `title`, `impact`, `imageSrc` (falls back to a `placehold.co` dummy image), `delay` | `CaseStudiesSection.jsx` |
| `TestimonialsSection.jsx` | "What Our Clients Say" carousel using Swiper (`Navigation`, `Pagination`, `Autoplay` modules, custom prev/next buttons, responsive `slidesPerView`). Owns `testimonialsData` (5 quotes). | none | `App.jsx` |
| `TestimonialCard.jsx` | One testimonial: quote, quote-mark icon watermark, client name/title pinned to the bottom via flex. | `quote`, `clientName`, `clientTitle`, `delay` | `TestimonialsSection.jsx` |
| `TeamSection.jsx` | "Meet Our Leadership" grid; owns `teamMembers` (4 people: name, role, initials, Chakra `colorScheme`). Uses Chakra `Avatar` (initials-based, no photo files). | none | `App.jsx` |
| `ContactSection.jsx` | "Contact Us" section; two-column grid of `ContactForm` + `ContactDetails`. | none | `App.jsx` |
| `ContactForm.jsx` | The functional contact form: name/email/subject/message fields, client-side email regex validation, a hidden honeypot field for bot mitigation, submits via `fetch` POST to `https://formsubmit.co/ajax/info@sustainablegridgroup.com`, plus a "Send WhatsApp" button that opens `wa.me` with a prefilled message. Reused both inline in `ContactSection` and inside the `HeroSection` modal. | none | `ContactSection.jsx`, `HeroSection.jsx` |
| `ContactDetails.jsx` | Google Maps `<iframe>` embed (hardcoded embed URL for "5th Avenue Suites, Ngong Rd, Nairobi") + address/email rows with icons. | none | `ContactSection.jsx` |
| `Footer.jsx` | Site footer: logo, tagline, social icons (LinkedIn/Twitter/Facebook — all `href="#"` placeholders), "Quick Links" (see §4 caveat), contact info, copyright line with dynamic year. **Note:** the file contains a large commented-out earlier draft of itself (~130 lines) above the live implementation — dead code, not currently executed. | none | `App.jsx` |
| `MotionBox.jsx` | Exports `AnimateOnScroll`, a `framer-motion`-wrapped Chakra `Box` (`motion(Box)`) that fades/slides its children in in `whileInView`. The de facto standard entrance-animation wrapper used by nearly every card/section. | `children`, `delay` (default `0.2` — actually used as `viewport.amount`, i.e. how much of the element must be visible to trigger, **not** a time delay in seconds) | `ServiceCard`, `IndustryCard`, `StatsBar`, `ContactSection`, `CaseStudyCard`, `TestimonialCard` |

`main.jsx` is the entry point (not a component): mounts `<App />` inside `React.StrictMode` → `BrowserRouter` → `ChakraProvider theme={theme}`.

## 6. Chakra theme

The entire theme customization is one `extendTheme()` call in `src/theme/theme.js`, provided to `ChakraProvider` in `main.jsx`. Quoted verbatim:

```js
import { extendTheme } from "@chakra-ui/react";

// --- Configuration ---
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// --- Colors: Sustainable Grid Group Palette ---
const colors = {
  sgg: {
    900: "#004D40", // Deep Teal/Corporate Navy
    700: "#38514A", // Mid-tone for dark mode/hovers
    500: "#8BC34A", // Accent - Earthy/Mint Green
    100: "#F7FAFC", // Very Light Cool Gray
  },
  accent: {
    yellow: "#FFC107",
  },
  navbar: {
    light: "rgba(247, 250, 252, 0.92)",
    dark: "rgba(0, 77, 64, 0.9)",
  },
};

// --- Fonts ---
const fonts = {
  heading: `'Sora', sans-serif`,
  body: `'Inter', sans-serif`,
};

// --- Extended Theme ---
const theme = extendTheme({
  config,
  colors,
  fonts,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "sgg.900" : "sgg.100",
        color: props.colorMode === "dark" ? "sgg.100" : "sgg.900",
      },
      a: {
        color: props.colorMode === "dark" ? "sgg.500" : "sgg.900",
        _hover: {
          textDecoration: "underline",
        },
      },
    }),
  },
  // Component Overrides
  components: {
    Button: {
      baseStyle: {
        borderRadius: "full",
        fontWeight: "bold", // Added for better legibility
      },
      variants: {
        solid: () => ({
          bg: "sgg.500",
          color: "sgg.900",
          _hover: {
            bg: "sgg.700",
            color: "white", // 🟢 FIX: Text turns white on dark hover
            textDecoration: "none",
            transform: "translateY(-2px)", // subtle lift effect
            boxShadow: "lg",
          },
        }),
        // Added 'outline' variant just in case you use it for the secondary button
        outline: (props) => ({
          borderColor: props.colorMode === "dark" ? "sgg.100" : "sgg.900",
          color: props.colorMode === "dark" ? "sgg.100" : "sgg.900",
          _hover: {
            bg: "sgg.700",
            color: "white",
            borderColor: "sgg.700",
          },
        }),
      },
    },
  },
});

export default theme;
```

Notes not obvious from a skim:
- **Only 4 shades exist per color** (`900/700/500/100`) — there is no `50/200/300/400/600/800` for `sgg`, unlike Chakra's usual 50–900 scale. Components that reference e.g. `sgg.50`, `sgg.600`, or `sgg.800` (a few do — `TeamSection.jsx` uses `sgg.50`/`sgg.800`/`sgg.600`/`sgg.400`) fall back to **undefined**, which Chakra silently ignores (no visible color/style applied), rather than erroring. Be careful introducing new `sgg.*` references outside `900/700/500/100`.
- **No custom `breakpoints`, `space`, `sizes`, or `fontSizes`** are defined — the site relies entirely on Chakra's default breakpoint set (`sm: 30em, md: 48em, lg: 62em, xl: 80em, 2xl: 96em`) and default spacing/sizing scale. Responsive props throughout components (`{ base: ..., md: ..., lg: ... }`) target those default breakpoints.
- `config.useSystemColorMode: false` means the site always boots in light mode regardless of OS preference; dark mode is opt-in only via `ThemeToggle`.
- The `whatsapp` color scheme referenced in `ContactForm.jsx` (`borderColor="whatsapp.500"`, `useColorModeValue("whatsapp.600", "whatsapp.400")`) is **not defined anywhere in this theme** — it resolves via Chakra's built-in default theme, which has no `whatsapp` key either, so those color tokens also silently no-op.
- Sora/Inter fonts are referenced by name but **never loaded** — there's no `<link>` to Google Fonts in `index.html` and no `@font-face`/import anywhere. The site therefore actually renders in the browser's fallback (`sans-serif`), not Sora/Inter, until someone adds the font loading.

## 7. Layout patterns

- **No shared `<Layout>` wrapper component.** `App.jsx` composes `Header` + `<main>{...sections...}</main>` directly; every page is really just this one composition since there's only one page.
- **Section shell convention:** almost every section component is `<Box id="..." bg={...} py={{ base: X, md: Y }} px={{ base: 4, md: 8 }}><Container maxW={...}>...</Container></Box>`. `Container` widths vary by section: `6xl` (Hero, Services), `7xl` (Case Studies, Testimonials, Team, Contact). There's no single enforced max width.
- **Vertical rhythm:** `py` values step in the pattern `{ base: 8–20, md: 16–32 }` depending on section prominence (Hero is largest, Industries is smallest). Horizontal padding is consistently `px={{ base: 4, md: 8 }}`.
- **Header offset:** the sticky header is assumed to be ~90px tall; both `Header.jsx`'s `scrollToSection` and `HeroSection.jsx`'s `handleScrollToCaseStudies` independently hardcode `const headerOffset = 90` — if the header's actual height changes, both call sites need updating (no shared constant).
- **Section → Card composition:** `*Section.jsx` files own a hardcoded data array and a `SimpleGrid`, mapping each item to a presentational `*Card.jsx` component that receives plain props (no context, no data-fetching hooks).

## 8. Styling conventions

- **`useColorModeValue(light, dark)` everywhere** instead of CSS media queries or conditional classNames — this is the only mechanism used for light/dark theming throughout every component. When adding new UI, follow this pattern rather than hardcoding a single color.
- **Hooks are always called unconditionally at the top of the component body**, even when a value is only used in one branch — several components have comments like `// 🟢 SENIOR DEV FIX: Define all hooks at the top level` documenting this as a deliberate, previously-violated rule (Rules of Hooks). Don't call `useColorModeValue`/`useDisclosure` conditionally or inside `.map()` callbacks.
- **Inline `_hover`, `_before`, `_groupHover` pseudo-props** are used directly on Chakra components rather than separate CSS; `role="group"` + `_groupHover` is the pattern for hover-driven children (see `CaseStudyCard.jsx`'s image zoom).
- **Emoji-prefixed inline comments** (`🟢 FIX:`, `💡`) mark past bug fixes or notable decisions directly in the JSX — these are informal changelog breadcrumbs left in the code, not a required convention to continue, but useful context for why a line looks the way it does.
- **No CSS Modules, styled-components, or Tailwind** — styling is 100% Chakra style props + the theme overrides in §6. `App.css`/`index.css` exist but are dead (never imported, see §3/§12).
- **No custom hooks directory** — there are no `useX.js` files; the closest thing is `MotionBox.jsx`'s `AnimateOnScroll`, which is a component, not a hook.

## 9. Assets

- `src/assets/` — image files imported directly in JS (e.g. `import logo from "../src/assets/SGGL-logo.svg"`) so Vite fingerprints/hashes them into the production build. Contents: `SGGL-logo.svg` (used in `Header.jsx` and `Footer.jsx`), `ssg1.jpg`, `ssg3.jpg`, `ssg4.jpg` (used as case-study images in `CaseStudiesSection.jsx`). **`ssg2.jpg` exists in this folder but is not imported/used anywhere** — dead asset.
- `public/` — contains only `SGGL-logo.svg` (a duplicate of the one in `src/assets/`), served as-is and referenced by absolute path (`/SGGL-logo.svg`) from `index.html`'s favicon `<link>`.
- No fonts are bundled locally (see §6 — Sora/Inter are referenced but never actually loaded).
- No icon sprite/SVG set — all icons come from the `react-icons/fi` (Feather) package as React components (`<FiArrowRight />` etc.), not files in `assets/`.
- Naming convention for photos is `ssgN.jpg` (sequential, no descriptive names) — if adding new images, there's no established descriptive-naming convention to preserve, just keep them in `src/assets/`.

## 10. Content sources

All copy and structured content is **hardcoded as JS arrays/objects at the top of the relevant component file** — there is no CMS, no JSON/YAML data files, no i18n system, and no markdown content. To edit visible text, edit the component directly:

| Content | Variable | File |
|---|---|---|
| Stats (years/clients/projects) | `statsData` | `StatsBar.jsx` |
| Services (6 cards) | `servicesData` | `ServiceSection.jsx` |
| Industries (6 badges) | `industriesData` | `IndustriesSection.jsx` |
| Case studies (3, incl. full modal narrative) | `caseStudiesData` | `CaseStudiesSection.jsx` |
| Testimonials (5 quotes) | `testimonialsData` | `TestimonialsSection.jsx` |
| Team members (4) | `teamMembers` | `TeamSection.jsx` |
| Nav items | `navItems` | `Header.jsx` |
| Footer quick links | `QuickLinks` | `Footer.jsx` |
| Hero heading/subhead, contact address/email/map URL | inline JSX literals | `HeroSection.jsx`, `ContactDetails.jsx` |

## 11. Build/dev commands

```bash
npm install        # install dependencies
npm run dev         # start Vite dev server with HMR
npm run build       # production build to dist/
npm run preview     # preview the production build locally
npm run lint         # run ESLint (flat config, eslint.config.js) over the whole project
```

- **No test command exists** (`package.json` has no `test` script) and there is no test runner (Vitest/Jest) installed — there is nothing to run a "single test" for.
- ESLint config: JS/JSX files only (`**/*.{js,jsx}`), `dist/` is ignored, extends `js.configs.recommended` + `reactHooks.configs.flat.recommended` + `reactRefresh.configs.vite`, with one custom rule override: `no-unused-vars` errors except for identifiers matching `^[A-Z_]` (i.e. component-like/constant names are exempt — lets you have an unused imported component without lint failure).
- No TypeScript — `@types/react`/`@types/react-dom` are present as dev dependencies but the codebase is plain `.jsx`, not `.tsx`; they're likely just editor/IntelliSense support.

## 12. Known quirks / gotchas

- **`Header.jsx` ↔ `MobileMenu.jsx` prop mismatch.** `Header.jsx` renders `<MobileMenu isOpen={isOpen} onClose={onClose} navItems={navItems} handleMobileNavClick={handleMobileNavClick} onDrawerClosed={handleDrawerClosed} />`, but `MobileMenu.jsx` destructures `{ isOpen, onClose, navItems, handleScrollToSection }` — there is no `handleScrollToSection` prop being passed, so it's `undefined` inside `MobileMenu`. Clicking a nav link in the mobile drawer calls `handleScrollToSection(e, id)` on `undefined`, which throws silently caught by React (no visible crash in prod, but the drawer's nav links effectively don't scroll — only `onClose()` still runs from the same handler). Fix by aligning the prop name/contract on both sides before relying on mobile nav.
- **"About" nav item has no matching section.** `Header.jsx`'s `navItems` includes `{ name: "About", id: "about" }`, but no component in the page renders `id="about"` — clicking it is a no-op (`scrollToSection` returns early when `getElementById` finds nothing).
- **Dead/leftover files:** `src/App.css` and `src/index.css` are unmodified create-vite template styles that are never imported by any `.jsx` file — safe to ignore or delete, not part of the live styling system (Chakra + `theme.js` is). `Footer.jsx` also contains ~130 lines of an earlier, fully commented-out draft of itself above the live code.
- **Unused asset:** `src/assets/ssg2.jpg` is not referenced anywhere.
- **Fonts declared but not loaded:** the theme sets `heading`/`body` to Sora/Inter, but neither font is ever fetched (no Google Fonts `<link>`, no self-hosted `@font-face`) — actual rendering falls back to the browser default sans-serif.
- **Theme color scale is sparse:** `sgg` only defines `900/700/500/100` (see §6); a few components reference other shades (`sgg.50`, `sgg.600`, `sgg.800`, `sgg.400`) that resolve to `undefined` and are silently dropped by Chakra rather than erroring.
- **`react-router-dom` is present but not really routing** — no `<Routes>` are defined; treat this as a single-page app, not a multi-route one (see §4).
- **Duplicate logo asset:** `SGGL-logo.svg` exists both in `public/` (served at `/SGGL-logo.svg`, used for the favicon) and `src/assets/` (imported into JS bundles for the header/footer `<img>`s) — if the logo changes, both copies need updating.
- **README.md is unmodified create-vite boilerplate** — it documents the generic Vite+React template, not this project; don't treat it as a source of project-specific truth.
