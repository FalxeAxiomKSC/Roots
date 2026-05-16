# Wireframes: Main Screens

## Overview
This document contains low-fidelity wireframes for the main screens of the sustainability funding surfacing interface. The wireframes focus on layout, structure, and key interactions while maintaining a clean, user-centered design approach.

---

## 1. Dashboard Screen

### 📱 Screen Purpose
Central hub for cooperative users to monitor applications, discover opportunities, and track progress

### 🎯 Target User
Maya Chen - Community Food Cooperative Director

### 📐 Layout Dimensions
- **Desktop**: 1440x900px (16:9 aspect ratio)
- **Tablet**: 768x1024px (4:3 aspect ratio)
- **Mobile**: 375x812px (19.5:9 aspect ratio)

### 🎨 Wireframe Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│ ☰  Dashboard  ☰  Discover  ☰  Profile  ☰  Team  ☰  Settings    │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  Welcome back, Maya!                                                │
│  Green Valley Community Food Cooperative                             │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📊  Quick Stats                                                    │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐    │
│  │  Applications   │  │  Opportunities  │  │  Deadlines     │    │
│  │    Active: 3    │  │   Saved: 12    │  │   This Week: 2 │    │
│  │    Submitted: 2 │  │   New: 5       │  │   Next Month: 4 │    │
│  │   Approved: 1   │  │   Match: 85%   │  │                │    │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘    │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  🚨  Urgent Deadlines                                               │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  📅  USDA Sustainable Ag Grant - Due in 3 days                │ │
│  │  📍  $150,000 • Rural Development Programs                     │ │
│  │  🎯  75% Match                                                │ │
│  │  [ View Details ]  [ Continue Application ]                   │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  📅  Community Food Security Grant - Due in 5 days           │ │
│  │  📍  $75,000 • Food Access Programs                           │ │
│  │  🎯  90% Match                                                │ │
│  │  [ View Details ]  [ Continue Application ]                   │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  🎯  Recommended for You                                            │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  🌱  Local Food Systems Investment                           │ │
│  │  📍  $250,000 • Local Food Infrastructure                     │ │
│  │  🎯  95% Match • New Opportunity                             │ │
│  │  [ Save ]  [ Apply Now ]                                      │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  🏗️  Community Infrastructure Grant                         │ │
│  │  📍  $500,000 • Community Development                       │ │
│  │  🎯  80% Match • Deadline: Jun 15                           │ │
│  │  [ Save ]  [ Apply Now ]                                      │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  🌿  Sustainable Agriculture Grant                           │ │
│  │  📍  $100,000 • Environmental Programs                       │ │
│  │  🎯  85% Match • Deadline: Jun 30                           │ │
│  │  [ Save ]  [ Apply Now ]                                      │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📈  Recent Activity                                                 │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  📝  Submitted Food Security Grant application               │ │
│  │  📅  2 hours ago                                             │ │
│  │  📝  Saved Local Food Systems Investment                     │ │
│  │  📅  Yesterday                                                │ │
│  │  📝  Updated cooperative impact metrics                       │ │
│  │  📅  3 days ago                                              │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📱  Mobile View (Simplified)                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  ☰  Dashboard  ☰  ☰  ☰                                      │ │
│  │  Welcome, Maya!                                               │ │
│  │  📊 Stats: 3 Active, 12 Saved, 2 This Week                    │ │
│  │  🚨 Urgent: 2 deadlines this week                           │ │
│  │  🎯 Recommended: 3 new opportunities                         │ │ │
│  │  📈 Recent: 3 updates                                      │ │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

### 🔍 Key Interactive Elements
- **Quick Stats**: Expandable cards showing detailed metrics
- **Urgent Deadlines**: Clickable cards leading to application details
- **Recommended Opportunities**: Save/Apply buttons with immediate feedback
- **Recent Activity**: Expandable feed with full activity details
- **Navigation**: Persistent top navigation with active state indicators

