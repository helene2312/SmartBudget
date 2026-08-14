---
name: Smart Financial Management System
colors:
  surface: "#f8f9fb"
  surface-dim: "#d8dadc"
  surface-bright: "#f8f9fb"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f2f4f6"
  surface-container: "#eceef0"
  surface-container-high: "#e6e8ea"
  surface-container-highest: "#e0e3e5"
  on-surface: "#191c1e"
  on-surface-variant: "#5b3f43"
  inverse-surface: "#2d3133"
  inverse-on-surface: "#eff1f3"
  outline: "#8f6f73"
  outline-variant: "#e4bdc2"
  surface-tint: "#bc004b"
  primary: "#b80049"
  on-primary: "#ffffff"
  primary-container: "#e2165f"
  on-primary-container: "#fffbff"
  inverse-primary: "#ffb2be"
  secondary: "#6b5a60"
  on-secondary: "#ffffff"
  secondary-container: "#f4dce4"
  on-secondary-container: "#716066"
  tertiary: "#a52a66"
  on-tertiary: "#ffffff"
  tertiary-container: "#c5447f"
  on-tertiary-container: "#fffbff"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#ffd9de"
  primary-fixed-dim: "#ffb2be"
  on-primary-fixed: "#400014"
  on-primary-fixed-variant: "#900038"
  secondary-fixed: "#f4dce4"
  secondary-fixed-dim: "#d7c1c8"
  on-secondary-fixed: "#25181e"
  on-secondary-fixed-variant: "#524249"
  tertiary-fixed: "#ffd9e4"
  tertiary-fixed-dim: "#ffb0cc"
  on-tertiary-fixed: "#3e0020"
  on-tertiary-fixed-variant: "#890f50"
  background: "#f8f9fb"
  on-background: "#191c1e"
  surface-variant: "#e0e3e5"
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: "700"
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: "600"
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  sidebar-width: 260px
  gutter: 24px
  container-padding: 32px
---

## Brand & Style

The design system is built on the principles of **Modern Corporate** aesthetics with a focus on high-performance data visualization and approachable financial management. It aims to demystify personal finance through a clean, light-filled interface that feels both sophisticated and accessible.

The brand personality is **Intelligent, Transparent, and Encouraging**. By moving away from traditional "finance green" and into a palette of refined rose and vibrant pink, the system establishes a unique emotional connection with the user, signaling a more modern and inclusive approach to wealth management.

Visual pillars include:

- **Clarity:** Heavy use of whitespace to reduce cognitive load when viewing complex financial entries.
- **Precision:** Sharp typography and systematic spacing that reflect the accuracy of the underlying data.
- **Trust:** Subtle depth and professional "glass-like" finishes that convey stability and security.

## Colors

The palette is centered around a **Vibrant Pink** primary color, used for high-impact actions and branding moments. A **Soft Rose** secondary color provides a gentle background for highlights, secondary buttons, and category chips.

- **Primary (#E91E63):** Use for main CTAs, active states in the sidebar, and key data points in charts.
- **Secondary/Surface (#FCE4EC):** Use for subtle backgrounds, hover states, and "soft" containers.
- **Neutral Scale:** The system utilizes a range of cool grays (from #F5F7F9 to #263238) to provide professional structure. Pure white (#FFFFFF) is the primary surface color for cards to ensure data readability.
- **Semantic Colors:** While pink is the brand hero, standard green/red semantics are retained for "Entries" (Income vs. Expense) to ensure immediate financial comprehension.

## Typography

This design system uses **Hanken Grotesk** for headlines to provide a sharp, contemporary edge that feels "fintech-forward." **Inter** is utilized for all body copy, data tables, and financial entries due to its exceptional legibility at small sizes and its neutral, systematic character.

- **Numeric Data:** For balance sheets and "Entries" amounts, use `Inter` with tabular lining figures to ensure numbers align perfectly in tables.
- **Hierarchy:** Use `label-md` for small metadata (e.g., "Created At" timestamps or "Currency" codes) to maintain a clean information architecture.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. A fixed-width Sidebar (260px) persists on the left, while the main content area utilizes a fluid grid that adapts to the browser width.

- **The Grid:** A 12-column grid is used for the main dashboard. Complex "Accounts" summaries typically span 4 columns (3 per row), while the "Entries" data table usually spans the full 12 columns.
- **Sidebar:** Navigation is vertically stacked. It uses a soft gray background (#F8FAFB) to distinct itself from the white primary content cards.
- **Margins & Gutters:** A consistent 24px gutter ensures that dense financial data doesn't feel cramped. On mobile, gutters compress to 16px.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering** and **Ambient Shadows**. The design avoids heavy borders, preferring to use depth to define interactive zones.

- **Level 0 (Background):** The base canvas is #F5F7F9.
- **Level 1 (Cards):** Main content containers for "Accounts" and "Categories" use a white background with a very soft, diffused shadow (`0px 4px 20px rgba(0, 0, 0, 0.05)`).
- **Level 2 (Modals/Dropdowns):** Elevated elements for adding new "Entries" use a more pronounced shadow to focus user attention and a 1px soft border (#E0E4E8).
- **Interactive States:** Buttons and sidebar items use subtle tonal shifts rather than dramatic elevation changes to maintain a "flat but deep" modern aesthetic.

## Shapes

The shape language is **Refined and Friendly**. A standard 0.5rem (8px) radius is applied to almost all UI components to soften the professional environment and make the financial data feel more approachable.

- **Cards & Inputs:** 8px (0.5rem) corner radius.
- **Action Buttons:** 8px (0.5rem) corner radius for a sturdy, reliable feel.
- **Chips/Badges:** Pill-shaped (fully rounded) for "Categories" and "Subcategories" to distinguish them from structural elements.

## Components

### Sidebar Navigation

The navigation should be clear and persistent. Icons should be line-based (2px stroke) in a neutral gray, turning Primary Pink when active. Items include: Dashboard, Accounts, Entries, and Categories.

### Financial Cards

"Accounts" should be represented as cards. They display the `name`, `account_type`, and `currency`. Use a large `headline-md` for the current balance and a small trend line chart at the bottom of the card.

### Data Tables (Entries)

- **Rows:** High legibility with 56px minimum height.
- **Columns:** Date, Name (Entry), Category (as a chip), and Amount.
- **Amount Styling:** Positive amounts (Income) in Success Green; negative amounts (Expenses) in Neutral Dark or Primary Pink for emphasis.

### Input Fields

Inputs for adding new "Entries" or "Subcategories" should have a subtle 1px border. On focus, the border should transition to the Primary Pink with a soft outer glow.

### Expressive Charts

- **Bar Charts:** Used for monthly comparisons. Use a gradient of Primary Pink.
- **Pie/Donut Charts:** Used for Category spending. Each slice should pull from a generated palette of rose and mauve tones defined in the `Subcategories` "color" field.
- **Line Charts:** Used for balance history, featuring a smooth "spline" curve and a light pink area fill below the line.

### Chips & Tags

Used for `Categories`. They should include the `icon` and `name` from the database. Use the `secondary_color_hex` (Soft Rose) as the background with the `primary_color_hex` for the text.
