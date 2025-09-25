/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/decorator/src/index.ts":
/*!*************************************!*\
  !*** ./libs/decorator/src/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./roles.decorator */ "./libs/decorator/src/roles.decorator.ts"), exports);


/***/ }),

/***/ "./libs/decorator/src/roles.decorator.ts":
/*!***********************************************!*\
  !*** ./libs/decorator/src/roles.decorator.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ROLES_KEY = void 0;
exports.ROLES_KEY = 'roles';


/***/ }),

/***/ "./libs/dto/src/index.ts":
/*!*******************************!*\
  !*** ./libs/dto/src/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user.dto */ "./libs/dto/src/user.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./wallet.dto */ "./libs/dto/src/wallet.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./support.dto */ "./libs/dto/src/support.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./reference/country.dto */ "./libs/dto/src/reference/country.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./reference/state.dto */ "./libs/dto/src/reference/state.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./reference/otp.dto */ "./libs/dto/src/reference/otp.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./reference/address.dto */ "./libs/dto/src/reference/address.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./reference/authenticator.dto */ "./libs/dto/src/reference/authenticator.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/product.dto */ "./libs/dto/src/product/product.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/cart.dto */ "./libs/dto/src/product/cart.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/cart.dto */ "./libs/dto/src/product/cart.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/design.dto */ "./libs/dto/src/product/design.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/categories.dto */ "./libs/dto/src/product/categories.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/details.dto */ "./libs/dto/src/product/details.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/reviews.dto */ "./libs/dto/src/product/reviews.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/notifications.dto */ "./libs/dto/src/product/notifications.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/product.dto */ "./libs/dto/src/product/product.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./reference/select.dto */ "./libs/dto/src/reference/select.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/order.dto */ "./libs/dto/src/product/order.dto.ts"), exports);


/***/ }),

/***/ "./libs/dto/src/product/cart.dto.ts":
/*!******************************************!*\
  !*** ./libs/dto/src/product/cart.dto.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CartDto = exports.CartItemDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CartItemDto {
}
exports.CartItemDto = CartItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product ID', example: 'prod_123' }),
    __metadata("design:type", String)
], CartItemDto.prototype, "productID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Selected color (optional)', required: false }),
    __metadata("design:type", String)
], CartItemDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Selected size (optional)', required: false }),
    __metadata("design:type", String)
], CartItemDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity', example: 1 }),
    __metadata("design:type", Number)
], CartItemDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit price', example: 25.0 }),
    __metadata("design:type", Number)
], CartItemDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Line total', example: 25.0 }),
    __metadata("design:type", Number)
], CartItemDto.prototype, "lineTotal", void 0);
class CartDto {
}
exports.CartDto = CartDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cart ID', required: false }),
    __metadata("design:type", String)
], CartDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID', example: 'user_123' }),
    __metadata("design:type", String)
], CartDto.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of cart items', type: [CartItemDto] }),
    __metadata("design:type", Array)
], CartDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cart subtotal', example: 100.0 }),
    __metadata("design:type", Number)
], CartDto.prototype, "subtotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tax (optional)', required: false, example: 0.0 }),
    __metadata("design:type", Number)
], CartDto.prototype, "tax", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shipping (optional)', required: false, example: 0.0 }),
    __metadata("design:type", Number)
], CartDto.prototype, "shipping", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount', example: 100.0 }),
    __metadata("design:type", Number)
], CartDto.prototype, "total", void 0);


/***/ }),

/***/ "./libs/dto/src/product/categories.dto.ts":
/*!************************************************!*\
  !*** ./libs/dto/src/product/categories.dto.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CategoriesDto {
}
exports.CategoriesDto = CategoriesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category name', example: 'Electronics' }),
    __metadata("design:type", String)
], CategoriesDto.prototype, "name", void 0);


/***/ }),

/***/ "./libs/dto/src/product/design.dto.ts":
/*!********************************************!*\
  !*** ./libs/dto/src/product/design.dto.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DesignDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class DesignDto {
}
exports.DesignDto = DesignDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Design ID', example: 'ord123' }),
    __metadata("design:type", String)
], DesignDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name', example: 'Name' }),
    __metadata("design:type", String)
], DesignDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'url', example: 'http://example.com/image.jpg' }),
    __metadata("design:type", String)
], DesignDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID', example: 'user_123' }),
    __metadata("design:type", String)
], DesignDto.prototype, "userID", void 0);


/***/ }),

/***/ "./libs/dto/src/product/details.dto.ts":
/*!*********************************************!*\
  !*** ./libs/dto/src/product/details.dto.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductDetailsDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const categories_dto_1 = __webpack_require__(/*! ./categories.dto */ "./libs/dto/src/product/categories.dto.ts");
class ProductDetailsDto {
}
exports.ProductDetailsDto = ProductDetailsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product ID', example: '12345' }),
    __metadata("design:type", String)
], ProductDetailsDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product name', example: 'Sample Product' }),
    __metadata("design:type", String)
], ProductDetailsDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product description', example: 'This is a sample product.' }),
    __metadata("design:type", String)
], ProductDetailsDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product price', example: `₦${28.33}` }),
    __metadata("design:type", Number)
], ProductDetailsDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product category', type: categories_dto_1.CategoriesDto }),
    __metadata("design:type", typeof (_a = typeof categories_dto_1.CategoriesDto !== "undefined" && categories_dto_1.CategoriesDto) === "function" ? _a : Object)
], ProductDetailsDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product availability', example: 'Out of stock' }),
    __metadata("design:type", String)
], ProductDetailsDto.prototype, "Instock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product image URL', example: 'http://example.com/image.jpg' }),
    __metadata("design:type", String)
], ProductDetailsDto.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Location', example: 'Tudun Wada, Old Karu, Abuja' }),
    __metadata("design:type", String)
], ProductDetailsDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'distance', example: `${200}km` }),
    __metadata("design:type", Number)
], ProductDetailsDto.prototype, "distance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product quantity', example: 2 }),
    __metadata("design:type", Number)
], ProductDetailsDto.prototype, "quantity", void 0);


/***/ }),

/***/ "./libs/dto/src/product/notifications.dto.ts":
/*!***************************************************!*\
  !*** ./libs/dto/src/product/notifications.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationsDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class NotificationsDto {
}
exports.NotificationsDto = NotificationsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification ID', example: 'notif123' }),
    __metadata("design:type", String)
], NotificationsDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID', example: 'user678' }),
    __metadata("design:type", String)
], NotificationsDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notification message', example: 'Your order has been shipped!' }),
    __metadata("design:type", String)
], NotificationsDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date when the notification was created', example: '2023-10-01T12:00:00Z' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], NotificationsDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Read status of the notification', example: false }),
    __metadata("design:type", Boolean)
], NotificationsDto.prototype, "isRead", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type of notification', example: 'order' }),
    __metadata("design:type", String)
], NotificationsDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Related order ID', example: 'order123', required: false }),
    __metadata("design:type", String)
], NotificationsDto.prototype, "orderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product price', example: `₦${28.33}`, required: false }),
    __metadata("design:type", Number)
], NotificationsDto.prototype, "productPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product weight', example: `${28.33}Kg`, required: false }),
    __metadata("design:type", Number)
], NotificationsDto.prototype, "productWeight", void 0);


/***/ }),

/***/ "./libs/dto/src/product/order.dto.ts":
/*!*******************************************!*\
  !*** ./libs/dto/src/product/order.dto.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class OrderDto {
}
exports.OrderDto = OrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Order ID', example: 'ord123' }),
    __metadata("design:type", String)
], OrderDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID', example: 'user456' }),
    __metadata("design:type", String)
], OrderDto.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product ID', example: 'prod789' }),
    __metadata("design:type", String)
], OrderDto.prototype, "productID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity of the product', example: 2 }),
    __metadata("design:type", Number)
], OrderDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total price of the order', example: 120.50 }),
    __metadata("design:type", Number)
], OrderDto.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Order status', example: 'pending' }),
    __metadata("design:type", String)
], OrderDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shipping address ID', example: '123' }),
    __metadata("design:type", String)
], OrderDto.prototype, "addressID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of image URLs related to the order', example: ['http://example.com/image1.jpg', 'http://example.com/image2.jpg'] }),
    __metadata("design:type", Array)
], OrderDto.prototype, "imageUrls", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Additional order details', example: { giftWrap: true, deliveryInstructions: "Leave at front door" }, required: false }),
    __metadata("design:type", Object)
], OrderDto.prototype, "orderDetails", void 0);


/***/ }),

/***/ "./libs/dto/src/product/product.dto.ts":
/*!*********************************************!*\
  !*** ./libs/dto/src/product/product.dto.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductDto = exports.DesignAreaDto = exports.DesignRectDto = exports.MockupsDto = exports.ProductSizeDto = exports.ProductColorDto = exports.RatingDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const enum_1 = __webpack_require__(/*! @app/enum */ "./libs/enum/src/index.ts");
class RatingDto {
}
exports.RatingDto = RatingDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rating given by the user for the ride', example: 4.5 }),
    __metadata("design:type", Number)
], RatingDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Feedback given by the user for the ride', example: 'Great ride!' }),
    __metadata("design:type", String)
], RatingDto.prototype, "feedback", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User _id of the user who gave the rating', example: '1234567890' }),
    __metadata("design:type", String)
], RatingDto.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of the rating', example: '2025-03-22T08:30:00Z' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], RatingDto.prototype, "date", void 0);
class ProductColorDto {
}
exports.ProductColorDto = ProductColorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'White' }),
    __metadata("design:type", String)
], ProductColorDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '#FFFFFF' }),
    __metadata("design:type", String)
], ProductColorDto.prototype, "hex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'bg-white' }),
    __metadata("design:type", String)
], ProductColorDto.prototype, "className", void 0);
class ProductSizeDto {
}
exports.ProductSizeDto = ProductSizeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'M' }),
    __metadata("design:type", String)
], ProductSizeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Medium' }),
    __metadata("design:type", String)
], ProductSizeDto.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ProductSizeDto.prototype, "inStock", void 0);
class MockupsDto {
}
exports.MockupsDto = MockupsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], MockupsDto.prototype, "front", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], MockupsDto.prototype, "back", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], MockupsDto.prototype, "left", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], MockupsDto.prototype, "right", void 0);
class DesignRectDto {
}
exports.DesignRectDto = DesignRectDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '27%' }),
    __metadata("design:type", String)
], DesignRectDto.prototype, "top", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '33%' }),
    __metadata("design:type", String)
], DesignRectDto.prototype, "left", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '37%' }),
    __metadata("design:type", String)
], DesignRectDto.prototype, "width", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '50%' }),
    __metadata("design:type", String)
], DesignRectDto.prototype, "height", void 0);
class DesignAreaDto {
}
exports.DesignAreaDto = DesignAreaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: DesignRectDto }),
    __metadata("design:type", DesignRectDto)
], DesignAreaDto.prototype, "front", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: DesignRectDto }),
    __metadata("design:type", DesignRectDto)
], DesignAreaDto.prototype, "back", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: DesignRectDto }),
    __metadata("design:type", DesignRectDto)
], DesignAreaDto.prototype, "left", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: DesignRectDto }),
    __metadata("design:type", DesignRectDto)
], DesignAreaDto.prototype, "right", void 0);
class ProductDto {
}
exports.ProductDto = ProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is the product featured', example: false, required: false }),
    __metadata("design:type", Boolean)
], ProductDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product ID', }),
    __metadata("design:type", String)
], ProductDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product name', example: 'Sample Product' }),
    __metadata("design:type", String)
], ProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product description', example: 'This is a sample product.' }),
    __metadata("design:type", String)
], ProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product price (legacy)', example: 28.33, required: false }),
    __metadata("design:type", Number)
], ProductDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product base price', example: 25.0 }),
    __metadata("design:type", Number)
], ProductDto.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product sale price', example: 20.0, required: false }),
    __metadata("design:type", Number)
], ProductDto.prototype, "salePrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product category ID (legacy)', example: '6568zsdsadD', required: false }),
    __metadata("design:type", String)
], ProductDto.prototype, "categoryID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product category', example: 'apparel' }),
    __metadata("design:type", String)
], ProductDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'quantity', example: 5, required: false }),
    __metadata("design:type", Number)
], ProductDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product mockups images', type: MockupsDto, required: false }),
    __metadata("design:type", MockupsDto)
], ProductDto.prototype, "mockups", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Design area configuration', type: DesignAreaDto, required: false }),
    __metadata("design:type", DesignAreaDto)
], ProductDto.prototype, "designArea", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product image URLs (legacy)', example: ['http://example.com/image.jpg'], required: false }),
    __metadata("design:type", Array)
], ProductDto.prototype, "imageUrls", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ProductColorDto], description: 'Available colors for the product', required: false }),
    __metadata("design:type", Array)
], ProductDto.prototype, "availableColors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ProductSizeDto], description: 'Available sizes for the product', required: false }),
    __metadata("design:type", Array)
], ProductDto.prototype, "availableSizes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Size guide URL', required: false }),
    __metadata("design:type", String)
], ProductDto.prototype, "sizeGuide", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RatingDto], description: 'Product rating', required: false }),
    __metadata("design:type", Array)
], ProductDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Measurement unit', example: "kg", required: false }),
    __metadata("design:type", String)
], ProductDto.prototype, "measurement", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'distance', example: 200, required: false }),
    __metadata("design:type", Number)
], ProductDto.prototype, "distance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'status', enum: enum_1.ProductStatusEnum, example: enum_1.ProductStatusEnum.PENDING, required: false }),
    __metadata("design:type", String)
], ProductDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product type', example: ['vegetable', 'fruit'], required: false }),
    __metadata("design:type", Array)
], ProductDto.prototype, "type", void 0);


/***/ }),

/***/ "./libs/dto/src/product/reviews.dto.ts":
/*!*********************************************!*\
  !*** ./libs/dto/src/product/reviews.dto.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReviewsDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ReviewsDto {
}
exports.ReviewsDto = ReviewsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Review ID', example: 'review123' }),
    __metadata("design:type", String)
], ReviewsDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product ID', example: '12345' }),
    __metadata("design:type", String)
], ReviewsDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID', example: 'user678' }),
    __metadata("design:type", String)
], ReviewsDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Review content', example: 'This product is amazing!' }),
    __metadata("design:type", String)
], ReviewsDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rating given by the user', example: 5 }),
    __metadata("design:type", Number)
], ReviewsDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date when the review was created', example: '2023-10-01T12:00:00Z' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ReviewsDto.prototype, "createdAt", void 0);


/***/ }),

/***/ "./libs/dto/src/reference/address.dto.ts":
/*!***********************************************!*\
  !*** ./libs/dto/src/reference/address.dto.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddressDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class AddressDto {
}
exports.AddressDto = AddressDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Address ID', example: 'addr123' }),
    __metadata("design:type", String)
], AddressDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID', example: 'user456' }),
    __metadata("design:type", String)
], AddressDto.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Street address', example: '123 Main St' }),
    __metadata("design:type", String)
], AddressDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'City', example: 'Anytown' }),
    __metadata("design:type", String)
], AddressDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State/Province', example: 'CA' }),
    __metadata("design:type", String)
], AddressDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Postal code', example: '90210' }),
    __metadata("design:type", String)
], AddressDto.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country', example: 'USA' }),
    __metadata("design:type", String)
], AddressDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is this the default address?', example: true }),
    __metadata("design:type", Boolean)
], AddressDto.prototype, "isDefault", void 0);


/***/ }),

/***/ "./libs/dto/src/reference/authenticator.dto.ts":
/*!*****************************************************!*\
  !*** ./libs/dto/src/reference/authenticator.dto.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticatorDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class AuthenticatorDTO {
}
exports.AuthenticatorDTO = AuthenticatorDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier for the user', required: false }),
    __metadata("design:type", String)
], AuthenticatorDTO.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User _id of a user', }),
    __metadata("design:type", String)
], AuthenticatorDTO.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Authenticator secret', example: 'SJKBSOJPOSBH' }),
    __metadata("design:type", String)
], AuthenticatorDTO.prototype, "secret", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'status', example: 'active', default: "active" }),
    __metadata("design:type", String)
], AuthenticatorDTO.prototype, "status", void 0);


/***/ }),

/***/ "./libs/dto/src/reference/country.dto.ts":
/*!***********************************************!*\
  !*** ./libs/dto/src/reference/country.dto.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountryDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CountryDTO {
}
exports.CountryDTO = CountryDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country name', example: 'Nigeria' }),
    __metadata("design:type", String)
], CountryDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country code', example: 'NG' }),
    __metadata("design:type", String)
], CountryDTO.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country currency', example: 'NGN' }),
    __metadata("design:type", String)
], CountryDTO.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country capital', example: 'Abuja' }),
    __metadata("design:type", String)
], CountryDTO.prototype, "capital", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country flag', example: 'https://flagcdn.com/ng.svg' }),
    __metadata("design:type", String)
], CountryDTO.prototype, "flag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country dial code', example: '+234' }),
    __metadata("design:type", String)
], CountryDTO.prototype, "dialCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country continent', example: 'Africa' }),
    __metadata("design:type", String)
], CountryDTO.prototype, "continent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country latitude', example: 9.082 }),
    __metadata("design:type", Number)
], CountryDTO.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country longitude', example: 8.6753 }),
    __metadata("design:type", Number)
], CountryDTO.prototype, "longitude", void 0);


/***/ }),

/***/ "./libs/dto/src/reference/otp.dto.ts":
/*!*******************************************!*\
  !*** ./libs/dto/src/reference/otp.dto.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OTPDTO = void 0;
const enum_1 = __webpack_require__(/*! @app/enum */ "./libs/enum/src/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class OTPDTO {
}
exports.OTPDTO = OTPDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier for the user', required: false }),
    __metadata("design:type", String)
], OTPDTO.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User _id of a user', }),
    __metadata("design:type", String)
], OTPDTO.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'OTP', example: '44035' }),
    __metadata("design:type", String)
], OTPDTO.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Duration of otp in minutes', example: '30' }),
    __metadata("design:type", String)
], OTPDTO.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'status', example: 'active', default: "active" }),
    __metadata("design:type", String)
], OTPDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type of OTP', example: 'EmailVerification', enum: enum_1.OtpType, default: 'EmailVerification' }),
    __metadata("design:type", String)
], OTPDTO.prototype, "type", void 0);


/***/ }),

/***/ "./libs/dto/src/reference/select.dto.ts":
/*!**********************************************!*\
  !*** ./libs/dto/src/reference/select.dto.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class SelectDto {
}
exports.SelectDto = SelectDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'OTP', example: '44035' }),
    __metadata("design:type", String)
], SelectDto.prototype, "name", void 0);


/***/ }),

/***/ "./libs/dto/src/reference/state.dto.ts":
/*!*********************************************!*\
  !*** ./libs/dto/src/reference/state.dto.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StateDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class StateDTO {
}
exports.StateDTO = StateDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State id', example: '1' }),
    __metadata("design:type", String)
], StateDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State name', example: 'California' }),
    __metadata("design:type", String)
], StateDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State code', example: 'CA' }),
    __metadata("design:type", String)
], StateDTO.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State country', example: 'US' }),
    __metadata("design:type", String)
], StateDTO.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State country', example: 'US' }),
    __metadata("design:type", String)
], StateDTO.prototype, "countryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State capital', example: 'Sacramento' }),
    __metadata("design:type", String)
], StateDTO.prototype, "capital", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State flag', example: 'https://flagcdn.com/us-ca.svg' }),
    __metadata("design:type", String)
], StateDTO.prototype, "flag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'state latitude', example: 9.082 }),
    __metadata("design:type", Number)
], StateDTO.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'state longitude', example: 8.6753 }),
    __metadata("design:type", Number)
], StateDTO.prototype, "longitude", void 0);


/***/ }),

