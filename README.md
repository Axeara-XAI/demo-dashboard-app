# Axara XAI - Pregnancy Analysis Dashboard

Axara XAI is an advanced, industry-grade clinical dashboard designed for obstetricians, midwives, and healthcare administrators. The platform integrates machine learning models to predict the risk of Fetal Growth Restriction (FGR) and utilizes Explainable AI (XAI) techniques (such as SHAP and DiCE) to provide transparent, interpretable, and actionable insights to clinical professionals.

---

## 🚀 Key Features

* **Multi-Step Clinical Analysis Form**: A structured multi-step form to input maternal demographics, socioeconomic history, medical background, and fetal biometric data.
* **Explainable AI (XAI) Integration**:
  * **SHAP Explanations**: Quantifies feature contributions to FGR risk, indicating which clinical factors increase or decrease the risk.
  * **DiCE Counterfactual Scenarios**: Suggests actionable, alternative clinical scenarios (e.g., changes in maternal weight gain, habits, or visits) to demonstrate how risk labels could be reduced or optimized.
* **Patient Clinical History Directory**: A comprehensive dashboard allowing clinicians to view, search, and manage historical patient visits and AI diagnostic results.
* **PDF Report Generation**: Exportable summary reports for patients' medical history and individual analysis sessions.
* **Robust Database Integration**: Structured Schema powered by **Drizzle ORM** and **Turso (LibSQL)**.

---

## 🧱 Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 (App Router) | Handles routing, SSR, API routes, and optimized assets. |
| **Library** | React 18 & TypeScript | Component-driven UI development with strict typing. |
| **UI Components** | Fluent UI React | Official Microsoft UI library (`@fluentui/react-components`) for professional design. |
| **Icons** | Fluent UI Icons | Iconography package from Microsoft (`@fluentui/react-icons`). |
| **ORM** | Drizzle ORM | Modern, type-safe SQL query builder. |
| **Database** | Turso / LibSQL | Edge-optimized SQLite database for reliable data persistence. |

---

## 🗂️ Project Structure

```text
📦 demo-dashboard
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📂 api
 ┃ ┃ ┃ ┗ 📂 save-analysis            # API route to save clinical assessments
 ┃ ┃ ┣ 📂 dashboard
 ┃ ┃ ┃ ┣ 📂 analysis                # Multi-step pregnancy assessment form page
 ┃ ┃ ┃ ┣ 📂 clinical-history         # Patient directory & clinical history page
 ┃ ┃ ┃ ┣ 📜 layout.tsx              # Dashboard layout (Shell & Navigation)
 ┃ ┃ ┃ ┗ 📜 page.tsx                # Dashboard landing page
 ┃ ┃ ┣ 📜 layout.tsx                # Root layout
 ┃ ┃ ┣ 📜 providers.tsx             # Fluent UI Providers setup
 ┃ ┃ ┗ 📜 globals.css               # Global CSS styling
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 layout                    # Layout components (e.g., Navbar)
 ┃ ┃ ┣ 📂 sections                  # Modular page sections (dashboard, analysis, clinical history)
 ┃ ┃ ┣ 📂 theme                     # Design system customization (AxaraTheme)
 ┃ ┃ ┗ 📂 ui                        # Reusable global UI elements (AlertModal)
 ┃ ┣ 📂 db
 ┃ ┃ ┣ 📜 index.ts                  # DB connection initialization
 ┃ ┃ ┗ 📜 schema.ts                 # Database relational schema (SQLite/LibSQL)
 ┃ ┗ 📂 type
 ┃ ┃ ┗ 📜 analysis.ts               # Core TypeScript types for assessments
 ┣ 📜 drizzle.config.ts             # Drizzle ORM migration configuration
 ┣ 📜 next.config.mjs               # Next.js configuration
 ┣ 📜 package.json                  # Dependencies & scripts
 ┗ 📜 tsconfig.json                 # TypeScript compiler configuration
```

---

## 🗄️ Database Architecture

The relational schema is configured in [schema.ts](file:///d:/My%20Project/pkm-site/demo-dashboard/src/db/schema.ts) and supports:
1. **`patients`**: Stores basic patient records (MRN, Name, DOB).
2. **`assessments`**: Stores extensive clinical variables including demographics (age, education), lifestyle (smoking, alcohol), clinical history (anemia, diabetes, hypertension), and gestational progress.
3. **`assessment_results`**: Captures AI model prediction outputs (probability and risk labels like FGR vs. Non-FGR) alongside custom Gemini narrative summaries.
4. **`shap_explanations`**: Tracks features that contributed to the model output, their values, and their direction (increase vs. decrease risk).
5. **`dice_scenarios` & `dice_changes`**: Models counterfactual adjustments to clinical features for proactive risk mitigation.

---

## ⚙️ Installation & Configuration

### Prerequisites
* Node.js (v18.x or later)
* npm (v9.x or later) or pnpm / yarn

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Axeara-XAI/demo-dashboard-app.git
   cd demo-dashboard-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and configure your database credentials:
   ```env
   TURSO_DATABASE_URL=your_turso_db_url
   TURSO_AUTH_TOKEN=your_turso_auth_token
   ```

4. **Database Migrations:**
   Generate and push database changes:
   ```bash
   npx drizzle-kit generate
   npx drizzle-kit push
   ```

5. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🛠️ Build and Deploy

To build the project for production:
```bash
npm run build
```

To run the production bundle locally:
```bash
npm run start
```

### Deployment
This project is highly optimized for deployment on **Vercel** but can also be deployed to AWS, Azure, or self-hosted Docker containers.