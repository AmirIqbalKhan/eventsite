# Event Platform Architecture & Features Overview

## 🔍 Monorepo Structure (Next.js + PostgreSQL Only)

```
/apps
  /event-mingle      → User-facing event social app
  /event-manager     → Admin-side event creation & logistics
  /master-dashboard  → Global analytics, security, roles

/packages
  /ui                → Shared components (cards, forms, headers)
  /utils             → Formatters, validators, permission checks
  /db                → SQL migrations and PostgreSQL schema
```

---

## 🔗 Cross-App Integrations

| Integration                 | Involved Apps                 | Description                         |
| --------------------------- | ----------------------------- | ----------------------------------- |
| Unified User Accounts       | All apps                      | One login, role-based permissions   |
| Event Sharing               | EventManager → EventMingle    | Admin-created events shown to users |
| Chat & Messaging            | EventMingle + EventManager    | Cross-event chat and support        |
| Invites & Cost Splits       | EventMingle + MasterDashboard | QR, referrals, expense tracking     |
| Global Notifications        | All apps                      | Event, reminder, cost-split alerts  |
| Analytics Dashboard         | MasterDashboard → All         | Revenue, usage, feedback            |
| Moderation & Access Control | MasterDashboard → All         | Suspend profiles, content control   |
| Calendar Sync               | EventMingle + EventManager    | One unified scheduling view         |
| Financial Systems           | All apps                      | Payments, refunds, split status     |
| Feedback & Moderation       | EventMingle + MasterDashboard | Report system and review tools      |

---

## 🔟 Feature Mapping by App

### 🗾 EventMingle (User App)

- **/discover** ✔️ Tinder-style event swiping
- **/chat** ✔️ Friends/matches/event threads
- **/invite** ✔️ QR codes, referral bonuses
- **/event/****:id****/split** ✔️ Custom cost division
- **/calendar** ✔️ Google, Apple, ICS
- **/profile, /matches** ✔️ AI-based social matching

### 📅 EventManager (Admin App)

- **/admin/events** ✔️ Event setup, cloning, visibility
- **/admin/venues** ✔️ Capacity, floor plans, availability
- **/admin/staff** ✔️ Role, schedule, performance tracking
- **/admin/resources** ✔️ Vendors, inventory
- **/admin/clients** ✔️ Communication + post-event reports

### 📊 Master Dashboard (Platform Admin)

- **/dashboard/settings** ✔️ Roles, toggles, platform health
- **/dashboard/analytics** ✔️ Usage, funnel, revenue data
- **/dashboard/security** ✔️ MFA, GDPR, audit logs
- **/dashboard/integrations** ✔️ APIs, webhooks, sync tools
- **/dashboard/team** ✔️ Admin management
- **/dashboard/workflows** ✔️ Trigger logic, escalation
- **EventMingle controls** ✔️ Matchmaking, moderation
- **EventManager controls** ✔️ Pricing, booking logic

---

## 🏠 Homepage Structure (EventMingle /)

- **Hero Section**

  - CTA: Discover events, share your own
  - Rotating banner or event highlights

- **Featured Events**

  - Location + trending
  - Events friends are attending

- **Event Categories**

  - Wedding, Conference, Concerts, etc.

- **Suggested Matches**

  - Profile-based suggestions
  - Aligned interests or past history

- **Pending Cost Splits**

  - Action cards with remaining dues

- **Friend Feed**

  - Recent RSVPs, event joins

- **Trust/Testimonial Section**

  - Carousel of user feedback or partner badges

- **Footer**

  - Support | Terms | Privacy | Mobile App

---

This structure ensures smooth scaling, strict separation of concerns, and total control via SQL & Next.js only.