### 🎯 Design Considerations
- **Visual Hierarchy**: Critical deadlines prominently displayed
- **Information Density**: Balance between comprehensive overview and scanability
- **Mobile Optimization**: Simplified layout for on-the-go access
- **Progress Indicators**: Clear visual cues for application status

---

## 2. Funding Discovery Screen

### 📱 Screen Purpose
Search, filter, and discover relevant funding opportunities for cooperatives

### 🎯 Target User
Jamal Williams - TechStart Worker Cooperative Organizer

### 📐 Layout Dimensions
- **Desktop**: 1440x900px (16:9 aspect ratio)
- **Tablet**: 768x1024px (4:3 aspect ratio)
- **Mobile**: 375x812px (19.5:9 aspect ratio)

### 🎨 Wireframe Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│ ☰  Dashboard  ☰  Discover  ☰  Profile  ☰  Team  ☰  Settings    │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  🔍  Discover Funding Opportunities                                │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  Search for sustainable funding opportunities...               │ │
│  │  [ Advanced Filters ]  [ Search History ]                       │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  🎯  Recommended for TechStart Worker Cooperative              │ │
│  │  📍  Detroit, MI • Technology Workers Cooperative              │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  🏷️  Filters                                                       │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐    │
│  │  Funding Type   │  │  Amount Range  │  │  Deadline      │    │
│  │  ☑️ All         │  │  ☑️ Any        │  │  ☑️ Any        │    │
│  │  ☑️ Grants      │  │  ☑️ $0-$50k    │  │  ☑️ Anytime    │    │
│  │  ☐ Loans        │  │  ☑️ $50k-$500k │  │  ☑️ This Month │    │
│  │  ☐ Investment   │  │  ☐ $500k-$1M  │  │  ☐ Next Month │    │
│  │  ☐ In-kind      │  │  ☐ $1M+        │  │  ☐ Custom     │    │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘    │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐    │
│  │  Focus Area     │  │  Geographic    │  │  Eligibility    │    │
│  │  ☑️ All         │  │  ☑️ Any        │  │  ☑️ Any        │    │
│  │  ☑️ Social      │  │  ☑️ Local      │  │  ☑️ Cooperative │    │
│  │  ☑️ Environmental│ │  ☑️ Regional   │  │  ☑️ Non-profit  │    │
│  │  ☑️ Economic    │  │  ☑️ National   │  │  ☐ Government  │    │
│  │  ☑️ Community    │  │  ☐ International│  ☐ Other        │    │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘    │
│  [ Apply Filters ]  [ Clear All ]  [ Save Search ]                │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📊  Results (24 opportunities found)                              │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  🎯 95% Match  🆕  🏷️ Technology Investment Fund               │ │
│  │  💰 $500,000  📅 Due: Jun 30, 2024  📍 Michigan Focus        │ │
│  │  📋 Focus: Tech worker development, Digital equity           │ │
│  │  [ Save ]  [ Apply Now ]  [ View Details ]                    │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  🎯 88% Match  ⭐  🏷️ Social Enterprise Grant                │ │
│  │  💰 $250,000  📅 Due: Jul 15, 2024  📍 National             │ │
│  │  📋 Focus: Worker ownership, Community benefit               │ │
│  │  [ Save ]  [ Apply Now ]  [ View Details ]                    │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  🎯 82% Match  🔄  🏷️ Digital Infrastructure Grant        │ │
│  │  💰 $750,000  📅 Due: Aug 1, 2024  📍 National             │ │
│  │  📋 Focus: Broadband access, Digital skills training         │ │
│  │  [ Save ]  [ Apply Now ]  [ View Details ]                    │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  🎯 75% Match  📋  🏷️ Community Development Fund           │ │
│  │  💰 $100,000  📅 Due: Sep 1, 2024  📍 Local                 │ │
│  │  📋 Focus: Community spaces, Local hiring                   │ │
│  │  [ Save ]  [ Apply Now ]  [ View Details ]                    │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│  [ Load More ]  [ 1 2 3 4 5 ]  [ Sort: Relevance ]               │ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  💾  Saved Opportunities                                           │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  🏷️ Sustainable Agriculture Innovation Fund                │ │
│  │  💰 $1,000,000  📅 Due: Oct 15, 2024  🎯 92% Match         │ │
│  │  📍 National  ⭐  Set Reminder  [ Remove ]                     │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  🏷️ Rural Broadband Expansion Grant                         │ │
│  │  💰 $2,000,000  📅 Due: Nov 30, 2024  🎯 87% Match         │ │
│  │  📍 Regional  ⭐  Set Reminder  [ Remove ]                    │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📱  Mobile View (Simplified)                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  ☰  Dashboard  ☰  Discover  ☰  ☰  ☰                        │ │
│  │  🔍 Search Funding...                                         │ │
│  │  🎯 Recommended: 3 new                                      │ │
│  │  💾 Saved: 2 opportunities                                  │ │
│  │  📊 Results: 24 found                                        │ │ │
│  │  [ Filters ]  [ Sort ]                                      │ │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