/***/ "./libs/dto/src/support.dto.ts":
/*!*************************************!*\
  !*** ./libs/dto/src/support.dto.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupportDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class SupportDTO {
}
exports.SupportDTO = SupportDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Unique identifier for the support ticket",
        required: false,
    }),
    __metadata("design:type", String)
], SupportDTO.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "User ID who created the ticket" }),
    __metadata("design:type", String)
], SupportDTO.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "admin ID who attend the ticket" }),
    __metadata("design:type", String)
], SupportDTO.prototype, "adminID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Subject of the support ticket" }),
    __metadata("design:type", String)
], SupportDTO.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "_ID of the support ticket" }),
    __metadata("design:type", String)
], SupportDTO.prototype, "supportID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Description of the issue" }),
    __metadata("design:type", String)
], SupportDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Status of the ticket",
        enum: ["open", "closed", "pending"],
        default: "open",
    }),
    __metadata("design:type", String)
], SupportDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Priority of the ticket",
        enum: ["low", "medium", "high"],
        default: "low",
    }),
    __metadata("design:type", String)
], SupportDTO.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Message of the ticket",
        type: String,
        example: "hello",
    }),
    __metadata("design:type", String)
], SupportDTO.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Attachment URL for the ticket",
        required: false,
    }),
    __metadata("design:type", String)
], SupportDTO.prototype, "url", void 0);


/***/ }),

/***/ "./libs/dto/src/user.dto.ts":
/*!**********************************!*\
  !*** ./libs/dto/src/user.dto.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDTO = exports.Refferal = exports.RefreshTokenDTO = exports.VerifyAuthenticationDto = exports.SetAuthenticatorDto = exports.ForgotPasswordDTO = exports.LoginDTO = exports.DeleteAccountDTO = exports.ChangePasswordDTO = exports.BankAccountDTO = exports.UserIDDTO = void 0;
const enum_1 = __webpack_require__(/*! @app/enum */ "./libs/enum/src/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class UserIDDTO {
}
exports.UserIDDTO = UserIDDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'user_id ' }),
    __metadata("design:type", String)
], UserIDDTO.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'email ' }),
    __metadata("design:type", String)
], UserIDDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enum_1.OtpType, example: enum_1.OtpType.TWO_FACTOR_AUTHENTICATION, description: 'Type of OTP' }),
    __metadata("design:type", String)
], UserIDDTO.prototype, "type", void 0);
class BankAccountDTO {
}
exports.BankAccountDTO = BankAccountDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Bank name' }),
    __metadata("design:type", String)
], BankAccountDTO.prototype, "bankName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Account number' }),
    __metadata("design:type", String)
], BankAccountDTO.prototype, "accountNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Account name' }),
    __metadata("design:type", String)
], BankAccountDTO.prototype, "accountName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Bank code' }),
    __metadata("design:type", String)
], BankAccountDTO.prototype, "bankCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Account type' }),
    __metadata("design:type", String)
], BankAccountDTO.prototype, "accountType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ACH routing number' }),
    __metadata("design:type", String)
], BankAccountDTO.prototype, "ACHrouting", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Wire routing number' }),
    __metadata("design:type", String)
], BankAccountDTO.prototype, "wireRouting", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Swift code' }),
    __metadata("design:type", String)
], BankAccountDTO.prototype, "swiftCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency' }),
    __metadata("design:type", String)
], BankAccountDTO.prototype, "currency", void 0);
class ChangePasswordDTO {
}
exports.ChangePasswordDTO = ChangePasswordDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'current password' }),
    __metadata("design:type", String)
], ChangePasswordDTO.prototype, "currentPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'new passsword' }),
    __metadata("design:type", String)
], ChangePasswordDTO.prototype, "newPassword", void 0);
class DeleteAccountDTO {
}
exports.DeleteAccountDTO = DeleteAccountDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'current password' }),
    __metadata("design:type", String)
], DeleteAccountDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'new passsword' }),
    __metadata("design:type", String)
], DeleteAccountDTO.prototype, "reason", void 0);
class LoginDTO {
}
exports.LoginDTO = LoginDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password', example: 'password123' }),
    __metadata("design:type", String)
], LoginDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'email ', example: 'john@example.com' }),
    __metadata("design:type", String)
], LoginDTO.prototype, "email", void 0);
class ForgotPasswordDTO {
}
exports.ForgotPasswordDTO = ForgotPasswordDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'code' }),
    __metadata("design:type", String)
], ForgotPasswordDTO.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'new passsword' }),
    __metadata("design:type", String)
], ForgotPasswordDTO.prototype, "newPassword", void 0);
class SetAuthenticatorDto {
}
exports.SetAuthenticatorDto = SetAuthenticatorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'user_id' }),
    __metadata("design:type", typeof (_a = typeof String !== "undefined" && String) === "function" ? _a : Object)
], SetAuthenticatorDto.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'secret' }),
    __metadata("design:type", typeof (_b = typeof String !== "undefined" && String) === "function" ? _b : Object)
], SetAuthenticatorDto.prototype, "secret", void 0);
class VerifyAuthenticationDto {
}
exports.VerifyAuthenticationDto = VerifyAuthenticationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'user_id', example: '12345' }),
    __metadata("design:type", typeof (_c = typeof String !== "undefined" && String) === "function" ? _c : Object)
], VerifyAuthenticationDto.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'code', example: '123456' }),
    __metadata("design:type", typeof (_d = typeof String !== "undefined" && String) === "function" ? _d : Object)
], VerifyAuthenticationDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enum_1.OtpType, example: enum_1.OtpType.TWO_FACTOR_AUTHENTICATION, description: 'Type of OTP' }),
    __metadata("design:type", String)
], VerifyAuthenticationDto.prototype, "type", void 0);
class RefreshTokenDTO {
}
exports.RefreshTokenDTO = RefreshTokenDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'refresh_token:' }),
    __metadata("design:type", typeof (_e = typeof String !== "undefined" && String) === "function" ? _e : Object)
], RefreshTokenDTO.prototype, "refresh_token", void 0);
class Refferal {
}
exports.Refferal = Refferal;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'referral code' }),
    __metadata("design:type", String)
], Refferal.prototype, "refCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'status', enum: ['active', 'inactive'] }),
    __metadata("design:type", String)
], Refferal.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'max referal' }),
    __metadata("design:type", Number)
], Refferal.prototype, "max", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'amount', default: 0 }),
    __metadata("design:type", Number)
], Refferal.prototype, "amount", void 0);
class UserDTO {
}
exports.UserDTO = UserDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique identifier for the user',
        required: false,
    }),
    __metadata("design:type", String)
], UserDTO.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID', example: '12345', required: false }),
    __metadata("design:type", String)
], UserDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'title', example: 'mr', required: false }),
    __metadata("design:type", String)
], UserDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'One signal Player ID', example: 'player123', required: false }),
    __metadata("design:type", String)
], UserDTO.prototype, "playerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User type, e.g. user, driver, admin',
        enum: enum_1.UserType,
        default: enum_1.UserType.USER,
    }),
    __metadata("design:type", typeof (_f = typeof enum_1.UserType !== "undefined" && enum_1.UserType) === "function" ? _f : Object)
], UserDTO.prototype, "userType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Username of the user', example: 'john_doe' }),
    __metadata("design:type", String)
], UserDTO.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'status', example: enum_1.UserStatus.ACTIVE, enum: enum_1.UserStatus }),
    __metadata("design:type", String)
], UserDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'user roles', example: ['investment', "loan"] }),
    __metadata("design:type", Array)
], UserDTO.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email address of the user',
        example: 'john@example.com',
    }),
    __metadata("design:type", String)
], UserDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full name of the user', example: 'John Doe' }),
    __metadata("design:type", String)
], UserDTO.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'First name of the user', example: 'John ' }),
    __metadata("design:type", String)
], UserDTO.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last name of the user', example: 'Doe' }),
    __metadata("design:type", String)
], UserDTO.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Gender of the user',
        enum: enum_1.Gender,
        example: 'male',
    }),
    __metadata("design:type", String)
], UserDTO.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Phone number of the user',
        example: '+1234567890',
    }),
    __metadata("design:type", String)
], UserDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User password', example: 'password123' }),
    __metadata("design:type", String)
], UserDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'use a user ref code for referral ', example: 'jo9e2' }),
    __metadata("design:type", String)
], UserDTO.prototype, "useRefCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Profile image URL',
        example: 'http://example.com/image.jpg',
    }),
    __metadata("design:type", String)
], UserDTO.prototype, "profileImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indicates if the user is an admin',
        example: false,
    }),
    __metadata("design:type", Boolean)
], UserDTO.prototype, "isAdmin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indicates if the user is a super admin',
        example: false,
    }),
    __metadata("design:type", Boolean)
], UserDTO.prototype, "isSuperAdmin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'referral details' }),
    __metadata("design:type", Refferal)
], UserDTO.prototype, "referral", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'referral by' }),
    __metadata("design:type", String)
], UserDTO.prototype, "refBy", void 0);


/***/ }),

/***/ "./libs/dto/src/wallet.dto.ts":
/*!************************************!*\
  !*** ./libs/dto/src/wallet.dto.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class WalletDTO {
}
exports.WalletDTO = WalletDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier for the wallet', required: false }),
    __metadata("design:type", String)
], WalletDTO.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID associated with the wallet' }),
    __metadata("design:type", String)
], WalletDTO.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the wallet' }),
    __metadata("design:type", String)
], WalletDTO.prototype, "accountName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Account number of the wallet' }),
    __metadata("design:type", String)
], WalletDTO.prototype, "accountNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current balance of the wallet', example: 1000 }),
    __metadata("design:type", Number)
], WalletDTO.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency of the wallet' }),
    __metadata("design:type", String)
], WalletDTO.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status of the wallet', required: false }),
    __metadata("design:type", String)
], WalletDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'type of tranfer', enum: ['nuban', 'mobile_money'], default: 'nuban', required: false }),
    __metadata("design:type", String)
], WalletDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Bank code of the wallet', default: "058" }),
    __metadata("design:type", String)
], WalletDTO.prototype, "bank_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'amount' }),
    __metadata("design:type", Number)
], WalletDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'reason' }),
    __metadata("design:type", String)
], WalletDTO.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'rideID' }),
    __metadata("design:type", String)
], WalletDTO.prototype, "rideID", void 0);


/***/ }),

/***/ "./libs/enum/src/action.enum.ts":
/*!**************************************!*\
  !*** ./libs/enum/src/action.enum.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductStatusEnum = exports.FarmStatusEnum = exports.BusinessTypeEnum = exports.ProductTypeEnum = exports.Action = void 0;
var Action;
(function (Action) {
    Action["Manage"] = "Manage";
    Action["Create"] = "Create";
    Action["Read"] = "Read";
    Action["Update"] = "Update";
    Action["Delete"] = "Delete";
    Action["Event"] = "Event";
})(Action || (exports.Action = Action = {}));
var ProductTypeEnum;
(function (ProductTypeEnum) {
    ProductTypeEnum["CROP"] = "Crop";
    ProductTypeEnum["LIVESTOCK"] = "Livestock";
})(ProductTypeEnum || (exports.ProductTypeEnum = ProductTypeEnum = {}));
var BusinessTypeEnum;
(function (BusinessTypeEnum) {
    BusinessTypeEnum["FARMER"] = "farmer";
    BusinessTypeEnum["SUPPLIER"] = "supplier";
})(BusinessTypeEnum || (exports.BusinessTypeEnum = BusinessTypeEnum = {}));
var FarmStatusEnum;
(function (FarmStatusEnum) {
    FarmStatusEnum["NOTACTIVE"] = "notActive";
    FarmStatusEnum["PENDING"] = "pending";
    FarmStatusEnum["ACTIVE"] = "active";
    FarmStatusEnum["SUSPENDED"] = "suspended";
    FarmStatusEnum["DEACTIVATED"] = "deactivated";
    FarmStatusEnum["REJECTED"] = "rejected";
})(FarmStatusEnum || (exports.FarmStatusEnum = FarmStatusEnum = {}));
var ProductStatusEnum;
(function (ProductStatusEnum) {
    ProductStatusEnum["NOTACTIVE"] = "notActive";
    ProductStatusEnum["PENDING"] = "pending";
    ProductStatusEnum["ACTIVE"] = "active";
    ProductStatusEnum["SUSPENDED"] = "suspended";
    ProductStatusEnum["DEACTIVATED"] = "deactivated";
    ProductStatusEnum["REJECTED"] = "rejected";
})(ProductStatusEnum || (exports.ProductStatusEnum = ProductStatusEnum = {}));


/***/ }),

/***/ "./libs/enum/src/index.ts":
/*!********************************!*\
  !*** ./libs/enum/src/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user.enum */ "./libs/enum/src/user.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./action.enum */ "./libs/enum/src/action.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./role.enum */ "./libs/enum/src/role.enum.ts"), exports);


/***/ }),

/***/ "./libs/enum/src/role.enum.ts":
/*!************************************!*\
  !*** ./libs/enum/src/role.enum.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Role = void 0;
var Role;
(function (Role) {
    Role["User"] = "user";
    Role["Admin"] = "admin";
    Role["SuperAdmin"] = "super-admin";
})(Role || (exports.Role = Role = {}));


/***/ }),

/***/ "./libs/enum/src/user.enum.ts":
/*!************************************!*\
  !*** ./libs/enum/src/user.enum.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Gender = exports.OtpType = exports.UserStatus = exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType["USER"] = "user";
    UserType["ADMIN"] = "admin";
    UserType["CUSTOMER"] = "customer";
    UserType["FARMER"] = "farmer";
    UserType["SUPER_ADMIN"] = "super_admin";
})(UserType || (exports.UserType = UserType = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "active";
    UserStatus["INACTIVE"] = "inactive";
    UserStatus["PENDING"] = "pending";
    UserStatus["SUSPENDED"] = "suspended";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var OtpType;
(function (OtpType) {
    OtpType["EMAIL_VERIFICATION"] = "EmailVerification";
    OtpType["PHONE_VERIFICATION"] = "PhoneVerification";
    OtpType["PASSWORD_RESET"] = "PasswordReset";
    OtpType["TWO_FACTOR_AUTHENTICATION"] = "2fa";
})(OtpType || (exports.OtpType = OtpType = {}));
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
    Gender["OTHER"] = "other";
})(Gender || (exports.Gender = Gender = {}));


/***/ }),

/***/ "./libs/guard/src/auth.guard.ts":
/*!**************************************!*\
  !*** ./libs/guard/src/auth.guard.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const schema_1 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
let AuthGuard = class AuthGuard {
    constructor(userModel, jwtService, configService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: this.configService.get("JWT_SECRET")
            });
            const user = await this.userModel.findById(payload.sub);
            request['user'] = user;
            request['userID'] = user._id;
        }
        catch {
            throw new common_1.UnauthorizedException("auth");
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.UserModel.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], AuthGuard);


/***/ }),

/***/ "./libs/guard/src/index.ts":
/*!*********************************!*\
  !*** ./libs/guard/src/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./roles.guard */ "./libs/guard/src/roles.guard.ts"), exports);
__exportStar(__webpack_require__(/*! ./auth.guard */ "./libs/guard/src/auth.guard.ts"), exports);
__exportStar(__webpack_require__(/*! ./jwt-auth.guard */ "./libs/guard/src/jwt-auth.guard.ts"), exports);
__exportStar(__webpack_require__(/*! ./local-auth.guard */ "./libs/guard/src/local-auth.guard.ts"), exports);


/***/ }),

/***/ "./libs/guard/src/jwt-auth.guard.ts":
/*!******************************************!*\
  !*** ./libs/guard/src/jwt-auth.guard.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    canActivate(context) {
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException("jwt");
        }
        return user;
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),

/***/ "./libs/guard/src/local-auth.guard.ts":
/*!********************************************!*\
  !*** ./libs/guard/src/local-auth.guard.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
exports.LocalAuthGuard = LocalAuthGuard;
exports.LocalAuthGuard = LocalAuthGuard = __decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);


/***/ }),

/***/ "./libs/guard/src/roles.guard.ts":
/*!***************************************!*\
  !*** ./libs/guard/src/roles.guard.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesGuard = void 0;
const decorator_1 = __webpack_require__(/*! @app/decorator */ "./libs/decorator/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        const { user } = context.switchToHttp().getRequest();
        const hasRole = () => user.roles.some((role) => requiredRoles.includes(role));
        if (!user || !hasRole()) {
            throw new common_1.ForbiddenException('You do not have permission to access this resource');
        }
        return requiredRoles.some((role) => user.roles?.includes(role));
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RolesGuard);


/***/ }),

/***/ "./libs/schema/src/activity-log.schema.ts":
/*!************************************************!*\
  !*** ./libs/schema/src/activity-log.schema.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityLogSchema = exports.ActivityLogModel = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let ActivityLogModel = class ActivityLogModel {
};
exports.ActivityLogModel = ActivityLogModel;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ActivityLogModel.prototype, "action", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ActivityLogModel.prototype, "entityType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ActivityLogModel.prototype, "entityID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, ref: "UserModel" }),
    __metadata("design:type", String)
], ActivityLogModel.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ActivityLogModel.prototype, "isRead", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ActivityLogModel.prototype, "details", void 0);
exports.ActivityLogModel = ActivityLogModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], ActivityLogModel);
exports.ActivityLogSchema = mongoose_1.SchemaFactory.createForClass(ActivityLogModel);


/***/ }),

/***/ "./libs/schema/src/authenticator.schema.ts":
/*!*************************************************!*\
  !*** ./libs/schema/src/authenticator.schema.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticatorSchema = exports.AuthenticatorModel = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const unique = __webpack_require__(/*! mongoose-unique-validator */ "mongoose-unique-validator");
let AuthenticatorModel = class AuthenticatorModel {
};
exports.AuthenticatorModel = AuthenticatorModel;
__decorate([
    (0, mongoose_1.Prop)({ index: true, unique: true }),
    __metadata("design:type", String)
], AuthenticatorModel.prototype, "secret", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: "active" }),
    __metadata("design:type", String)
], AuthenticatorModel.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, unique: true, ref: "UserModel" }),
    __metadata("design:type", String)
], AuthenticatorModel.prototype, "userID", void 0);
exports.AuthenticatorModel = AuthenticatorModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], AuthenticatorModel);
exports.AuthenticatorSchema = mongoose_1.SchemaFactory.createForClass(AuthenticatorModel);
unique(exports.AuthenticatorSchema);
exports.AuthenticatorSchema.pre('save', async function (next, error) {
    next();
});


/***/ }),

