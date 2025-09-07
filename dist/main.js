/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./global-mongoose.module.ts":
/*!***********************************!*\
  !*** ./global-mongoose.module.ts ***!
  \***********************************/
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
            mongoose_1.MongooseModule.forFeature([{ name: schema_3.ProductModel.name, schema: schema_3.ProductSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: schema_1.CategoriesModel.name, schema: schema_1.CategoriesSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: schema_1.ProductTypeModel.name, schema: schema_1.ProductTypeSchema }]),
        ],
        exports: [mongoose_1.MongooseModule],
    })
], GlobalMongooseModule);


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
__exportStar(__webpack_require__(/*! ./reference/categories.schema */ "./libs/schema/src/reference/categories.schema.ts"), exports);
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
let ProductModel = class ProductModel {
};
exports.ProductModel = ProductModel;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductModel.prototype, "id", void 0);
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
    (0, mongoose_1.Prop)({}),
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
    __metadata("design:type", String)
], ProductModel.prototype, "categoryID", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Number)
], ProductModel.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], ProductModel.prototype, "imageUrls", void 0);
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
    (0, mongoose_1.Prop)({ required: true, unique: true }),
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
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], BankAccount.prototype, "bankName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], BankAccount.prototype, "accountNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
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
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], NextOfKin.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], NextOfKin.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], NextOfKin.prototype, "relationship", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: enum_1.Gender }),
    __metadata("design:type", String)
], NextOfKin.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], NextOfKin.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], NextOfKin.prototype, "residentialAddress", void 0);
class BankStatement {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], BankStatement.prototype, "documentUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
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
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Referral.prototype, "refCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ["active", "inactive"] }),
    __metadata("design:type", String)
], Referral.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
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
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserModel.prototype, "fullname", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserModel.prototype, "firstname", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserModel.prototype, "lastname", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
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
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const casl_module_1 = __webpack_require__(/*! ./casl/casl.module */ "./src/casl/casl.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const products_module_1 = __webpack_require__(/*! ./products/products.module */ "./src/products/products.module.ts");
const global_mongoose_module_1 = __webpack_require__(/*! global-mongoose.module */ "./global-mongoose.module.ts");
const categories_module_1 = __webpack_require__(/*! ./categories/categories.module */ "./src/categories/categories.module.ts");
const orders_module_1 = __webpack_require__(/*! ./orders/orders.module */ "./src/orders/orders.module.ts");
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
            users_module_1.UsersModule, products_module_1.ProductsModule, orders_module_1.OrdersModule, categories_module_1.CategoriesModule, auth_module_1.AuthModule
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const create_auth_dto_1 = __webpack_require__(/*! ./dto/create-auth.dto */ "./src/auth/dto/create-auth.dto.ts");
const update_auth_dto_1 = __webpack_require__(/*! ./dto/update-auth.dto */ "./src/auth/dto/update-auth.dto.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    create(createAuthDto) {
        return this.authService.create(createAuthDto);
    }
    findAll() {
        return this.authService.findAll();
    }
    findOne(id) {
        return this.authService.findOne(+id);
    }
    update(id, updateAuthDto) {
        return this.authService.update(+id, updateAuthDto);
    }
    remove(id) {
        return this.authService.remove(+id);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_auth_dto_1.CreateAuthDto !== "undefined" && create_auth_dto_1.CreateAuthDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_auth_dto_1.UpdateAuthDto !== "undefined" && update_auth_dto_1.UpdateAuthDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "remove", null);
exports.AuthController = AuthController = __decorate([
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
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/auth/auth.controller.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService],
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AuthService = class AuthService {
    create(createAuthDto) {
        return 'This action adds a new auth';
    }
    findAll() {
        return `This action returns all auth`;
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    update(id, updateAuthDto) {
        return `This action updates a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);


/***/ }),

/***/ "./src/auth/dto/create-auth.dto.ts":
/*!*****************************************!*\
  !*** ./src/auth/dto/create-auth.dto.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAuthDto = void 0;
class CreateAuthDto {
}
exports.CreateAuthDto = CreateAuthDto;


/***/ }),

/***/ "./src/auth/dto/update-auth.dto.ts":
/*!*****************************************!*\
  !*** ./src/auth/dto/update-auth.dto.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAuthDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_auth_dto_1 = __webpack_require__(/*! ./create-auth.dto */ "./src/auth/dto/create-auth.dto.ts");
class UpdateAuthDto extends (0, swagger_1.PartialType)(create_auth_dto_1.CreateAuthDto) {
}
exports.UpdateAuthDto = UpdateAuthDto;


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
const create_category_dto_1 = __webpack_require__(/*! ./dto/create-category.dto */ "./src/categories/dto/create-category.dto.ts");
const update_category_dto_1 = __webpack_require__(/*! ./dto/update-category.dto */ "./src/categories/dto/update-category.dto.ts");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    create(createCategoryDto) {
        return this.categoriesService.create(createCategoryDto);
    }
    findAll() {
        return this.categoriesService.findAll();
    }
    findOne(id) {
        return this.categoriesService.findOne(+id);
    }
    update(id, updateCategoryDto) {
        return this.categoriesService.update(+id, updateCategoryDto);
    }
    remove(id) {
        return this.categoriesService.remove(+id);
    }
};
exports.CategoriesController = CategoriesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_category_dto_1.CreateCategoryDto !== "undefined" && create_category_dto_1.CreateCategoryDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_category_dto_1.UpdateCategoryDto !== "undefined" && update_category_dto_1.UpdateCategoryDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "remove", null);
exports.CategoriesController = CategoriesController = __decorate([
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let CategoriesService = class CategoriesService {
    create(createCategoryDto) {
        return 'This action adds a new category';
    }
    findAll() {
        return `This action returns all categories`;
    }
    findOne(id) {
        return `This action returns a #${id} category`;
    }
    update(id, updateCategoryDto) {
        return `This action updates a #${id} category`;
    }
    remove(id) {
        return `This action removes a #${id} category`;
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);


/***/ }),

/***/ "./src/categories/dto/create-category.dto.ts":
/*!***************************************************!*\
  !*** ./src/categories/dto/create-category.dto.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCategoryDto = void 0;
class CreateCategoryDto {
}
exports.CreateCategoryDto = CreateCategoryDto;


/***/ }),