### 🔍 Key Interactive Elements
- **Search Interface**: Auto-complete search with smart suggestions
- **Advanced Filters**: Collapsible filter panels with multiple selection
- **Results Display**: Card-based layout with key information
- **Match Indicators**: Visual match percentage for quick assessment
- **Quick Actions**: Save, Apply, and View Details buttons
- **Pagination**: Load more with infinite scroll option

### 🎯 Design Considerations
- **Scanability**: Card-based layout for quick browsing
- **Relevance**: Clear match indicators and personalization
- **Filtering**: Intensive filtering options for precise results
- **Mobile**: Streamlined interface for on-the-go discovery

---

## 3. Cooperative Profile Screen

### 📱 Screen Purpose
Manage cooperative information, impact metrics, and supporting documents

### 🎯 Target User
David Park - Agricultural Cooperative Manager

### 📐 Layout Dimensions
- **Desktop**: 1440x900px (16:9 aspect ratio)
- **Tablet**: 768x1024px (4:3 aspect ratio)
- **Mobile**: 375x812px (19.5:9 aspect ratio)

### 🎨 Wireframe Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│ ☰  Dashboard  ☰  Discover  ☰  Profile  ☰  Team  ☰  Settings    │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  👥  Organic Valley Producers Cooperative                          │
│  📍 Central Valley, California  🌱  Est. 2003  👥 45 Members      │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  [ Edit Profile ]  [ View Public Profile ]  [ Share ]         │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📋  Basic Information                                             │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  Organization Name: Organic Valley Producers Cooperative        │ │
│  │  Description: Family-owned organic farming cooperative           │ │
│  │  Location: Central Valley, California                          │ │
│  │  Service Area: 5 counties in California                        │ │
│  │  Contact: david@organicvalley.coop                            │ │
│  │  Website: www.organicvalley.coop                              │ │
│  │  Phone: (555) 123-4567                                        │ │
│  │  [ Edit Basic Info ]                                          │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  🎯  Mission & Values                                              │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  Mission: To promote sustainable organic farming practices      │ │
│  │  and provide fair market access for family farms              │ │
│  │                                                              │ │
│  │  Core Values:                                                 │ │
│  │  🌱 Environmental stewardship                                │ │
│  │  🤝 Community cooperation                                    │ │
│  │  🌾 Sustainable agriculture                                  │ │
│  │  👥 Farmer ownership                                          │ │
│  │  🏆 Quality products                                         │ │
│  │                                                              │ │
│  │  Impact Areas:                                               │ │
│  │  🌍 Climate resilience                                       │ │
│  │  🏡 Food security                                            │ │
│  │  💰 Rural economic development                               │ │
│  │  👨‍🌾 Farmer livelihoods                                      │ │
│  │  🌱 Soil health                                               │ │
│  │  [ Edit Mission & Values ]                                    │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📊  Impact Metrics                                                │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  🌍 Environmental Impact                                     │ │
│  │  ┌─────────────────────────────────────────────────────────────┐ │ │
│  │  │  🌱 Acres Certified Organic: 2,500                      │ │ │
│  │  │  💧 Water Saved Annually: 750,000 gallons                 │ │ │
|  │  │  🌿 Carbon Sequestered: 1,200 tons/year                  │ │ │
│  │  │  ♻️ Waste Diverted: 95%                                   │ │ │
│  │  └─────────────────────────────────────────────────────────────┘ │ │
│  │                                                              │ │
│  │  👥 Social Impact                                            │ │
│  │  ┌─────────────────────────────────────────────────────────────┐ │ │
│  │  │  👨‍🌽 Farmers Supported: 45                               │ │ │
│  │  │  👶 Families Impacted: 180                                │ │ │
│  │  │  🏡 Rural Jobs Created: 12                               │ │ │
│  │  │  🎓 Educational Programs: 8                              │ │ │
│  │  └─────────────────────────────────────────────────────────────┘ │ │
│  │                                                              │ │
│  │  💰 Economic Impact                                          │ │
│  │  ┌─────────────────────────────────────────────────────────────┐ │ │
│  │  │  💵 Annual Revenue: $2.5M                                │ │ │
│  │  │  📈 Member Income Growth: +15%                            │ │ │
│  │  │  🏦 Local Investment: $500,000                           │ │ │
│  │  │  🌐 Market Access: 12 states                               │ │ │
│  │  └─────────────────────────────────────────────────────────────┘ │ │
│  │  [ Update Metrics ]  [ Export Report ]                        │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📁  Documents                                                     │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  📋  Certifications & Licenses                                │ │
│  │  ┌─────────────────────────────────────────────────────────────┐ │ │
│  │  │  📄 Organic Certification - USDA (2024)                   │ │ │
│  │  │  📄 Cooperative Articles of Incorporation                │ │ │
│  │  │  📄 Business License - California                        │ │ │
│  │  │  [ Upload Document ]  [ Manage Docs ]                     │ │ │
│  │  └─────────────────────────────────────────────────────────────┘ │ │
│  │                                                              │ │
│  │  📊  Financial Documents                                    │ │
│  │  ┌─────────────────────────────────────────────────────────────┐ │ │
│  │  │  📄 2023 Annual Financial Report                         │ │ │
│  │  │  📄 2023 Tax Returns                                     │ │ │
│  │  │  📄 Bank Statements - Q1 2024                            │ │ │
│  │  │  [ Upload Document ]  [ Manage Docs ]                     │ │ │
│  │  └─────────────────────────────────────────────────────────────┘ │ │
│  │                                                              │ │
│  │  🌍  Impact Reports                                          │ │
│  │  ┌─────────────────────────────────────────────────────────────┐ │ │
│  │  │  📄 2023 Sustainability Report                          │ │ │
│  │  │  📄 Environmental Impact Assessment                      │ │ │
│  │  │  📄 Community Impact Study                               │ │ │
│  │  │  [ Upload Document ]  [ Manage Docs ]                     │ │ │
│  │  └─────────────────────────────────────────────────────────────┘ │ │
│  │  [ Upload Documents ]  [ Bulk Upload ]  [ Storage: 2.1GB/5GB] │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📱  Mobile View (Simplified)                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  ☰  Dashboard  ☰  Discover  ☰  Profile  ☰  Team  ☰  Settings │ │
│  │  👥 Organic Valley Producers Cooperative                     │ │
│  │  📍 Central Valley, CA  🌱 45 Members                        │ │
│  │  📊 Impact: 2,500 acres organic, 45 farmers supported         │ │ │
│  │  📋 Basic Info  🎯 Mission  📊 Metrics  📁 Docs               │ │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