/***/ "./libs/schema/src/index.ts":
/*!**********************************!*\
  !*** ./libs/schema/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user.schema */ "./libs/schema/src/user.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./waller.schema */ "./libs/schema/src/waller.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./activity-log.schema */ "./libs/schema/src/activity-log.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./authenticator.schema */ "./libs/schema/src/authenticator.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./otp.schema */ "./libs/schema/src/otp.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./products/product.schema */ "./libs/schema/src/products/product.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./products/farm.schema */ "./libs/schema/src/products/farm.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./products/order.schema */ "./libs/schema/src/products/order.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./products/cart.schema */ "./libs/schema/src/products/cart.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./products/design.schema */ "./libs/schema/src/products/design.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./reference/categories.schema */ "./libs/schema/src/reference/categories.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./reference/address.schema */ "./libs/schema/src/reference/address.schema.ts"), exports);
__exportStar(__webpack_require__(/*! ./reference/product-type.schema */ "./libs/schema/src/reference/product-type.schema.ts"), exports);


/***/ }),

/***/ "./libs/schema/src/otp.schema.ts":
/*!***************************************!*\
  !*** ./libs/schema/src/otp.schema.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OTPSchema = exports.OTPModel = void 0;
const enum_1 = __webpack_require__(/*! @app/enum */ "./libs/enum/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const crypto_1 = __webpack_require__(/*! crypto */ "crypto");
const unique = __webpack_require__(/*! mongoose-unique-validator */ "mongoose-unique-validator");
let OTPModel = class OTPModel {
};
exports.OTPModel = OTPModel;
__decorate([
    (0, mongoose_1.Prop)({ index: true, unique: true }),
    __metadata("design:type", String)
], OTPModel.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OTPModel.prototype, "code1", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: "active" }),
    __metadata("design:type", String)
], OTPModel.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 30 }),
    __metadata("design:type", Number)
], OTPModel.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: "UserModel" }),
    __metadata("design:type", String)
], OTPModel.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enum_1.OtpType, default: enum_1.OtpType.EMAIL_VERIFICATION }),
    __metadata("design:type", String)
], OTPModel.prototype, "type", void 0);
exports.OTPModel = OTPModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], OTPModel);
exports.OTPSchema = mongoose_1.SchemaFactory.createForClass(OTPModel);
unique(exports.OTPSchema);
exports.OTPSchema.index({ createdAt: 1 }, { expireAfterSeconds: 30 * 60 });
exports.OTPSchema.pre('save', async function (next, error) {
    if (!this.code) {
        this.code = (0, crypto_1.randomInt)(100, 999) + (0, crypto_1.randomUUID)().replace(/\D/g, '').substring(0, 3);
    }
    next();
});


/***/ }),

/***/ "./libs/schema/src/products/cart.schema.ts":
/*!*************************************************!*\
  !*** ./libs/schema/src/products/cart.schema.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CartSchema = exports.CartModel = exports.CartItemSchema = exports.CartItem = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let CartItem = class CartItem {
};
exports.CartItem = CartItem;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CartItem.prototype, "productID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], CartItem.prototype, "color", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], CartItem.prototype, "size", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], CartItem.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], CartItem.prototype, "unitPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], CartItem.prototype, "lineTotal", void 0);
exports.CartItem = CartItem = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], CartItem);
exports.CartItemSchema = mongoose_1.SchemaFactory.createForClass(CartItem);
let CartModel = class CartModel {
};
exports.CartModel = CartModel;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CartModel.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.CartItemSchema], default: [] }),
    __metadata("design:type", Array)
], CartModel.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], CartModel.prototype, "subtotal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: 0 }),
    __metadata("design:type", Number)
], CartModel.prototype, "tax", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: 0 }),
    __metadata("design:type", Number)
], CartModel.prototype, "shipping", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], CartModel.prototype, "total", void 0);
exports.CartModel = CartModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], CartModel);
exports.CartSchema = mongoose_1.SchemaFactory.createForClass(CartModel);


/***/ }),

/***/ "./libs/schema/src/products/design.schema.ts":
/*!***************************************************!*\
  !*** ./libs/schema/src/products/design.schema.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DesignSchema = exports.DesignModel = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let DesignModel = class DesignModel {
};
exports.DesignModel = DesignModel;
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], DesignModel.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: 'UserModel' }),
    __metadata("design:type", String)
], DesignModel.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], DesignModel.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], DesignModel.prototype, "url", void 0);
exports.DesignModel = DesignModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], DesignModel);
exports.DesignSchema = mongoose_1.SchemaFactory.createForClass(DesignModel);


/***/ }),

/***/ "./libs/schema/src/products/farm.schema.ts":
/*!*************************************************!*\
  !*** ./libs/schema/src/products/farm.schema.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FarmSchema = exports.FarmModel = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const enum_1 = __webpack_require__(/*! @app/enum */ "./libs/enum/src/index.ts");
const crypto_1 = __webpack_require__(/*! crypto */ "crypto");
class Location {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Location.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Location.prototype, "long", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Location.prototype, "lat", void 0);
let FarmModel = class FarmModel {
};
exports.FarmModel = FarmModel;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], FarmModel.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], FarmModel.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Location, required: true }),
    __metadata("design:type", Location)
], FarmModel.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], FarmModel.prototype, "producType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: enum_1.BusinessTypeEnum, required: true }),
    __metadata("design:type", String)
], FarmModel.prototype, "businessType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], FarmModel.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], FarmModel.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], FarmModel.prototype, "imageUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], FarmModel.prototype, "nin", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], FarmModel.prototype, "proofOfAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], FarmModel.prototype, "cac", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enum_1.FarmStatusEnum, default: enum_1.FarmStatusEnum.PENDING }),
    __metadata("design:type", String)
], FarmModel.prototype, "ninStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enum_1.FarmStatusEnum, default: enum_1.FarmStatusEnum.PENDING }),
    __metadata("design:type", String)
], FarmModel.prototype, "proofOfAddressStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enum_1.FarmStatusEnum, default: enum_1.FarmStatusEnum.PENDING }),
    __metadata("design:type", String)
], FarmModel.prototype, "cacStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enum_1.FarmStatusEnum, default: enum_1.FarmStatusEnum.ACTIVE }),
    __metadata("design:type", String)
], FarmModel.prototype, "status", void 0);
exports.FarmModel = FarmModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], FarmModel);
exports.FarmSchema = mongoose_1.SchemaFactory.createForClass(FarmModel);
exports.FarmSchema.pre('save', async function (next, error) {
    if (!this.id) {
        this.id = "PDT" + (0, crypto_1.randomInt)(100, 999) + (0, crypto_1.randomUUID)().replace(/\D/g, '').substring(0, 3);
    }
    next();
});


/***/ }),

/***/ "./libs/schema/src/products/order.schema.ts":
/*!**************************************************!*\
  !*** ./libs/schema/src/products/order.schema.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderSchema = exports.OrderModel = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let OrderModel = class OrderModel {
};
exports.OrderModel = OrderModel;
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], OrderModel.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: 'UserModel' }),
    __metadata("design:type", String)
], OrderModel.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: 'ProductModel' }),
    __metadata("design:type", String)
], OrderModel.prototype, "productID", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Number)
], OrderModel.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Number)
], OrderModel.prototype, "totalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], OrderModel.prototype, "imagesUrls", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", typeof (_a = typeof Record !== "undefined" && Record) === "function" ? _a : Object)
], OrderModel.prototype, "orderDetails", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], OrderModel.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: 'AddressModel' }),
    __metadata("design:type", String)
], OrderModel.prototype, "addressID", void 0);
exports.OrderModel = OrderModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], OrderModel);
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(OrderModel);


/***/ }),

/***/ "./libs/schema/src/products/product.schema.ts":
/*!****************************************************!*\
  !*** ./libs/schema/src/products/product.schema.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductSchema = exports.ProductModel = void 0;
const enum_1 = __webpack_require__(/*! @app/enum */ "./libs/enum/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const crypto_1 = __webpack_require__(/*! crypto */ "crypto");
class Rating {
}
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Number)
], Rating.prototype, "rating", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Rating.prototype, "feedback", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], Rating.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Rating.prototype, "date", void 0);
class ProductColor {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductColor.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductColor.prototype, "hex", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductColor.prototype, "className", void 0);
class ProductSize {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductSize.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductSize.prototype, "label", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], ProductSize.prototype, "inStock", void 0);
class Mockups {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Mockups.prototype, "front", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Mockups.prototype, "back", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Mockups.prototype, "left", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Mockups.prototype, "right", void 0);
class DesignRect {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], DesignRect.prototype, "top", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], DesignRect.prototype, "left", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], DesignRect.prototype, "width", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], DesignRect.prototype, "height", void 0);
class DesignArea {
}
__decorate([
    (0, mongoose_1.Prop)({ type: DesignRect }),
    __metadata("design:type", DesignRect)
], DesignArea.prototype, "front", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: DesignRect }),
    __metadata("design:type", DesignRect)
], DesignArea.prototype, "back", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: DesignRect }),
    __metadata("design:type", DesignRect)
], DesignArea.prototype, "left", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: DesignRect }),
    __metadata("design:type", DesignRect)
], DesignArea.prototype, "right", void 0);
let ProductModel = class ProductModel {
};
exports.ProductModel = ProductModel;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductModel.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ProductModel.prototype, "isFeatured", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], ProductModel.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: "UserModel" }),
    __metadata("design:type", String)
], ProductModel.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: "FarmModel" }),
    __metadata("design:type", String)
], ProductModel.prototype, "farmID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], ProductModel.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], ProductModel.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Number)
], ProductModel.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Number)
], ProductModel.prototype, "basePrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Number)
], ProductModel.prototype, "salePrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], ProductModel.prototype, "categoryID", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], ProductModel.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Number)
], ProductModel.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Mockups }),
    __metadata("design:type", Mockups)
], ProductModel.prototype, "mockups", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: DesignArea }),
    __metadata("design:type", DesignArea)
], ProductModel.prototype, "designArea", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], ProductModel.prototype, "imageUrls", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [ProductColor], default: [] }),
    __metadata("design:type", Array)
], ProductModel.prototype, "availableColors", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [ProductSize], default: [] }),
    __metadata("design:type", Array)
], ProductModel.prototype, "availableSizes", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductModel.prototype, "sizeGuide", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Rating] }),
    __metadata("design:type", Array)
], ProductModel.prototype, "rating", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], ProductModel.prototype, "measurement", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ProductModel.prototype, "distance", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enum_1.ProductStatusEnum, default: enum_1.ProductStatusEnum.ACTIVE }),
    __metadata("design:type", String)
], ProductModel.prototype, "status", void 0);
exports.ProductModel = ProductModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], ProductModel);
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(ProductModel);
exports.ProductSchema.pre('save', async function (next, error) {
    if (!this.id) {
        this.id = "PDT" + (0, crypto_1.randomInt)(100, 999) + (0, crypto_1.randomUUID)().replace(/\D/g, '').substring(0, 3);
    }
    next();
});


/***/ }),

/***/ "./libs/schema/src/reference/address.schema.ts":
/*!*****************************************************!*\
  !*** ./libs/schema/src/reference/address.schema.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddressSchema = exports.AddressModel = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let AddressModel = class AddressModel {
};
exports.AddressModel = AddressModel;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AddressModel.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AddressModel.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AddressModel.prototype, "street", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AddressModel.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AddressModel.prototype, "state", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AddressModel.prototype, "postalCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AddressModel.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], AddressModel.prototype, "isDefault", void 0);
exports.AddressModel = AddressModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], AddressModel);
exports.AddressSchema = mongoose_1.SchemaFactory.createForClass(AddressModel);


/***/ }),

/***/ "./libs/schema/src/reference/categories.schema.ts":
/*!********************************************************!*\
  !*** ./libs/schema/src/reference/categories.schema.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesSchema = exports.CategoriesModel = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let CategoriesModel = class CategoriesModel {
};
exports.CategoriesModel = CategoriesModel;
__decorate([
    (0, mongoose_1.Prop)({ required: true, }),
    __metadata("design:type", String)
], CategoriesModel.prototype, "name", void 0);
exports.CategoriesModel = CategoriesModel = __decorate([
    (0, mongoose_1.Schema)()
], CategoriesModel);
exports.CategoriesSchema = mongoose_1.SchemaFactory.createForClass(CategoriesModel);


/***/ }),

/***/ "./libs/schema/src/reference/product-type.schema.ts":
/*!**********************************************************!*\
  !*** ./libs/schema/src/reference/product-type.schema.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductTypeSchema = exports.ProductTypeModel = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let ProductTypeModel = class ProductTypeModel {
};
exports.ProductTypeModel = ProductTypeModel;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], ProductTypeModel.prototype, "name", void 0);
exports.ProductTypeModel = ProductTypeModel = __decorate([
    (0, mongoose_1.Schema)()
], ProductTypeModel);
exports.ProductTypeSchema = mongoose_1.SchemaFactory.createForClass(ProductTypeModel);


/***/ }),

/***/ "./libs/schema/src/user.schema.ts":
/*!****************************************!*\
  !*** ./libs/schema/src/user.schema.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.UserModel = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const crypto_1 = __webpack_require__(/*! crypto */ "crypto");
const uniqueValidator = __webpack_require__(/*! mongoose-unique-validator */ "mongoose-unique-validator");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const enum_1 = __webpack_require__(/*! @app/enum */ "./libs/enum/src/index.ts");
const enum_2 = __webpack_require__(/*! @app/enum */ "./libs/enum/src/index.ts");
class BankAccount {
}
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], BankAccount.prototype, "bankName", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], BankAccount.prototype, "accountNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], BankAccount.prototype, "accountName", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], BankAccount.prototype, "bankCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], BankAccount.prototype, "accountType", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], BankAccount.prototype, "ACHrouting", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], BankAccount.prototype, "wireRouting", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], BankAccount.prototype, "swiftCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], BankAccount.prototype, "currency", void 0);
class NextOfKin {
}
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], NextOfKin.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], NextOfKin.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], NextOfKin.prototype, "relationship", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enum_1.Gender }),
    __metadata("design:type", String)
], NextOfKin.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], NextOfKin.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], NextOfKin.prototype, "residentialAddress", void 0);
class BankStatement {
}
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], BankStatement.prototype, "documentUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], BankStatement.prototype, "statementDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], BankStatement.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BankStatement.prototype, "uploadedAt", void 0);
class Referral {
}
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], Referral.prototype, "refCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ["active", "inactive"] }),
    __metadata("design:type", String)
], Referral.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Number)
], Referral.prototype, "max", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Referral.prototype, "amount", void 0);
let UserModel = class UserModel {
};
exports.UserModel = UserModel;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "playerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: enum_2.UserType, default: enum_2.UserType.USER }),
    __metadata("design:type", String)
], UserModel.prototype, "userType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enum_2.UserStatus, default: enum_2.UserStatus.ACTIVE }),
    __metadata("design:type", String)
], UserModel.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "emailStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], UserModel.prototype, "fullname", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], UserModel.prototype, "firstname", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], UserModel.prototype, "lastname", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], UserModel.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "profileImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], UserModel.prototype, "isAdmin", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], UserModel.prototype, "isSuperAdmin", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserModel.prototype, "dob", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "state", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "localGovernmentArea", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", typeof (_c = typeof Record !== "undefined" && Record) === "function" ? _c : Object)
], UserModel.prototype, "socialMediaProfile", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "residentialAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [BankAccount] }),
    __metadata("design:type", Array)
], UserModel.prototype, "bankAccount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Referral }),
    __metadata("design:type", Referral)
], UserModel.prototype, "referral", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "refBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "refCode", void 0);
exports.UserModel = UserModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], UserModel);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(UserModel);
exports.UserSchema.plugin(uniqueValidator);
exports.UserSchema.pre("save", async function (next) {
    if (this.password) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password || "123456", salt);
    }
    this.id = (0, crypto_1.randomInt)(99999) + (0, crypto_1.randomUUID)().replace(/\D/g, "").substring(0, 5);
    this.username = this.username || this.email;
    this.referral.refCode =
        this.username.substring(0, 2) +
            (0, crypto_1.randomInt)(99) +
            (0, crypto_1.randomUUID)().substring(0, 2);
    this.refCode = this.referral.refCode;
    this.referral.status = "active";
    next();
});


/***/ }),

/***/ "./libs/schema/src/waller.schema.ts":
/*!******************************************!*\
  !*** ./libs/schema/src/waller.schema.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletSchema = exports.WalletModel = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let WalletModel = class WalletModel {
};
exports.WalletModel = WalletModel;
__decorate([
    (0, mongoose_1.Prop)({ ref: 'UserModel' }),
    __metadata("design:type", String)
], WalletModel.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WalletModel.prototype, "barter_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WalletModel.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], WalletModel.prototype, "accountName", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], WalletModel.prototype, "accountNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], WalletModel.prototype, "bankName", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], WalletModel.prototype, "bankCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], WalletModel.prototype, "customerCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], WalletModel.prototype, "balance", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'NGN' }),
    __metadata("design:type", String)
], WalletModel.prototype, "currency", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'active' }),
    __metadata("design:type", String)
], WalletModel.prototype, "status", void 0);
exports.WalletModel = WalletModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], WalletModel);
exports.WalletSchema = mongoose_1.SchemaFactory.createForClass(WalletModel);


/***/ }),

/***/ "./libs/service/src/email.service.ts":
/*!*******************************************!*\
  !*** ./libs/service/src/email.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SendMailService = void 0;
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let SendMailService = class SendMailService {
    constructor(mailService) {
        this.mailService = mailService;
    }
    async sendMail({ from, to, subject, html, text }) {
        const data = {
            from: from || 'emmanuel@jamfortetech.com',
            to,
            subject,
            text,
            html,
        };
        try {
            this.mailService.sendMail(data).catch((e) => {
                console.log('SmS failed');
            });
        }
        catch (error) { }
    }
};
exports.SendMailService = SendMailService;
exports.SendMailService = SendMailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _a : Object])
], SendMailService);


/***/ }),

/***/ "./libs/service/src/index.ts":
/*!***********************************!*\
  !*** ./libs/service/src/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./notification.service */ "./libs/service/src/notification.service.ts"), exports);
__exportStar(__webpack_require__(/*! ./email.service */ "./libs/service/src/email.service.ts"), exports);
__exportStar(__webpack_require__(/*! ./notification.service */ "./libs/service/src/notification.service.ts"), exports);
__exportStar(__webpack_require__(/*! ./notification.gateway */ "./libs/service/src/notification.gateway.ts"), exports);
__exportStar(__webpack_require__(/*! ./response.service */ "./libs/service/src/response.service.ts"), exports);
__exportStar(__webpack_require__(/*! ./websocket/web.socket */ "./libs/service/src/websocket/web.socket.ts"), exports);
__exportStar(__webpack_require__(/*! ./sms.service */ "./libs/service/src/sms.service.ts"), exports);
__exportStar(__webpack_require__(/*! ./payment/flutterwave */ "./libs/service/src/payment/flutterwave.ts"), exports);


/***/ }),

