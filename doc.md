# Smart Prints Backend — API Reference

This document provides a concise, developer-friendly reference for the REST API implemented in this repository.

Contents

- Overview
- Authentication
- Controllers & Endpoints
	- Auth
	- Users
	- Products
	- Orders
	- Categories
	- Address (reference)
	- Uploads
- DTOs referenced
- How to run & verify

## Overview

The backend is a NestJS application. Controllers are located in `src/**` and DTOs are re-exported from `libs/dto`.

Base API path (versioning): The controllers shown use top-level paths like `/auth`, `/users`, `/product`, `/order`, `/categories`, `/address`, `/upload`.

## Authentication

- Most protected endpoints require a bearer access token sent in the `Authorization: Bearer <token>` header.
- The Swagger decorators use `@ApiBearerAuth('access-token')` to mark protected routes.
- Authentication endpoints (login/register/refresh) are under `/auth` and some routes use third-party OAuth guards (Google, Facebook).

## Controllers & Endpoints

### Auth (/auth)

- POST /auth/register
	- Body: RegisterDTO (based on `UserDTO`, includes fields such as `firstname`, `lastname`, `email`, `password`, etc.)
	- Description: Create a new user
	- Public

- POST /auth/login
	- Body: `LoginDTO` (email, password)
	- Description: Login; returns access/refresh tokens

- POST /auth/send-code-to-email
	- Body: `UserIDDTO` ({ userId or email })
	- Description: Send 2FA code via email

- POST /auth/send-code-to-sms
	- Body: `UserIDDTO`
	- Description: Send 2FA code via SMS

- POST /auth/verify-authentication
	- Body: `VerifyAuthenticationDto`
	- Description: Verify 2FA or one-time codes

- POST /auth/refresh
	- Body: `RefreshTokenDTO` (expects `refresh_token` field)
	- Description: Exchange refresh token for a new access token

- GET /auth/profile
	- Auth: Bearer
	- Description: Returns authenticated user profile

- PATCH /auth/profile
	- Auth: Bearer
	- Body: `UserDTO`
	- Description: Update profile