### 🔍 Key Interactive Elements
- **Progress Indicators**: Profile completeness meter
- **Inline Editing**: Click-to-edit functionality for key information
- **Metrics Management**: Add/edit impact data with validation
- **Document Management**: Drag-and-drop upload and organization
- **Progress Tracking**: Visual indicators for data completeness
- **Export Functionality**: Generate reports and impact statements

### 🎯 Design Considerations
- **Data Validation**: Real-time feedback on data quality
- **Progressive Enhancement**: Basic info required, advanced metrics optional
- **Visual Organization**: Clear sections for different information types
- **Mobile Optimization**: Quick access to key profile information

---

## 4. Application Detail Screen

### 📱 Screen Purpose
View and manage individual funding applications with full tracking

### 🎯 Target User
Elena Rodriguez - Housing Cooperative Board Member

### 📐 Layout Dimensions
- **Desktop**: 1440x900px (16:9 aspect ratio)
- **Tablet**: 768x1024px (4:3 aspect ratio)
- **Mobile**: 375x812px (19.5:9 aspect ratio)

### 🎨 Wireframe Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│ ☰  Dashboard  ☰  Discover  ☰  Profile  ☰  Team  ☰  Settings    │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📋  Fair Housing Cooperative - Disaster Recovery Grant           │
│  └─────────────────────────────────────────────────────────────────┘
│  📍 $250,000  📅 Due: May 20, 2024  🎯 85% Match  🔄 Submitted  │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📊  Application Status                                            │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  📋 Submitted on: May 10, 2024                               │ │
│  │  🔄 Current Status: Under Review                             │ │
│  │  👤 Assigned Reviewer: Maria Rodriguez                        │ │
│  │  📅 Estimated Decision: June 15, 2024                        │ │
│  │  📊 Progress: 100% Complete                                  │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📈  Timeline                                                      │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  📅 May 1, 2024  📝 Started Application                      │ │
│  │  📅 May 5, 2024  📝 Submitted Draft                         │ │
│  │  📅 May 8, 2024  👥 Team Review Completed                    │ │
│  │  📅 May 10, 2024 📤 Submitted to Funding Agency              │ │
│  │  📅 May 12, 2024 📄 Under Review                             │ │
│  │  📅 ---  📅 Expected: June 15, 2024  🎯 Decision Expected   │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📝  Application Summary                                           │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  🏗️ Project: Hurricane Recovery Housing Reconstruction        │ │
│  │  📍 Location: San Juan, Puerto Rico                           │ │
│  │  💰 Requested Amount: $250,000                               │ │
│  │  🎯 Project Duration: 24 months                               │ │
│  │  👥 Beneficiaries: 25 families                               │ │
│  │  🌍 Impact: Disaster recovery, housing security               │ │
│  │  [ View Full Application ]  [ Download PDF ]                  │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📁  Supporting Documents                                          │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  📄 Project Proposal (Final).pdf                            │ │
│  │  📄 Budget Breakdown.xlsx                                   │ │
│  │  📄 Cooperative Certification.pdf                           │ │
│  │  📄 Member Impact Survey.pdf                                │ │
│  │  📄 Architectural Plans.pdf                                  │ │
│  │  📄 Environmental Assessment.pdf                             │ │
│  │  [ Upload Additional Document ]  [ Manage Documents ]           │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  💬  Communication                                                 │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  📝 May 14, 2024  🤵‍♂️ Maria Rodriguez                      │ │
│  │  "Thank you for submitting your application. We are reviewing │ │
│  │   the budget breakdown section and will follow up by May 21."  │ │
│  │  [ Reply ]  [ Add Note ]                                      │ │
│  │                                                              │ │
│  │  📝 May 12, 2024  🤵‍♂️ Funding System                      │ │
│  │  "Application received and assigned to review team."           │ │
│  │  [ View All Communication ]                                   │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📱  Mobile View (Simplified)                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  ☰  Dashboard  ☰  Discover  📋 Profile  ☰  Team  ☰  Settings │ │
│  │  📋 Fair Housing - Disaster Recovery Grant                     │ │
│  │  📍 $250k  📅 Due May 20  🎯 85% Match  🔄 Under Review     │ │
│  │  📅 Submitted: May 10  📅 Decision: Jun 15  📊 100% Complete │ │
│  │  📄 Documents: 6 uploaded  💬 2 messages                    │ │
│  │  [ View Details ]  [ Message Reviewer ]  [ Download PDF ]    │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