/***/ "./libs/service/src/notification.gateway.ts":
/*!**************************************************!*\
  !*** ./libs/service/src/notification.gateway.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationGateway = void 0;
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
let NotificationGateway = class NotificationGateway {
    constructor() {
        this.clients = new Map();
        this.pendingNotifications = new Map();
    }
    handleConnection(client) {
        const userId = client.handshake.query.userId;
        console.log('userId', userId);
        if (userId) {
            this.clients.set(userId, client.id);
            if (this.pendingNotifications.has(userId)) {
                const notifications = this.pendingNotifications.get(userId) || [];
                notifications.forEach((notification) => {
                    this.server.to(client.id).emit('notification', notification);
                });
                this.pendingNotifications.delete(userId);
            }
        }
    }
    handleDisconnect(client) {
        const userId = [...this.clients.entries()].find(([_, id]) => id === client.id)?.[0];
        if (userId) {
            this.clients.delete(userId);
        }
    }
    sendNotification(userId, data) {
        const socketId = this.clients.get(userId);
        if (socketId) {
            this.server.to(socketId).emit('notification', data);
        }
        else {
            if (!this.pendingNotifications.has(userId)) {
                this.pendingNotifications.set(userId, []);
            }
            this.pendingNotifications.get(userId)?.push(data);
        }
    }
    handleJoinRoom(client, room) {
        client.join(room);
    }
    handleNewMessage(message) {
        console.log('message12', message);
    }
};
exports.NotificationGateway = NotificationGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_a = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _a : Object)
], NotificationGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], NotificationGateway.prototype, "handleJoinRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinRoom'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationGateway.prototype, "handleNewMessage", null);
exports.NotificationGateway = NotificationGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(3002, {})
], NotificationGateway);


/***/ }),

/***/ "./libs/service/src/notification.service.ts":
/*!**************************************************!*\
  !*** ./libs/service/src/notification.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationService = void 0;
const schema_1 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_2 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const axios_1 = __webpack_require__(/*! axios */ "axios");
const notification_gateway_1 = __webpack_require__(/*! ./notification.gateway */ "./libs/service/src/notification.gateway.ts");
let NotificationService = class NotificationService {
    constructor(notificationGateway, activityLogModel) {
        this.notificationGateway = notificationGateway;
        this.activityLogModel = activityLogModel;
        this.oneSignalUrl = "https://onesignal.com/api/v1/notifications";
        this.appId = process.env.ONESIGNAL_APP_ID;
        this.apiKey = process.env.ONESIGNAL_API_KEY;
    }
    async notificationActivity({ entityType, userID, details, action, entityID, playerIds, }) {
        await this.activityLogModel.create({
            entityType,
            userID,
            details,
            action,
            entityID,
        });
        this.notificationGateway.sendNotification(userID.toString(), {
            action,
            entityType,
            entityID,
            details,
        });
        try {
            const payload = {
                app_id: this.appId,
                headings: { en: details },
                contents: { en: details },
                include_player_ids: playerIds,
            };
            const response = await axios_1.default.post(this.oneSignalUrl, payload, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Basic ${this.apiKey}`,
                },
            });
            console.log(`Notification sent: ${response.status}`);
        }
        catch (error) {
            console.log(error);
        }
    }
    optionsBuilder(method, endpoint, data) {
        return {
            method,
            url: `${this.oneSignalUrl}/${endpoint}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${this.apiKey}`,
            },
            data: JSON.stringify(data),
        };
    }
    async createNotication(data) {
        const options = this.optionsBuilder("post", "notifications", data);
        try {
            const response = await (0, axios_1.default)(options);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return error;
        }
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_2.InjectModel)(schema_1.ActivityLogModel.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof notification_gateway_1.NotificationGateway !== "undefined" && notification_gateway_1.NotificationGateway) === "function" ? _a : Object, typeof (_b = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _b : Object])
], NotificationService);


/***/ }),

/***/ "./libs/service/src/payment/flutterwave.ts":
/*!*************************************************!*\
  !*** ./libs/service/src/payment/flutterwave.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlutterwaveService = void 0;
const schema_1 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
const schema_2 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const axios_1 = __webpack_require__(/*! axios */ "axios");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let FlutterwaveService = class FlutterwaveService {
    constructor(configService, walletModel, userModel) {
        this.configService = configService;
        this.walletModel = walletModel;
        this.userModel = userModel;
        this.baseUrl = "";
        this.secretKey = this.configService.get("FLUTTERWAVE_SECRET_KEY");
        this.secretHash = this.configService.get("FLUTTERWAVEEncryptionKey");
        this.headers = {
            accept: "application/json",
            Authorization: `Bearer ${this.secretKey}`,
            "Content-Type": "application/json",
        };
    }
    async handleWebhook(req) {
        try {
            const signature = req.headers["verif-hash"];
            if (!signature || (signature !== this.secretHash)) {
                throw new Error("Failed to process webhook");
            }
            return req.body;
            return { status: "success", message: "Webhook processed successfully" };
        }
        catch (error) {
            console.error("Error processing webhook:", error);
            throw new Error("Failed to process webhook");
        }
    }
    async testDeposit(data) {
        const { account_reference, amount } = data;
        try {
            const options = {
                method: "POST",
                url: `https://api.flutterwave.com/v3/payout-subaccounts/${account_reference}/fund-account`,
                headers: this.headers,
                data: {
                    amount,
                    currency: "NGN",
                },
            };
            const response = await axios_1.default.request(options);
            return response.data;
        }
        catch (error) {
            console.error("Error performing wallet to wallet transfer:", error.response?.data || error.message);
            throw error;
        }
    }
    async createVirtualAccount(data) {
        const { account_name, email = "", mobilenumber } = data;
        console.log(data);
        try {
            const options = {
                method: "POST",
                url: "https://api.flutterwave.com/v3/payout-subaccounts",
                headers: this.headers,
                data: {
                    account_name,
                    email,
                    mobilenumber,
                    country: "NG",
                },
            };
            const response = await axios_1.default.request(options);
            const responseType = response.data;
            const user = await this.userModel.findOne({ email });
            await this.walletModel.create({
                accountNumber: responseType.data.nuban,
                accountName: account_name,
                userID: user?._id.toString(),
                barter_id: responseType.data.barter_id,
                bankCode: responseType.data.bank_code,
                bankName: responseType.data.bank_name,
                customerCode: responseType.data.account_reference,
                currency: "NGN",
            });
            return responseType;
        }
        catch (error) {
            console.error("Error creating virtual account:", error.response?.data || error.message);
            throw error;
        }
    }
    async walletToWalletTransfer(data) {
        const { account_bank, account_number, amount, narration, reference, debit_subaccount, } = data;
        try {
            const options = {
                method: "POST",
                url: "https://api.flutterwave.com/v3/transfers",
                headers: this.headers,
                data: {
                    account_bank,
                    account_number,
                    amount,
                    currency: "NGN",
                    debit_currency: "NGN",
                    narration,
                    reference: reference,
                    debit_subaccount,
                },
            };
            const response = await axios_1.default.request(options);
            return response.data;
        }
        catch (error) {
            console.error("Error performing wallet to wallet transfer:", error.response?.data || error.message);
            throw error;
        }
    }
    async withdrawFunds(data) {
        const { account_bank, account_number, amount, narration, reference, debit_subaccount, } = data;
        try {
            const options = {
                method: "POST",
                url: "https://api.flutterwave.com/v3/transfers",
                headers: this.headers,
                data: {
                    account_bank,
                    account_number,
                    amount,
                    currency: "NGN",
                    narration,
                    reference: reference,
                    debit_subaccount,
                    callback_url: "https://www.flutterwave.com/ng/",
                    debit_currency: "NGN",
                },
            };
            const response = await axios_1.default.request(options);
            return response.data;
        }
        catch (error) {
            console.error("Error withdrawing funds:", error.response?.data || error.message);
            throw error;
        }
    }
    async getAvailableBalance(userID) {
        const wallet = await this.walletModel.findOne({
            userID
        });
        if (!wallet) {
            throw new Error("Wallet not found");
        }
        const subaccountId = wallet.customerCode;
        try {
            const options = {
                method: "GET",
                url: `https://api.flutterwave.com/v3/payout-subaccounts/${subaccountId}/balances`,
                headers: this.headers,
            };
            const response = await axios_1.default.request(options);
            console.log(response.data);
            return { data: { ...response.data.data, wallet } };
        }
        catch (error) {
            console.error("Error fetching available balance:", error.response?.data || error.message);
            throw error;
        }
    }
    async fetchTransactions(data) {
        const { subaccountId, from, to, fetch_limit = 10, page = 1 } = data;
        try {
            const options = {
                method: "GET",
                url: `https://api.flutterwave.com/v3/payout-subaccounts/${subaccountId}/transactions?from=${from}&to=${to}&currency=NGN&page=${page}&fetch_limit=${fetch_limit}`,
                headers: this.headers,
            };
            const response = await axios_1.default.request(options);
            return response.data;
        }
        catch (error) {
            console.error("Error fetching transactions:", error.response?.data || error.message);
            throw error;
        }
    }
    async getTransferById(transferId) {
        try {
            const options = {
                method: "GET",
                url: `https://api.flutterwave.com/v3/transfers/${transferId}`,
                headers: this.headers,
            };
            const response = await axios_1.default.request(options);
            return response.data;
        }
        catch (error) {
            console.error("Error fetching transfer by ID:", error.response?.data || error.message);
            throw error;
        }
    }
    async verifyAccountNumber(accountNumber, bankCode) {
        try {
            const options = {
                method: "POST",
                url: "https://api.flutterwave.com/v3/accounts/resolve",
                headers: this.headers,
                data: {
                    account_number: accountNumber,
                    account_bank: bankCode,
                },
            };
            const response = await axios_1.default.request(options);
            return response.data;
        }
        catch (error) {
            console.error("Error verifying account number:", error.response?.data || error.message);
            throw error;
        }
    }
    async getAllBanks() {
        try {
            const options = {
                method: "GET",
                url: "https://api.flutterwave.com/v3/banks/NG",
                headers: this.headers,
            };
            const response = await axios_1.default.request(options);
            return response.data;
        }
        catch (error) {
            console.error("Error fetching banks:", error.response?.data || error.message);
            throw error;
        }
    }
};
exports.FlutterwaveService = FlutterwaveService;
exports.FlutterwaveService = FlutterwaveService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(schema_2.WalletModel.name)),
    __param(2, (0, mongoose_1.InjectModel)(schema_1.UserModel.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], FlutterwaveService);
const CreateSubaccount = {
    status: "success",
    message: "Payout subaccount created",
    data: {
        id: 1276,
        account_reference: "PSAC1*****2705732",
        account_name: "John Doe",
        barter_id: "234101019871322",
        email: "johndoe@example.com",
        mobilenumber: "01010100101",
        country: "US",
        nuban: "822*****903",
        bank_name: "Sterling Bank PLC",
        bank_code: "232",
        status: "ACTIVE",
        created_at: "2021-10-04T18:38:25.000Z",
    },
};


/***/ }),

/***/ "./libs/service/src/response.service.ts":
/*!**********************************************!*\
  !*** ./libs/service/src/response.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serviceResponse = serviceResponse;
exports.getMetadata = getMetadata;
function serviceResponse({ message, data, status, metadata }) {
    return {
        message,
        data,
        status,
        metadata
    };
}
async function getMetadata({ model, query, querys, }) {
    const { page = 1, limit = 10 } = query;
    const total = await model.countDocuments(querys);
    return {
        total,
        totalPage: Math.ceil(total / limit),
        currentPage: page,
        limit: limit,
    };
}


/***/ }),

/***/ "./libs/service/src/sms.service.ts":
/*!*****************************************!*\
  !*** ./libs/service/src/sms.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SmsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! axios */ "axios");
let SmsService = class SmsService {
    constructor() {
        this.baseUrl = 'https://app.emisri.com';
        this.username = 'jamforte';
        this.apiId = 'k6YtmOXf';
        this.accessToken = '5m]X5k|OLsHrRm_Hk97S7:DCWaUxd1do';
        this.senderId = 'GoVeloox';
    }
    getAuthHeaders() {
        const token = Buffer.from(`${this.username}:${this.apiId}`).toString('base64');
        return {
            Authorization: `Basic ${token}`,
            'X-Access-Token': "5m]X5k|OLsHrRm_Hk97S7:DCWaUxd1do",
            'Content-Type': 'application/json',
        };
    }
    async sendSingleSMS(destination, text) {
        try {
            const response = await axios_1.default.post('https://app.emisri.com/API/SendBulkSMS', {
                source: 'GoVeloox',
                destination: destination,
                text: text,
                dataCoding: 0,
            }, {
                auth: {
                    username: this.username,
                    password: this.apiId
                },
                headers: {
                    'X-Access-Token': this.accessToken,
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException(error.response?.data || 'Failed to send SMS', error.response?.status || 500);
        }
    }
    async sendBulkSMS(destinations, text) {
        try {
            const body = {
                source: this.senderId,
                destination: destinations,
                text,
                dataCoding: 0,
            };
            const response = await axios_1.default.post(`${this.baseUrl}/API/SendBulkSMS`, body, { headers: this.getAuthHeaders() });
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException(error.response?.data || 'Failed to send bulk SMS', error.response?.status || 500);
        }
    }
    async generateMessage(data) {
        const { code, duration, type } = data;
        switch (type) {
            case 'EmailVerification':
                return `Your verification code is ${code}. Use this to verify your email address. This code expires in ${duration} minutes.`;
            case 'PasswordReset':
                return `Reset your password using this code: ${code}. Do not share this with anyone. The code is valid for ${duration} minutes.`;
            case '2FA':
                return `Your 2FA login code is ${code}. Enter this to complete your secure sign-in. It will expire in ${duration} minutes.`;
            case 'DeliveryPin':
                return `Your delivery PIN is ${code}. Share this with the delivery agent to confirm receipt. It will expire in ${duration} minutes.`;
            default:
                throw new Error('Invalid message type');
        }
    }
};
exports.SmsService = SmsService;
exports.SmsService = SmsService = __decorate([
    (0, common_1.Injectable)()
], SmsService);


/***/ }),

/***/ "./libs/service/src/websocket/web.socket.ts":
/*!**************************************************!*\
  !*** ./libs/service/src/websocket/web.socket.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebSocketGatewayService = void 0;
const schema_1 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const axios_1 = __webpack_require__(/*! axios */ "axios");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
let WebSocketGatewayService = class WebSocketGatewayService {
    constructor(userModel) {
        this.userModel = userModel;
        this.users = new Map();
        this.usersData = new Map();
    }
    async handleConnection(client) {
        const userId = client.handshake.query.userId;
        const riderId = client.handshake.query.riderId;
        const userData = {
            socketId: client.id,
            lat: client.handshake.query.lat || 0,
            long: client.handshake.query.long || 0,
            address: client.handshake.query.address || '',
            ip: client.handshake.query.ip,
        };
        let ip = client.handshake.headers['x-forwarded-for'] || client.handshake.address;
        let ip2 = userData.ip ? userData.ip : Array.isArray(ip) ? ip[0] : ip;
        const location = await this.getLocationFromIP(ip2);
        if (userId) {
            this.usersData.set(userId, userData);
        }
        this.server.to(client.id).emit('my-data', { userData, location });
    }
    handleDisconnect(client) {
        this.removeClient(client.id, this.users, this.usersData);
    }
    removeClient(socketId, userMap, dataMap) {
        const userId = [...userMap.entries()].find(([_, id]) => id === socketId)?.[0];
        if (userId) {
            userMap.delete(userId);
            dataMap.delete(userId);
        }
    }
    async walletNotification(payload) {
        const { data, userID } = payload;
        const userSocketId = this.usersData.get(userID);
        console.log(userSocketId);
        if (userSocketId)
            this.server.to(userSocketId.socketId).emit('flutter-wallet', data);
    }
    async getLocationFromIP(ip) {
        try {
            const response = await axios_1.default.get(`http://ip-api.com/json/${ip}`);
            if (response.data.status === 'fail')
                return null;
            return {
                lat: response.data.lat,
                long: response.data.lon,
                address: `${response.data.city}, ${response.data.regionName}, ${response.data.country}`,
            };
        }
        catch (error) {
            console.error('Error fetching location:', error);
            return null;
        }
    }
    getDistance(lat1 = 0, lon1 = 0, lat2 = 0, lon2 = 0) {
        const R = 6371;
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(lat1 * (Math.PI / 180)) *
                Math.cos(lat2 * (Math.PI / 180)) *
                Math.sin(dLon / 2) ** 2;
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }
};
exports.WebSocketGatewayService = WebSocketGatewayService;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_b = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _b : Object)
], WebSocketGatewayService.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('notification'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebSocketGatewayService.prototype, "walletNotification", null);
exports.WebSocketGatewayService = WebSocketGatewayService = __decorate([
    (0, websockets_1.WebSocketGateway)({}),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.UserModel.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], WebSocketGatewayService);


/***/ }),

/***/ "./libs/strategy/src/facebook.strategy.ts":
/*!************************************************!*\
  !*** ./libs/strategy/src/facebook.strategy.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FacebookStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_facebook_1 = __webpack_require__(/*! passport-facebook */ "passport-facebook");
let FacebookStrategy = class FacebookStrategy extends (0, passport_1.PassportStrategy)(passport_facebook_1.Strategy, 'facebook') {
    constructor(config) {
        super({
            clientID: '556847563691372',
            clientSecret: '2113301a89e177bfb21fc9fc2d92ceab',
            callbackURL: `${config.get('callbackURL')}/v1/auth/facebook/callback`,
            profileFields: ['id', 'displayName', 'name', 'emails', 'photos'],
            scope: ['email'],
        });
        this.config = config;
    }
    async validate(accessToken, refreshToken, profile, done) {
        const { name, emails, photos } = profile;
        const user = {
            email: emails ? emails[0]?.value : "",
            firstName: name?.givenName,
            lastName: name?.familyName,
            picture: photos[0]?.value,
        };
        const payload = {
            user,
            accessToken,
        };
        done(null, user);
    }
};
exports.FacebookStrategy = FacebookStrategy;
exports.FacebookStrategy = FacebookStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], FacebookStrategy);


/***/ }),

/***/ "./libs/strategy/src/google.strategy.ts":
/*!**********************************************!*\
  !*** ./libs/strategy/src/google.strategy.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleStrategy = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_google_oauth20_1 = __webpack_require__(/*! passport-google-oauth20 */ "passport-google-oauth20");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'google') {
    constructor(config) {
        super({
            clientID: '664872400063-5g3holsjkgmanem3t6b8dg1uvmp7qogt.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: `${config.get('callbackURL')}/v1/auth/google/callback`,
            scope: ['email', 'profile'],
        });
        this.config = config;
    }
    async validate(accessToken, refreshToken, profile, done) {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        };
        done(null, user);
    }
};
exports.GoogleStrategy = GoogleStrategy;
exports.GoogleStrategy = GoogleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], GoogleStrategy);


/***/ }),

/***/ "./libs/strategy/src/index.ts":
/*!************************************!*\
  !*** ./libs/strategy/src/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./jwt.strategy */ "./libs/strategy/src/jwt.strategy.ts"), exports);
__exportStar(__webpack_require__(/*! ./facebook.strategy */ "./libs/strategy/src/facebook.strategy.ts"), exports);
__exportStar(__webpack_require__(/*! ./google.strategy */ "./libs/strategy/src/google.strategy.ts"), exports);
__exportStar(__webpack_require__(/*! ./x.strategy */ "./libs/strategy/src/x.strategy.ts"), exports);


/***/ }),

/***/ "./libs/strategy/src/jwt.strategy.ts":
/*!*******************************************!*\
  !*** ./libs/strategy/src/jwt.strategy.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const schema_1 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(userModel, configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get("JWT_SECRET"),
        });
        this.userModel = userModel;
        this.configService = configService;
    }
    async validate(payload) {
        const user = await this.userModel.findById(payload.sub);
        return user;
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.UserModel.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], JwtStrategy);


/***/ }),

