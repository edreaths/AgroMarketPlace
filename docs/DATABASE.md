# AgroMarketPlace Database Design

Version: 1.0.0

Status: Draft

Author: Idris Salisu Adam

Last Updated: July 2026

---

# Overview

AgroMarketPlace uses PostgreSQL as its primary relational database.

The database is designed to be:

- Secure
- Scalable
- Normalized
- High Performance
- Easy to Maintain

---

# Main Tables

## Users

Stores customer, vendor, and administrator accounts.

Fields

- id
- first_name
- last_name
- email
- phone
- password_hash
- role
- status
- email_verified
- created_at
- updated_at

---

## Vendors

Stores vendor information.

Fields

- id
- user_id
- business_name
- business_email
- business_phone
- description
- logo
- address
- city
- state
- country
- verified
- created_at

---

## Categories

Stores product categories.

Fields

- id
- name
- slug
- icon
- created_at

---

## Products

Stores all marketplace products.

Fields

- id
- vendor_id
- category_id
- name
- slug
- description
- price
- discount_price
- stock
- image
- status
- created_at
- updated_at

---

## Product Images

Stores additional product images.

Fields

- id
- product_id
- image_url
- created_at

---

## Cart

Stores shopping cart items.

Fields

- id
- user_id
- product_id
- quantity
- created_at

---

## Orders

Stores customer orders.

Fields

- id
- user_id
- total
- payment_status
- order_status
- shipping_address
- created_at

---

## Order Items

Stores purchased products.

Fields

- id
- order_id
- product_id
- quantity
- unit_price
- subtotal

---

## Payments

Stores payment information.

Fields

- id
- order_id
- provider
- transaction_reference
- amount
- currency
- payment_status
- paid_at

---

## Reviews

Stores customer reviews.

Fields

- id
- user_id
- product_id
- rating
- review
- created_at

---

## Wishlist

Stores favorite products.

Fields

- id
- user_id
- product_id
- created_at

---

## Addresses

Stores delivery addresses.

Fields

- id
- user_id
- full_name
- phone
- address
- city
- state
- country
- postal_code
- is_default

---

## Notifications

Stores user notifications.

Fields

- id
- user_id
- title
- message
- read
- created_at

---

## Coupons

Stores discount coupons.

Fields

- id
- code
- discount_type
- discount_value
- expires_at
- usage_limit

---

## Inventory

Tracks product inventory.

Fields

- id
- product_id
- quantity
- updated_at

---

## Audit Logs

Stores security and activity logs.

Fields

- id
- user_id
- action
- ip_address
- user_agent
- created_at

---

# Relationships

User

↓

Vendor

↓

Products

↓

Orders

↓

Payments

---

# Security

- Password Hashing
- Foreign Keys
- Database Indexes
- Unique Constraints
- Transactions
- Soft Delete (Future)

---

# Future Tables

- Chat
- Messages
- AI Recommendations
- Logistics
- Export Orders
- Warehouse
- Analytics
- Reports
