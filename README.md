# LOVA (League of Veterans of America INC)

A modern, responsive multi-page React donation website for **League of Veterans of America INC** (501(c)(3) tax-exempt non-profit, [lovoa.org](https://lovoa.org/)).

## 🌟 Key Features

- **Multi-Page Architecture (React Router 7)**:
  - **Home**: Dynamic hero with authentic donation imagery, counter stats, interactive YouTube video documentary experience, 3-step donation wizard, causes spotlight, George Washington quote, vehicle & property donation section, and testimonials.
  - **Programs / Causes (`/programs`, `/causes`)**: Detailed view of all 6 active veteran support campaigns with live progress meters.
  - **Cause Details (`/causes/:id`)**: High-impact story pages with transparent financial breakdowns and direct donation CTA.
  - **Donate (`/donate`)**: Secure donation portal supporting preset amounts, custom amounts, dedicated initiatives, tributes, and direct live PayPal portal (`https://www.paypal.com/ncp/payment/F923SVVM97EPU`).
  - **Vehicle & Property Donation (`/vehicle-donation`)**: 50-state vehicle intake wizard with 24-48h free towing details and direct hotline integration (`+1 (561) 770-8708`).
  - **About Us (`/about`)**: Organization history, 4 core pillars, and leadership message.
  - **Our Impact (`/impact`)**: Detailed transparency reports, audited fund allocation metrics, and emergency shelter bed statistics.
  - **FAQ (`/faq`)**: Common questions regarding tax deductions, towing timelines, and fund distribution.
  - **Contact (`/contact`)**: Interactive inquiry form, direct hotline, email, and West Palm Beach, FL address.
- **100% Local Assets**: Zero external image dependencies; all program photos, avatars, and payment badges are bundled locally in `src/assets/`.
- **Mobile First & Fully Responsive**: Optimized touch targets, zero horizontal overflow, fluid typography, and responsive navigation drawer for phone screens.

## 🚀 Tech Stack

- **Framework**: React 19 + Vite 8
- **Routing**: React Router DOM 7
- **Styling**: Tailwind CSS + Custom Design System
- **Icons**: Lucide React
- **Animations & Effects**: Canvas-Confetti, Tailwind Transitions

## 🛠️ Getting Started

```bash
# Clone the repository
git clone <repository-url>
cd lova

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