/***/ "./libs/strategy/src/x.strategy.ts":
/*!*****************************************!*\
  !*** ./libs/strategy/src/x.strategy.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.XStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_facebook_1 = __webpack_require__(/*! passport-facebook */ "passport-facebook");
const APIKey = 'bz8IwymAKgYSixRr6wMJwRQby';
const APIKeySecret = 'v4hUsoxv4JnTLwzMmXAe3u02p141ENsXHvQ3BkFnw9ZK0MuVSs';
let XStrategy = class XStrategy extends (0, passport_1.PassportStrategy)(passport_facebook_1.Strategy, 'x') {
    constructor(config) {
        super({
            clientID: '556847563691372',
            clientSecret: '2113301a89e177bfb21fc9fc2d92ceab',
            callbackURL: 'https://veegil-backend-puir.onrender.com/v1/auth/x/callback',
            profileFields: ['id', 'displayName', 'name', 'emails', 'photos'],
        });
        this.config = config;
    }
    async validate(accessToken, refreshToken, profile, done) {
        const { name, emails, photos } = profile;
        const user = {
            email: emails ? emails[0]?.value : "",
            firstName: name?.givenName,
            lastName: name?.familyName,
            picture: photos[0]?.value,
        };
        const payload = {
            user,
            accessToken,
        };
        done(null, user);
    }
};
exports.XStrategy = XStrategy;
exports.XStrategy = XStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], XStrategy);