/***/ "./src/categories/dto/update-category.dto.ts":
/*!***************************************************!*\
  !*** ./src/categories/dto/update-category.dto.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCategoryDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_category_dto_1 = __webpack_require__(/*! ./create-category.dto */ "./src/categories/dto/create-category.dto.ts");
class UpdateCategoryDto extends (0, swagger_1.PartialType)(create_category_dto_1.CreateCategoryDto) {
}
exports.UpdateCategoryDto = UpdateCategoryDto;


/***/ }),

/***/ "./src/orders/dto/create-order.dto.ts":
/*!********************************************!*\
  !*** ./src/orders/dto/create-order.dto.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateOrderDto = void 0;
class CreateOrderDto {
}
exports.CreateOrderDto = CreateOrderDto;


/***/ }),

/***/ "./src/orders/dto/update-order.dto.ts":
/*!********************************************!*\
  !*** ./src/orders/dto/update-order.dto.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateOrderDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_order_dto_1 = __webpack_require__(/*! ./create-order.dto */ "./src/orders/dto/create-order.dto.ts");
class UpdateOrderDto extends (0, swagger_1.PartialType)(create_order_dto_1.CreateOrderDto) {
}
exports.UpdateOrderDto = UpdateOrderDto;


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
exports.OrdersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const orders_service_1 = __webpack_require__(/*! ./orders.service */ "./src/orders/orders.service.ts");
const create_order_dto_1 = __webpack_require__(/*! ./dto/create-order.dto */ "./src/orders/dto/create-order.dto.ts");
const update_order_dto_1 = __webpack_require__(/*! ./dto/update-order.dto */ "./src/orders/dto/update-order.dto.ts");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    create(createOrderDto) {
        return this.ordersService.create(createOrderDto);
    }
    findAll() {
        return this.ordersService.findAll();
    }
    findOne(id) {
        return this.ordersService.findOne(+id);
    }
    update(id, updateOrderDto) {
        return this.ordersService.update(+id, updateOrderDto);
    }
    remove(id) {
        return this.ordersService.remove(+id);
    }
};
exports.OrdersController = OrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_order_dto_1.CreateOrderDto !== "undefined" && create_order_dto_1.CreateOrderDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_order_dto_1.UpdateOrderDto !== "undefined" && update_order_dto_1.UpdateOrderDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "remove", null);
exports.OrdersController = OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [typeof (_a = typeof orders_service_1.OrdersService !== "undefined" && orders_service_1.OrdersService) === "function" ? _a : Object])
], OrdersController);


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
        controllers: [orders_controller_1.OrdersController],
        providers: [orders_service_1.OrdersService],
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let OrdersService = class OrdersService {
    create(createOrderDto) {
        return 'This action adds a new order';
    }
    findAll() {
        return `This action returns all orders`;
    }
    findOne(id) {
        return `This action returns a #${id} order`;
    }
    update(id, updateOrderDto) {
        return `This action updates a #${id} order`;
    }
    remove(id) {
        return `This action removes a #${id} order`;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)()
], OrdersService);


