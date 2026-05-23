# Tuli Ma Property Brokers (Zambian Real Estate Agency Web Applet)

> **"Right Place, Right Time, All The Time."**

Tuli Ma Property Brokers is a modern, high-contrast digital showcase for a premium real estate brokerage based in **Lusaka, Zambia**. It specializes in matching real estate buyers, sellers, and renters with fully verified residential developments, serviced executive suites, farming acreages, and high-density commercial assets across Lusaka, Zambia.

---

## 🎨 Visual Identity & Architecture

The application is structured around a luxurious modern high-contrast design:
*   **Deep Hunter Green (`#123C2A`)**: Represents Zambian land wealth and premier estate preservation.
*   **Warm Gold Accord (`#C5A880`)**: Represents luxury properties, client fiduciary status, and high-yield returns.
*   **Smooth Off-White / Cream (`#FAF8F5`)**: Establishes rich, comfortable reading grids and elegant negative space.
*   **JetBrains Mono Accents**: Used for technical data lists, borehole pressure tracking, and coordinate specs.

The website is engineered entirely using **HTML5, CSS3, and Vanilla JS**—making it highly compatible with static hosting including **GitHub Pages, Vercel, and Cloud Run architectures**.

---

## 📂 Repository Structure

The static website properties are structured logically for direct publishing:

```text
/
├── index.html            # Main landing page (FAQ, Hero, Testimonial arrays)
├── about.html            # Brokerage profile & counters
├── listings.html         # Real-time searchable listings grid (Tabs, Queries)
├── buy.html              # capital acquisitions, escrow, and mortgage rates
├── rent.html             # long-lease duplexes apartments & serviced suite lists
├── sale.html             # Process timelines, appraisals, and commission tables
├── contact.html          # Dynamic Inquiry & Upload documents desk
├── assets/
│   ├── css/
│   │   └── style.css     # Sticky headers, layout scales, preloader, animations
│   └── js/
│         └── main.js       # Real-time database controller & filtering engines
├── metadata.json         # Platform configuration rules
└── README.md             # This operations manual
```

---

## ⚙️ Interactive Functions & Customizations

### 1. Dynamic Search Database (`/assets/js/main.js`)
All property listings are rendered dynamically using our central JSON database configuration inside `main.js`. You can append or edit items in the `properties` array to automatically update listings across three distinct grids (`/listings.html`, `/buy.html`, `/rent.html`):

```js
{
  id: "property-id-01",
  title: "Modern Executive Townhouse",
  category: "Rentals", // Matches: 'Houses for Sale', 'Rentals', 'Fully Furnished Apartments', 'Land for Sale'
  subCategory: "serviced", // Matches: 'standard', 'serviced', 'outright', 'plot'
  priceLabel: "$2,200 / month",
  priceNumeric: 2200,
  location: "Kabulonga, Lusaka",
  specs: { beds: 3, baths: 3, size: "280 sqm" },
  features: ["Backup Solar", "Borehole Pressure", "Gated Security"],
  image: "https://images.unsplash.com/..."
}
```

### 2. Form Handling (Email Deliverability with FormSubmit)
All interactive forms are wired with `FormSubmit.co` endpoints, routing submissions cleanly as structured email packets.
*   **Viewing Appointments**: Submitting is completed via Ajax and displays a beautiful overlay alert without page refreshes.
*   **Property Submit Uploads**: Includes an `enctype="multipart/form-data"` form container to transfer spatial maps, layouts, and photographs up to 10MB completely to your inbox.
*   **Subscription**: Standard footer newsletters are pre-wired.

To redirect mail targets, simply replace `info@tulimapropertybrokers.com` in code files with your designated manager's mailbox.

---

## 🚀 Deployment Instructions

### Option A: Local Dev Server
The repository is packed with a lightweight Vite tooling system for fast local execution:
1.  Run `npm install` to load dev dependencies.
2.  Start the server using `npm run dev`.
3.  Access local preview via `http://localhost:3000`.

### Option B: GitHub Pages (Automatic)
To publish on GitHub Pages:
1.  Push your code changes to a GitHub Repository.
2.  Navigate to **Settings** > **Pages**.
3.  Select `/root` as the publishing source and click **Save**.
4.  Your custom URL will be ready within seconds (e.g. `https://<username>.github.io/<repository-name>/`).

---

## 💎 Fiduciary Mandates
All properties displayed undergo mandatory Title searches at the **Zambian Ministry of Lands** to verify:
1.  Clean State Deeds (Undisputed lease terms).
2.  Tax Clearance Certification validity.
3.  Survey Coordinates (Borehole alignments).

*For inquiries or emergency support, message us directly via the floating WhatsApp badge.*