### 🔍 Key Interactive Elements
- **Status Tracking**: Real-time application status updates
- **Timeline Visualization**: Interactive progress timeline
- **Document Management**: Upload, download, and organize supporting materials
- **Communication Hub**: Direct messaging with funding agencies
- **Export Functionality**: Download complete application packages
- **Progress Indicators**: Visual completion tracking

### 🎯 Design Considerations
- **Transparency**: Clear status information and communication history
- **Organization**: Logical grouping of application materials
- **Accessibility**: Mobile-friendly access to critical information
- **Actionability**: Clear next steps and communication options

---

## 5. Team Collaboration Screen

### 📱 Screen Purpose
Manage team members, assign tasks, and collaborate on applications

### 🎯 Target User
All cooperative users (varies by team structure)

### 📐 Layout Dimensions
- **Desktop**: 1440x900px (16:9 aspect ratio)
- **Tablet**: 768x1024px (4:3 aspect ratio)
- **Mobile**: 375x812px (19.5:9 aspect ratio)

### 🎨 Wireframe Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│ ☰  Dashboard  ☰  Discover  ☰  Profile  ☰  Team  ☰  Settings    │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  👥  Team Members                                                  │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  👤 Elena Rodriguez (Treasurer) - Active                     │ │
│  │  📧 elena@fairhousing.org  📅 Last active: Today           │ │
│  │  🎯 Roles: Finance, Applications                            │ │
│  │                                                              │ │
│  │  👤 Carlos Mendez (Secretary) - Active                       │ │
│  │  📧 carlos@fairhousing.org  📅 Last active: Yesterday       │ │
│  │  🎯 Roles: Documentation, Compliance                        │ │
│  │                                                              │ │
│  │  👤 Ana Lopez (President) - Active                          │ │
│  │  📧 ana@fairhousing.org  📅 Last active: 2 days ago        │ │
│  │  🎯 Roles: Leadership, External Relations                    │ │
│  │                                                              │ │
│  │  [ Invite Member ]  [ Manage Roles ]  [ Team Settings ]      │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📋  Application Assignments                                        │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  📋 Disaster Recovery Grant                                  │ │
│  │  ┌─────────────────────────────────────────────────────────────┐ │ │
│  │  │  👥 Elena Rodriguez: Budget Section (Due: May 18)        │ │ │
│  │  │  👥 Carlos Mendez: Documentation Review (Due: May 19)     │ │ │
│  │  │  👥 Ana Lopez: Final Approval (Due: May 20)               │ │ │
│  │  │  📊 Progress: 2/3 Complete                                │ │ │
│  │  │  [ View Application ]  [ Assign Tasks ]                  │ │ │
│  │  └─────────────────────────────────────────────────────────────┘ │ │
│  │                                                              │ │
│  │  📋 Community Development Grant                             │ │
│  │  ┌─────────────────────────────────────────────────────────────┐ │ │
│  │  │  👥 Elena Rodriguez: Financial Analysis (Due: May 25)    │ │ │
│  │  │  👥 Carlos Mendez: Application Draft (Due: May 22)       │ │ │
│  │  │  👥 Ana Lopez: External Review (Due: May 24)             │ │ │
│  │  │  📊 Progress: 0/3 Complete                               │ │ │
│  │  │  [ View Application ]  [ Assign Tasks ]                  │ │ │
│  │  └─────────────────────────────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  💬  Collaboration Hub                                              │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  📝 Disaster Recovery Grant - Elena                         │ │
│  │  "I've completed the budget section. Please review when you  │ │
│  │   have time." - Today, 2:30 PM                               │ │
│  │  👍 Carlos: "Looks good! I'll start the documentation review."│ │
│  │  📝 Carlos: "Can you send the budget spreadsheet?"           │ │
│  │  📥 Elena: "Shared the file in the documents section"       │ │
│  │  [ View Thread ]  [ Reply ]  [ Assign Notification ]         │ │
│  │                                                              │ │
│  │  📝 General Team Announcements                               │ │
│  │  📢 Ana: "Team meeting tomorrow at 3 PM to review both apps"  │ │
│  │  📢 Elena: "New opportunity deadline next week - check it!" │ │
│  │  [ View All Announcements ]  [ Post Announcement ]            │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📊  Team Activity                                                 │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  🕐 Today                                                   │ │
│  │  👤 Elena submitted budget section for Disaster Recovery Grant│ │
│  │  👤 Carlos commented on application documents                │ │
│  │  👤 Ana updated team meeting schedule                       │ │
│  │                                                              │ │
│  │  🕐 Yesterday                                               │ │
│  │  👤 Elena uploaded supporting documents                     │ │
│  │  👤 Carlos started documentation review                      │ │
│  │  👤 Ana approved application draft                          │ │
│  │                                                              │ │
│  │  🕐 This Week                                              │ │
│  │  👤 Elena: 12 actions                                      │ │
│  │  👤 Carlos: 8 actions                                       │ │
│  │  👤 Ana: 5 actions                                          │ │
│  │  [ View Activity Log ]  [ Export Report ]                    │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  📱  Mobile View (Simplified)                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  ☰  Dashboard  ☰  Discover  ☰  Profile  👥 Team  ☰  Settings │ │
│  │  👥 3 Active Members  📋 2 Active Applications              │ │
│  │  💬 Recent: Elena completed budget section                 │ │
│  │  📊 Today: 3 actions, 2 notifications                      │ │
│  │  [ View Team ]  [ Assignments ]  [ Activity ]                │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