/***/ }),

/***/ "./src/products/dto/create-product.dto.ts":
/*!************************************************!*\
  !*** ./src/products/dto/create-product.dto.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProductDto = void 0;
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;


/***/ }),

/***/ "./src/products/dto/update-product.dto.ts":
/*!************************************************!*\
  !*** ./src/products/dto/update-product.dto.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProductDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_product_dto_1 = __webpack_require__(/*! ./create-product.dto */ "./src/products/dto/create-product.dto.ts");
class UpdateProductDto extends (0, swagger_1.PartialType)(create_product_dto_1.CreateProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;


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
exports.ProductsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const products_service_1 = __webpack_require__(/*! ./products.service */ "./src/products/products.service.ts");
const create_product_dto_1 = __webpack_require__(/*! ./dto/create-product.dto */ "./src/products/dto/create-product.dto.ts");
const update_product_dto_1 = __webpack_require__(/*! ./dto/update-product.dto */ "./src/products/dto/update-product.dto.ts");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    create(createProductDto) {
        return this.productsService.create(createProductDto);
    }
    findAll() {
        return this.productsService.findAll();
    }
    findOne(id) {
        return this.productsService.findOne(+id);
    }
    update(id, updateProductDto) {
        return this.productsService.update(+id, updateProductDto);
    }
    remove(id) {
        return this.productsService.remove(+id);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_product_dto_1.CreateProductDto !== "undefined" && create_product_dto_1.CreateProductDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_product_dto_1.UpdateProductDto !== "undefined" && update_product_dto_1.UpdateProductDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "remove", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [typeof (_a = typeof products_service_1.ProductsService !== "undefined" && products_service_1.ProductsService) === "function" ? _a : Object])
], ProductsController);


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
        controllers: [products_controller_1.ProductsController],
        providers: [products_service_1.ProductsService],
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ProductsService = class ProductsService {
    create(createProductDto) {
        return 'This action adds a new product';
    }
    findAll() {
        return `This action returns all products`;
    }
    findOne(id) {
        return `This action returns a #${id} product`;
    }
    update(id, updateProductDto) {
        return `This action updates a #${id} product`;
    }
    remove(id) {
        return `This action removes a #${id} product`;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);


/***/ }),

/***/ "./src/users/dto/create-user.dto.ts":
/*!******************************************!*\
  !*** ./src/users/dto/create-user.dto.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./src/users/dto/update-user.dto.ts":
/*!******************************************!*\
  !*** ./src/users/dto/update-user.dto.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_user_dto_1 = __webpack_require__(/*! ./create-user.dto */ "./src/users/dto/create-user.dto.ts");
class UpdateUserDto extends (0, swagger_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;


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
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/users/users.service.ts");
const create_user_dto_1 = __webpack_require__(/*! ./dto/create-user.dto */ "./src/users/dto/create-user.dto.ts");
const update_user_dto_1 = __webpack_require__(/*! ./dto/update-user.dto */ "./src/users/dto/update-user.dto.ts");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    findAll() {
        return this.usersService.findAll();
    }
    findOne(id) {
        return this.usersService.findOne(+id);
    }
    update(id, updateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }
    remove(id) {
        return this.usersService.remove(+id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_user_dto_1.UpdateUserDto !== "undefined" && update_user_dto_1.UpdateUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
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
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/users/users.controller.ts");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UsersService = class UsersService {
    create(createUserDto) {
        return 'This action adds a new user';
    }
    findAll() {
        return `This action returns all users`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
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

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

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

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("mongoose-unique-validator");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

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