# Color Palette Matrix

## Light Mode Colors

| Category | State | Hex Code | HSL Value | Usage |
|----------|-------|----------|-----------|--------|
| **Text** | - | #000000 | hsl(0, 0%, 0%) | Primary text color |
| **Primary** | Static | #7F2CDE | hsl(269, 67%, 52%) | Primary brand color |
| **Primary** | Hover | #9F6BF2 | hsl(267, 82%, 68%) | Primary hover state |
| **Chart 1** | - | #B69DF5 | hsl(258, 78%, 78%) | Data visualization 1 |
| **Chart 2** | - | #E5CBF2 | hsl(281, 52%, 85%) | Data visualization 2 |
| **Chart 3** | - | #FFFFFF | hsl(0, 0%, 100%) | Data visualization 3 |
| **Background** | - | #FFFFFF | hsl(0, 0%, 100%) | Main background |
| **Destructive** | - | #FF4D00 | hsl(18, 100%, 50%) | Error/destructive actions |
| **Success** | - | #35DF26 | hsl(115, 73%, 51%) | Success states |
| **Warning** | - | #FDCA40 | hsl(45, 98%, 62%) | Warning messages |
| **Info** | - | #476FFF | hsl(226, 100%, 64%) | Informational elements |

## Dark Mode Colors

| Category | State | Hex Code | HSL Value | Usage |
|----------|-------|----------|-----------|--------|
| **Text** | - | #FFFFFF | hsl(0, 0%, 100%) | Primary text color |
| **Primary** | Static | #7421D4 | hsl(268, 74%, 47%) | Primary brand color |
| **Primary** | Hover | #420D96 | hsl(266, 83%, 32%) | Primary hover state |
| **Chart 1** | - | #230A61 | hsl(257, 81%, 21%) | Data visualization 1 |
| **Chart 2** | - | #280D35 | hsl(279, 59%, 13%) | Data visualization 2 |
| **Chart 3** | - | #000000 | hsl(0, 0%, 0%) | Data visualization 3 |
| **Background** | - | #000000 | hsl(0, 0%, 0%) | Main background |
| **Destructive** | - | #FF4D00 | hsl(18, 100%, 50%) | Error/destructive actions |
| **Success** | - | #30D920 | hsl(115, 75%, 49%) | Success states |
| **Warning** | - | #C08D02 | hsl(44, 98%, 38%) | Warning messages |
| **Info** | - | #0028B8 | hsl(226, 100%, 36%) | Informational elements |

## Color System Notes

### Primary Colors
- **Light Mode**: Uses lighter purple shades (hsl(269, 67%, 52%) to hsl(267, 82%, 68%))
- **Dark Mode**: Uses deeper purple shades (hsl(268, 74%, 47%) to hsl(266, 83%, 32%))

### Chart Colors
- Progressively lighter in light mode (from purple to white)
- Progressively darker in dark mode (from deep purple to black)

### Semantic Colors
- **Destructive**: Consistent orange-red (hsl(18, 100%, 50%)) across both modes
- **Success**: Green with slight variation - brighter in light mode (hsl(115, 73%, 51%)), slightly muted in dark (hsl(115, 75%, 49%))
- **Warning**: Yellow-orange, lighter in light mode (hsl(45, 98%, 62%)), darker in dark mode (hsl(44, 98%, 38%))
- **Info**: Blue, lighter in light mode (hsl(226, 100%, 64%)), darker in dark mode (hsl(226, 100%, 36%))

### Text & Background
- Complete inversion between modes
- Light: Black text (#000000) on white background (#FFFFFF)
- Dark: White text (#FFFFFF) on black background (#000000)

## CSS Custom Properties Implementation

```css
:root {
  /* Light Mode (default) */
  --color-text: hsl(0, 0%, 0%);
  --color-primary: hsl(269, 67%, 52%);
  --color-primary-hover: hsl(267, 82%, 68%);
  --color-chart-1: hsl(258, 78%, 78%);
  --color-chart-2: hsl(281, 52%, 85%);
  --color-chart-3: hsl(0, 0%, 100%);
  --color-background: hsl(0, 0%, 100%);
  --color-destructive: hsl(18, 100%, 50%);
  --color-success: hsl(115, 73%, 51%);
  --color-warning: hsl(45, 98%, 62%);
  --color-info: hsl(226, 100%, 64%);
}

[data-theme="dark"] {
  --color-text: hsl(0, 0%, 100%);
  --color-primary: hsl(268, 74%, 47%);
  --color-primary-hover: hsl(266, 83%, 32%);
  --color-chart-1: hsl(257, 81%, 21%);
  --color-chart-2: hsl(279, 59%, 13%);
  --color-chart-3: hsl(0, 0%, 0%);
  --color-background: hsl(0, 0%, 0%);
  --color-destructive: hsl(18, 100%, 50%);
  --color-success: hsl(115, 75%, 49%);
  --color-warning: hsl(44, 98%, 38%);
  --color-info: hsl(226, 100%, 36%);
}
```