/***/ }),

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AppController_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const service_1 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const fs_1 = __webpack_require__(/*! fs */ "fs");
let AppController = AppController_1 = class AppController {
    constructor() {
        this.logger = new common_1.Logger(AppController_1.name);
    }
    async getLgaState(stateName) {
        let data = JSON.parse((0, fs_1.readFileSync)("allnigeria_polling_units_with_coords.json", "utf-8"));
        let state;
        if (stateName) {
            state = data.find((state) => state.name.toLowerCase() === stateName.toLowerCase()).lgas.map((lga) => lga.name);
            if (!state)
                return [];
        }
        else {
            state = data.map((state) => state.name);
        }
        try {
            return (0, service_1.serviceResponse)({
                message: "Success",
                data: state,
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)("states"),
    (0, swagger_1.ApiOperation)({ summary: "Get all states" }),
    (0, swagger_1.ApiQuery)({ name: "stateName", required: false, type: String }),
    __param(0, (0, common_1.Query)("stateName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], AppController.prototype, "getLgaState", null);
exports.AppController = AppController = AppController_1 = __decorate([
    (0, common_1.Controller)(""),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    __metadata("design:paramtypes", [])
], AppController);


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/auth/auth.module.ts");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./src/users/users.module.ts");
const uploads_module_1 = __webpack_require__(/*! ./uploads/uploads.module */ "./src/uploads/uploads.module.ts");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const casl_module_1 = __webpack_require__(/*! ./casl/casl.module */ "./src/casl/casl.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const products_module_1 = __webpack_require__(/*! ./products/products.module */ "./src/products/products.module.ts");
const cart_module_1 = __webpack_require__(/*! ./cart/cart.module */ "./src/cart/cart.module.ts");
const global_mongoose_module_1 = __webpack_require__(/*! src/global-mongoose.module */ "./src/global-mongoose.module.ts");
const categories_module_1 = __webpack_require__(/*! ./categories/categories.module */ "./src/categories/categories.module.ts");
const orders_module_1 = __webpack_require__(/*! ./orders/orders.module */ "./src/orders/orders.module.ts");
const designs_module_1 = __webpack_require__(/*! ./designs/designs.module */ "./src/designs/designs.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            casl_module_1.CaslModule,
            schedule_1.ScheduleModule.forRoot(),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: process.env.EMAIL_HOST || "jamfortetech.com",
                    auth: {
                        user: process.env.EMAIL_USERNAME || "emmanuel@jamfortetech.com",
                        pass: process.env.EMAIL_PASSWORD || "Simple@1010*",
                    },
                },
            }),
            platform_express_1.MulterModule.registerAsync({
                useFactory: () => ({
                    dest: './uploads',
                }),
            }),
            global_mongoose_module_1.GlobalMongooseModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            throttler_1.ThrottlerModule.forRoot([{
                    ttl: 60000,
                    limit: 10,
                }]),
            auth_module_1.AuthModule,
            uploads_module_1.UploadsModule,
            users_module_1.UsersModule, products_module_1.ProductsModule, cart_module_1.CartModule, orders_module_1.OrdersModule, categories_module_1.CategoriesModule, designs_module_1.DesignsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),

/***/ "./src/auth/auth.controller.ts":
/*!*************************************!*\
  !*** ./src/auth/auth.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const dto_1 = __webpack_require__(/*! @app/dto */ "./libs/dto/src/index.ts");
const dto_2 = __webpack_require__(/*! @app/dto */ "./libs/dto/src/index.ts");
const guard_1 = __webpack_require__(/*! @app/guard */ "./libs/guard/src/index.ts");
class RegisterDTO extends (0, swagger_1.PickType)(dto_2.UserDTO, ['title', 'isAdmin', 'isSuperAdmin', 'userType', 'useRefCode', 'firstname', 'fullname', 'lastname', 'email', 'password', 'gender', 'phone', "profileImage",]) {
}
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    register(data) {
        return this.authService.register(data);
    }
    signIn(data) {
        return this.authService.login(data.email, data.password);
    }
    sendTwoFactorAuthenticationMail(req) {
        return this.authService.sendTwoFactorAuthenticationMail(req.body);
    }
    sendTwoFactorAuthenticationSms(req) {
        return this.authService.sendTwoFactorAuthenticationSms(req.body);
    }
    twoFactorAuthenticationLogin(req) {
        return this.authService.twoFactorAuthenticationLogin(req.body);
    }
    async refresh(refreshToken) {
        return this.authService.refreshToken(refreshToken);
    }
    getProfile(req) {
        return req.user;
    }
    editProfile(req) {
        return this.authService.editProfile(req.body, req.user._id);
    }
    addBankAccount(req) {
        return this.authService.addBankAccount(req.user._id, req.body);
    }
    removeBankAccount(req, accountNumber) {
        return this.authService.removeBankAccount(req.user._id, accountNumber);
    }
    getUserBankAccount(req) {
        return this.authService.getUserBanks(req.user._id);
    }
    editUserBankAccount(req) {
        return this.authService.editUserBanks(req.user._id, req.body);
    }
    async googleAuth(req) { }
    googleAuthRedirect(req) {
        return this.authService.ssoGoogle(req);
    }
    async facebookLogin() { }
    async facebookLoginRedirect(req) {
        return this.authService.ssoFacebook(req);
    }
    changePassword(req) {
        return this.authService.changePassword(req.user._id, req.body.currentPassword, req.body.newPassword);
    }
    deleteAccount(req) {
        return this.authService.deleteAccount(req.user._id.toString(), req.body.email, req.body.reason);
    }
    forgotPassword(req) {
        return this.authService.forgotPassword(req.body.token, req.body.code, req.body.newPassword);
    }
    verifyCode(req) {
        return this.authService.verifyCode(req.body.type, req.body.code);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Register a new user' }),
    (0, swagger_1.ApiBody)({
        type: RegisterDTO,
        description: 'User details for creating a new user',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User registered successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'User login' }),
    (0, swagger_1.ApiBody)({ type: dto_1.LoginDTO, description: 'User credentials for login' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Login successful.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid credentials.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.LoginDTO !== "undefined" && dto_1.LoginDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('send-code-to-email'),
    (0, swagger_1.ApiBody)({ type: dto_2.UserIDDTO, description: 'User ID for sending the code', }),
    (0, swagger_1.ApiOperation)({ summary: 'Send two-factor authentication code via email' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Code sent successfully.' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof common_1.Request !== "undefined" && common_1.Request) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "sendTwoFactorAuthenticationMail", null);
__decorate([
    (0, common_1.Post)('send-code-to-sms'),
    (0, swagger_1.ApiBody)({ type: dto_2.UserIDDTO, description: 'User ID for sending the code', }),
    (0, swagger_1.ApiOperation)({ summary: 'Send two-factor authentication code via email' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Code sent successfully.' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof common_1.Request !== "undefined" && common_1.Request) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "sendTwoFactorAuthenticationSms", null);
__decorate([
    (0, common_1.Post)('verify-authentication'),
    (0, swagger_1.ApiBody)({ type: dto_2.VerifyAuthenticationDto, description: 'Data for verification' }),
    (0, swagger_1.ApiOperation)({ summary: 'Verify two-factor authentication' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Authentication successful.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Code not found or expired.' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof common_1.Request !== "undefined" && common_1.Request) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "twoFactorAuthenticationLogin", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, swagger_1.ApiOperation)({ summary: 'Refresh access token' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'New access token generated.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid refresh token.' }),
    (0, swagger_1.ApiBody)({ type: dto_2.RefreshTokenDTO, description: 'Refresh token for generating a new access token' }),
    __param(0, (0, common_1.Body)('refresh_token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Get)('profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user profile' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User profile retrieved.' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Patch)('profile'),
    (0, swagger_1.ApiBody)({ type: dto_2.UserDTO, description: 'User details for updating the profile' }),
    (0, swagger_1.ApiOperation)({ summary: 'edit user profile' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User profile updated.' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "editProfile", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Post)('add-bank-account'),
    (0, swagger_1.ApiOperation)({ summary: 'Add bank account details' }),
    (0, swagger_1.ApiBody)({ type: dto_1.BankAccountDTO, description: 'Bank account details' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bank account added successfully' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "addBankAccount", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Post)('remove-bank-account/:accountNumber'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove bank account details' }),
    (0, swagger_1.ApiParam)({ name: 'accountNumber', required: true, type: String, description: 'Account number to remove' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Bank account not found' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bank account removed successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)("accountNumber")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "removeBankAccount", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Get)('get-bank-account'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user bank account details' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bank account details retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Bank account not found' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getUserBankAccount", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Patch)('edit-bank-account'),
    (0, swagger_1.ApiOperation)({ summary: 'Edit user bank account details' }),
    (0, swagger_1.ApiBody)({ type: dto_1.BankAccountDTO, description: 'Bank account details' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bank account updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Bank account not found' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "editUserBankAccount", null);
__decorate([
    (0, common_1.Get)('google'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    (0, swagger_1.ApiOperation)({ summary: 'Login with Google' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Get)('google/callback'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    (0, swagger_1.ApiOperation)({ summary: 'Google authentication callback' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleAuthRedirect", null);
__decorate([
    (0, common_1.Get)("facebook"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("facebook")),
    (0, swagger_1.ApiOperation)({ summary: 'Login with Facebook' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "facebookLogin", null);
__decorate([
    (0, common_1.Get)("/facebook/callback"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("facebook")),
    (0, swagger_1.ApiOperation)({ summary: 'Facebook authentication callback' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AuthController.prototype, "facebookLoginRedirect", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Post)('change-password'),
    (0, swagger_1.ApiBody)({ type: dto_2.ChangePasswordDTO, }),
    (0, swagger_1.ApiOperation)({ summary: 'Change Password' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Password successfully updated' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete-account'),
    (0, swagger_1.ApiBody)({ type: dto_1.DeleteAccountDTO, }),
    (0, swagger_1.ApiOperation)({ summary: 'User deletes account' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Account successfully deleted' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "deleteAccount", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    (0, swagger_1.ApiBody)({ type: dto_1.ForgotPasswordDTO, }),
    (0, swagger_1.ApiOperation)({ summary: 'forgot Password' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Password successfully updated' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('verify-code'),
    (0, swagger_1.ApiBody)({ schema: {
            type: 'object',
            properties: {
                type: { type: 'string', example: 'PasswordReset' },
                code: { type: 'string', example: '123456' },
            },
        } }),
    (0, swagger_1.ApiOperation)({ summary: 'verify code' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'code successfully verified' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verifyCode", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./src/auth/auth.module.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/auth/auth.controller.ts");
const strategy_1 = __webpack_require__(/*! @app/strategy */ "./libs/strategy/src/index.ts");
const local_strategy_1 = __webpack_require__(/*! ./local.strategy */ "./src/auth/local.strategy.ts");
const service_1 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
const service_2 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
const service_3 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
const users_module_1 = __webpack_require__(/*! src/users/users.module */ "./src/users/users.module.ts");
const users_service_1 = __webpack_require__(/*! src/users/users.service */ "./src/users/users.service.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [passport_1.PassportModule, users_module_1.UsersModule],
        providers: [
            auth_service_1.AuthService,
            strategy_1.JwtStrategy,
            strategy_1.GoogleStrategy,
            strategy_1.FacebookStrategy,
            strategy_1.XStrategy,
            users_service_1.UsersService,
            service_1.SendMailService,
            service_2.SmsService,
            local_strategy_1.LocalStrategy,
            service_1.NotificationService, service_1.NotificationGateway, service_3.FlutterwaveService
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService]
    })
], AuthModule);


/***/ }),

/***/ "./src/auth/auth.service.ts":
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const schema_1 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const otplib_1 = __webpack_require__(/*! otplib */ "otplib");
const service_1 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
const service_2 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
const service_3 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let AuthService = class AuthService {
    constructor(config, userModel, otpModel, authenticatorModel, jwtService, flutterwaveService, smsService, sendMailService) {
        this.config = config;
        this.userModel = userModel;
        this.otpModel = otpModel;
        this.authenticatorModel = authenticatorModel;
        this.jwtService = jwtService;
        this.flutterwaveService = flutterwaveService;
        this.smsService = smsService;
        this.sendMailService = sendMailService;
    }
    async register(users) {
        try {
            let checkUserRefId;
            if (users.useRefCode) {
                const user = await this.userModel.findOne({
                    refCode: users.useRefCode,
                });
                if (!user) {
                    throw new common_1.NotFoundException("Referral code not found");
                }
                checkUserRefId = user._id.toString();
            }
            const referral = {
                refBy: checkUserRefId,
            };
            const created = await this.userModel.create({
                ...users,
                refBy: checkUserRefId,
                referral,
            });
            const data = await this.otpModel.create({
                userID: created._id,
                type: "EmailVerification",
            });
            const message = await this.smsService.generateMessage(data.toJSON());
            this.sendMailService.sendMail({
                to: created.email,
                subject: "Email Code Verification",
                text: message,
            });
            this.flutterwaveService.createVirtualAccount({
                account_name: created.fullname,
                email: created.email,
                mobilenumber: created.phone,
            });
            return {
                message: "Registration successful, Please Proceed to Email Verification",
                userID: created._id,
            };
        }
        catch (error) {
            throw new common_1.NotAcceptableException(error.message);
        }
    }
    async login(email, password) {
        const user = await this.userModel
            .findOne({ email })
            .select([
            "email",
            "_id",
            "username",
            "id",
            "password",
            "userType",
            "status",
            "isAdmin",
            "isSuperAdmin",
            "emailStatus",
        ]);
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            console.log(isMatch, password);
            if (isMatch) {
                if (user.status === "disabled") {
                    throw new common_1.UnauthorizedException("User is disabled");
                }
                return this.getLoginToken(user);
            }
            throw new common_1.UnauthorizedException("Invalid Credentials");
        }
        throw new common_1.NotFoundException("No User Found");
    }
    async verifyEmail(userID, code) {
        const otp = await this.otpModel.findOne({
            userID,
            code,
            type: "EmailVerification",
        });
        if (!otp) {
            throw new common_1.NotFoundException("Invalid or expired code");
        }
        const user = await this.userModel.findByIdAndUpdate(userID, { emailStatus: "verified" }, { new: true });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        await this.otpModel.findByIdAndDelete(otp._id);
        return {
            message: "Email verified successfully",
            data: user,
        };
    }
    getLoginToken(user) {
        const payload = {
            sub: user._id,
            username: user.username,
            email: user.email,
        };
        console.log(payload);
        const access_token = this.jwtService.sign(payload);
        const refresh_token = this.jwtService.sign(payload, {
            expiresIn: "30d",
            secret: this.config.get("JWT_SECRET2"),
        });
        return {
            message: "Login successful",
            status: true,
            data: user,
            access_token,
            refresh_token,
        };
    }
    async editProfile(body, userID) {
        delete body.email;
        delete body.id;
        delete body.isAdmin;
        delete body.isSuperAdmin;
        delete body.status;
        delete body.password;
        const user = await this.userModel.findByIdAndUpdate(userID, body, {
            new: true,
        });
        return {
            message: "User profile updated",
            data: user,
        };
    }
    async addBankAccount(userID, bankAccount) {
        const user = await this.userModel.findById(userID);
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        user.bankAccount.push(bankAccount);
        await user.save();
        return {
            message: "Bank account added",
            data: user.bankAccount,
        };
    }
    async removeBankAccount(userID, accountNumber) {
        const user = await this.userModel.findById(userID);
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        if (!user.bankAccount) {
            throw new common_1.NotFoundException("No bank account found");
        }
        const index = user.bankAccount.findIndex((account) => account.accountNumber === accountNumber);
        if (index === -1) {
            throw new common_1.NotFoundException("Bank account not found");
        }
        user.bankAccount.splice(index, 1);
        await user.save();
        return {
            message: "Bank account removed",
            data: user.bankAccount,
        };
    }
    async getUserBanks(userID) {
        const user = await this.userModel.findById(userID);
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        if (!user.bankAccount) {
            throw new common_1.NotFoundException("No bank account found");
        }
        return {
            message: "Bank account found",
            data: user.bankAccount,
        };
    }
    async editUserBanks(userID, bankAccount) {
        const user = await this.userModel.findById(userID);
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        if (!user.bankAccount) {
            throw new common_1.NotFoundException("No bank account found");
        }
        const index = user.bankAccount.findIndex((account) => account.accountNumber === bankAccount.accountNumber);
        if (index === -1) {
            throw new common_1.NotFoundException("Bank account not found");
        }
        user.bankAccount[index] = bankAccount;
        await user.save();
        return {
            message: "Bank account updated",
            data: user.bankAccount,
        };
    }
    async refreshToken(token) {
        console.log(token);
        const payload = this.jwtService.verify(token);
        if (!payload) {
            throw new common_1.UnauthorizedException("Invalid refresh token");
        }
        const user = await this.userModel.findById(payload.sub);
        if (!user) {
            throw new common_1.UnauthorizedException("User not found");
        }
        const payload1 = {
            sub: user._id,
            username: user.username,
            email: user.email,
        };
        const newAccessToken = this.jwtService.sign(payload1, { expiresIn: "1d" });
        const refresh_token = this.jwtService.sign(payload1, {
            expiresIn: "30d",
        });
        return {
            access_token: newAccessToken,
            refresh_token,
        };
    }
    async ssoGoogle(req) {
        const user = await this.userModel.findOne({ email: req.user.email });
        if (user) {
            return this.getLoginToken(user);
        }
        else {
            const created = await this.userModel.create({
                ...req.user,
                username: req.user.email,
                password: "",
            });
            return this.getLoginToken(created);
        }
    }
    async ssoFacebook(req) {
        const user = await this.userModel.findOne({ email: req.user.email });
        if (user) {
            return this.getLoginToken(user);
        }
        else {
            const created = await this.userModel.create({
                ...req.user,
                username: req.user.email,
                password: "",
            });
            return this.getLoginToken(created);
        }
    }
    async twoFactorAuthenticationLogin(body) {
        let isValid = false;
        if (body.token) {
            const secret = await this.authenticatorModel.findOne({
                userID: body.userID,
            });
            if (!secret) {
                throw new common_1.NotFoundException("User has not set authenticator");
            }
            isValid = otplib_1.authenticator.check(body.token, secret.secret);
        }
        const code = await this.otpModel.findOne({
            code: body.code,
            type: body.type,
            userID: body.userID,
        });
        isValid = code ? true : isValid;
        if (!isValid) {
            throw new common_1.NotFoundException("Code not found or expired");
        }
        const user = await this.userModel.findByIdAndUpdate(body.userID, {
            emailStatus: "verified",
        }, { new: true });
        if (code) {
            await this.otpModel.findByIdAndDelete(code._id);
        }
        return this.getLoginToken(user);
    }
    async sendTwoFactorAuthenticationMail(body) {
        const user = await this.userModel.findOne({
            $or: [{ _id: body.userID }, { email: body.email || body.userID }],
        });
        if (!user) {
            throw new common_1.NotFoundException("No User Found");
        }
        const data = await this.otpModel.create({
            userID: user._id.toString(),
            type: body.type,
        });
        const message = await this.smsService.generateMessage(data.toJSON());
        this.sendMailService.sendMail({
            to: user.email,
            subject: body.type,
            text: message,
        });
        let d = data.toJSON();
        delete d.code;
        return {
            message: "Code sent",
            data: d,
        };
    }
    async sendTwoFactorAuthenticationSms(body) {
        const user = await this.userModel.findOne({
            $or: [{ _id: body.userID }, { email: body.email || body.userID }],
        });
        if (!user) {
            throw new common_1.NotFoundException("No User Found");
        }
        const data = await this.otpModel.create({
            userID: user._id.toString(),
            type: body.type,
        });
        const message = await this.smsService.generateMessage(data.toJSON());
        this.smsService.sendSingleSMS(user.phone, message);
        return {
            message: "Code sent",
            data,
        };
    }
    async setTwoFactorAuthenticator(body) {
        const isValid = otplib_1.authenticator.check(body.code, body.secret);
        if (!isValid) {
            throw new common_1.UnauthorizedException("Invalid Token");
        }
        const data = await this.authenticatorModel.create({
            userID: body.userID,
            secret: body.secret,
        });
        const user = await this.userModel.findById(body.userID);
        this.sendMailService.sendMail({
            to: user.email,
            subject: "Two Factor Authenticator",
            text: `${body.secret}`,
        });
        return {
            message: "authenticator set",
            data,
        };
    }
    async changePassword(userID, currentPassword, newPassword) {
        const user = await this.userModel.findById(userID);
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException("Current password is incorrect");
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        await this.userModel.findByIdAndUpdate(userID, {
            password: hashedPassword,
        });
        return {
            message: "Password successfully updated",
        };
    }
    async deleteAccount(userID, email, reason) {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        if (user._id.toString() !== userID) {
            throw new common_1.NotAcceptableException("You are not allowed to delete this account");
        }
        await this.userModel.findByIdAndDelete(userID);
        return {
            message: "Account successfully deleted",
            status: true,
        };
    }
    async verifyCode(type, code) {
        let isValid = false;
        const checkCode = await this.otpModel.findOneAndUpdate({
            code: code,
            type,
        }, { status: "used" });
        isValid = checkCode ? true : isValid;
        if (!isValid) {
            throw new common_1.NotFoundException("Code not found or expired");
        }
        return {
            message: "Code verified successfully",
        };
    }
    async forgotPassword(token, code, newPassword) {
        const checkCode = await this.otpModel.findOne({
            code: code,
            status: "used",
            type: "PasswordReset",
        });
        if (!checkCode) {
            throw new common_1.NotFoundException("Code not found or expired");
        }
        const user = await this.userModel.findById(checkCode.userID);
        await this.otpModel.findByIdAndDelete(checkCode._id);
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        await this.userModel.findByIdAndUpdate(checkCode.userID, {
            password: hashedPassword,
        });
        return {
            message: "Password successfully updated",
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(schema_1.UserModel.name)),
    __param(2, (0, mongoose_1.InjectModel)(schema_1.OTPModel.name)),
    __param(3, (0, mongoose_1.InjectModel)(schema_1.AuthenticatorModel.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object, typeof (_e = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _e : Object, typeof (_f = typeof service_3.FlutterwaveService !== "undefined" && service_3.FlutterwaveService) === "function" ? _f : Object, typeof (_g = typeof service_2.SmsService !== "undefined" && service_2.SmsService) === "function" ? _g : Object, typeof (_h = typeof service_1.SendMailService !== "undefined" && service_1.SendMailService) === "function" ? _h : Object])
], AuthService);


/***/ }),

/***/ "./src/auth/local.strategy.ts":
/*!************************************!*\
  !*** ./src/auth/local.strategy.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super();
        this.authService = authService;
        this.authService = authService;
    }
    async validate(username, password) {
        console.log("Token:", { username, password });
        const user = await this.authService.login(username, password);
        if (!user) {
            throw new common_1.UnauthorizedException("local strategy failed");
        }
        return user;
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),

/***/ "./src/cart/cart.controller.ts":
/*!*************************************!*\
  !*** ./src/cart/cart.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CartController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const cart_service_1 = __webpack_require__(/*! ./cart.service */ "./src/cart/cart.service.ts");
const guard_1 = __webpack_require__(/*! @app/guard */ "./libs/guard/src/index.ts");
const dto_1 = __webpack_require__(/*! @app/dto */ "./libs/dto/src/index.ts");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async create(cart, req) {
        return this.cartService.upset(cart, req.user);
    }
    async findByUser(userID) {
        return this.cartService.findByUser(userID);
    }
    async findAll(query) {
        return this.cartService.findAll(query);
    }
    async update(cartID, cart) {
        return this.cartService.update(cartID, cart);
    }
    async delete(ids) {
        return this.cartService.delete(ids);
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create or replace user cart' }),
    (0, swagger_1.ApiBody)({ type: dto_1.CartDto }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CartDto !== "undefined" && dto_1.CartDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('user/:userID'),
    (0, swagger_1.ApiOperation)({ summary: 'Get cart by user ID' }),
    (0, swagger_1.ApiParam)({ name: 'userID', required: true, type: String }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Get all carts' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':cartID'),
    (0, swagger_1.ApiOperation)({ summary: 'Update cart by id' }),
    (0, swagger_1.ApiParam)({ name: 'cartID', required: true, type: String }),
    (0, swagger_1.ApiBody)({ type: dto_1.CartDto }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('cartID')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof dto_1.CartDto !== "undefined" && dto_1.CartDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Delete carts by IDs' }),
    (0, swagger_1.ApiBody)({ schema: { type: 'array', items: { type: 'string' } } }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "delete", null);
exports.CartController = CartController = __decorate([
    (0, swagger_1.ApiTags)('cart'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('carts'),
    __metadata("design:paramtypes", [typeof (_a = typeof cart_service_1.CartService !== "undefined" && cart_service_1.CartService) === "function" ? _a : Object])
], CartController);


/***/ }),

/***/ "./src/cart/cart.module.ts":
/*!*********************************!*\
  !*** ./src/cart/cart.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CartModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cart_controller_1 = __webpack_require__(/*! ./cart.controller */ "./src/cart/cart.controller.ts");
const cart_service_1 = __webpack_require__(/*! ./cart.service */ "./src/cart/cart.service.ts");
let CartModule = class CartModule {
};
exports.CartModule = CartModule;
exports.CartModule = CartModule = __decorate([
    (0, common_1.Module)({
        controllers: [cart_controller_1.CartController],
        providers: [cart_service_1.CartService],
    })
], CartModule);


/***/ }),

/***/ "./src/cart/cart.service.ts":
/*!**********************************!*\
  !*** ./src/cart/cart.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CartService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schema_1 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const service_1 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
let CartService = class CartService {
    constructor(cartModel) {
        this.cartModel = cartModel;
    }
    async upset(createCartDto, userData) {
        const existing = await this.cartModel.findOne({ userID: userData._id.toString() });
        if (existing) {
            existing.items = createCartDto.items;
            existing.subtotal = createCartDto.subtotal;
            existing.tax = createCartDto.tax || 0;
            existing.shipping = createCartDto.shipping || 0;
            existing.total = createCartDto.total;
            const saved = await existing.save();
            return (0, service_1.serviceResponse)({ data: saved, message: 'Cart updated', status: true });
        }
        const created = await this.cartModel.create({ ...createCartDto, userID: userData._id.toString() });
        return (0, service_1.serviceResponse)({ data: created, message: 'Cart created', status: true });
    }
    async findAll(query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const carts = await this.cartModel
            .find()
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })
            .exec();
        return (0, service_1.serviceResponse)({ data: carts, message: 'Carts retrieved', status: true, metadata: await (0, service_1.getMetadata)({ model: this.cartModel, query, querys: {} }) });
    }
    async findByUser(userID) {
        const cart = await this.cartModel.findOne({ userID }).exec();
        return (0, service_1.serviceResponse)({ data: cart, message: 'Cart retrieved', status: true });
    }
    async update(id, updateCartDto) {
        const updated = await this.cartModel.findByIdAndUpdate(id, updateCartDto, { new: true }).exec();
        if (!updated)
            return (0, service_1.serviceResponse)({ message: 'Cart not found', status: false });
        return (0, service_1.serviceResponse)({ data: updated, message: 'Cart updated', status: true });
    }
    async delete(ids) {
        const result = await this.cartModel.deleteMany({ _id: { $in: ids } });
        if (result.deletedCount === 0)
            return (0, service_1.serviceResponse)({ message: 'No carts deleted', status: false });
        return (0, service_1.serviceResponse)({ message: `${result.deletedCount} cart(s) deleted`, status: true });
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.CartModel.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], CartService);


/***/ }),

/***/ "./src/casl/casl-ability.factory.ts":
/*!******************************************!*\
  !*** ./src/casl/casl-ability.factory.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CaslAbilityFactory = void 0;
const ability_1 = __webpack_require__(/*! @casl/ability */ "@casl/ability");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let CaslAbilityFactory = class CaslAbilityFactory {
    constructor() { }
    async defineAbility(data) {
        const { can, cannot, build } = new ability_1.AbilityBuilder(ability_1.PureAbility);
        return build({
            detectSubjectType: (item) => item.constructor,
        });
    }
};
exports.CaslAbilityFactory = CaslAbilityFactory;
exports.CaslAbilityFactory = CaslAbilityFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CaslAbilityFactory);


/***/ }),

/***/ "./src/casl/casl.module.ts":
/*!*********************************!*\
  !*** ./src/casl/casl.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CaslModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const casl_ability_factory_1 = __webpack_require__(/*! ./casl-ability.factory */ "./src/casl/casl-ability.factory.ts");
let CaslModule = class CaslModule {
};
exports.CaslModule = CaslModule;
exports.CaslModule = CaslModule = __decorate([
    (0, common_1.Module)({
        providers: [casl_ability_factory_1.CaslAbilityFactory,],
        exports: [casl_ability_factory_1.CaslAbilityFactory,],
    })
], CaslModule);


/***/ }),

/***/ "./src/categories/categories.controller.ts":
/*!*************************************************!*\
  !*** ./src/categories/categories.controller.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const categories_service_1 = __webpack_require__(/*! ./categories.service */ "./src/categories/categories.service.ts");
const dto_1 = __webpack_require__(/*! @app/dto */ "./libs/dto/src/index.ts");
const guard_1 = __webpack_require__(/*! @app/guard */ "./libs/guard/src/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    async create(categories, req) {
        return this.categoriesService.upset(categories, req.user);
    }
    async update(categories, categoriesID, req) {
        return this.categoriesService.update(categoriesID, categories, req.user);
    }
    async findbyId(params, query) {
        return this.categoriesService.findByAny(params, query);
    }
    async findAll(query) {
        return this.categoriesService.findAll(query);
    }
    async delete(ids, req) {
        return this.categoriesService.delete(ids, req.user);
    }
};
exports.CategoriesController = CategoriesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Create a new categories" }),
    (0, swagger_1.ApiBody)({
        type: dto_1.CategoriesDto,
        description: "Creating a new categories Details",
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CategoriesDto !== "undefined" && dto_1.CategoriesDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":categoriesID"),
    (0, swagger_1.ApiOperation)({ summary: "Update existing categoriess" }),
    (0, swagger_1.ApiParam)({
        name: "categoriesID",
        description: "The categoriesID to search for",
        type: String,
    }),
    (0, swagger_1.ApiBody)({
        type: dto_1.CategoriesDto,
        description: "Updating existing categoriess",
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("categoriesID")),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.CategoriesDto !== "undefined" && dto_1.CategoriesDto) === "function" ? _c : Object, String, Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("by-any/:key/:value"),
    (0, swagger_1.ApiOperation)({ summary: "Find a categories by any key-value pair" }),
    (0, swagger_1.ApiParam)({ name: "key", description: "The key to search by", type: String }),
    (0, swagger_1.ApiParam)({
        name: "value",
        description: "The value to search for",
        type: String,
    }),
    (0, swagger_1.ApiQuery)({
        name: "page",
        required: false,
        description: "Page number for pagination",
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: "limit",
        required: false,
        description: "Number of categoriess per page",
        type: Number,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "findbyId", null);
__decorate([
    (0, common_1.Get)(""),
    (0, swagger_1.ApiOperation)({ summary: "Get all categoriess" }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiQuery)({
        name: "page",
        required: false,
        description: "Page number for pagination",
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: "limit",
        required: false,
        description: "Number of categoriess per page",
        type: Number,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Delete categoriess by their IDs" }),
    (0, swagger_1.ApiBody)({ type: [String], description: "Array of categories IDs to delete" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "delete", null);
exports.CategoriesController = CategoriesController = __decorate([
    (0, swagger_1.ApiTags)("categories"),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [typeof (_a = typeof categories_service_1.CategoriesService !== "undefined" && categories_service_1.CategoriesService) === "function" ? _a : Object])
], CategoriesController);


/***/ }),

/***/ "./src/categories/categories.module.ts":
/*!*********************************************!*\
  !*** ./src/categories/categories.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const categories_service_1 = __webpack_require__(/*! ./categories.service */ "./src/categories/categories.service.ts");
const categories_controller_1 = __webpack_require__(/*! ./categories.controller */ "./src/categories/categories.controller.ts");
let CategoriesModule = class CategoriesModule {
};
exports.CategoriesModule = CategoriesModule;
exports.CategoriesModule = CategoriesModule = __decorate([
    (0, common_1.Module)({
        controllers: [categories_controller_1.CategoriesController],
        providers: [categories_service_1.CategoriesService],
    })
], CategoriesModule);


/***/ }),

/***/ "./src/categories/categories.service.ts":
/*!**********************************************!*\
  !*** ./src/categories/categories.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schema_1 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const service_1 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
let CategoriesService = class CategoriesService {
    constructor(categoriesModel) {
        this.categoriesModel = categoriesModel;
    }
    async upset(createCategoriesDto, userData) {
        const created = await this.categoriesModel.create({ ...createCategoriesDto, userID: userData._id.toString() });
        return (0, service_1.serviceResponse)({
            data: created,
            message: "Categories plan created successfully",
            status: true,
        });
    }
    async findAll(query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const plans = await this.categoriesModel
            .find()
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })
            .exec();
        return (0, service_1.serviceResponse)({
            data: plans,
            message: "Categories plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getMetadata)({
                model: this.categoriesModel,
                query,
                querys: {},
            }),
        });
    }
    async findOne(id) {
        try {
            const plan = await this.categoriesModel.findById(id).exec();
            return (0, service_1.serviceResponse)({
                data: plan,
                message: "Categories plan retrieved successfully",
                status: true,
            });
        }
        catch (error) { }
    }
    async findByAny(params, query) {
        const { key, value } = params;
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const plans = await this.categoriesModel
            .find({ [key]: value })
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })
            .exec();
        return (0, service_1.serviceResponse)({
            data: plans,
            message: "Categories plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getMetadata)({
                model: this.categoriesModel,
                query,
                querys: { [key]: value },
            }),
        });
    }
    async update(id, updateCategoriesDto, userData) {
        try {
            const updated = await this.categoriesModel
                .findByIdAndUpdate(id, updateCategoriesDto, {
                new: true,
            })
                .exec();
            if (!updated) {
                return (0, service_1.serviceResponse)({
                    message: "Categories plan not found",
                    status: false,
                });
            }
            return (0, service_1.serviceResponse)({
                data: updated,
                message: "Categories plan updated successfully",
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: error.message,
                status: false,
            });
        }
    }
    async delete(ids, userData) {
        try {
            const result = await this.categoriesModel.deleteMany({
                _id: { $in: ids },
            });
            if (result.deletedCount === 0) {
                return (0, service_1.serviceResponse)({
                    message: "No categories plans found to delete",
                    status: false,
                });
            }
            return (0, service_1.serviceResponse)({
                message: `${result.deletedCount} categories plans deleted successfully`,
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: error.message,
                status: false,
            });
        }
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.CategoriesModel.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], CategoriesService);


/***/ }),

/***/ "./src/designs/designs.controller.ts":
/*!*******************************************!*\
  !*** ./src/designs/designs.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DesignController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const designs_service_1 = __webpack_require__(/*! ./designs.service */ "./src/designs/designs.service.ts");
const dto_1 = __webpack_require__(/*! @app/dto */ "./libs/dto/src/index.ts");
const guard_1 = __webpack_require__(/*! @app/guard */ "./libs/guard/src/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let DesignController = class DesignController {
    constructor(designService) {
        this.designService = designService;
    }
    async create(design, req) {
        return this.designService.upset(design, req.user);
    }
    async update(design, designID, req) {
        return this.designService.update(designID, design, req.user);
    }
    async findbyId(params, query) {
        return this.designService.findByAny(params, query);
    }
    async findAll(query) {
        return this.designService.findAll(query);
    }
    async delete(ids, req) {
        return this.designService.delete(ids, req.user);
    }
};
exports.DesignController = DesignController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Create a new design" }),
    (0, swagger_1.ApiBody)({
        type: dto_1.DesignDto,
        description: "Creating a new design Details",
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.DesignDto !== "undefined" && dto_1.DesignDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], DesignController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":designID"),
    (0, swagger_1.ApiOperation)({ summary: "Update existing designs" }),
    (0, swagger_1.ApiParam)({
        name: "designID",
        description: "The designID to search for",
        type: String,
    }),
    (0, swagger_1.ApiBody)({
        type: dto_1.DesignDto,
        description: "Updating existing designs",
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("designID")),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.DesignDto !== "undefined" && dto_1.DesignDto) === "function" ? _c : Object, String, Object]),
    __metadata("design:returntype", Promise)
], DesignController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("by-any/:key/:value"),
    (0, swagger_1.ApiOperation)({ summary: "Find a design by any key-value pair" }),
    (0, swagger_1.ApiParam)({ name: "key", description: "The key to search by", type: String }),
    (0, swagger_1.ApiParam)({
        name: "value",
        description: "The value to search for",
        type: String,
    }),
    (0, swagger_1.ApiQuery)({
        name: "page",
        required: false,
        description: "Page number for pagination",
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: "limit",
        required: false,
        description: "Number of designs per page",
        type: Number,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DesignController.prototype, "findbyId", null);
__decorate([
    (0, common_1.Get)(""),
    (0, swagger_1.ApiOperation)({ summary: "Get all designs" }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiQuery)({
        name: "page",
        required: false,
        description: "Page number for pagination",
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: "limit",
        required: false,
        description: "Number of designs per page",
        type: Number,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DesignController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Delete designs by their IDs" }),
    (0, swagger_1.ApiBody)({ type: [String], description: "Array of design IDs to delete" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], DesignController.prototype, "delete", null);
exports.DesignController = DesignController = __decorate([
    (0, swagger_1.ApiTags)("design"),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    (0, common_1.Controller)('designs'),
    __metadata("design:paramtypes", [typeof (_a = typeof designs_service_1.DesignService !== "undefined" && designs_service_1.DesignService) === "function" ? _a : Object])
], DesignController);


/***/ }),

/***/ "./src/designs/designs.module.ts":
/*!***************************************!*\
  !*** ./src/designs/designs.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DesignsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const designs_controller_1 = __webpack_require__(/*! ./designs.controller */ "./src/designs/designs.controller.ts");
const designs_service_1 = __webpack_require__(/*! ./designs.service */ "./src/designs/designs.service.ts");
let DesignsModule = class DesignsModule {
};
exports.DesignsModule = DesignsModule;
exports.DesignsModule = DesignsModule = __decorate([
    (0, common_1.Module)({
        controllers: [designs_controller_1.DesignController],
        providers: [designs_service_1.DesignService],
    })
], DesignsModule);


/***/ }),

/***/ "./src/designs/designs.service.ts":
/*!****************************************!*\
  !*** ./src/designs/designs.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DesignService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schema_1 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const service_1 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
let DesignService = class DesignService {
    constructor(designModel) {
        this.designModel = designModel;
    }
    async upset(createDesignDto, userData) {
        const created = await this.designModel.create({ ...createDesignDto, userID: userData._id.toString() });
        return (0, service_1.serviceResponse)({
            data: created,
            message: "Design plan created successfully",
            status: true,
        });
    }
    async findAll(query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const plans = await this.designModel
            .find()
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })
            .exec();
        return (0, service_1.serviceResponse)({
            data: plans,
            message: "Design plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getMetadata)({
                model: this.designModel,
                query,
                querys: {},
            }),
        });
    }
    async findOne(id) {
        try {
            const plan = await this.designModel.findById(id).exec();
            return (0, service_1.serviceResponse)({
                data: plan,
                message: "Design plan retrieved successfully",
                status: true,
            });
        }
        catch (error) { }
    }
    async findByAny(params, query) {
        const { key, value } = params;
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const plans = await this.designModel
            .find({ [key]: value })
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })
            .exec();
        return (0, service_1.serviceResponse)({
            data: plans,
            message: "Design plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getMetadata)({
                model: this.designModel,
                query,
                querys: { [key]: value },
            }),
        });
    }
    async update(id, updateDesignDto, userData) {
        try {
            const updated = await this.designModel
                .findByIdAndUpdate(id, updateDesignDto, {
                new: true,
            })
                .exec();
            if (!updated) {
                return (0, service_1.serviceResponse)({
                    message: "Design plan not found",
                    status: false,
                });
            }
            return (0, service_1.serviceResponse)({
                data: updated,
                message: "Design plan updated successfully",
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: error.message,
                status: false,
            });
        }
    }
    async delete(ids, userData) {
        try {
            const result = await this.designModel.deleteMany({
                _id: { $in: ids },
            });
            if (result.deletedCount === 0) {
                return (0, service_1.serviceResponse)({
                    message: "No design plans found to delete",
                    status: false,
                });
            }
            return (0, service_1.serviceResponse)({
                message: `${result.deletedCount} design plans deleted successfully`,
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: error.message,
                status: false,
            });
        }
    }
};
exports.DesignService = DesignService;
exports.DesignService = DesignService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.DesignModel.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], DesignService);


/***/ }),

/***/ "./src/global-mongoose.module.ts":
/*!***************************************!*\
  !*** ./src/global-mongoose.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalMongooseModule = void 0;
const schema_1 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
const schema_2 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
const schema_3 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const dotenv = __webpack_require__(/*! dotenv */ "dotenv");
dotenv.config();
const { MONGODB_URL, environment } = process.env;
const DBLINK = environment === 'production'
    ? MONGODB_URL
    : 'mongodb://localhost:27017/smartprints';
let GlobalMongooseModule = class GlobalMongooseModule {
};
exports.GlobalMongooseModule = GlobalMongooseModule;
exports.GlobalMongooseModule = GlobalMongooseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                global: true,
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}`,
                    },
                }),
            }),
            mongoose_1.MongooseModule.forRoot(DBLINK),
            mongoose_1.MongooseModule.forFeature([{ name: schema_1.UserModel.name, schema: schema_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: schema_2.WalletModel.name, schema: schema_2.WalletSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: schema_1.ActivityLogModel.name, schema: schema_1.ActivityLogSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: schema_1.AuthenticatorModel.name, schema: schema_1.AuthenticatorSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: schema_1.OTPModel.name, schema: schema_1.OTPSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: schema_1.CartModel.name, schema: schema_1.CartSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: schema_1.DesignModel.name, schema: schema_1.DesignSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: schema_3.ProductModel.name, schema: schema_3.ProductSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: schema_1.OrderModel.name, schema: schema_1.OrderSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: schema_1.CategoriesModel.name, schema: schema_1.CategoriesSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: schema_1.ProductTypeModel.name, schema: schema_1.ProductTypeSchema }]),
        ],
        exports: [mongoose_1.MongooseModule],
    })
], GlobalMongooseModule);


/***/ }),

/***/ "./src/orders/orders.controller.ts":
/*!*****************************************!*\
  !*** ./src/orders/orders.controller.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const orders_service_1 = __webpack_require__(/*! ./orders.service */ "./src/orders/orders.service.ts");
const dto_1 = __webpack_require__(/*! @app/dto */ "./libs/dto/src/index.ts");
const guard_1 = __webpack_require__(/*! @app/guard */ "./libs/guard/src/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async create(order, req) {
        return this.orderService.upset(order, req.user);
    }
    async update(order, orderID, req) {
        return this.orderService.update(orderID, order, req.user);
    }
    async findbyId(params, query) {
        return this.orderService.findByAny(params, query);
    }
    async findAll(query) {
        return this.orderService.findAll(query);
    }
    async delete(ids, req) {
        return this.orderService.delete(ids, req.user);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Create a new order" }),
    (0, swagger_1.ApiBody)({
        type: dto_1.OrderDto,
        description: "Creating a new order Details",
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.OrderDto !== "undefined" && dto_1.OrderDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":orderID"),
    (0, swagger_1.ApiOperation)({ summary: "Update existing orders" }),
    (0, swagger_1.ApiParam)({
        name: "orderID",
        description: "The orderID to search for",
        type: String,
    }),
    (0, swagger_1.ApiBody)({
        type: dto_1.OrderDto,
        description: "Updating existing orders",
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("orderID")),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.OrderDto !== "undefined" && dto_1.OrderDto) === "function" ? _c : Object, String, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("by-any/:key/:value"),
    (0, swagger_1.ApiOperation)({ summary: "Find a order by any key-value pair" }),
    (0, swagger_1.ApiParam)({ name: "key", description: "The key to search by", type: String }),
    (0, swagger_1.ApiParam)({
        name: "value",
        description: "The value to search for",
        type: String,
    }),
    (0, swagger_1.ApiQuery)({
        name: "page",
        required: false,
        description: "Page number for pagination",
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: "limit",
        required: false,
        description: "Number of orders per page",
        type: Number,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findbyId", null);
__decorate([
    (0, common_1.Get)(""),
    (0, swagger_1.ApiOperation)({ summary: "Get all orders" }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiQuery)({
        name: "page",
        required: false,
        description: "Page number for pagination",
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: "limit",
        required: false,
        description: "Number of orders per page",
        type: Number,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Delete orders by their IDs" }),
    (0, swagger_1.ApiBody)({ type: [String], description: "Array of order IDs to delete" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "delete", null);
exports.OrderController = OrderController = __decorate([
    (0, swagger_1.ApiTags)("order"),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [typeof (_a = typeof orders_service_1.OrderService !== "undefined" && orders_service_1.OrderService) === "function" ? _a : Object])
], OrderController);


/***/ }),

/***/ "./src/orders/orders.module.ts":
/*!*************************************!*\
  !*** ./src/orders/orders.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const orders_service_1 = __webpack_require__(/*! ./orders.service */ "./src/orders/orders.service.ts");
const orders_controller_1 = __webpack_require__(/*! ./orders.controller */ "./src/orders/orders.controller.ts");
let OrdersModule = class OrdersModule {
};
exports.OrdersModule = OrdersModule;
exports.OrdersModule = OrdersModule = __decorate([
    (0, common_1.Module)({
        controllers: [orders_controller_1.OrderController],
        providers: [orders_service_1.OrderService],
    })
], OrdersModule);


/***/ }),

/***/ "./src/orders/orders.service.ts":
/*!**************************************!*\
  !*** ./src/orders/orders.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schema_1 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const service_1 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
let OrderService = class OrderService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async upset(createOrderDto, userData) {
        const created = await this.orderModel.create({ ...createOrderDto, userID: userData._id.toString() });
        return (0, service_1.serviceResponse)({
            data: created,
            message: "Order plan created successfully",
            status: true,
        });
    }
    async findAll(query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const plans = await this.orderModel
            .find()
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })
            .exec();
        return (0, service_1.serviceResponse)({
            data: plans,
            message: "Order plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getMetadata)({
                model: this.orderModel,
                query,
                querys: {},
            }),
        });
    }
    async findOne(id) {
        try {
            const plan = await this.orderModel.findById(id).exec();
            return (0, service_1.serviceResponse)({
                data: plan,
                message: "Order plan retrieved successfully",
                status: true,
            });
        }
        catch (error) { }
    }
    async findByAny(params, query) {
        const { key, value } = params;
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const plans = await this.orderModel
            .find({ [key]: value })
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })
            .exec();
        return (0, service_1.serviceResponse)({
            data: plans,
            message: "Order plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getMetadata)({
                model: this.orderModel,
                query,
                querys: { [key]: value },
            }),
        });
    }
    async update(id, updateOrderDto, userData) {
        try {
            const updated = await this.orderModel
                .findByIdAndUpdate(id, updateOrderDto, {
                new: true,
            })
                .exec();
            if (!updated) {
                return (0, service_1.serviceResponse)({
                    message: "Order plan not found",
                    status: false,
                });
            }
            return (0, service_1.serviceResponse)({
                data: updated,
                message: "Order plan updated successfully",
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: error.message,
                status: false,
            });
        }
    }
    async delete(ids, userData) {
        try {
            const result = await this.orderModel.deleteMany({
                _id: { $in: ids },
            });
            if (result.deletedCount === 0) {
                return (0, service_1.serviceResponse)({
                    message: "No order plans found to delete",
                    status: false,
                });
            }
            return (0, service_1.serviceResponse)({
                message: `${result.deletedCount} order plans deleted successfully`,
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: error.message,
                status: false,
            });
        }
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.OrderModel.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], OrderService);


/***/ }),

/***/ "./src/products/products.controller.ts":
/*!*********************************************!*\
  !*** ./src/products/products.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const products_service_1 = __webpack_require__(/*! ./products.service */ "./src/products/products.service.ts");
const dto_1 = __webpack_require__(/*! @app/dto */ "./libs/dto/src/index.ts");
const guard_1 = __webpack_require__(/*! @app/guard */ "./libs/guard/src/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async create(product, req) {
        return this.productService.upset(product, req.user);
    }
    async update(product, productID, req) {
        return this.productService.update(productID, product, req.user);
    }
    async findbyId(params, query) {
        return this.productService.findByAny(params, query);
    }
    async findAll(query) {
        return this.productService.findAll(query);
    }
    async delete(ids, req) {
        return this.productService.delete(ids, req.user);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Create a new product" }),
    (0, swagger_1.ApiBody)({
        type: dto_1.ProductDto,
        description: "Creating a new product Details",
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.ProductDto !== "undefined" && dto_1.ProductDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":productID"),
    (0, swagger_1.ApiOperation)({ summary: "Update existing products" }),
    (0, swagger_1.ApiParam)({
        name: "productID",
        description: "The productID to search for",
        type: String,
    }),
    (0, swagger_1.ApiBody)({
        type: dto_1.ProductDto,
        description: "Updating existing products",
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("productID")),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.ProductDto !== "undefined" && dto_1.ProductDto) === "function" ? _c : Object, String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("by-any/:key/:value"),
    (0, swagger_1.ApiOperation)({ summary: "Find a product by any key-value pair" }),
    (0, swagger_1.ApiParam)({ name: "key", description: "The key to search by", type: String }),
    (0, swagger_1.ApiParam)({
        name: "value",
        description: "The value to search for",
        type: String,
    }),
    (0, swagger_1.ApiQuery)({
        name: "page",
        required: false,
        description: "Page number for pagination",
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: "limit",
        required: false,
        description: "Number of products per page",
        type: Number,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findbyId", null);
__decorate([
    (0, common_1.Get)(""),
    (0, swagger_1.ApiOperation)({ summary: "Get all products" }),
    (0, swagger_1.ApiQuery)({
        name: "page",
        required: false,
        description: "Page number for pagination",
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: "limit",
        required: false,
        description: "Number of products per page",
        type: Number,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Delete products by their IDs" }),
    (0, swagger_1.ApiBody)({ type: [String], description: "Array of product IDs to delete" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)("product"),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [typeof (_a = typeof products_service_1.ProductService !== "undefined" && products_service_1.ProductService) === "function" ? _a : Object])
], ProductController);


/***/ }),

/***/ "./src/products/products.module.ts":
/*!*****************************************!*\
  !*** ./src/products/products.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const products_service_1 = __webpack_require__(/*! ./products.service */ "./src/products/products.service.ts");
const products_controller_1 = __webpack_require__(/*! ./products.controller */ "./src/products/products.controller.ts");
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        controllers: [products_controller_1.ProductController],
        providers: [products_service_1.ProductService],
    })
], ProductsModule);


/***/ }),

/***/ "./src/products/products.service.ts":
/*!******************************************!*\
  !*** ./src/products/products.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schema_1 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const service_1 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async upset(createProductDto, userData) {
        const created = await this.productModel.create(createProductDto);
        return (0, service_1.serviceResponse)({
            data: created,
            message: "Product plan created successfully",
            status: true,
        });
    }
    async findAll(query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const plans = await this.productModel
            .find()
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })
            .exec();
        return (0, service_1.serviceResponse)({
            data: plans,
            message: "Product plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getMetadata)({
                model: this.productModel,
                query,
                querys: {},
            }),
        });
    }
    async findOne(id) {
        try {
            const plan = await this.productModel.findById(id).exec();
            return (0, service_1.serviceResponse)({
                data: plan,
                message: "Product plan retrieved successfully",
                status: true,
            });
        }
        catch (error) { }
    }
    async findByAny(params, query) {
        const { key, value } = params;
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const plans = await this.productModel
            .find({ [key]: value })
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })
            .exec();
        return (0, service_1.serviceResponse)({
            data: plans,
            message: "Product plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getMetadata)({
                model: this.productModel,
                query,
                querys: { [key]: value },
            }),
        });
    }
    async update(id, updateProductDto, userData) {
        try {
            const updated = await this.productModel
                .findByIdAndUpdate(id, updateProductDto, {
                new: true,
            })
                .exec();
            if (!updated) {
                return (0, service_1.serviceResponse)({
                    message: "Product plan not found",
                    status: false,
                });
            }
            return (0, service_1.serviceResponse)({
                data: updated,
                message: "Product plan updated successfully",
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: error.message,
                status: false,
            });
        }
    }
    async delete(ids, userData) {
        try {
            const result = await this.productModel.deleteMany({
                _id: { $in: ids },
            });
            if (result.deletedCount === 0) {
                return (0, service_1.serviceResponse)({
                    message: "No product plans found to delete",
                    status: false,
                });
            }
            return (0, service_1.serviceResponse)({
                message: `${result.deletedCount} product plans deleted successfully`,
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: error.message,
                status: false,
            });
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.ProductModel.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ProductService);


/***/ }),

/***/ "./src/uploads/uploads.controller.ts":
/*!*******************************************!*\
  !*** ./src/uploads/uploads.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const uploads_service_1 = __webpack_require__(/*! ./uploads.service */ "./src/uploads/uploads.service.ts");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const multer_1 = __webpack_require__(/*! multer */ "multer");
const path_1 = __webpack_require__(/*! path */ "path");
const crypto_1 = __webpack_require__(/*! crypto */ "crypto");
const fs_1 = __webpack_require__(/*! fs */ "fs");
const service_1 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
let UploadsController = class UploadsController {
    constructor(uploadsService) {
        this.uploadsService = uploadsService;
    }
    uploadFile(req, files) {
        const host = req.protocol + '://' + req.get('host');
        const fileUrls = files?.map((file) => ({
            originalname: file.originalname,
            url: `${host}/v1/upload/file/${file.filename}`,
        }));
        return (0, service_1.serviceResponse)({
            message: fileUrls.length > 0 ? 'Files uploaded successfully' : 'No files were uploaded.',
            data: fileUrls,
            status: fileUrls.length > 0,
        });
    }
    getFile(filename, res) {
        const filePath = (0, path_1.join)(__dirname, '..', 'uploads', filename);
        if (!(0, fs_1.existsSync)(filePath)) {
            throw new common_1.NotFoundException('File not found');
        }
        return res.sendFile(filePath);
    }
    async uploadImages(files, folder) {
        if (!folder) {
            throw new common_1.BadRequestException('Folder name is required as a query parameter.');
        }
        return this.uploadsService.uploadImages(files, folder);
    }
};
exports.UploadsController = UploadsController;
__decorate([
    (0, common_1.Post)('file'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 10, getMulterConfig())),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                files: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary',
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Files uploaded successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'No files uploaded' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof service_1.ObjectReturnType !== "undefined" && service_1.ObjectReturnType) === "function" ? _c : Object)
], UploadsController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)('file/:filename'),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UploadsController.prototype, "getFile", null);
__decorate([
    (0, common_1.Post)('cloudinary'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload multiple images to Cloudinary' }),
    (0, swagger_1.ApiQuery)({ name: 'folder', required: true, type: String, example: 'products' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                files: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary',
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Images uploaded successfully' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 10)),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Query)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], UploadsController.prototype, "uploadImages", null);
exports.UploadsController = UploadsController = __decorate([
    (0, swagger_1.ApiTags)('Uploads'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [typeof (_a = typeof uploads_service_1.UploadsService !== "undefined" && uploads_service_1.UploadsService) === "function" ? _a : Object])
], UploadsController);
function getMulterConfig() {
    const uploadDir = './uploads';
    if (!(0, fs_1.existsSync)(uploadDir)) {
        (0, fs_1.mkdirSync)(uploadDir);
    }
    return {
        storage: (0, multer_1.diskStorage)({
            destination: uploadDir,
            filename: (req, file, callback) => {
                const uniqueId = `${(0, crypto_1.randomInt)(999)}-${(0, crypto_1.randomUUID)().replace(/\D/g, '').substring(0, 6)}-${Date.now()}`;
                const sanitizedFilename = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, '');
                const finalFilename = `${uniqueId}-${sanitizedFilename}`;
                callback(null, finalFilename);
            },
        }),
    };
}


/***/ }),

/***/ "./src/uploads/uploads.module.ts":
/*!***************************************!*\
  !*** ./src/uploads/uploads.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const uploads_service_1 = __webpack_require__(/*! ./uploads.service */ "./src/uploads/uploads.service.ts");
const uploads_controller_1 = __webpack_require__(/*! ./uploads.controller */ "./src/uploads/uploads.controller.ts");
let UploadsModule = class UploadsModule {
};
exports.UploadsModule = UploadsModule;
exports.UploadsModule = UploadsModule = __decorate([
    (0, common_1.Module)({
        controllers: [uploads_controller_1.UploadsController],
        providers: [uploads_service_1.UploadsService],
        exports: [uploads_service_1.UploadsService],
    })
], UploadsModule);


/***/ }),

/***/ "./src/uploads/uploads.service.ts":
/*!****************************************!*\
  !*** ./src/uploads/uploads.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const multer_1 = __webpack_require__(/*! multer */ "multer");
const path_1 = __webpack_require__(/*! path */ "path");
const cloudinary_1 = __webpack_require__(/*! cloudinary */ "cloudinary");
const streamifier = __webpack_require__(/*! streamifier */ "streamifier");
const dotenv = __webpack_require__(/*! dotenv */ "dotenv");
dotenv.config();
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
let UploadsService = class UploadsService {
    getMulterConfig() {
        return {
            storage: (0, multer_1.diskStorage)({
                destination: './uploads',
                filename: (req, file, callback) => {
                    const filename = `${Date.now()}${(0, path_1.extname)(file.originalname)}`;
                    callback(null, filename);
                },
            }),
        };
    }
    async uploadImages(files, folder) {
        const uploadResults = [];
        for (const file of files) {
            try {
                const result = await this.uploadToCloudinary(file.buffer, folder);
                uploadResults.push({
                    originalname: result.public_id,
                    url: result.secure_url,
                });
            }
            catch (error) {
                console.error(`Error uploading file ${file.originalname}:`, error);
                uploadResults.push({
                    originalname: file.originalname,
                    url: null,
                    error: error.message || 'Upload failed',
                });
            }
        }
        return uploadResults;
    }
    uploadToCloudinary(buffer, folder) {
        return new Promise((resolve, reject) => {
            const stream = cloudinary_1.v2.uploader.upload_stream({
                folder,
                resource_type: 'auto',
                allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'pdf'],
            }, (error, result) => {
                if (error)
                    return reject(error);
                resolve(result);
            });
            streamifier.createReadStream(buffer).pipe(stream);
        });
    }
};
exports.UploadsService = UploadsService;
exports.UploadsService = UploadsService = __decorate([
    (0, common_1.Injectable)()
], UploadsService);


/***/ }),

/***/ "./src/users/users.controller.ts":
/*!***************************************!*\
  !*** ./src/users/users.controller.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const guard_1 = __webpack_require__(/*! @app/guard */ "./libs/guard/src/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const dto_1 = __webpack_require__(/*! @app/dto */ "./libs/dto/src/index.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/users/users.service.ts");
const enum_1 = __webpack_require__(/*! @app/enum */ "./libs/enum/src/index.ts");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(user, req) {
        return this.userService.upset(user, req.user);
    }
    async savePlayerId(body) {
        return this.userService.savePlayerId(body);
    }
    async update(user, req) {
        return this.userService.update(user, req.user);
    }
    async findbyId(params, query) {
        return this.userService.findbyAny(params, query);
    }
    async findAll(query) {
        return this.userService.findAll(query);
    }
    async delete(ids, req) {
        return this.userService.delete(ids, req.user);
    }
    async deleteByEmails(ids, req) {
        return this.userService.deleteByEmails(ids);
    }
    async findRecentUsers(period, query) {
        return this.userService.findRecentUsers(period, query);
    }
    async countRecentUsers() {
        return this.userService.countRecentUsers();
    }
    async getNotification(params, query) {
        return this.userService.getNotification(params, query);
    }
    async getAllUserRefList(id) {
        return this.userService.getAllUserRefList(id);
    }
    async markAllUserNotificationAsRead(req) {
        return this.userService.markAllUserNotificationAsRead(req.user._id);
    }
    async getUnreadNotificationCount(req) {
        return this.userService.getUnreadNotificationCount(req.user._id);
    }
    async changeUserStatus(userID, status, req) {
        return this.userService.changeUserStatus(userID, status, req.user);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new user' }),
    (0, swagger_1.ApiBody)({
        type: dto_1.UserDTO,
        description: 'Creating a new user Details',
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.UserDTO !== "undefined" && dto_1.UserDTO) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('onesignal'),
    (0, swagger_1.ApiOperation)({ summary: 'Save player ID' }),
    (0, swagger_1.ApiBody)({
        description: 'Saving player ID',
        schema: {
            type: 'object',
            properties: {
                playerId: { type: 'string', example: 'abcdef123456' },
                userID: { type: 'string', example: 'user_001' },
            },
            required: ['playerId', 'userID'],
        },
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "savePlayerId", null);
__decorate([
    (0, common_1.Patch)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update existing users' }),
    (0, swagger_1.ApiBody)({
        type: dto_1.UserDTO,
        description: 'Updating existing users',
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.UserDTO !== "undefined" && dto_1.UserDTO) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('by-any/:key/:value'),
    (0, swagger_1.ApiOperation)({ summary: 'Find a user by any key-value pair' }),
    (0, swagger_1.ApiParam)({ name: 'key', description: 'The key to search by', type: String }),
    (0, swagger_1.ApiParam)({
        name: 'value',
        description: 'The value to search for',
        type: String,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
        description: 'Page number for pagination',
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
        description: 'Number of users per page',
        type: Number,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findbyId", null);
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users' }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
        description: 'Page number for pagination',
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
        description: 'Number of users per page',
        type: Number,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Delete users by their IDs' }),
    (0, swagger_1.ApiBody)({ type: [String], description: 'Array of user IDs to delete' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)('email'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete users by their Emails' }),
    (0, swagger_1.ApiBody)({ type: [String], description: 'Array of user IDs to delete' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteByEmails", null);
__decorate([
    (0, common_1.Get)('period'),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
        description: 'Page number for pagination',
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
        description: 'Number of users per page',
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'period',
        required: true,
        description: `'day' | 'week' | 'month'`,
        type: String,
    }),
    (0, swagger_1.ApiOperation)({ summary: '' }),
    __param(0, (0, common_1.Query)('period')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findRecentUsers", null);
__decorate([
    (0, common_1.Get)('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "countRecentUsers", null);
__decorate([
    (0, common_1.Get)('notification/by-any/:key/:value'),
    (0, swagger_1.ApiOperation)({ summary: 'Find a user notification by any key-value pair' }),
    (0, swagger_1.ApiParam)({ name: 'key', description: 'The key to search by', type: String }),
    (0, swagger_1.ApiParam)({
        name: 'value',
        description: 'The value to search for',
        type: String,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
        description: 'Number of users to return',
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'skip',
        required: false,
        description: 'Number of users to skip for pagination',
        type: Number,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getNotification", null);
__decorate([
    (0, common_1.Get)('user-ref-list/:id'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiParam)({ name: '_id', description: 'The _id of the user', type: String }),
    (0, swagger_1.ApiOperation)({ summary: 'Get all user ref list' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUserRefList", null);
__decorate([
    (0, common_1.Patch)('notification/mark-all-as-read'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Mark all user notifications as read' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "markAllUserNotificationAsRead", null);
__decorate([
    (0, common_1.Get)('notification/unread-count'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get unread notification count for user' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUnreadNotificationCount", null);
__decorate([
    (0, common_1.Patch)('change-status/:userID/:status'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Change user status' }),
    (0, swagger_1.ApiParam)({ name: 'userID', description: 'The ID of the user to update', type: String }),
    (0, swagger_1.ApiParam)({ enum: enum_1.UserStatus, example: enum_1.UserStatus.ACTIVE, name: 'status', description: 'The new status for the user', type: String }),
    __param(0, (0, common_1.Param)('userID')),
    __param(1, (0, common_1.Param)('status')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changeUserStatus", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),

/***/ "./src/users/users.module.ts":
/*!***********************************!*\
  !*** ./src/users/users.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/users/users.service.ts");
const service_1 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/users/users.controller.ts");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        providers: [users_service_1.UsersService, service_1.NotificationService, service_1.NotificationGateway, service_1.SendMailService],
        exports: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController]
    })
], UsersModule);


/***/ }),

/***/ "./src/users/users.service.ts":
/*!************************************!*\
  !*** ./src/users/users.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const schema_1 = __webpack_require__(/*! @app/schema */ "./libs/schema/src/index.ts");
const service_1 = __webpack_require__(/*! @app/service */ "./libs/service/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const enum_1 = __webpack_require__(/*! @app/enum */ "./libs/enum/src/index.ts");
const moment = __webpack_require__(/*! moment */ "moment");
let UsersService = class UsersService {
    constructor(userModel, activityLogModel, notificationActivity) {
        this.userModel = userModel;
        this.activityLogModel = activityLogModel;
        this.notificationActivity = notificationActivity;
    }
    async upset(user, userData) {
        try {
            const created = await this.userModel.create(user);
            this.notificationActivity.notificationActivity({
                action: "create",
                entityType: "User",
                entityID: created._id.toString(),
                userID: userData?._id,
                details: `${userData?.fullname} created an user`,
                playerIds: [userData?.playerId ?? ""],
            });
            return (0, service_1.serviceResponse)({
                message: "created successfully",
                data: created,
            });
        }
        catch (error) {
            throw new common_1.NotAcceptableException(error.message);
        }
    }
    async update(user, userData) {
        const updatedRole = await this.userModel.findByIdAndUpdate(user._id, user, {
            new: true,
        });
        this.notificationActivity.notificationActivity({
            action: "updated",
            entityType: "User",
            entityID: updatedRole._id.toString(),
            userID: userData?._id,
            playerIds: [userData?.playerId ?? ""],
            details: `${userData?.fullname} updated an user`,
        });
        return (0, service_1.serviceResponse)({
            message: "updated successfully",
            data: updatedRole,
        });
    }
    async savePlayerId(body) {
        const user = await this.userModel.findByIdAndUpdate(body.userID, { playerId: body.playerId }, { new: true });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        return (0, service_1.serviceResponse)({
            message: "Player ID saved successfully",
            data: user,
        });
    }
    async findbyId(id) {
        try {
            const data = await this.userModel.findById(id);
            if (!data) {
                throw new common_1.NotFoundException();
            }
            return (0, service_1.serviceResponse)({
                message: "Success",
                data,
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async findbyAny(params, query) {
        const { key, value } = params;
        const { page = 1, limit = 10 } = query;
        const skip = (page - 1) * limit;
        const result = await this.userModel
            .find({ [key]: value })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
        if (!result.length) {
            throw new common_1.NotFoundException(value + " not found in field " + key);
        }
        return (0, service_1.serviceResponse)({
            message: "Success",
            data: result,
            metadata: await (0, service_1.getMetadata)({
                model: this.userModel,
                query,
                querys: { [key]: value },
            }),
        });
    }
    async findAll(query) {
        const { page = 1, limit = 10 } = query;
        const skip = (page - 1) * limit;
        try {
            const data = await this.userModel
                .find()
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit);
            return (0, service_1.serviceResponse)({
                message: "Success",
                data,
                metadata: await (0, service_1.getMetadata)({ model: this.userModel, query, querys: {} }),
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async delete(_id, userData) {
        const user = await this.userModel.find({ _id });
        for (let i = 0; i < user.length; i++) {
        }
        const data = await this.userModel.deleteMany({ _id });
        try {
            return (0, service_1.serviceResponse)({
                message: "Success",
                data,
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async deleteByEmails(_id) {
        const data = await this.userModel.deleteMany({ email: _id });
        try {
            return (0, service_1.serviceResponse)({
                message: "Success",
                data,
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async findRecentUsers(period, query) {
        const { page = 1, limit = 10 } = query;
        const skip = (page - 1) * limit;
        let startDate = moment().startOf("day");
        let endDate = moment().endOf("day");
        switch (period) {
            case "day":
                startDate = moment().subtract(1, "day").startOf("day");
                endDate = moment().endOf("day");
                break;
            case "week":
                startDate = moment().subtract(7, "days").startOf("day");
                break;
            case "month":
                startDate = moment().subtract(1, "month").startOf("day");
                break;
        }
        const result = await this.userModel
            .find({ createdAt: { $gte: startDate.toDate(), $lte: endDate.toDate() } })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
        return (0, service_1.serviceResponse)({
            message: `Users registered in the last ${period}`,
            data: result,
            metadata: await (0, service_1.getMetadata)({
                model: this.userModel,
                query,
                querys: {
                    createdAt: { $gte: startDate.toDate(), $lte: endDate.toDate() },
                },
            }),
        });
    }
    async countRecentUsers() {
        const today = moment().endOf("day");
        const lastDayStart = moment().subtract(1, "day").startOf("day");
        const lastWeekStart = moment().subtract(7, "days").startOf("day");
        const lastMonthStart = moment().subtract(1, "month").startOf("day");
        const userTypes = Object.values(enum_1.UserType);
        const results = await Promise.all(userTypes.map(async (type) => {
            const [dayCount, weekCount, monthCount, totalCount] = await Promise.all([
                this.userModel.countDocuments({
                    userType: type,
                    createdAt: { $gte: lastDayStart.toDate(), $lte: today.toDate() },
                }),
                this.userModel.countDocuments({
                    userType: type,
                    createdAt: { $gte: lastWeekStart.toDate(), $lte: today.toDate() },
                }),
                this.userModel.countDocuments({
                    userType: type,
                    createdAt: {
                        $gte: lastMonthStart.toDate(),
                        $lte: today.toDate(),
                    },
                }),
                this.userModel.countDocuments({ userType: type }),
            ]);
            return {
                userType: type,
                lastDay: dayCount,
                lastWeek: weekCount,
                lastMonth: monthCount,
                total: totalCount,
            };
        }));
        const data = results.reduce((acc, curr) => {
            acc[curr.userType] = {
                lastDay: curr.lastDay,
                lastWeek: curr.lastWeek,
                lastMonth: curr.lastMonth,
                total: curr.total,
            };
            return acc;
        }, {});
        return (0, service_1.serviceResponse)({
            message: "User count by type fetched successfully",
            data,
        });
    }
    async getNotification(params, query) {
        const { key, value } = params;
        const { page = 1, limit = 10 } = query;
        const skip = (page - 1) * limit;
        const result = await this.activityLogModel
            .find({ [key]: value })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
        return (0, service_1.serviceResponse)({
            message: "Success",
            data: result,
            metadata: await (0, service_1.getMetadata)({
                model: this.activityLogModel,
                query,
                querys: { [key]: value },
            }),
        });
    }
    async getAllUserRefList(_id) {
        const data = await this.userModel
            .find({ refBy: _id })
            .select("fullname email phone profileImage state refCode refBy userType type ")
            .populate("refBy", "fullname email phone profileImage state refCode refBy referral userType type createdAt ");
        return (0, service_1.serviceResponse)({
            message: "Success",
            status: true,
            data,
        });
    }
    async markAllUserNotificationAsRead(userID) {
        const result = await this.activityLogModel.updateMany({ userID, isRead: false }, { $set: { isRead: true } });
        return (0, service_1.serviceResponse)({
            message: "All notifications marked as read",
            status: true,
            data: result,
        });
    }
    async getUnreadNotificationCount(userID) {
        const count = await this.activityLogModel.countDocuments({
            userID,
            isRead: false,
        });
        return (0, service_1.serviceResponse)({
            message: "Unread notification count fetched successfully",
            status: true,
            data: { count },
        });
    }
    async changeUserStatus(userID, status, userData) {
        try {
            const updatedUser = await this.userModel.findByIdAndUpdate(userID, { status }, { new: true });
            if (!updatedUser) {
                return (0, service_1.serviceResponse)({
                    message: "User not found",
                    status: false,
                });
            }
            this.notificationActivity.notificationActivity({
                action: "update",
                entityType: "User",
                entityID: updatedUser._id.toString(),
                userID: updatedUser?._id.toString(),
                details: `${updatedUser?.fullname} changed user status to ${status}`,
                playerIds: [updatedUser?.playerId ?? ""],
            });
            return (0, service_1.serviceResponse)({
                message: "User status updated successfully",
                status: true,
                data: updatedUser,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: error.message,
                status: false,
            });
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.UserModel.name)),
    __param(1, (0, mongoose_1.InjectModel)(schema_1.ActivityLogModel.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof service_1.NotificationService !== "undefined" && service_1.NotificationService) === "function" ? _c : Object])
], UsersService);


/***/ }),

/***/ "@casl/ability":
/*!********************************!*\
  !*** external "@casl/ability" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@casl/ability");

/***/ }),

/***/ "@nestjs-modules/mailer":
/*!*****************************************!*\
  !*** external "@nestjs-modules/mailer" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/throttler":
/*!************************************!*\
  !*** external "@nestjs/throttler" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@nestjs/throttler");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("mongoose-unique-validator");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "otplib":
/*!*************************!*\
  !*** external "otplib" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("otplib");

/***/ }),

/***/ "passport-facebook":
/*!************************************!*\
  !*** external "passport-facebook" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("passport-facebook");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("passport-google-oauth20");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "streamifier":
/*!******************************!*\
  !*** external "streamifier" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("streamifier");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const express = __webpack_require__(/*! express */ "express");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const helmet_1 = __webpack_require__(/*! helmet */ "helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, helmet_1.default)());
    app.enableCors({ origin: true, credentials: true });
    app.use(express.json({ limit: "50mb" }));
    app.use(express.urlencoded({ limit: "50mb", extended: true }));
    const config = app.get(config_1.ConfigService);
    const globalPrefix = "v1";
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 1912;
    await app.startAllMicroservices();
    const configSwag = new swagger_1.DocumentBuilder()
        .setTitle("DiFamar")
        .setDescription(`
      Authentication tokens information:
      - Access Token expiration: 1 day
      - Refresh Token expiration: 1 month
    `)
        .setVersion("1.0")
        .addBearerAuth({
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        name: "Authorization",
        in: "header",
    }, "access-token")
        .build();
    const options = {
        operationIdFactory: (controllerKey, methodKey) => methodKey,
    };
    const document = swagger_1.SwaggerModule.createDocument(app, configSwag, options);
    swagger_1.SwaggerModule.setup("docs", app, document, {
        swaggerOptions: {
            persistAuthorization: true,
            filter: true,
            showRequestDuration: true,
            displayRequestDuration: true,
            displayResponseTime: true,
            displayResponseStatusCode: true,
            displayResponseStatus: true,
        },
    });
    await app.listen(port, () => {
        common_1.Logger.log("Listening at http://localhost:" + port + "/" + globalPrefix);
        common_1.Logger.log("Documentation at http://localhost:" + port + "/docs");
        common_1.Logger.log(`Running in ${config.get("environment")} mode`);
    });
}
bootstrap();

})();

/******/ })()
;