# AgroMarketPlace Entity Relationship Diagram (ERD)

Version: 1.0.0

Status: Draft

Author: Idris Salisu Adam

Last Updated: July 2026

---

# Overview

This document describes the relationships between the main database entities used in AgroMarketPlace.

The ERD serves as the blueprint for database implementation using PostgreSQL.

---

# Main Entities

- Users
- Vendors
- Categories
- Products
- Product Images
- Cart
- Orders
- Order Items
- Payments
- Reviews
- Wishlist
- Addresses
- Notifications
- Coupons
- Inventory
- Audit Logs

---

# Relationships

## User → Vendor

One User can own one Vendor account.

Relationship

One-to-One (1:1)

---

## Vendor → Products

One Vendor can own many Products.

Relationship

One-to-Many (1:N)

---

## Category → Products

One Category contains many Products.

Relationship

One-to-Many (1:N)

---

## Product → Images

One Product can have multiple Images.

Relationship

One-to-Many (1:N)

---

## User → Cart

One User can have many Cart Items.

Relationship

One-to-Many (1:N)

---

## Product → Cart

One Product can appear in many Shopping Carts.

Relationship

One-to-Many (1:N)

---

## User → Orders

One User can place many Orders.

Relationship

One-to-Many (1:N)

---

## Order → Order Items

One Order contains multiple Order Items.

Relationship

One-to-Many (1:N)

---

## Product → Order Items

One Product can exist in many Order Items.

Relationship

One-to-Many (1:N)

---

## Order → Payment

Each Order has one Payment record.

Relationship

One-to-One (1:1)

---

## User → Reviews

One User can write many Reviews.

Relationship

One-to-Many (1:N)

---

## Product → Reviews

One Product can receive many Reviews.

Relationship

One-to-Many (1:N)

---

## User → Wishlist

One User can save many Wishlist Items.

Relationship

One-to-Many (1:N)

---

## Product → Wishlist

One Product can appear in many Wishlists.

Relationship

One-to-Many (1:N)

---

## User → Addresses

One User can have multiple Delivery Addresses.

Relationship

One-to-Many (1:N)

---

## User → Notifications

One User can receive multiple Notifications.

Relationship

One-to-Many (1:N)

---

## Product → Inventory

Each Product has one Inventory record.

Relationship

One-to-One (1:1)

---

## User → Audit Logs

One User generates many Audit Logs.

Relationship

One-to-Many (1:N)

---

# Entity Relationship Flow

Users
│
├── Vendor
│      │
│      └── Products
│              │
│              ├── Images
│              ├── Inventory
│              ├── Reviews
│              └── Wishlist
│
├── Cart
│
├── Orders
│      │
│      ├── Order Items
│      └── Payment
│
├── Addresses
│
├── Notifications
│
└── Audit Logs

---

# Database Rules

- Every table uses a Primary Key (id).
- Foreign Keys enforce relationships.
- UUID support may be added in future versions.
- Important fields should be indexed.
- Sensitive data must never be stored in plain text.
- Passwords must always be hashed.
- Payment records are immutable after successful confirmation.

---

# Future Relationships

Future versions may introduce:

- Warehouses
- Logistics Providers
- Delivery Tracking
- Chat System
- AI Recommendations
- Export Marketplace
- Supplier Management