### 🔍 Key Interactive Elements
- **Member Management**: Invite, roles, and permissions
- **Task Assignment**: Distribute application tasks with deadlines
- **Communication Hub**: Team discussions and announcements
- **Activity Tracking**: Real-time team activity and progress
- **Notification Management**: Configurable alerts and reminders

### 🎯 Design Considerations
- **Role-Based Access**: Different permissions for different team members
- **Clear Ownership**: Unambiguous task assignment and tracking
- **Communication Integration**: Seamless team collaboration tools
- **Mobile Accessibility**: Team management on the go

---

## Design Principles Applied

### 🎯 User-Centered Design
- **Personas drive decisions**: All screens designed with specific user needs in mind
- **Progressive disclosure**: Information revealed based on user needs
- **Accessibility first**: Keyboard navigation, screen reader support, mobile responsive

### 🎨 Visual Hierarchy
- **Clear information architecture**: Primary actions and information prominently displayed
- **Consistent patterns**: Reusable components and interaction patterns
- **Visual feedback**: Interactive elements respond to user actions

### 💡 Innovation & Simplicity
- **Smart matching**: Personalized recommendations based on cooperative profile
- **Streamlined workflows**: Efficient processes for complex applications
- **Intelligent automation**: Auto-save, smart filters, and intelligent suggestions

### 🌱 Sustainability Focus
- **Impact metrics**: Built-in tracking of social and environmental impact
- **Value alignment**: Emphasis on cooperative principles and mission alignment
- **Community building**: Features that support collaborative decision-making

These wireframes provide a solid foundation for building the sustainability funding surfacing interface, ensuring that the final design meets the needs of cooperative users while providing an intuitive and efficient experience for discovering and applying for funding opportunities.