- POST /auth/add-bank-account
	- Auth: Bearer
	# Smart Prints Backend — Frontend API Reference

	This document is targeted at frontend engineers integrating with the Smart Prints backend. It lists endpoints, authentication rules, request DTOs (fields and types), example payloads, and quick verification steps.

	Base URL (example): https://api.smartprints.local

	Auth: Include access token in header: Authorization: Bearer <access_token>

	----

	How to read this doc

	- Methods: HTTP verb + path
	- Auth: whether the endpoint needs a Bearer token
	- Body: DTO name and flattened fields (optional fields marked)
	- Example: minimal example request body

	----

	1) Auth

	- POST /auth/register
		- Auth: no
		- Body (RegisterDTO / UserDTO fields):
			- id: string
			- firstname: string
			- lastname: string
			- fullname (optional): string
			- email: string
			- password: string
			- phone (optional): string
			- profileImage (optional): string (URL)
			- userType (optional): string
			- isAdmin (optional): boolean
		- Example:
			{
				"id": "u123",
				"firstname": "Jane",

			----

			## Full DTO definitions (copy-paste for frontend)

			Below are exact DTO shapes taken from the backend `libs/dto` sources. Use these interfaces in the frontend to match payloads expected by the API.

			### UserDTO

			```typescript
			export interface UserDTO {
				_id?: string;
				id: string;
				title?: string;
				playerId?: string;
				userType: string; // enum on backend
				username?: string;
				status?: string;
				roles: string[];
				emailStatus?: string;
				email: string;
				fullname: string;
				firstname: string;
				lastname: string;
				gender: string;
				phone?: string;
				password?: string;
				useRefCode?: string;
				profileImage?: string;
				isAdmin?: boolean;
				isSuperAdmin?: boolean;
				referral?: { refCode: string; status?: string; max: number; amount: number };
				refBy?: string;
			}
			```

			### Product DTOs

			```typescript
			export interface ProductColorDto { name: string; hex: string; className?: string }
			export interface ProductSizeDto { name: string; label?: string; inStock?: boolean }
			export interface DesignRectDto { top: string; left: string; width: string; height: string }
			export interface DesignAreaDto { front?: DesignRectDto; back?: DesignRectDto; left?: DesignRectDto; right?: DesignRectDto }

			export interface ProductDto {
				_id?: string;
				id: string;
				name: string;
				description?: string;
				price?: number; // legacy
				basePrice: number;
				salePrice?: number;
				categoryID?: string; // legacy
				category: string;
				quantity?: number;
				mockups?: { front?: string; back?: string; left?: string; right?: string };
				designArea?: DesignAreaDto;
				imageUrls?: string[];
				availableColors?: ProductColorDto[];
				availableSizes?: ProductSizeDto[];
				sizeGuide?: string;
				rating?: Array<{ rating: number; feedback: string; userID: string; date: string }>;
				measurement?: string;
				distance?: number;
				status?: string;
				type?: string[];
			}
			```

			### Order DTO

			```typescript
			export interface OrderDto {
				id: string;
				userID: string;
				productID: string;
				quantity: number;
				totalPrice: number;
				status: string;
				addressID: string;
			}
			```

			### Cart DTOs

			```typescript
			export interface CartItemDto { productID: string; color?: string; size?: string; quantity: number; unitPrice: number; lineTotal: number }
			export interface CartDto { id?: string; userID: string; items: CartItemDto[]; subtotal: number; tax?: number; shipping?: number; total: number }
			```

			### Address DTO

			```typescript
			export interface AddressDto { id: string; userID: string; street: string; city: string; state: string; postalCode: string; country: string; isDefault: boolean }
			```

			### Wallet DTO

			```typescript
			export interface WalletDTO { _id?: string; userID: string; accountName: string; accountNumber: string; balance: number; currency: string; status?: string; type?: string; bank_code?: string; amount: number; reason: string; rideID: string }
			```

			### OTP / Authenticator / Support / Country / State / Select

			```typescript
			export interface OTPDTO { _id?: string; userID: string; code: string; duration: string; status: string; type: string }
			export interface AuthenticatorDTO { _id?: string; userID: string; secret: string; status: string }
			export interface SupportDTO { _id?: string; userID: string; adminID: string; subject: string; supportID: string; description: string; status: string; priority: string; message?: string; url?: string }
			export interface CountryDTO { name: string; code?: string; currency?: string; capital?: string; flag?: string; dialCode?: string; continent?: string; latitude?: number; longitude?: number }
			export interface StateDTO { id: string; name: string; code?: string; country?: string; countryId?: string; capital?: string; flag?: string; latitude?: number; longitude?: number }
			export interface SelectDto { name: string }
			```

			### Reviews & Notifications & ProductDetails

			```typescript
			export interface ReviewsDto { id: string; productId: string; userId: string; content: string; rating: number; createdAt: string }
			export interface NotificationsDto { id: string; userId: string; message: string; createdAt: string; isRead: boolean; type: string; orderId?: string; productPrice?: number; productWeight?: number }
			export interface ProductDetailsDto { id: string; name: string; description: string; price: number; category: any; Instock: string; imageUrl?: string; location: string; distance?: number; quantity?: number }
			```

			----

			If you want, I can generate a single `dto.ts` file containing all these interfaces ready for the frontend repo — tell me the preferred filename and I will create it.
				"lastname": "Doe",
				"email": "jane@example.com",
				"password": "Secret123!"
			}

	- POST /auth/login
		- Auth: no
		- Body (LoginDTO): { email: string, password: string }
		- Example: { "email": "jane@example.com", "password": "Secret123!" }
		- Success: { accessToken: string, refreshToken: string }

	- POST /auth/refresh
		- Auth: no
		- Body: { refresh_token: string }
		- Success: { accessToken: string }

	- GET /auth/profile
		- Auth: yes
		- Response: UserDTO

	- PATCH /auth/profile
		- Auth: yes
		- Body: partial UserDTO

	2) Users

	- POST /users
		- Auth: yes
		- Body: UserDTO (see fields above in Auth/Register)

	- GET /users
		- Auth: yes
		- Query: page? limit?
		- Response: { data: UserDTO[], total: number }

	- GET /users/by-any/:key/:value
		- Auth: no
		- Query: page? limit?

	- PATCH /users
		- Auth: yes
		- Body: partial UserDTO

	- DELETE /users
		- Auth: yes
		- Body: ["id1","id2"]

	3) Products

	Product DTO (fields frontend will commonly use):

	- id: string
	- _id?: string
	- name: string
	- description?: string
	- basePrice: number
	- salePrice?: number
	- price?: number (legacy)
	- category: string
	- categoryID?: string (legacy)
	- quantity?: number
	- mockups?: { front?: string, back?: string, left?: string, right?: string }
	- designArea?: {
			front?: { top: string, left: string, width: string, height: string },
			back?: { top: string, left: string, width: string, height: string },
			left?: {...}, right?: {...}
		}
	- imageUrls?: string[] (legacy)
	- availableColors?: [{ name: string, hex: string, className?: string }]
	- availableSizes?: [{ name: string, label?: string, inStock?: boolean }]
	- sizeGuide?: string (URL)

	Endpoints

	- POST /product
		- Auth: yes
		- Body: ProductDto
		- Example minimal:
			{
				"id": "p1",
				"name": "Premium Tee",
				"basePrice": 25.00,
				"category": "apparel",
				"availableColors": [{ "name": "White", "hex": "#FFFFFF" }],
				"availableSizes": [{ "name": "M", "label": "Medium", "inStock": true }]
			}

	- GET /product
		- Auth: yes
		- Query: page? limit?

	- GET /product/by-any/:key/:value
		- Auth: no

	- PATCH /product/:productID
		- Auth: yes
		- Body: partial ProductDto

	- DELETE /product
		- Auth: yes
		- Body: ["prod1", "prod2"]

	4) Orders

	Order DTO (fields frontend will use)

	- id: string
	- userID: string
	- productID: string
	- quantity: number
	- totalPrice: number
	- status: string (e.g. 'pending' | 'paid' | 'shipped' | 'cancelled')
	- addressID: string
	- createdAt?: string
	- updatedAt?: string

	Endpoints

	- POST /order
		- Auth: yes
		- Body: OrderDto
		- Description: Create a new order (single item). In many flows the frontend will create an order after user confirms checkout.
		- Example request:
			{
				"id": "ord_123",
				"userID": "u123",
				"productID": "p1",
				"quantity": 2,
				"totalPrice": 50.0,
				"status": "pending",
				"addressID": "addr_456"
			}
		- Example success response (serviceResponse shape):
			{
				"message": "Order plan created successfully",
				"data": { /* created order object with _id, createdAt */ },
				"status": true
			}

		TypeScript DTO (copy-paste for frontend):

		```typescript
		export interface OrderDto {
			id: string;
			userID: string;
			productID: string;
			quantity: number;
			totalPrice: number;
			status: 'pending' | 'paid' | 'shipped' | 'cancelled' | string;
			addressID: string;
			createdAt?: string;
			updatedAt?: string;
		}
		```

	- PATCH /order/:orderID
		- Auth: yes
		- Body: partial OrderDto
		- Description: Update order fields (status, quantity, etc.)

	- GET /order
		- Auth: yes
		- Query: page?, limit?
		- Description: Paginated list of orders

	- GET /order/by-any/:key/:value
		- Auth: no
		- Description: Flexible search by key/value (e.g., by userID)

	- DELETE /order
		- Auth: yes
		- Body: ["orderId1","orderId2"]
		- Description: Bulk delete orders (admin-type actions)

	Notes & integration tips

	- Checkout flow (recommended): frontend reads user's cart, calculates totals (subtotal, tax, shipping), sends order creation request(s) to POST /order or batches server-side, then waits for payment confirmation before updating order status to `paid`.
	- Keep client-side validation for prices/quantities; server trusts final server-side price calculation before charging.

	5) Cart

	Cart overview

	The cart is a lightweight per-user resource used to store items the customer intends to buy. The backend exposes endpoints to create/replace a cart, fetch a user's cart, list carts (admin) and update/delete carts.

	Cart DTO (CartDto)

	- id?: string
	- userID: string
	- items: [{
			productID: string,
			color?: string,
			size?: string,
			quantity: number,
			unitPrice: number,
			lineTotal: number
		}]
	- subtotal: number
	- tax?: number
	- shipping?: number
	- total: number

	Endpoints

	- POST /cart
		- Auth: yes
		- Body: CartDto
		- Description: Create a cart for the authenticated user or replace existing cart items. The server implementation replaces the user's cart if one exists.
		- Example request:
			{
				"userID": "u123",
				"items": [
					{ "productID": "p1", "size": "M", "quantity": 2, "unitPrice": 25.0, "lineTotal": 50.0 }
				],
				"subtotal": 50.0,
				"tax": 0,
				"shipping": 0,
				"total": 50.0
			}
		- Example success response:
			{ "message": "Cart created", "data": { /* cart object */ }, "status": true }

		TypeScript DTOs (copy-paste for frontend):

		```typescript
		export interface CartItemDto {
			productID: string;
			color?: string;
			size?: string;
			quantity: number;
			unitPrice: number;
			lineTotal: number;
		}

		export interface CartDto {
			id?: string;
			userID: string;
			items: CartItemDto[];
			subtotal: number;
			tax?: number;
			shipping?: number;
			total: number;
		}
		```

	- GET /cart/user/:userID
		- Auth: yes
		- Description: Get the cart for a given user (typically the authenticated user's ID). Returns the Cart object or `data: null` if none exists.

	- GET /cart
		- Auth: yes
		- Query: page?, limit?
		- Description: Admin-style paginated list of carts

	- PATCH /cart/:cartID
		- Auth: yes
		- Body: partial CartDto
		- Description: Update a cart by its ID (replace items or change totals)

	- DELETE /cart
		- Auth: yes
		- Body: ["cartId1", "cartId2"]
		- Description: Bulk delete carts

	Client patterns & recommendations

	- Single-source-of-truth: prefer storing cart server-side for authenticated users. For anonymous users, store a local cart and sync on login.
	- When the user updates quantity or item options, send a full cart POST /cart with new items (server replaces cart). The backend implementation intentionally replaces the cart to keep the endpoint simple.
	- On checkout: read the server cart (GET /cart/user/:userID) and create orders (POST /order) after a successful payment flow.

	6) Categories

	- POST /categories (Auth) Body: { name: string }
	- PATCH /categories/:categoriesID (Auth) Body: { name: string }
	- GET /categories (Auth) Query: page? limit?
	- GET /categories/by-any/:key/:value
	- DELETE /categories (Auth) Body: ["cat1","cat2"]

	6) Address (reference)

	- Standard CRUD: POST /address, PATCH /address/:id, GET /address, DELETE /address

	7) Uploads

	- POST /upload/file
		- Auth: yes
		- multipart/form-data field `files` (array) up to 10 files
		- Response: { message, data: [{ originalname, url }] }

	- GET /upload/file/:filename
		- Public file stream from `uploads` folder

	- POST /upload/cloudinary?folder=products
		- Auth: yes
		- multipart files
		- Query: folder (required)

	Response shape & errors

	- Standard service response helper used across controllers: { message: string, data: any, status: boolean }
	- HTTP mapping:
		- 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error

	Quick examples

	- Login -> list products

		1) POST /auth/login
			 Body: { "email": "jane@example.com", "password": "Secret123!" }
			 Response: { "accessToken": "<jwt>", "refreshToken": "<refresh>" }

		2) GET /product
			 Header: Authorization: Bearer <accessToken>

	- Upload images then create product

		1) POST /upload/cloudinary?folder=products (multipart) -> returns image URLs
		2) POST /product with mockups/imageUrls referencing those URLs

	