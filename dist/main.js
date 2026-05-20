/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const app_controller_1 = __webpack_require__(4);
const app_service_1 = __webpack_require__(43);
const auth_module_1 = __webpack_require__(64);
const users_module_1 = __webpack_require__(113);
const uploads_module_1 = __webpack_require__(116);
const platform_express_1 = __webpack_require__(123);
const casl_module_1 = __webpack_require__(124);
const config_1 = __webpack_require__(41);
const mailer_1 = __webpack_require__(12);
const schedule_1 = __webpack_require__(127);
const throttler_1 = __webpack_require__(128);
const typeorm_1 = __webpack_require__(61);
const products_module_1 = __webpack_require__(129);
const cart_module_1 = __webpack_require__(132);
const categories_module_1 = __webpack_require__(135);
const orders_module_1 = __webpack_require__(138);
const designs_module_1 = __webpack_require__(142);
const admin_module_1 = __webpack_require__(145);
const otp_module_1 = __webpack_require__(148);
const wallet_module_1 = __webpack_require__(151);
const database_config_1 = __webpack_require__(155);
const user_sql_schema_1 = __webpack_require__(45);
const product_sql_schema_1 = __webpack_require__(47);
const order_sql_schema_1 = __webpack_require__(48);
const categories_sql_schema_1 = __webpack_require__(49);
const cart_sql_schema_1 = __webpack_require__(50);
const design_sql_schema_1 = __webpack_require__(51);
const otp_sql_schema_1 = __webpack_require__(52);
const wallet_sql_schema_1 = __webpack_require__(53);
const jwt_1 = __webpack_require__(67);
const sql_schema_1 = __webpack_require__(44);
const product_colors_module_1 = __webpack_require__(156);
const pickup_locations_module_1 = __webpack_require__(159);
const zones_module_1 = __webpack_require__(162);
const transactions_module_1 = __webpack_require__(165);
const contact_module_1 = __webpack_require__(168);
const withdraw_sql_schema_1 = __webpack_require__(153);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            casl_module_1.CaslModule,
            schedule_1.ScheduleModule.forRoot(),
            mailer_1.MailerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    transport: {
                        host: configService.get("EMAIL_HOST") || "jamfortetech.com",
                        auth: {
                            user: configService.get("EMAIL_USERNAME") ||
                                "emmanuel@jamfortetech.com",
                            pass: configService.get("EMAIL_PASSWORD") || "Simple@1010*",
                        },
                        connectionTimeout: 5000,
                        port: 465,
                        secure: true,
                    },
                }),
            }),
            platform_express_1.MulterModule.registerAsync({
                useFactory: () => ({
                    dest: './uploads',
                }),
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [database_config_1.default],
            }),
            jwt_1.JwtModule.registerAsync({
                global: true,
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                }),
            }),
            throttler_1.ThrottlerModule.forRoot([{
                    ttl: 60000,
                    limit: 10,
                }]),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    type: 'mysql',
                    url: configService.get('SQL_URI'),
                    entities: [user_sql_schema_1.UserSqlModel, sql_schema_1.ZoneSqlModel, withdraw_sql_schema_1.WithdrawSqlModel, product_sql_schema_1.ProductSqlModel, order_sql_schema_1.OrderSqlModel, categories_sql_schema_1.CategoriesSqlModel, cart_sql_schema_1.CartSqlModel, design_sql_schema_1.DesignSqlModel, otp_sql_schema_1.OtpSqlModel, wallet_sql_schema_1.WalletSqlModel, sql_schema_1.DeliveryPriceSqlModel, sql_schema_1.SiteSettingsSqlModel, sql_schema_1.ZoneSqlModel, sql_schema_1.TransactionSqlModel, sql_schema_1.ContactUsSqlModel],
                    synchronize: false,
                    autoLoadEntities: true,
                    logging: ['query', 'error'],
                }),
            }),
            typeorm_1.TypeOrmModule.forFeature([sql_schema_1.SiteSettingsSqlModel, product_sql_schema_1.ProductSqlModel, categories_sql_schema_1.CategoriesSqlModel]),
            auth_module_1.AuthModule,
            admin_module_1.AdminModule,
            uploads_module_1.UploadsModule,
            zones_module_1.ZonesModule,
            users_module_1.UsersModule, products_module_1.ProductsModule, cart_module_1.CartModule, orders_module_1.OrdersModule, categories_module_1.CategoriesModule, designs_module_1.DesignsModule, otp_module_1.OtpModule, wallet_module_1.WalletModule, product_colors_module_1.ProductColorsModule, pickup_locations_module_1.PickupLocationsModule, zones_module_1.ZonesModule, transactions_module_1.TransactionsModule, contact_module_1.ContactModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
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
const service_1 = __webpack_require__(5);
const common_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(42);
const app_service_1 = __webpack_require__(43);
let AppController = AppController_1 = class AppController {
    constructor(appService) {
        this.appService = appService;
        this.logger = new common_1.Logger(AppController_1.name);
    }
    async getStates(query) {
        const state = await this.appService.getStates(query);
        return (0, service_1.serviceResponse)({
            message: "Success",
            data: state,
        });
    }
    async getSiteSettings() {
        return this.appService.getSiteSettings();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('states'),
    (0, swagger_1.ApiQuery)({ name: 'stateName', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'lga', required: false }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getStates", null);
__decorate([
    (0, common_1.Get)('site-settings'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getSiteSettings", null);
exports.AppController = AppController = AppController_1 = __decorate([
    (0, common_1.Controller)(""),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 5 */
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
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(39), exports);
__exportStar(__webpack_require__(40), exports);


/***/ }),
/* 6 */
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
exports.NotificationService = void 0;
const common_1 = __webpack_require__(3);
const axios_1 = __webpack_require__(7);
const notification_gateway_1 = __webpack_require__(8);
let NotificationService = class NotificationService {
    constructor(notificationGateway) {
        this.notificationGateway = notificationGateway;
        this.oneSignalUrl = "https://onesignal.com/api/v1/notifications";
        this.appId = process.env.ONESIGNAL_APP_ID;
        this.apiKey = process.env.ONESIGNAL_API_KEY;
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
    __metadata("design:paramtypes", [typeof (_a = typeof notification_gateway_1.NotificationGateway !== "undefined" && notification_gateway_1.NotificationGateway) === "function" ? _a : Object])
], NotificationService);


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("axios");

/***/ }),
/* 8 */
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
const websockets_1 = __webpack_require__(9);
const socket_io_1 = __webpack_require__(10);
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
    (0, websockets_1.WebSocketGateway)({})
], NotificationGateway);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),
/* 11 */
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
const mailer_1 = __webpack_require__(12);
const common_1 = __webpack_require__(3);
let SendMailService = class SendMailService {
    constructor(mailService) {
        this.mailService = mailService;
    }
    async sendMail({ from, to, subject, html, text, attachments }) {
        console.log({ from, to, subject, html, text, attachments });
        const data = {
            from: from || 'Smart Prints<info@smartprints.ng>',
            to,
            subject,
            text,
            html,
            attachments,
        };
        try {
            this.mailService.sendMail(data).then(() => {
                console.log('Email sent');
            }).catch((e) => {
                console.log('Email failed ', e?.response?.data ?? e.message);
            });
        }
        catch (error) { }
    }
    getEmailSubject(eventType) {
        const subjects = {
            login: "Login Alert - Your Account Was Accessed",
            register: "Welcome! Your Account Has Been Created",
            password_change: "Password Changed Successfully",
            otp: "Your OTP Code",
        };
        return subjects[eventType] || "Account Activity Alert";
    }
    generateEmailContent(data) {
        const { eventType, fullname, eventDetails } = data;
        const subject = this.getEmailSubject(eventType);
        let content = `
      <p>Hello ${fullname || "User"},</p>
      <p>Your ${subject}.</p>
    `;
        if (eventDetails && subject) {
            content += `<p>Details: ${JSON.stringify(eventDetails)}</p>`;
        }
        return content;
    }
};
exports.SendMailService = SendMailService;
exports.SendMailService = SendMailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _a : Object])
], SendMailService);


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serviceResponse = serviceResponse;
exports.getMetadata = getMetadata;
exports.getSqlMetadata = getSqlMetadata;
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
async function getSqlMetadata({ model, query, querys, }) {
    const { page = 1, limit = 10 } = query;
    const total = await model.count(querys);
    return {
        total,
        totalPage: Math.ceil(total / limit),
        currentPage: page,
        limit: limit,
    };
}


/***/ }),
/* 14 */
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
const schema_1 = __webpack_require__(15);
const mongoose_1 = __webpack_require__(17);
const websockets_1 = __webpack_require__(9);
const axios_1 = __webpack_require__(7);
const mongoose_2 = __webpack_require__(38);
const socket_io_1 = __webpack_require__(10);
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
        const ip = client.handshake.headers['x-forwarded-for'] || client.handshake.address;
        const ip2 = userData.ip ? userData.ip : Array.isArray(ip) ? ip[0] : ip;
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
/* 15 */
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
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(36), exports);
__exportStar(__webpack_require__(37), exports);


/***/ }),
/* 16 */
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
const mongoose_1 = __webpack_require__(17);
const crypto_1 = __webpack_require__(18);
const uniqueValidator = __webpack_require__(19);
const bcrypt = __webpack_require__(20);
const enum_1 = __webpack_require__(21);
const enum_2 = __webpack_require__(21);
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
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "coverImage", void 0);
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
/* 17 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("mongoose-unique-validator");

/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 21 */
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
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(25), exports);


/***/ }),
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionType = exports.TransactionStatus = void 0;
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PENDING"] = "pending";
    TransactionStatus["ACTIVE"] = "active";
    TransactionStatus["SUCCESS"] = "success";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["DEPOSIT"] = "deposit";
    TransactionType["WITHDRAWAL"] = "withdrawal";
    TransactionType["PAYMENT"] = "payment";
    TransactionType["REFUND"] = "refund";
    TransactionType["TRANSFER"] = "transfer";
    TransactionType["ORDER"] = "order";
})(TransactionType || (exports.TransactionType = TransactionType = {}));


/***/ }),
/* 26 */
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
const mongoose_1 = __webpack_require__(17);
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
/* 27 */
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
const mongoose_1 = __webpack_require__(17);
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
/* 28 */
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
const mongoose_1 = __webpack_require__(17);
const unique = __webpack_require__(19);
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
/* 29 */
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
const enum_1 = __webpack_require__(21);
const mongoose_1 = __webpack_require__(17);
const crypto_1 = __webpack_require__(18);
const unique = __webpack_require__(19);
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
/* 30 */
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
const enum_1 = __webpack_require__(21);
const mongoose_1 = __webpack_require__(17);
const crypto_1 = __webpack_require__(18);
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
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ProductModel.prototype, "is3d", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ProductModel.prototype, "isResell", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], ProductModel.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: "UserModel" }),
    __metadata("design:type", String)
], ProductModel.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], ProductModel.prototype, "productID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: "FarmModel" }),
    __metadata("design:type", String)
], ProductModel.prototype, "farmID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], ProductModel.prototype, "types", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: false }),
    __metadata("design:type", Array)
], ProductModel.prototype, "features", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], ProductModel.prototype, "image", void 0);
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
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ProductModel.prototype, "backgroundIn", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Number)
], ProductModel.prototype, "salePrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Number)
], ProductModel.prototype, "additionalPrice", void 0);
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
    (0, mongoose_1.Prop)({ enum: ['custom', 'store'], default: 'custom' }),
    __metadata("design:type", String)
], ProductModel.prototype, "type", void 0);
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
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ProductModel.prototype, "averageRating", void 0);
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
/* 31 */
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
const mongoose_1 = __webpack_require__(17);
const enum_1 = __webpack_require__(21);
const crypto_1 = __webpack_require__(18);
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
/* 32 */
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
exports.OrderSchema = exports.OrderModel = void 0;
const mongoose_1 = __webpack_require__(17);
let ProductColor = class ProductColor {
};
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
ProductColor = __decorate([
    (0, mongoose_1.Schema)()
], ProductColor);
let CartModel = class CartModel {
};
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], CartModel.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], CartModel.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], CartModel.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CartModel.prototype, "productName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CartModel.prototype, "fullName", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], CartModel.prototype, "productID", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", ProductColor)
], CartModel.prototype, "color", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Number)
], CartModel.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], CartModel.prototype, "designImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", typeof (_a = typeof Record !== "undefined" && Record) === "function" ? _a : Object)
], CartModel.prototype, "metadata", void 0);
CartModel = __decorate([
    (0, mongoose_1.Schema)()
], CartModel);
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
    (0, mongoose_1.Prop)({ type: [CartModel] }),
    __metadata("design:type", Array)
], OrderModel.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrderModel.prototype, "flutterwaveRef", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrderModel.prototype, "paystackRef", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrderModel.prototype, "authorization_url", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrderModel.prototype, "accessCode", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrderModel.prototype, "tx_ref", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], OrderModel.prototype, "isPaid", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Number)
], OrderModel.prototype, "totalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], OrderModel.prototype, "imageUrls", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", typeof (_b = typeof Record !== "undefined" && Record) === "function" ? _b : Object)
], OrderModel.prototype, "orderDetails", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'pending' }),
    __metadata("design:type", String)
], OrderModel.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], OrderModel.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", typeof (_c = typeof Record !== "undefined" && Record) === "function" ? _c : Object)
], OrderModel.prototype, "shippingAddress", void 0);
exports.OrderModel = OrderModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], OrderModel);
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(OrderModel);


/***/ }),
/* 33 */
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
exports.CartSchema = exports.CartModel = void 0;
const mongoose_1 = __webpack_require__(17);
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
let CartModel = class CartModel {
};
exports.CartModel = CartModel;
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], CartModel.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], CartModel.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: 'ProductModel' }),
    __metadata("design:type", String)
], CartModel.prototype, "productID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['custom', 'store'], default: 'custom' }),
    __metadata("design:type", String)
], CartModel.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CartModel.prototype, "productName", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", ProductColor)
], CartModel.prototype, "color", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Number)
], CartModel.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], CartModel.prototype, "designImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", typeof (_a = typeof Record !== "undefined" && Record) === "function" ? _a : Object)
], CartModel.prototype, "metadata", void 0);
exports.CartModel = CartModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], CartModel);
exports.CartSchema = mongoose_1.SchemaFactory.createForClass(CartModel);


/***/ }),
/* 34 */
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
const mongoose_1 = __webpack_require__(17);
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
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], DesignModel.prototype, "tags", void 0);
exports.DesignModel = DesignModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], DesignModel);
exports.DesignSchema = mongoose_1.SchemaFactory.createForClass(DesignModel);


/***/ }),
/* 35 */
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
const mongoose_1 = __webpack_require__(17);
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
let CategoriesModel = class CategoriesModel {
};
exports.CategoriesModel = CategoriesModel;
__decorate([
    (0, mongoose_1.Prop)({ required: true, }),
    __metadata("design:type", String)
], CategoriesModel.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CategoriesModel.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], CategoriesModel.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Mockups] }),
    __metadata("design:type", Array)
], CategoriesModel.prototype, "mockups", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [DesignArea] }),
    __metadata("design:type", Array)
], CategoriesModel.prototype, "designAreas", void 0);
exports.CategoriesModel = CategoriesModel = __decorate([
    (0, mongoose_1.Schema)()
], CategoriesModel);
exports.CategoriesSchema = mongoose_1.SchemaFactory.createForClass(CategoriesModel);


/***/ }),
/* 36 */
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
const mongoose_1 = __webpack_require__(17);
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
/* 37 */
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
const mongoose_1 = __webpack_require__(17);
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
/* 38 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SmsService = void 0;
const common_1 = __webpack_require__(3);
const axios_1 = __webpack_require__(7);
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
/* 40 */
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
exports.FlutterwaveService = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(41);
const axios_1 = __webpack_require__(7);
let FlutterwaveService = class FlutterwaveService {
    constructor(configService) {
        this.configService = configService;
        this.baseUrl = "";
        this.secretKey = this.configService.get("FLUTTERWAVE_SECRET_KEY");
        this.secretHash = this.configService.get("FLUTTERWAVEEncryptionKey");
        this.headers = {
            accept: "application/json",
            Authorization: `Bearer ${this.secretKey}`,
            "Content-Type": "application/json",
        };
    }
    async initiateCheckout(data) {
        try {
            const options = {
                method: 'POST',
                url: 'https://api.flutterwave.com/v3/payments',
                headers: this.headers,
                data
            };
            const response = await axios_1.default.request(options);
            return response.data;
        }
        catch (error) {
            console.error('Error initiating checkout:', error.response?.data || error.message);
            throw error;
        }
    }
    async verifyCheckout(tx_ref) {
        try {
            const options = {
                method: 'GET',
                url: `https://api.flutterwave.com/v3/transactions/verify_by_reference?tx_ref=${encodeURIComponent(tx_ref)}`,
                headers: this.headers,
            };
            const response = await axios_1.default.request(options);
            return response.data;
        }
        catch (error) {
            console.error('Error verifying checkout transaction:', error.response?.data || error.message);
            throw error.response?.data;
        }
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
            return responseType;
        }
        catch (error) {
            console.error("Error creating virtual account:", error.response?.data || error.message);
            throw error.response?.data;
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
        const wallet = null;
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
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
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
/* 41 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 42 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 43 */
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
exports.AppService = void 0;
const service_1 = __webpack_require__(5);
const sql_schema_1 = __webpack_require__(44);
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const fs = __webpack_require__(62);
const path = __webpack_require__(63);
const typeorm_2 = __webpack_require__(46);
let AppService = class AppService {
    constructor(siteSettingsModel) {
        this.siteSettingsModel = siteSettingsModel;
        this.dataPath = path.resolve(process.cwd(), "nigeria.json");
    }
    getHello() {
        return 'Hello World!';
    }
    loadData() {
        try {
            const data = fs.readFileSync(this.dataPath, "utf8");
            return JSON.parse(data);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Could not load state data");
        }
    }
    getStates(query) {
        const data = this.loadData();
        const { stateName, lga } = query;
        let found = [];
        if (stateName && lga) {
            const state = data.find((s) => s.state.toLowerCase() === stateName.toLowerCase());
            if (state) {
                const selectedLga = state.lgas.find((l) => l.name.toLowerCase() === lga.toLowerCase());
                found = selectedLga ? selectedLga.cities : [];
            }
        }
        else if (stateName) {
            const state = data.find((s) => s.state.toLowerCase() === stateName.toLowerCase());
            found = state ? state.lgas.map((l) => l.name).sort() : [];
        }
        else if (lga) {
            const allLgas = data.flatMap((s) => s.lgas);
            if (typeof lga === 'string' && lga.length > 0) {
                const selectedLga = allLgas.find((l) => l.name.toLowerCase() === lga.toLowerCase());
                found = selectedLga ? selectedLga.cities : [];
            }
            else {
                found = allLgas.map((l) => l.name).sort((a, b) => a.localeCompare(b));
            }
        }
        else {
            found = data.map((s) => s.state).sort();
        }
        return found;
    }
    async getSiteSettings() {
        const settings = await this.siteSettingsModel.findOne({ where: { name: 'default' } });
        return (0, service_1.serviceResponse)({
            message: "Site settings retrieved",
            status: true,
            data: settings || {},
        });
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sql_schema_1.SiteSettingsSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], AppService);


/***/ }),
/* 44 */
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
__exportStar(__webpack_require__(45), exports);
__exportStar(__webpack_require__(47), exports);
__exportStar(__webpack_require__(48), exports);
__exportStar(__webpack_require__(49), exports);
__exportStar(__webpack_require__(50), exports);
__exportStar(__webpack_require__(51), exports);
__exportStar(__webpack_require__(52), exports);
__exportStar(__webpack_require__(53), exports);
__exportStar(__webpack_require__(54), exports);
__exportStar(__webpack_require__(55), exports);
__exportStar(__webpack_require__(56), exports);
__exportStar(__webpack_require__(57), exports);
__exportStar(__webpack_require__(58), exports);
__exportStar(__webpack_require__(59), exports);
__exportStar(__webpack_require__(60), exports);


/***/ }),
/* 45 */
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
const bcrypt = __webpack_require__(20);
const crypto_1 = __webpack_require__(18);
const enum_1 = __webpack_require__(21);
class Referral {
}
let UserSqlModel = class UserSqlModel {
    async setupDefaultsOnInsert() {
        console.log('Running @BeforeInsert Hook');
        this.id = (0, crypto_1.randomInt)(99999) + (0, crypto_1.randomUUID)().replace(/\D/g, "").substring(0, 5);
        this.username = this.username || this.email;
        const generatedRefCode = (this.username.substring(0, 2) +
            (0, crypto_1.randomInt)(99) +
            (0, crypto_1.randomUUID)().substring(0, 2)).toUpperCase();
        if (!this.referral) {
            this.referral = {};
        }
        this.referral.refCode = generatedRefCode;
        this.referral.status = 'active';
        this.refCode = generatedRefCode;
        if (this.password) {
            const salt = await bcrypt.genSalt();
            this.password = await bcrypt.hash(this.password, salt);
        }
    }
    async hashPasswordOnUpdate() {
    }
};
exports.UserSqlModel = UserSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserSqlModel.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-array',
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSqlModel.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enum_1.UserType,
        default: enum_1.UserType.USER,
    }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "userType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enum_1.UserStatus,
        default: enum_1.UserStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "emailStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "fullname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserSqlModel.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "profileImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "coverImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserSqlModel.prototype, "isAdmin", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserSqlModel.prototype, "isReseller", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserSqlModel.prototype, "isSuperAdmin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserSqlModel.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "localGovernmentArea", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Record !== "undefined" && Record) === "function" ? _b : Object)
], UserSqlModel.prototype, "socialMediaProfile", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "residentialAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Referral)
], UserSqlModel.prototype, "referral", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "refBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserSqlModel.prototype, "refCode", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserSqlModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UserSqlModel.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserSqlModel.prototype, "setupDefaultsOnInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserSqlModel.prototype, "hashPasswordOnUpdate", null);
exports.UserSqlModel = UserSqlModel = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], UserSqlModel);


/***/ }),
/* 46 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 47 */
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
const crypto_1 = __webpack_require__(18);
const user_sql_schema_1 = __webpack_require__(45);
const enum_1 = __webpack_require__(21);
class ProductColor {
}
class ProductSize {
}
class Mockups {
}
class DesignRect {
}
class DesignArea {
}
class Rating {
}
let ProductSqlModel = class ProductSqlModel {
    generateId() {
        this.id = "PDT" + (0, crypto_1.randomInt)(100, 999) + (0, crypto_1.randomUUID)().replace(/\D/g, '').substring(0, 3);
    }
};
exports.ProductSqlModel = ProductSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProductSqlModel.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductSqlModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProductSqlModel.prototype, "displayName", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ProductSqlModel.prototype, "isFeatured", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ProductSqlModel.prototype, "is3d", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ProductSqlModel.prototype, "isResell", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ProductSqlModel.prototype, "isApproved", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], ProductSqlModel.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductSqlModel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductSqlModel.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProductSqlModel.prototype, "productID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProductSqlModel, product => product._id),
    (0, typeorm_1.JoinColumn)({ name: 'productID' }),
    __metadata("design:type", ProductSqlModel)
], ProductSqlModel.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_sql_schema_1.UserSqlModel, user => user._id),
    (0, typeorm_1.JoinColumn)({ name: 'userID' }),
    __metadata("design:type", typeof (_a = typeof user_sql_schema_1.UserSqlModel !== "undefined" && user_sql_schema_1.UserSqlModel) === "function" ? _a : Object)
], ProductSqlModel.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], ProductSqlModel.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", String)
], ProductSqlModel.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true, comment: 'legacy' }),
    __metadata("design:type", Number)
], ProductSqlModel.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true, }),
    __metadata("design:type", Number)
], ProductSqlModel.prototype, "standardPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true, }),
    __metadata("design:type", Number)
], ProductSqlModel.prototype, "largePrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true, }),
    __metadata("design:type", Number)
], ProductSqlModel.prototype, "basePrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ProductSqlModel.prototype, "salePrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ProductSqlModel.prototype, "additionalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true, }),
    __metadata("design:type", Boolean)
], ProductSqlModel.prototype, "backgroundIn", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, comment: 'legacy' }),
    __metadata("design:type", String)
], ProductSqlModel.prototype, "categoryID", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProductSqlModel.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, nullable: true }),
    __metadata("design:type", Number)
], ProductSqlModel.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['custom', 'store'],
        default: 'custom',
    }),
    __metadata("design:type", String)
], ProductSqlModel.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProductSqlModel.prototype, "sizeGuide", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProductSqlModel.prototype, "measurement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    __metadata("design:type", Number)
], ProductSqlModel.prototype, "distance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: enum_1.ProductStatusEnum, default: enum_1.ProductStatusEnum.ACTIVE }),
    __metadata("design:type", String)
], ProductSqlModel.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'simple-array' }),
    __metadata("design:type", Array)
], ProductSqlModel.prototype, "types", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'simple-array' }),
    __metadata("design:type", Array)
], ProductSqlModel.prototype, "features", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'simple-array', }),
    __metadata("design:type", Array)
], ProductSqlModel.prototype, "imageUrls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Mockups)
], ProductSqlModel.prototype, "mockups", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", DesignArea)
], ProductSqlModel.prototype, "designArea", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], ProductSqlModel.prototype, "availableColors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], ProductSqlModel.prototype, "availableSizes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], ProductSqlModel.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Record !== "undefined" && Record) === "function" ? _b : Object)
], ProductSqlModel.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ProductSqlModel.prototype, "discountPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', default: 0, nullable: true }),
    __metadata("design:type", Number)
], ProductSqlModel.prototype, "averageRating", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], ProductSqlModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], ProductSqlModel.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductSqlModel.prototype, "generateId", null);
exports.ProductSqlModel = ProductSqlModel = __decorate([
    (0, typeorm_1.Entity)({ name: 'products' })
], ProductSqlModel);


/***/ }),
/* 48 */
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
exports.OrderSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
const user_sql_schema_1 = __webpack_require__(45);
let OrderSqlModel = class OrderSqlModel {
};
exports.OrderSqlModel = OrderSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], OrderSqlModel.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderSqlModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderSqlModel.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_sql_schema_1.UserSqlModel, (user) => user._id),
    (0, typeorm_1.JoinColumn)({ name: "userID" }),
    __metadata("design:type", typeof (_a = typeof user_sql_schema_1.UserSqlModel !== "undefined" && user_sql_schema_1.UserSqlModel) === "function" ? _a : Object)
], OrderSqlModel.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "json", nullable: true }),
    __metadata("design:type", typeof (_b = typeof Record !== "undefined" && Record) === "function" ? _b : Object)
], OrderSqlModel.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderSqlModel.prototype, "flutterwaveRef", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderSqlModel.prototype, "paystackRef", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderSqlModel.prototype, "authorization_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderSqlModel.prototype, "accessCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderSqlModel.prototype, "tx_ref", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], OrderSqlModel.prototype, "isPaid", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "decimal",
        precision: 10,
        scale: 2,
    }),
    __metadata("design:type", Number)
], OrderSqlModel.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "decimal",
        precision: 10,
        scale: 2,
    }),
    __metadata("design:type", Number)
], OrderSqlModel.prototype, "deliveryFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-array", nullable: true }),
    __metadata("design:type", Array)
], OrderSqlModel.prototype, "imageUrls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "json", nullable: true }),
    __metadata("design:type", typeof (_c = typeof Record !== "undefined" && Record) === "function" ? _c : Object)
], OrderSqlModel.prototype, "orderDetails", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "pending" }),
    __metadata("design:type", String)
], OrderSqlModel.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderSqlModel.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "json", nullable: true }),
    __metadata("design:type", typeof (_d = typeof Record !== "undefined" && Record) === "function" ? _d : Object)
], OrderSqlModel.prototype, "shippingAddress", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], OrderSqlModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], OrderSqlModel.prototype, "updatedAt", void 0);
exports.OrderSqlModel = OrderSqlModel = __decorate([
    (0, typeorm_1.Entity)({ name: "orders" })
], OrderSqlModel);


/***/ }),
/* 49 */
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
exports.CategoriesSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
class Mockups {
}
class DesignRect {
}
class DesignArea {
}
let CategoriesSqlModel = class CategoriesSqlModel {
};
exports.CategoriesSqlModel = CategoriesSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CategoriesSqlModel.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], CategoriesSqlModel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], CategoriesSqlModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CategoriesSqlModel.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 'custom',
    }),
    __metadata("design:type", String)
], CategoriesSqlModel.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CategoriesSqlModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CategoriesSqlModel.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Mockups)
], CategoriesSqlModel.prototype, "mockups", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", DesignArea)
], CategoriesSqlModel.prototype, "designArea", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Record !== "undefined" && Record) === "function" ? _c : Object)
], CategoriesSqlModel.prototype, "metadata", void 0);
exports.CategoriesSqlModel = CategoriesSqlModel = __decorate([
    (0, typeorm_1.Entity)()
], CategoriesSqlModel);


/***/ }),
/* 50 */
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CartSqlModel = void 0;
const sql_schema_1 = __webpack_require__(44);
const typeorm_1 = __webpack_require__(46);
class ProductColor {
}
let CartSqlModel = class CartSqlModel {
};
exports.CartSqlModel = CartSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CartSqlModel.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CartSqlModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CartSqlModel.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], CartSqlModel.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CartSqlModel.prototype, "productID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sql_schema_1.ProductSqlModel, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'productID' }),
    __metadata("design:type", typeof (_a = typeof sql_schema_1.ProductSqlModel !== "undefined" && sql_schema_1.ProductSqlModel) === "function" ? _a : Object)
], CartSqlModel.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['custom', 'store'],
        default: 'custom',
    }),
    __metadata("design:type", String)
], CartSqlModel.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CartSqlModel.prototype, "productName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-json',
        nullable: true,
    }),
    __metadata("design:type", ProductColor)
], CartSqlModel.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], CartSqlModel.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CartSqlModel.prototype, "designImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1, nullable: true }),
    __metadata("design:type", Number)
], CartSqlModel.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-json',
        nullable: true,
    }),
    __metadata("design:type", typeof (_b = typeof Record !== "undefined" && Record) === "function" ? _b : Object)
], CartSqlModel.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CartSqlModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], CartSqlModel.prototype, "updatedAt", void 0);
exports.CartSqlModel = CartSqlModel = __decorate([
    (0, typeorm_1.Entity)({ name: 'carts' })
], CartSqlModel);


/***/ }),
/* 51 */
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
exports.DesignSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
const user_sql_schema_1 = __webpack_require__(45);
let DesignSqlModel = class DesignSqlModel {
};
exports.DesignSqlModel = DesignSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DesignSqlModel.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DesignSqlModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DesignSqlModel.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_sql_schema_1.UserSqlModel, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'userID' }),
    __metadata("design:type", typeof (_a = typeof user_sql_schema_1.UserSqlModel !== "undefined" && user_sql_schema_1.UserSqlModel) === "function" ? _a : Object)
], DesignSqlModel.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DesignSqlModel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DesignSqlModel.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-array',
        nullable: true,
        comment: 'Stores an array of string tags.',
    }),
    __metadata("design:type", Array)
], DesignSqlModel.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], DesignSqlModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], DesignSqlModel.prototype, "updatedAt", void 0);
exports.DesignSqlModel = DesignSqlModel = __decorate([
    (0, typeorm_1.Entity)({ name: 'designs' })
], DesignSqlModel);


/***/ }),
/* 52 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OtpSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
const enum_1 = __webpack_require__(21);
let OtpSqlModel = class OtpSqlModel {
};
exports.OtpSqlModel = OtpSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OtpSqlModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], OtpSqlModel.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OtpSqlModel.prototype, "code1", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'active' }),
    __metadata("design:type", String)
], OtpSqlModel.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 30 }),
    __metadata("design:type", Number)
], OtpSqlModel.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OtpSqlModel.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enum_1.OtpType, default: enum_1.OtpType.EMAIL_VERIFICATION }),
    __metadata("design:type", String)
], OtpSqlModel.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], OtpSqlModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], OtpSqlModel.prototype, "updatedAt", void 0);
exports.OtpSqlModel = OtpSqlModel = __decorate([
    (0, typeorm_1.Entity)()
], OtpSqlModel);


/***/ }),
/* 53 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
let WalletSqlModel = class WalletSqlModel {
};
exports.WalletSqlModel = WalletSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WalletSqlModel.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WalletSqlModel.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], WalletSqlModel.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WalletSqlModel.prototype, "accountName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WalletSqlModel.prototype, "accountNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WalletSqlModel.prototype, "bankName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WalletSqlModel.prototype, "bankCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], WalletSqlModel.prototype, "customerCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], WalletSqlModel.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'NGN' }),
    __metadata("design:type", String)
], WalletSqlModel.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'active', nullable: true }),
    __metadata("design:type", String)
], WalletSqlModel.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], WalletSqlModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], WalletSqlModel.prototype, "updatedAt", void 0);
exports.WalletSqlModel = WalletSqlModel = __decorate([
    (0, typeorm_1.Entity)()
], WalletSqlModel);


/***/ }),
/* 54 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeliveryPriceSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
let DeliveryPriceSqlModel = class DeliveryPriceSqlModel {
};
exports.DeliveryPriceSqlModel = DeliveryPriceSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DeliveryPriceSqlModel.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], DeliveryPriceSqlModel.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], DeliveryPriceSqlModel.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], DeliveryPriceSqlModel.prototype, "lga", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], DeliveryPriceSqlModel.prototype, "zone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 3000.00 }),
    __metadata("design:type", Number)
], DeliveryPriceSqlModel.prototype, "deliveryFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 1000.00 }),
    __metadata("design:type", Number)
], DeliveryPriceSqlModel.prototype, "additionalFee", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], DeliveryPriceSqlModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], DeliveryPriceSqlModel.prototype, "updatedAt", void 0);
exports.DeliveryPriceSqlModel = DeliveryPriceSqlModel = __decorate([
    (0, typeorm_1.Entity)({ name: 'delivery_prices' }),
    (0, typeorm_1.Unique)(["country", "state", "lga", "zone"])
], DeliveryPriceSqlModel);


/***/ }),
/* 55 */
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
exports.ProductColorSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
let ProductColorSqlModel = class ProductColorSqlModel {
};
exports.ProductColorSqlModel = ProductColorSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProductColorSqlModel.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProductColorSqlModel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProductColorSqlModel.prototype, "hex", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProductColorSqlModel.prototype, "className", void 0);
exports.ProductColorSqlModel = ProductColorSqlModel = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_colors' })
], ProductColorSqlModel);


/***/ }),
/* 56 */
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
exports.PickupLocationSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
let PickupLocationSqlModel = class PickupLocationSqlModel {
};
exports.PickupLocationSqlModel = PickupLocationSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PickupLocationSqlModel.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PickupLocationSqlModel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PickupLocationSqlModel.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PickupLocationSqlModel.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PickupLocationSqlModel.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PickupLocationSqlModel.prototype, "contactPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', default: 0, precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], PickupLocationSqlModel.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], PickupLocationSqlModel.prototype, "isActive", void 0);
exports.PickupLocationSqlModel = PickupLocationSqlModel = __decorate([
    (0, typeorm_1.Entity)({ name: 'pickup_locations' })
], PickupLocationSqlModel);


/***/ }),
/* 57 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZoneSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
let ZoneSqlModel = class ZoneSqlModel {
};
exports.ZoneSqlModel = ZoneSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ZoneSqlModel.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ZoneSqlModel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ZoneSqlModel.prototype, "lga", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ZoneSqlModel.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ZoneSqlModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ZoneSqlModel.prototype, "updatedAt", void 0);
exports.ZoneSqlModel = ZoneSqlModel = __decorate([
    (0, typeorm_1.Entity)({ name: "zones" })
], ZoneSqlModel);


/***/ }),
/* 58 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SiteSettingsSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
let SiteSettingsSqlModel = class SiteSettingsSqlModel {
};
exports.SiteSettingsSqlModel = SiteSettingsSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SiteSettingsSqlModel.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'default' }),
    __metadata("design:type", String)
], SiteSettingsSqlModel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['image', 'video'],
        default: 'image',
    }),
    __metadata("design:type", String)
], SiteSettingsSqlModel.prototype, "heroType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SiteSettingsSqlModel.prototype, "heroImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SiteSettingsSqlModel.prototype, "heroVideo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], SiteSettingsSqlModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], SiteSettingsSqlModel.prototype, "updatedAt", void 0);
exports.SiteSettingsSqlModel = SiteSettingsSqlModel = __decorate([
    (0, typeorm_1.Entity)({ name: 'site_settings' }),
    (0, typeorm_1.Unique)(['name'])
], SiteSettingsSqlModel);


/***/ }),
/* 59 */
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
exports.TransactionSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
const user_sql_schema_1 = __webpack_require__(45);
const enum_1 = __webpack_require__(21);
const order_sql_schema_1 = __webpack_require__(48);
const product_sql_schema_1 = __webpack_require__(47);
let TransactionSqlModel = class TransactionSqlModel {
};
exports.TransactionSqlModel = TransactionSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TransactionSqlModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TransactionSqlModel.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_sql_schema_1.UserSqlModel),
    (0, typeorm_1.JoinColumn)({ name: 'userID' }),
    __metadata("design:type", typeof (_a = typeof user_sql_schema_1.UserSqlModel !== "undefined" && user_sql_schema_1.UserSqlModel) === "function" ? _a : Object)
], TransactionSqlModel.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], TransactionSqlModel.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enum_1.TransactionType,
    }),
    __metadata("design:type", String)
], TransactionSqlModel.prototype, "transactionType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enum_1.TransactionStatus,
        default: enum_1.TransactionStatus.PENDING,
    }),
    __metadata("design:type", String)
], TransactionSqlModel.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TransactionSqlModel.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TransactionSqlModel.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TransactionSqlModel.prototype, "orderID", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TransactionSqlModel.prototype, "productID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_sql_schema_1.OrderSqlModel),
    (0, typeorm_1.JoinColumn)({ name: 'orderID' }),
    __metadata("design:type", typeof (_b = typeof order_sql_schema_1.OrderSqlModel !== "undefined" && order_sql_schema_1.OrderSqlModel) === "function" ? _b : Object)
], TransactionSqlModel.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_sql_schema_1.ProductSqlModel),
    (0, typeorm_1.JoinColumn)({ name: 'productID' }),
    __metadata("design:type", typeof (_c = typeof product_sql_schema_1.ProductSqlModel !== "undefined" && product_sql_schema_1.ProductSqlModel) === "function" ? _c : Object)
], TransactionSqlModel.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-json',
        nullable: true,
    }),
    __metadata("design:type", typeof (_d = typeof Record !== "undefined" && Record) === "function" ? _d : Object)
], TransactionSqlModel.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], TransactionSqlModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], TransactionSqlModel.prototype, "updatedAt", void 0);
exports.TransactionSqlModel = TransactionSqlModel = __decorate([
    (0, typeorm_1.Entity)({ name: 'transactions' })
], TransactionSqlModel);


/***/ }),
/* 60 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContactUsSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
let ContactUsSqlModel = class ContactUsSqlModel {
};
exports.ContactUsSqlModel = ContactUsSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ContactUsSqlModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ContactUsSqlModel.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ContactUsSqlModel.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], ContactUsSqlModel.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'pending' }),
    __metadata("design:type", String)
], ContactUsSqlModel.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ContactUsSqlModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ContactUsSqlModel.prototype, "updatedAt", void 0);
exports.ContactUsSqlModel = ContactUsSqlModel = __decorate([
    (0, typeorm_1.Entity)({ name: 'contact_us' })
], ContactUsSqlModel);


/***/ }),
/* 61 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 62 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 63 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 64 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(3);
const passport_1 = __webpack_require__(65);
const auth_sql_service_1 = __webpack_require__(66);
const auth_controller_1 = __webpack_require__(68);
const strategy_1 = __webpack_require__(103);
const local_strategy_1 = __webpack_require__(111);
const service_1 = __webpack_require__(5);
const service_2 = __webpack_require__(5);
const service_3 = __webpack_require__(5);
const users_module_1 = __webpack_require__(113);
const typeorm_1 = __webpack_require__(61);
const user_sql_schema_1 = __webpack_require__(45);
const otp_sql_schema_1 = __webpack_require__(52);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [passport_1.PassportModule, users_module_1.UsersModule, typeorm_1.TypeOrmModule.forFeature([user_sql_schema_1.UserSqlModel, otp_sql_schema_1.OtpSqlModel])],
        providers: [
            auth_sql_service_1.AuthSqlService,
            strategy_1.JwtStrategy,
            strategy_1.GoogleStrategy,
            strategy_1.FacebookStrategy,
            strategy_1.XStrategy,
            service_1.SendMailService,
            service_2.SmsService,
            local_strategy_1.LocalStrategy,
            service_1.NotificationService, service_1.NotificationGateway, service_3.FlutterwaveService
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_sql_service_1.AuthSqlService]
    })
], AuthModule);


/***/ }),
/* 65 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 66 */
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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthSqlService = void 0;
const bcrypt = __webpack_require__(20);
const jwt_1 = __webpack_require__(67);
const common_1 = __webpack_require__(3);
const service_1 = __webpack_require__(5);
const config_1 = __webpack_require__(41);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const user_sql_schema_1 = __webpack_require__(45);
const otp_sql_schema_1 = __webpack_require__(52);
let AuthSqlService = class AuthSqlService {
    constructor(config, sendMailService, smsService, flutterwaveService, jwtService, userRepository, otpRepository) {
        this.config = config;
        this.sendMailService = sendMailService;
        this.smsService = smsService;
        this.flutterwaveService = flutterwaveService;
        this.jwtService = jwtService;
        this.userRepository = userRepository;
        this.otpRepository = otpRepository;
    }
    async register(users) {
        try {
            let checkUserRefId;
            if (users.useRefCode) {
                const user = await this.userRepository.findOne({
                    where: { refCode: users.useRefCode },
                });
                if (!user) {
                    throw new common_1.NotFoundException("Referral code not found");
                }
                users.refBy = user.id.toString();
            }
            users.referral = {
                refBy: users.refBy,
                refCode: "",
                status: "active",
                max: 0,
                amount: 0,
            };
            const user = this.userRepository.create(users);
            const created = await this.userRepository.save(user);
            const data1 = await this.otpRepository.create({
                userID: created._id,
                type: "EmailVerification",
                code: Math.floor(100000 + Math.random() * 900000).toString(),
                status: "pending",
                createdAt: new Date(),
            });
            const data = await this.otpRepository.save(data1);
            const message = await this.smsService.generateMessage(data);
            this.sendMailService.sendMail({
                to: created.email,
                from: "Smart Prints<info@smartprints.ng>",
                subject: "Email Code Verification",
                text: message,
            });
            return {
                message: "Registration successful, Please Proceed to Email Verification",
                userID: created,
            };
        }
        catch (error) {
            throw new common_1.NotAcceptableException(error.message);
        }
    }
    async login(email, password) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (user) {
            console.log(user);
            const isMatch = await bcrypt.compare(password, user.password);
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
    getLoginToken(user) {
        const payload = {
            sub: user._id,
            username: user.username,
            email: user.email,
        };
        const access_token = this.jwtService.sign(payload, {
            expiresIn: "30d",
        });
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
    async sendTwoFactorAuthenticationMail(body) {
        const user = await this.userRepository.findOne({
            where: [{ id: body.userID }, { email: body.email || body.userID }],
        });
        if (!user) {
            throw new common_1.NotFoundException("No User Found");
        }
        const data = await this.otpRepository.save({
            userID: user._id,
            type: body.type,
            code: Math.floor(100000 + Math.random() * 900000).toString(),
            status: "pending",
            createdAt: new Date(),
            expiresAt: new Date(Date.now() + 3600000),
        });
        const message = await this.smsService.generateMessage(data);
        this.sendMailService.sendMail({
            to: user.email,
            from: "Smart Prints<info@smartprints.ng>",
            subject: body.type,
            text: message,
        });
        const d = { ...data };
        delete d.code;
        return {
            message: "Code sent",
            data: d,
        };
    }
    async editProfile(body, userID) {
        delete body.email;
        delete body.id;
        delete body.isAdmin;
        delete body.isSuperAdmin;
        delete body.status;
        delete body.password;
        await this.userRepository.update(userID, body);
        const user = await this.userRepository.findOne({ where: { _id: userID } });
        return {
            message: "User profile updated",
            data: user,
        };
    }
    async getProfile(userID) {
        const user = await this.userRepository.findOne({ where: { id: userID } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        return {
            message: "User profile found",
            data: user,
        };
    }
    async forgotPassword(code, newPassword) {
        const checkCode = await this.otpRepository.findOne({
            where: { code, type: "PasswordReset" },
        });
        if (!checkCode) {
            throw new common_1.NotFoundException("Code not found or expired");
        }
        const user = await this.userRepository.findOne({
            where: { _id: checkCode.userID },
        });
        await this.otpRepository.delete(checkCode.id);
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        await this.userRepository.update(checkCode.userID, {
            password: hashedPassword,
        });
        return this.getLoginToken(user);
    }
    async verifyCode(body) {
        const checkCode = await this.otpRepository.findOne({
            where: { code: body.code, status: "pending", type: "EmailVerification" },
        });
        if (!checkCode) {
            throw new common_1.NotFoundException("Code not found or expired");
        }
        await this.otpRepository.delete(checkCode.id);
        await this.userRepository.update(checkCode.userID, {
            emailStatus: "verified",
        });
        const user = await this.userRepository.findOne({
            where: { _id: checkCode.userID },
        });
        console.log({ user, ss: checkCode.userID });
        return this.getLoginToken(user);
    }
    deleteAccount(userID) {
        return this.userRepository.delete(userID);
    }
};
exports.AuthSqlService = AuthSqlService;
exports.AuthSqlService = AuthSqlService = __decorate([
    (0, common_1.Injectable)(),
    __param(5, (0, typeorm_1.InjectRepository)(user_sql_schema_1.UserSqlModel)),
    __param(6, (0, typeorm_1.InjectRepository)(otp_sql_schema_1.OtpSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof service_1.SendMailService !== "undefined" && service_1.SendMailService) === "function" ? _b : Object, typeof (_c = typeof service_1.SmsService !== "undefined" && service_1.SmsService) === "function" ? _c : Object, typeof (_d = typeof service_1.FlutterwaveService !== "undefined" && service_1.FlutterwaveService) === "function" ? _d : Object, typeof (_e = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _e : Object, typeof (_f = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _f : Object, typeof (_g = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _g : Object])
], AuthSqlService);


/***/ }),
/* 67 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 68 */
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(3);
const passport_1 = __webpack_require__(65);
const swagger_1 = __webpack_require__(42);
const dto_1 = __webpack_require__(69);
const dto_2 = __webpack_require__(69);
const guard_1 = __webpack_require__(96);
const auth_sql_service_1 = __webpack_require__(66);
class RegisterDTO extends (0, swagger_1.PickType)(dto_2.UserDTO, ['title', 'isAdmin', 'isSuperAdmin', 'userType', 'useRefCode', 'firstname', 'fullname', 'lastname', 'email', 'password', 'gender', 'phone', "profileImage",]) {
}
let AuthController = class AuthController {
    constructor(authSqlService) {
        this.authSqlService = authSqlService;
    }
    register(data) {
        return this.authSqlService.register(data);
    }
    signIn(data) {
        return this.authSqlService.login(data.email, data.password);
    }
    sendTwoFactorAuthenticationMail(req) {
        return this.authSqlService.sendTwoFactorAuthenticationMail(req.body);
    }
    async refresh(refreshToken) {
        return {};
    }
    getProfile(req) {
        return req.user;
    }
    editProfile(req) {
        return this.authSqlService.editProfile(req.body, req.user._id);
    }
    async facebookLogin() { }
    changePassword(req) {
        return {};
    }
    deleteAccount(body) {
        return this.authSqlService.deleteAccount(body);
    }
    forgotPassword(body) {
        return this.authSqlService.forgotPassword(body.code, body.newPassword);
    }
    verifyCode(type, code) {
        return this.authSqlService.verifyCode({ type, code });
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
    (0, common_1.Get)("facebook"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("facebook")),
    (0, swagger_1.ApiOperation)({ summary: 'Login with Facebook' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "facebookLogin", null);
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
    (0, common_1.Post)('delete-account/:id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "deleteAccount", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    (0, swagger_1.ApiBody)({ type: dto_1.ForgotPasswordDTO, }),
    (0, swagger_1.ApiOperation)({ summary: 'forgot Password' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Password successfully updated' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.ForgotPasswordDTO !== "undefined" && dto_1.ForgotPasswordDTO) === "function" ? _d : Object]),
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
    __param(0, (0, common_1.Body)("type")),
    __param(1, (0, common_1.Body)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verifyCode", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_sql_service_1.AuthSqlService !== "undefined" && auth_sql_service_1.AuthSqlService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 69 */
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
__exportStar(__webpack_require__(70), exports);
__exportStar(__webpack_require__(71), exports);
__exportStar(__webpack_require__(72), exports);
__exportStar(__webpack_require__(73), exports);
__exportStar(__webpack_require__(74), exports);
__exportStar(__webpack_require__(75), exports);
__exportStar(__webpack_require__(76), exports);
__exportStar(__webpack_require__(77), exports);
__exportStar(__webpack_require__(78), exports);
__exportStar(__webpack_require__(79), exports);
__exportStar(__webpack_require__(79), exports);
__exportStar(__webpack_require__(80), exports);
__exportStar(__webpack_require__(81), exports);
__exportStar(__webpack_require__(82), exports);
__exportStar(__webpack_require__(83), exports);
__exportStar(__webpack_require__(84), exports);
__exportStar(__webpack_require__(78), exports);
__exportStar(__webpack_require__(85), exports);
__exportStar(__webpack_require__(86), exports);
__exportStar(__webpack_require__(87), exports);
__exportStar(__webpack_require__(88), exports);
__exportStar(__webpack_require__(89), exports);
__exportStar(__webpack_require__(90), exports);
__exportStar(__webpack_require__(91), exports);
__exportStar(__webpack_require__(92), exports);
__exportStar(__webpack_require__(93), exports);
__exportStar(__webpack_require__(95), exports);


/***/ }),
/* 70 */
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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDTO = exports.Refferal = exports.RefreshTokenDTO = exports.VerifyAuthenticationDto = exports.SetAuthenticatorDto = exports.ForgotPasswordDTO = exports.LoginDTO = exports.DeleteAccountDTO = exports.ChangePasswordDTO = exports.BankAccountDTO = exports.UserIDDTO = void 0;
const enum_1 = __webpack_require__(21);
const swagger_1 = __webpack_require__(42);
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
], Refferal.prototype, "refBy", void 0);
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
        description: 'Cover image URL',
        example: 'http://example.com/cover.jpg',
        required: false,
    }),
    __metadata("design:type", String)
], UserDTO.prototype, "coverImage", void 0);
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
    (0, swagger_1.ApiProperty)({
        description: 'Indicates if the user is a reseller',
        example: false,
    }),
    __metadata("design:type", Boolean)
], UserDTO.prototype, "isReseller", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Bio of the user', required: false }),
    __metadata("design:type", String)
], UserDTO.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of birth', required: false }),
    __metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], UserDTO.prototype, "dob", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State', required: false }),
    __metadata("design:type", String)
], UserDTO.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country', required: false }),
    __metadata("design:type", String)
], UserDTO.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Local Government Area', required: false }),
    __metadata("design:type", String)
], UserDTO.prototype, "localGovernmentArea", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Social Media Profile', required: false }),
    __metadata("design:type", typeof (_h = typeof Record !== "undefined" && Record) === "function" ? _h : Object)
], UserDTO.prototype, "socialMediaProfile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Residential Address', required: false }),
    __metadata("design:type", String)
], UserDTO.prototype, "residentialAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'referral details' }),
    __metadata("design:type", Refferal)
], UserDTO.prototype, "referral", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'referral by' }),
    __metadata("design:type", String)
], UserDTO.prototype, "refBy", void 0);


/***/ }),
/* 71 */
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
exports.RequestWithdrawalDTO = exports.WalletDTO = void 0;
const swagger_1 = __webpack_require__(42);
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
    (0, swagger_1.ApiProperty)({ description: 'Name of the bank', default: "GTBank" }),
    __metadata("design:type", String)
], WalletDTO.prototype, "bankName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Bank code of the wallet', default: "058" }),
    __metadata("design:type", String)
], WalletDTO.prototype, "bankCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'amount' }),
    __metadata("design:type", Number)
], WalletDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'reason' }),
    __metadata("design:type", String)
], WalletDTO.prototype, "reason", void 0);
class RequestWithdrawalDTO {
}
exports.RequestWithdrawalDTO = RequestWithdrawalDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID associated with the wallet' }),
    __metadata("design:type", String)
], RequestWithdrawalDTO.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount to withdraw', example: 5000 }),
    __metadata("design:type", Number)
], RequestWithdrawalDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Wallet ID associated with the withdrawal request' }),
    __metadata("design:type", String)
], RequestWithdrawalDTO.prototype, "walletID", void 0);


/***/ }),
/* 72 */
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
const swagger_1 = __webpack_require__(42);
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
/* 73 */
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
const swagger_1 = __webpack_require__(42);
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
/* 74 */
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
const swagger_1 = __webpack_require__(42);
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
/* 75 */
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
const enum_1 = __webpack_require__(21);
const swagger_1 = __webpack_require__(42);
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
/* 76 */
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
const swagger_1 = __webpack_require__(42);
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
/* 77 */
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
const swagger_1 = __webpack_require__(42);
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
/* 78 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductDto = exports.DesignAreaDto = exports.DesignRectDto = exports.MockupsDto = exports.ProductSizeDto = exports.ProductColorDto = exports.RatingDto = void 0;
const swagger_1 = __webpack_require__(42);
const enum_1 = __webpack_require__(21);
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
    (0, swagger_1.ApiProperty)({ description: 'Display name of the product', example: 'Sample Product', required: false }),
    __metadata("design:type", String)
], ProductDto.prototype, "displayName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount price of the product', example: 20.0, required: false }),
    __metadata("design:type", Number)
], ProductDto.prototype, "discountPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is a 3D product', example: false, required: false }),
    __metadata("design:type", Boolean)
], ProductDto.prototype, "is3d", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is resold product', example: false, required: false }),
    __metadata("design:type", Boolean)
], ProductDto.prototype, "isResell", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product ID', }),
    __metadata("design:type", String)
], ProductDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product metadata', }),
    __metadata("design:type", typeof (_b = typeof Record !== "undefined" && Record) === "function" ? _b : Object)
], ProductDto.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product ID', }),
    __metadata("design:type", String)
], ProductDto.prototype, "productID", void 0);
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
], ProductDto.prototype, "types", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product features', example: ['cotton', 'washable'], required: false }),
    __metadata("design:type", Array)
], ProductDto.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the product', enum: ['custom', 'store'], example: 'custom' }),
    __metadata("design:type", String)
], ProductDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Image', }),
    __metadata("design:type", String)
], ProductDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average rating for the product', example: 4.5, required: false }),
    __metadata("design:type", Number)
], ProductDto.prototype, "averageRating", void 0);


/***/ }),
/* 79 */
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
exports.CartDto = void 0;
const swagger_1 = __webpack_require__(42);
const product_dto_1 = __webpack_require__(78);
class CartDto {
}
exports.CartDto = CartDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'MongoDB Object ID of the item', required: false }),
    __metadata("design:type", String)
], CartDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Item ID (client-side)', example: 'item_123' }),
    __metadata("design:type", String)
], CartDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who owns the cart item', example: 'user_123' }),
    __metadata("design:type", String)
], CartDto.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product ID being added to the cart', example: 'prod_456' }),
    __metadata("design:type", String)
], CartDto.prototype, "productID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the product', example: 'Cool T-Shirt' }),
    __metadata("design:type", String)
], CartDto.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the product', enum: ['custom', 'store'], example: 'custom' }),
    __metadata("design:type", String)
], CartDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Selected color of the product', }),
    __metadata("design:type", typeof (_a = typeof product_dto_1.ProductColorDto !== "undefined" && product_dto_1.ProductColorDto) === "function" ? _a : Object)
], CartDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price of the product', example: 29.99 }),
    __metadata("design:type", Number)
], CartDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price of the product', example: 29.99 }),
    __metadata("design:type", String)
], CartDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL to the design/mockup image', example: 'https://example.com/image.png' }),
    __metadata("design:type", String)
], CartDto.prototype, "designImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Optional metadata (e.g., size, custom notes)', required: false }),
    __metadata("design:type", Object)
], CartDto.prototype, "metadata", void 0);


/***/ }),
/* 80 */
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
const swagger_1 = __webpack_require__(42);
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
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tags', example: ['tag1', 'tag2'], required: false, type: [String] }),
    __metadata("design:type", Array)
], DesignDto.prototype, "tags", void 0);


/***/ }),
/* 81 */
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
const swagger_1 = __webpack_require__(42);
class MockupsDto {
}
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
class CategoriesDto {
}
exports.CategoriesDto = CategoriesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category name', example: 'Electronics' }),
    __metadata("design:type", String)
], CategoriesDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id', example: 'Electronics' }),
    __metadata("design:type", String)
], CategoriesDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['custom', 'store'], description: 'Category type', example: 'custom' }),
    __metadata("design:type", String)
], CategoriesDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Category image URL or path', example: '/uploads/category.png' }),
    __metadata("design:type", String)
], CategoriesDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: MockupsDto, required: false }),
    __metadata("design:type", MockupsDto)
], CategoriesDto.prototype, "mockups", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: DesignAreaDto, required: false }),
    __metadata("design:type", DesignAreaDto)
], CategoriesDto.prototype, "designArea", void 0);


/***/ }),
/* 82 */
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
const swagger_1 = __webpack_require__(42);
const categories_dto_1 = __webpack_require__(81);
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
/* 83 */
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
const swagger_1 = __webpack_require__(42);
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
/* 84 */
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
const swagger_1 = __webpack_require__(42);
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
/* 85 */
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
const swagger_1 = __webpack_require__(42);
class SelectDto {
}
exports.SelectDto = SelectDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'OTP', example: '44035' }),
    __metadata("design:type", String)
], SelectDto.prototype, "name", void 0);


/***/ }),
/* 86 */
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
const swagger_1 = __webpack_require__(42);
const cart_dto_1 = __webpack_require__(79);
class OrderDto {
}
exports.OrderDto = OrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Order ID', example: 'ord123' }),
    __metadata("design:type", String)
], OrderDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pickup location ID', example: 'loc123' }),
    __metadata("design:type", String)
], OrderDto.prototype, "pickupLocationID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID', example: 'user456' }),
    __metadata("design:type", String)
], OrderDto.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full name of the person placing the order', example: 'John Doe' }),
    __metadata("design:type", String)
], OrderDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'products', type: [cart_dto_1.CartDto] }),
    __metadata("design:type", Array)
], OrderDto.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'products', }),
    __metadata("design:type", Array)
], OrderDto.prototype, "productIDs", void 0);
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
], OrderDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of image URLs related to the order', example: ['http://example.com/image1.jpg', 'http://example.com/image2.jpg'] }),
    __metadata("design:type", Array)
], OrderDto.prototype, "imageUrls", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Additional order details', example: { giftWrap: true, deliveryInstructions: "Leave at front door" }, required: false }),
    __metadata("design:type", Object)
], OrderDto.prototype, "orderDetails", void 0);


/***/ }),
/* 87 */
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
exports.DeliveryPriceDTO = void 0;
const swagger_1 = __webpack_require__(42);
class DeliveryPriceDTO {
}
exports.DeliveryPriceDTO = DeliveryPriceDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country for delivery price' }),
    __metadata("design:type", String)
], DeliveryPriceDTO.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State for delivery price' }),
    __metadata("design:type", String)
], DeliveryPriceDTO.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Local Government Area for delivery price' }),
    __metadata("design:type", String)
], DeliveryPriceDTO.prototype, "lga", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Delivery fee' }),
    __metadata("design:type", Number)
], DeliveryPriceDTO.prototype, "deliveryFee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Additional fee for delivery' }),
    __metadata("design:type", Number)
], DeliveryPriceDTO.prototype, "additionalFee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zone for delivery price' }),
    __metadata("design:type", String)
], DeliveryPriceDTO.prototype, "zone", void 0);


/***/ }),
/* 88 */
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
exports.ProductColorDTO = void 0;
const swagger_1 = __webpack_require__(42);
class ProductColorDTO {
}
exports.ProductColorDTO = ProductColorDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Color Name' }),
    __metadata("design:type", String)
], ProductColorDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Color Hex Code' }),
    __metadata("design:type", String)
], ProductColorDTO.prototype, "hex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CSS Class Name' }),
    __metadata("design:type", String)
], ProductColorDTO.prototype, "className", void 0);


/***/ }),
/* 89 */
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
exports.PickupLocationDTO = void 0;
const swagger_1 = __webpack_require__(42);
class PickupLocationDTO {
}
exports.PickupLocationDTO = PickupLocationDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Location Name' }),
    __metadata("design:type", String)
], PickupLocationDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price' }),
    __metadata("design:type", Number)
], PickupLocationDTO.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Address' }),
    __metadata("design:type", String)
], PickupLocationDTO.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'City', required: false }),
    __metadata("design:type", String)
], PickupLocationDTO.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State', required: false }),
    __metadata("design:type", String)
], PickupLocationDTO.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact Phone', required: false }),
    __metadata("design:type", String)
], PickupLocationDTO.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is Active', default: true }),
    __metadata("design:type", Boolean)
], PickupLocationDTO.prototype, "isActive", void 0);


/***/ }),
/* 90 */
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
exports.ZoneDto = void 0;
const swagger_1 = __webpack_require__(42);
class ZoneDto {
}
exports.ZoneDto = ZoneDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zone name' }),
    __metadata("design:type", String)
], ZoneDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Local Government Area' }),
    __metadata("design:type", String)
], ZoneDto.prototype, "lga", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State' }),
    __metadata("design:type", String)
], ZoneDto.prototype, "state", void 0);


/***/ }),
/* 91 */
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
exports.SiteSettingsDTO = void 0;
const swagger_1 = __webpack_require__(42);
class SiteSettingsDTO {
}
exports.SiteSettingsDTO = SiteSettingsDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['image', 'video'], default: 'image', description: 'Hero section type' }),
    __metadata("design:type", String)
], SiteSettingsDTO.prototype, "heroType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Hero image URL' }),
    __metadata("design:type", String)
], SiteSettingsDTO.prototype, "heroImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Hero video URL' }),
    __metadata("design:type", String)
], SiteSettingsDTO.prototype, "heroVideo", void 0);


/***/ }),
/* 92 */
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionDTO = exports.CreateTransactionDTO = void 0;
const swagger_1 = __webpack_require__(42);
const enum_1 = __webpack_require__(21);
class CreateTransactionDTO {
}
exports.CreateTransactionDTO = CreateTransactionDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID associated with the transaction' }),
    __metadata("design:type", String)
], CreateTransactionDTO.prototype, "userID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount of the transaction', example: 1000.00 }),
    __metadata("design:type", Number)
], CreateTransactionDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Type of the transaction',
        enum: enum_1.TransactionType,
        example: enum_1.TransactionType.PAYMENT,
    }),
    __metadata("design:type", typeof (_a = typeof enum_1.TransactionType !== "undefined" && enum_1.TransactionType) === "function" ? _a : Object)
], CreateTransactionDTO.prototype, "transactionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status of the transaction',
        enum: enum_1.TransactionStatus,
        example: enum_1.TransactionStatus.PENDING,
    }),
    __metadata("design:type", typeof (_b = typeof enum_1.TransactionStatus !== "undefined" && enum_1.TransactionStatus) === "function" ? _b : Object)
], CreateTransactionDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction reference', required: false }),
    __metadata("design:type", String)
], CreateTransactionDTO.prototype, "reference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the transaction', required: false }),
    __metadata("design:type", String)
], CreateTransactionDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Related Order ID', required: false }),
    __metadata("design:type", String)
], CreateTransactionDTO.prototype, "orderID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Related product ID', required: false }),
    __metadata("design:type", String)
], CreateTransactionDTO.prototype, "productID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Additional metadata', required: false }),
    __metadata("design:type", typeof (_c = typeof Record !== "undefined" && Record) === "function" ? _c : Object)
], CreateTransactionDTO.prototype, "metadata", void 0);
class TransactionDTO extends CreateTransactionDTO {
}
exports.TransactionDTO = TransactionDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction ID' }),
    __metadata("design:type", String)
], TransactionDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation date' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], TransactionDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update date' }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], TransactionDTO.prototype, "updatedAt", void 0);


/***/ }),
/* 93 */
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
exports.ContactUsDTO = void 0;
const swagger_1 = __webpack_require__(42);
const class_validator_1 = __webpack_require__(94);
class ContactUsDTO {
}
exports.ContactUsDTO = ContactUsDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe', description: 'Full Name of the sender' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContactUsDTO.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pending', description: 'Status of the contact message' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContactUsDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john@example.com', description: 'Email Address of the sender' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], ContactUsDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'I have a question about...', description: 'Message content' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContactUsDTO.prototype, "message", void 0);


/***/ }),
/* 94 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 95 */
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
exports.AdminSendEmailDTO = void 0;
const swagger_1 = __webpack_require__(42);
const class_validator_1 = __webpack_require__(94);
class AdminSendEmailDTO {
}
exports.AdminSendEmailDTO = AdminSendEmailDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@example.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], AdminSendEmailDTO.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Hello from Admin' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdminSendEmailDTO.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'This is a message from the admin.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdminSendEmailDTO.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '<h1>Hello</h1><p>This is a message from the admin.</p>' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdminSendEmailDTO.prototype, "html", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary', isArray: true, required: false }),
    __metadata("design:type", Array)
], AdminSendEmailDTO.prototype, "attachments", void 0);


/***/ }),
/* 96 */
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
__exportStar(__webpack_require__(97), exports);
__exportStar(__webpack_require__(100), exports);
__exportStar(__webpack_require__(101), exports);
__exportStar(__webpack_require__(102), exports);


/***/ }),
/* 97 */
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
const decorator_1 = __webpack_require__(98);
const common_1 = __webpack_require__(3);
const core_1 = __webpack_require__(1);
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
        const hasRole = () => (user.isAdmin || user.isSuperAdmin);
        if (!user || !hasRole()) {
            throw new common_1.ForbiddenException('You do not have permission to access this resource');
        }
        return (user.isAdmin || user.isSuperAdmin);
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RolesGuard);


/***/ }),
/* 98 */
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
__exportStar(__webpack_require__(99), exports);


/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = exports.ROLES_KEY = void 0;
const common_1 = __webpack_require__(3);
exports.ROLES_KEY = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;


/***/ }),
/* 100 */
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
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(41);
const jwt_1 = __webpack_require__(67);
const sql_schema_1 = __webpack_require__(44);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
let AuthGuard = class AuthGuard {
    constructor(userRepository, jwtService, configService) {
        this.userRepository = userRepository;
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
            const user = await this.userRepository.findOneBy({ _id: payload.sub });
            console.log(user);
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
    __param(0, (0, typeorm_1.InjectRepository)(sql_schema_1.UserSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], AuthGuard);


/***/ }),
/* 101 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(3);
const passport_1 = __webpack_require__(65);
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
/* 102 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const common_1 = __webpack_require__(3);
const passport_1 = __webpack_require__(65);
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
exports.LocalAuthGuard = LocalAuthGuard;
exports.LocalAuthGuard = LocalAuthGuard = __decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);


/***/ }),
/* 103 */
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
__exportStar(__webpack_require__(104), exports);
__exportStar(__webpack_require__(106), exports);
__exportStar(__webpack_require__(108), exports);
__exportStar(__webpack_require__(110), exports);


/***/ }),
/* 104 */
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
const passport_jwt_1 = __webpack_require__(105);
const passport_1 = __webpack_require__(65);
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(41);
const sql_schema_1 = __webpack_require__(44);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(userRepository, configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get("JWT_SECRET"),
        });
        this.userRepository = userRepository;
        this.configService = configService;
    }
    async validate(payload) {
        const user = await this.userRepository.findOneBy({ _id: payload.sub });
        return user;
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sql_schema_1.UserSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], JwtStrategy);


/***/ }),
/* 105 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 106 */
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
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(41);
const passport_1 = __webpack_require__(65);
const passport_facebook_1 = __webpack_require__(107);
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
/* 107 */
/***/ ((module) => {

module.exports = require("passport-facebook");

/***/ }),
/* 108 */
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
const passport_1 = __webpack_require__(65);
const passport_google_oauth20_1 = __webpack_require__(109);
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(41);
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
/* 109 */
/***/ ((module) => {

module.exports = require("passport-google-oauth20");

/***/ }),
/* 110 */
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
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(41);
const passport_1 = __webpack_require__(65);
const passport_facebook_1 = __webpack_require__(107);
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
/* 111 */
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
const passport_local_1 = __webpack_require__(112);
const passport_1 = __webpack_require__(65);
const common_1 = __webpack_require__(3);
const auth_sql_service_1 = __webpack_require__(66);
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
    __metadata("design:paramtypes", [typeof (_a = typeof auth_sql_service_1.AuthSqlService !== "undefined" && auth_sql_service_1.AuthSqlService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),
/* 112 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 113 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(3);
const service_1 = __webpack_require__(5);
const users_controller_1 = __webpack_require__(114);
const typeorm_1 = __webpack_require__(61);
const user_sql_schema_1 = __webpack_require__(45);
const user_sql_service_1 = __webpack_require__(115);
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_sql_schema_1.UserSqlModel])],
        providers: [service_1.NotificationService, service_1.NotificationGateway, service_1.SendMailService, user_sql_service_1.UserSqlService],
        exports: [user_sql_service_1.UserSqlService],
        controllers: [users_controller_1.UsersController]
    })
], UsersModule);


/***/ }),
/* 114 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(3);
const guard_1 = __webpack_require__(96);
const swagger_1 = __webpack_require__(42);
const enum_1 = __webpack_require__(21);
const decorator_1 = __webpack_require__(98);
let UsersController = class UsersController {
};
exports.UsersController = UsersController;
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)(enum_1.UserType.ADMIN, enum_1.UserType.SUPER_ADMIN)
], UsersController);


/***/ }),
/* 115 */
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
exports.UserSqlService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const user_sql_schema_1 = __webpack_require__(45);
let UserSqlService = class UserSqlService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(user) {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }
    async findAll() {
        return this.userRepository.find();
    }
    async findOne(id) {
        return this.userRepository.findOne({ where: { id } });
    }
    async update(id, user) {
        await this.userRepository.update(id, user);
        return this.userRepository.findOne({ where: { id } });
    }
    async remove(id) {
        await this.userRepository.delete(id);
    }
};
exports.UserSqlService = UserSqlService;
exports.UserSqlService = UserSqlService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_sql_schema_1.UserSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserSqlService);


/***/ }),
/* 116 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadsModule = void 0;
const common_1 = __webpack_require__(3);
const uploads_service_1 = __webpack_require__(117);
const uploads_controller_1 = __webpack_require__(122);
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
/* 117 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadsService = void 0;
const common_1 = __webpack_require__(3);
const multer_1 = __webpack_require__(118);
const path_1 = __webpack_require__(63);
const cloudinary_1 = __webpack_require__(119);
const streamifier = __webpack_require__(120);
const dotenv = __webpack_require__(121);
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
                    url: result.secure_url.startsWith('http://')
                        ? result.secure_url.replace('http://', 'https://')
                        : result.secure_url,
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
/* 118 */
/***/ ((module) => {

module.exports = require("multer");

/***/ }),
/* 119 */
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),
/* 120 */
/***/ ((module) => {

module.exports = require("streamifier");

/***/ }),
/* 121 */
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),
/* 122 */
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
exports.UploadsController = void 0;
const common_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(42);
const uploads_service_1 = __webpack_require__(117);
const platform_express_1 = __webpack_require__(123);
const multer_1 = __webpack_require__(118);
const path_1 = __webpack_require__(63);
const crypto_1 = __webpack_require__(18);
const fs_1 = __webpack_require__(62);
let UploadsController = class UploadsController {
    constructor(uploadsService) {
        this.uploadsService = uploadsService;
    }
    uploadFile(req, files) {
        const host = req.protocol + '://' + req.get('host');
        const hostCheck = host.startsWith('http://')
            ? host.replace('http://', 'https://')
            : host;
        const fileUrls = files?.map((file) => ({
            originalname: file.originalname,
            url: `${host}/v1/upload/file/${file.filename}`,
        }));
        return fileUrls;
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
    __metadata("design:returntype", Object)
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
/* 123 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 124 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CaslModule = void 0;
const common_1 = __webpack_require__(3);
const casl_ability_factory_1 = __webpack_require__(125);
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
/* 125 */
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
const ability_1 = __webpack_require__(126);
const common_1 = __webpack_require__(3);
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
/* 126 */
/***/ ((module) => {

module.exports = require("@casl/ability");

/***/ }),
/* 127 */
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),
/* 128 */
/***/ ((module) => {

module.exports = require("@nestjs/throttler");

/***/ }),
/* 129 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsModule = void 0;
const common_1 = __webpack_require__(3);
const products_controller_1 = __webpack_require__(130);
const typeorm_1 = __webpack_require__(61);
const product_sql_schema_1 = __webpack_require__(47);
const user_sql_schema_1 = __webpack_require__(45);
const product_sql_service_1 = __webpack_require__(131);
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_sql_schema_1.ProductSqlModel, user_sql_schema_1.UserSqlModel])],
        controllers: [products_controller_1.ProductController],
        providers: [product_sql_service_1.ProductSqlService],
        exports: [product_sql_service_1.ProductSqlService]
    })
], ProductsModule);


/***/ }),
/* 130 */
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductController = void 0;
const common_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(69);
const guard_1 = __webpack_require__(96);
const swagger_1 = __webpack_require__(42);
const decorator_1 = __webpack_require__(98);
const enum_1 = __webpack_require__(21);
const product_sql_service_1 = __webpack_require__(131);
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async create(product, req) {
        return this.productService.create(product, req.user);
    }
    async update(product, productID, req) {
        return this.productService.update(productID, product, req.user);
    }
    async toggleActive(productID, isActive, req) {
        return this.productService.toggleActive(productID, isActive);
    }
    async findSellers(query) {
        return this.productService.findSellers(query);
    }
    async findByUsername(username, query) {
        return this.productService.findByUsername(username, query);
    }
    async findbyId(params, query) {
        return this.productService.findByAny(params, query);
    }
    async findbyMany(params, query) {
        return this.productService.findByMany(params, query);
    }
    async findbyManyAll(params, query) {
        return this.productService.findByManyAll(params, query);
    }
    async findAll(query) {
        return this.productService.findAll(query);
    }
    async delete(ids, req) {
        return this.productService.remove(ids);
    }
    async rateProduct(productID, body, req) {
        return this.productService.rateProduct(productID, body, req.user);
    }
    async getAllCustomProducts(query) {
        return this.productService.getAllCustomProducts(query);
    }
    async getAllShopifyProducts(query) {
        return this.productService.getAllShopifyProducts(query);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Create a new product" }),
    (0, swagger_1.ApiBody)({
        type: dto_1.ProductDto,
        description: "Creating a new product Details",
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.ProductDto !== "undefined" && dto_1.ProductDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":productID"),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
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
    (0, common_1.Patch)("toggle-active/:productID"),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Toggle product active status" }),
    (0, swagger_1.ApiParam)({
        name: "productID",
        description: "The ID of the product to toggle",
        type: String
    }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                isActive: { type: 'boolean', description: 'New active status' },
            },
        },
        description: "Toggle the active status of a product",
    }),
    __param(0, (0, common_1.Param)("productID")),
    __param(1, (0, common_1.Body)("isActive")),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "toggleActive", null);
__decorate([
    (0, common_1.Get)("sellers"),
    (0, swagger_1.ApiOperation)({ summary: "Get sellers with at least 1 product" }),
    (0, swagger_1.ApiQuery)({
        name: "page",
        required: false,
        description: "Page number for pagination",
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: "limit",
        required: false,
        description: "Number of sellers per page",
        type: Number,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findSellers", null);
__decorate([
    (0, common_1.Get)("user/:username"),
    (0, swagger_1.ApiOperation)({ summary: "Get a user products by username" }),
    (0, swagger_1.ApiParam)({
        name: "username",
        description: "The username of the user",
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
    __param(0, (0, common_1.Param)("username")),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findByUsername", null);
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
    (0, common_1.Post)("by-many"),
    (0, swagger_1.ApiBody)({
        required: false,
        type: dto_1.ProductDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.ProductDto !== "undefined" && dto_1.ProductDto) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findbyMany", null);
__decorate([
    (0, common_1.Post)("by-many-all"),
    (0, swagger_1.ApiBody)({
        required: false,
        type: dto_1.ProductDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof dto_1.ProductDto !== "undefined" && dto_1.ProductDto) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findbyManyAll", null);
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
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)(enum_1.UserType.ADMIN, enum_1.UserType.SUPER_ADMIN),
    (0, swagger_1.ApiOperation)({ summary: "Delete products by their IDs" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(":productID/rate"),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Rate a product" }),
    (0, swagger_1.ApiParam)({ name: "productID", description: "The product _id to rate", type: String }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                rating: { type: "number", description: "Rating value between 0 and 5" },
                content: { type: "string", description: "Rating content/feedback" },
            },
            required: ["rating"],
        },
        description: "Rate a product with a score and optional content",
    }),
    __param(0, (0, common_1.Param)("productID")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "rateProduct", null);
__decorate([
    (0, common_1.Get)("custom"),
    (0, swagger_1.ApiOperation)({ summary: "Get all custom products" }),
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
], ProductController.prototype, "getAllCustomProducts", null);
__decorate([
    (0, common_1.Get)("shopify"),
    (0, swagger_1.ApiOperation)({ summary: "Get all shopify products" }),
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
], ProductController.prototype, "getAllShopifyProducts", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)("product"),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [typeof (_a = typeof product_sql_service_1.ProductSqlService !== "undefined" && product_sql_service_1.ProductSqlService) === "function" ? _a : Object])
], ProductController);


/***/ }),
/* 131 */
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
exports.ProductSqlService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const product_sql_schema_1 = __webpack_require__(47);
const service_1 = __webpack_require__(5);
const sql_schema_1 = __webpack_require__(44);
let ProductSqlService = class ProductSqlService {
    constructor(productRepository, userRepository) {
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }
    async create(product, userData) {
        if (product.type == "custom" && !userData.isAdmin) {
            throw new common_1.NotAcceptableException("You are not authorized to create custom products");
        }
        const newProduct = this.productRepository.create({ ...product, userID: userData._id.toString(), status: "active" });
        const data = await this.productRepository.save(newProduct);
        return (0, service_1.serviceResponse)({
            data,
            message: "Product plan created successfully",
            status: true,
        });
    }
    async findByAny(param, query) {
        const { key, value } = param;
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const findall = await this.productRepository.find({ where: { [key]: value, }, take: limit, skip: skip, relations: ['user', 'product'], });
        return (0, service_1.serviceResponse)({
            data: findall,
            message: "Product plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.productRepository,
                query,
                querys: { [key]: value },
            }),
        });
    }
    async findByMany(param, query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        console.log(param);
        param.isActive = true;
        const findall = await this.productRepository.find({
            where: param,
            take: limit,
            skip: skip,
            relations: ['user', 'product'],
        });
        return (0, service_1.serviceResponse)({
            data: findall,
            message: "Product plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.productRepository,
                query,
                querys: param,
            }),
        });
    }
    async findByManyAll(param, query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        console.log(param);
        param.isActive = true;
        const findall = await this.productRepository.find({
            where: [
                {
                    status: "active",
                    type: "store",
                    isApproved: true,
                    ...param,
                },
                {
                    status: "active",
                    type: (0, typeorm_2.Not)("store"),
                    ...param,
                },
            ],
            take: limit,
            skip: skip,
            relations: ['user', 'product'],
        });
        return (0, service_1.serviceResponse)({
            data: findall,
            message: "Product plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.productRepository,
                query,
                querys: param,
            }),
        });
    }
    async toggleActive(id, isActive) {
        await this.productRepository.update(id, { isActive });
        const product = await this.productRepository.findOne({ where: { _id: id } });
        return (0, service_1.serviceResponse)({
            data: product,
            message: `Product plan ${isActive ? "activated" : "deactivated"} successfully`,
            status: true,
        });
    }
    async findAll(query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const findall = await this.productRepository.find({
            take: limit,
            skip: skip,
            relations: ['user'],
        });
        return (0, service_1.serviceResponse)({
            data: findall,
            message: "Product plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.productRepository,
                query,
                querys: {},
            }),
        });
    }
    async findOne(id) {
        return this.productRepository.findOne({ where: { id }, relations: ['user'] });
    }
    async update(id, product, userData) {
        delete product._id;
        if (product.type == "custom" && !userData.isAdmin) {
            throw new common_1.NotAcceptableException("You are not authorized to create custom products");
        }
        await this.productRepository.update(id, { ...product, });
        const products = await this.productRepository.findOne({ where: { _id: id } });
        return (0, service_1.serviceResponse)({
            data: products,
            message: "Product updated successfully",
            status: true,
        });
    }
    async remove(id) {
        return (0, service_1.serviceResponse)({
            data: await this.productRepository.delete({ _id: id }),
            message: "Product plan deleted successfully",
            status: true,
        });
    }
    async rateProduct(id, payload, userData) {
        const product = await this.productRepository.findOne({ where: { _id: id } });
        if (!product) {
            return (0, service_1.serviceResponse)({ status: false, message: "Product not found" });
        }
        const ratingValue = Number(payload.rating);
        if (isNaN(ratingValue) || ratingValue < 0 || ratingValue > 5) {
            return (0, service_1.serviceResponse)({ status: false, message: "Invalid rating value" });
        }
        const feedback = payload.feedback ?? payload.content ?? "";
        const existing = Array.isArray(product.rating) ? product.rating : [];
        const idx = existing.findIndex((r) => String(r.userID) === String(userData._id));
        const entry = {
            rating: ratingValue,
            feedback,
            userID: String(userData._id),
            date: new Date(),
        };
        if (idx >= 0) {
            existing[idx] = entry;
        }
        else {
            existing.push(entry);
        }
        const avg = existing.length > 0
            ? existing.reduce((sum, r) => sum + Number(r.rating || 0), 0) / existing.length
            : 0;
        await this.productRepository.update(id, { rating: existing, averageRating: avg });
        const updated = await this.productRepository.findOne({ where: { _id: id } });
        return (0, service_1.serviceResponse)({
            status: true,
            message: "Product rated successfully",
            data: updated,
        });
    }
    async findSellers(query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const result = await this.productRepository
            .createQueryBuilder('product')
            .select('DISTINCT product.userID', 'userID')
            .limit(limit)
            .offset(skip)
            .getRawMany();
        const userIDs = result.map((r) => r.userID);
        if (userIDs.length === 0) {
            return (0, service_1.serviceResponse)({
                data: [],
                message: 'Sellers retrieved successfully',
                status: true,
                metadata: { total: 0, page, limit },
            });
        }
        const [users, total] = await this.userRepository.findAndCount({
            where: { _id: (0, typeorm_2.In)(userIDs), isReseller: true },
            select: ['_id', 'bio', 'fullname', 'email', 'profileImage', 'coverImage', 'username'],
        });
        return (0, service_1.serviceResponse)({
            data: users,
            message: 'Sellers retrieved successfully',
            status: true,
            metadata: { total, page, limit },
        });
    }
    async findByUsername(username, query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const user = await this.userRepository.findOne({
            where: { username }, select: ['_id', 'fullname', 'email', 'profileImage', 'coverImage', 'username', 'bio'],
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with username ${username} not found`);
        }
        const [products, total] = await this.productRepository.findAndCount({
            where: { userID: user._id, isApproved: true, isResell: true },
            take: limit,
            skip: skip,
            relations: ['user'],
        });
        return (0, service_1.serviceResponse)({
            data: {
                user,
                products
            },
            message: `Products for user ${username} retrieved successfully`,
            status: true,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.productRepository,
                query,
                querys: { userID: user._id, isApproved: true, isResell: true },
            }),
        });
    }
    async getAllCustomProducts(query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const findall = await this.productRepository.find({
            where: { type: "custom", status: "active", },
            take: limit,
            skip: skip,
            relations: ['user', 'product'],
        });
        return (0, service_1.serviceResponse)({
            data: findall,
            message: "Product plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.productRepository,
                query,
                querys: { type: "custom" },
            }),
        });
    }
    async getAllShopifyProducts(query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const findall = await this.productRepository.createQueryBuilder('product')
            .leftJoinAndSelect('product.user', 'user')
            .leftJoinAndSelect('product.product', 'productRelation')
            .where('product.type = :type', { type: 'store' })
            .andWhere('product.status = :status', { status: 'active' })
            .andWhere('product.isApproved = :isApproved', { isApproved: true })
            .andWhere(new typeorm_2.Brackets(qb => {
            qb.where('product.isResell = :isResell', { isResell: true })
                .andWhere('product.isApproved = :isApproved', { isApproved: true })
                .orWhere('product.isResell = :isResellFalse', { isResellFalse: false });
        }));
        return (0, service_1.serviceResponse)({
            data: findall,
            message: "Product plans retrieved successfully",
            status: true,
        });
    }
};
exports.ProductSqlService = ProductSqlService;
exports.ProductSqlService = ProductSqlService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_sql_schema_1.ProductSqlModel)),
    __param(1, (0, typeorm_1.InjectRepository)(sql_schema_1.UserSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ProductSqlService);


/***/ }),
/* 132 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CartModule = void 0;
const common_1 = __webpack_require__(3);
const cart_controller_1 = __webpack_require__(133);
const typeorm_1 = __webpack_require__(61);
const cart_sql_schema_1 = __webpack_require__(50);
const cart_sql_service_1 = __webpack_require__(134);
const sql_schema_1 = __webpack_require__(44);
let CartModule = class CartModule {
};
exports.CartModule = CartModule;
exports.CartModule = CartModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cart_sql_schema_1.CartSqlModel, sql_schema_1.ProductSqlModel])],
        controllers: [cart_controller_1.CartController],
        providers: [cart_sql_service_1.CartSqlService],
        exports: [cart_sql_service_1.CartSqlService]
    })
], CartModule);


/***/ }),
/* 133 */
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
const common_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(42);
const guard_1 = __webpack_require__(96);
const dto_1 = __webpack_require__(69);
const cart_sql_service_1 = __webpack_require__(134);
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async create(cart, req) {
        return this.cartService.create(cart, req.user);
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
    async clearUserCart(userID) {
        return this.cartService.clearUserCart(userID);
    }
    async updateCartsQuantity(cartUpdates) {
        return this.cartService.updateCartsQuantity(cartUpdates);
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
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete cart by ID' }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)('clear/user/:userID'),
    (0, swagger_1.ApiOperation)({ summary: 'Clear cart by user ID' }),
    (0, swagger_1.ApiParam)({ name: 'userID', required: true, type: String }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "clearUserCart", null);
__decorate([
    (0, common_1.Post)('update-quantities'),
    (0, swagger_1.ApiOperation)({ summary: 'Update quantities of multiple carts' }),
    (0, swagger_1.ApiBody)({ description: 'Array of cart IDs and their new quantities',
        schema: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'string', description: 'Cart ID' },
                    quantity: { type: 'number', description: 'New quantity' },
                },
                required: ['id', 'quantity'],
            },
        },
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updateCartsQuantity", null);
exports.CartController = CartController = __decorate([
    (0, swagger_1.ApiTags)('cart'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('carts'),
    __metadata("design:paramtypes", [typeof (_a = typeof cart_sql_service_1.CartSqlService !== "undefined" && cart_sql_service_1.CartSqlService) === "function" ? _a : Object])
], CartController);


/***/ }),
/* 134 */
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
exports.CartSqlService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const cart_sql_schema_1 = __webpack_require__(50);
const service_1 = __webpack_require__(5);
const sql_schema_1 = __webpack_require__(44);
let CartSqlService = class CartSqlService {
    constructor(cartRepository, productRepository) {
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
    }
    async create(cart, userData) {
        const product = await this.productRepository.findOne({ where: { _id: cart.productID } });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        const isFront = (cart.metadata?.front?.elements ?? []).length > 0;
        const isBack = (cart.metadata?.back?.elements ?? []).length > 0;
        let price = product?.salePrice || product?.basePrice || 0;
        const isMug = product?.category === "mug";
        if (isMug) {
            const sizeName = cart.size;
            if (sizeName === "Standard") {
                price = product?.standardPrice ?? product?.salePrice ?? product?.basePrice ?? 0;
            }
            else if (sizeName === "Large") {
                price = product?.largePrice ?? product?.salePrice ?? product?.basePrice ?? 0;
            }
            else {
                price = product?.salePrice ?? product?.basePrice ?? 0;
            }
        }
        if (isFront && isBack) {
            const additionalPrice = (product?.additionalPrice ?? 0) < 1 ? 1500 : Number(product?.additionalPrice);
            const totalPrice = Number(price) + additionalPrice;
            price = totalPrice;
        }
        const newCart = this.cartRepository.create({ ...cart, price, userID: userData._id.toString() });
        const data = await this.cartRepository.save(newCart);
        return (0, service_1.serviceResponse)({ data, message: 'Cart created', status: true });
    }
    async findAll(query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const carts = await this.cartRepository.find({
            take: limit,
            skip,
            relations: ['product']
        });
        return (0, service_1.serviceResponse)({ data: carts, message: 'Carts retrieved', status: true, metadata: await (0, service_1.getSqlMetadata)({ model: this.cartRepository, query, querys: {} }) });
    }
    async findByUser(userID) {
        const cart = await this.cartRepository.find({ where: { userID }, relations: ['product'] });
        return (0, service_1.serviceResponse)({ data: cart, message: 'Cart retrieved', status: true });
    }
    async update(id, updateCartDto) {
        const updated = await this.cartRepository.update(id, updateCartDto);
        if (!updated)
            return (0, service_1.serviceResponse)({ message: 'Cart not found', status: false });
        return (0, service_1.serviceResponse)({ data: updated, message: 'Cart updated', status: true });
    }
    async delete(id) {
        const result = await this.cartRepository.delete(id);
        if (!result)
            return (0, service_1.serviceResponse)({ message: 'No carts deleted', status: false });
        return (0, service_1.serviceResponse)({ message: `Cart deleted`, status: true });
    }
    async clearUserCart(userID) {
        const result = await this.cartRepository.delete({ userID: userID });
        return (0, service_1.serviceResponse)({ message: `${result.affected} cart(s) deleted`, status: true });
    }
    async updateCartsQuantity(cartUpdates) {
        console.log({ cartUpdates });
        try {
            const updatePromises = cartUpdates.map((update, i) => this.cartRepository.update(update.id, { quantity: update.quantity }));
            await Promise.all(updatePromises);
            return (0, service_1.serviceResponse)({ message: 'Carts quantities updated', status: true });
        }
        catch (error) {
            throw new common_1.NotAcceptableException(error.message);
        }
    }
};
exports.CartSqlService = CartSqlService;
exports.CartSqlService = CartSqlService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_sql_schema_1.CartSqlModel)),
    __param(1, (0, typeorm_1.InjectRepository)(sql_schema_1.ProductSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], CartSqlService);


/***/ }),
/* 135 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesModule = void 0;
const common_1 = __webpack_require__(3);
const categories_controller_1 = __webpack_require__(136);
const typeorm_1 = __webpack_require__(61);
const categories_sql_schema_1 = __webpack_require__(49);
const categories_sql_service_1 = __webpack_require__(137);
let CategoriesModule = class CategoriesModule {
};
exports.CategoriesModule = CategoriesModule;
exports.CategoriesModule = CategoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([categories_sql_schema_1.CategoriesSqlModel])],
        controllers: [categories_controller_1.CategoriesController],
        providers: [categories_sql_service_1.CategoriesSqlService],
        exports: [categories_sql_service_1.CategoriesSqlService]
    })
], CategoriesModule);


/***/ }),
/* 136 */
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
const common_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(69);
const guard_1 = __webpack_require__(96);
const swagger_1 = __webpack_require__(42);
const decorator_1 = __webpack_require__(98);
const enum_1 = __webpack_require__(21);
const categories_sql_service_1 = __webpack_require__(137);
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    async create(categories, req) {
        return this.categoriesService.create(categories);
    }
    async update(categories, categoriesID, req) {
        return this.categoriesService.update(categoriesID, categories);
    }
    async findAll(query) {
        return this.categoriesService.findAll();
    }
    async delete(ids, req) {
        return this.categoriesService.remove(ids);
    }
};
exports.CategoriesController = CategoriesController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)(enum_1.UserType.ADMIN, enum_1.UserType.SUPER_ADMIN),
    (0, swagger_1.ApiOperation)({ summary: "Create a new categories" }),
    (0, swagger_1.ApiBody)({
        type: dto_1.CategoriesDto,
        description: "Creating a new categories Details",
    }),
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
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)(enum_1.UserType.ADMIN, enum_1.UserType.SUPER_ADMIN),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("categoriesID")),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.CategoriesDto !== "undefined" && dto_1.CategoriesDto) === "function" ? _c : Object, String, Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(""),
    (0, swagger_1.ApiOperation)({ summary: "Get all categoriess" }),
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
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)(enum_1.UserType.ADMIN, enum_1.UserType.SUPER_ADMIN),
    (0, swagger_1.ApiOperation)({ summary: "Delete categoriess by their IDs" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "delete", null);
exports.CategoriesController = CategoriesController = __decorate([
    (0, swagger_1.ApiTags)("categories"),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [typeof (_a = typeof categories_sql_service_1.CategoriesSqlService !== "undefined" && categories_sql_service_1.CategoriesSqlService) === "function" ? _a : Object])
], CategoriesController);


/***/ }),
/* 137 */
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
exports.CategoriesSqlService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const categories_sql_schema_1 = __webpack_require__(49);
let CategoriesSqlService = class CategoriesSqlService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    async create(category) {
        try {
            const newCategory = this.categoriesRepository.create(category);
            return this.categoriesRepository.save(newCategory);
        }
        catch (error) {
            throw new common_1.NotAcceptableException(error.message);
        }
    }
    async findAll() {
        return this.categoriesRepository.find();
    }
    async findOne(id) {
        return this.categoriesRepository.findOne({ where: { _id: id } });
    }
    async update(id, category) {
        await this.categoriesRepository.update(id, category);
        return this.categoriesRepository.findOne({ where: { _id: id } });
    }
    async remove(id) {
        return await this.categoriesRepository.delete(id);
    }
};
exports.CategoriesSqlService = CategoriesSqlService;
exports.CategoriesSqlService = CategoriesSqlService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(categories_sql_schema_1.CategoriesSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CategoriesSqlService);


/***/ }),
/* 138 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersModule = void 0;
const common_1 = __webpack_require__(3);
const orders_controller_1 = __webpack_require__(139);
const service_1 = __webpack_require__(5);
const paystack_1 = __webpack_require__(141);
const typeorm_1 = __webpack_require__(61);
const order_sql_schema_1 = __webpack_require__(48);
const order_sql_service_1 = __webpack_require__(140);
const sql_schema_1 = __webpack_require__(44);
let OrdersModule = class OrdersModule {
};
exports.OrdersModule = OrdersModule;
exports.OrdersModule = OrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_sql_schema_1.OrderSqlModel, sql_schema_1.TransactionSqlModel, sql_schema_1.CartSqlModel, sql_schema_1.DeliveryPriceSqlModel, sql_schema_1.PickupLocationSqlModel]),],
        controllers: [orders_controller_1.OrderController],
        providers: [service_1.FlutterwaveService, paystack_1.PaystackService, order_sql_service_1.OrderSqlService, service_1.SendMailService],
        exports: [order_sql_service_1.OrderSqlService]
    })
], OrdersModule);


/***/ }),
/* 139 */
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
const common_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(69);
const guard_1 = __webpack_require__(96);
const swagger_1 = __webpack_require__(42);
const decorator_1 = __webpack_require__(98);
const enum_1 = __webpack_require__(21);
const order_sql_service_1 = __webpack_require__(140);
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async create(order, req) {
        return this.orderService.create(order, req.user);
    }
    async update(order, orderID, req) {
        return this.orderService.update(orderID, order);
    }
    async findbyId(params, query) {
        return this.orderService.findByAny(params, query);
    }
    async findAll(query) {
        return this.orderService.findAll(query);
    }
    async delete(ids) {
        return this.orderService.remove(ids);
    }
    async handlePaystackWebhook(req) {
        return this.orderService.handlePaystackWebhook(req);
    }
    async verifyOrderPayment(id, req) {
        return this.orderService.verifyOrderPayment(id, req.user);
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
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)(enum_1.UserType.ADMIN, enum_1.UserType.SUPER_ADMIN),
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
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Delete order by ID" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)("webhook/paystack"),
    (0, swagger_1.ApiOperation)({ summary: "Paystack Webhook" }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "handlePaystackWebhook", null);
__decorate([
    (0, common_1.Get)("verify-payment/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Verify order payment by ID" }),
    (0, swagger_1.ApiParam)({ name: "id", required: true, type: String }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "verifyOrderPayment", null);
exports.OrderController = OrderController = __decorate([
    (0, swagger_1.ApiTags)("order"),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [typeof (_a = typeof order_sql_service_1.OrderSqlService !== "undefined" && order_sql_service_1.OrderSqlService) === "function" ? _a : Object])
], OrderController);


/***/ }),
/* 140 */
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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderSqlService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const order_sql_schema_1 = __webpack_require__(48);
const paystack_1 = __webpack_require__(141);
const service_1 = __webpack_require__(5);
const crypto_1 = __webpack_require__(18);
const sql_schema_1 = __webpack_require__(44);
let OrderSqlService = class OrderSqlService {
    constructor(orderRepository, pickupLocationRepository, cartRepository, deliveryPriceSqlModelRepository, paystack, sendMailService, transactionRepository) {
        this.orderRepository = orderRepository;
        this.pickupLocationRepository = pickupLocationRepository;
        this.cartRepository = cartRepository;
        this.deliveryPriceSqlModelRepository = deliveryPriceSqlModelRepository;
        this.paystack = paystack;
        this.sendMailService = sendMailService;
        this.transactionRepository = transactionRepository;
    }
    async create(order, userData) {
        try {
            const tx_ref = `smartprints-${userData.id}-${(0, crypto_1.randomUUID)()
                .replace(/\D/g, "")
                .substring(0, 10)}`;
            const cartItems = await this.cartRepository.find({
                where: { userID: userData._id },
            });
            const totalPrice = cartItems.reduce((sum, item) => sum + (Number(item?.price) || 0), 0);
            const delivery = await this.deliveryPriceSqlModelRepository.findOne({
                where: {
                    state: order.orderDetails?.state,
                    lga: order.orderDetails?.lga,
                    zone: order.orderDetails?.wards,
                },
            });
            let deliveryFee = 0;
            if (order?.pickupLocationID) {
                const location = await this.pickupLocationRepository.findOne({
                    where: { _id: order?.pickupLocationID },
                });
                if (!location) {
                    throw new common_1.NotFoundException("Pickup location not found");
                }
                deliveryFee = Number(location?.price);
            }
            else {
                for (let i = 0; i < cartItems.length; i++) {
                    deliveryFee += delivery?.deliveryFee ?? 3000;
                    if (cartItems[i].quantity && cartItems[i].quantity > 1) {
                        deliveryFee +=
                            (cartItems[i].quantity - 1) * (delivery?.additionalFee ?? 1000);
                    }
                }
            }
            console.log({ delivery2: delivery });
            console.log({
                ...order,
                tx_ref,
                products: cartItems,
                totalPrice: totalPrice,
                deliveryFee,
                userID: userData._id.toString(),
            });
            const newOrder = this.orderRepository.create({
                ...order,
                tx_ref,
                products: cartItems,
                totalPrice: totalPrice,
                deliveryFee,
                userID: userData._id.toString(),
            });
            const created = await this.orderRepository.save(newOrder);
            console.log(created);
            const paymentrequest = {
                amount: Number(created.totalPrice) + Number(created.deliveryFee),
                currency: "NGN",
                email: userData.email,
                callback_url: "https://smartprints.ng/?payment=" + created._id.toString(),
                metadata: {
                    tx_ref,
                    orderID: created._id.toString(),
                    userId: userData._id.toString(),
                },
            };
            const payment = await this.paystack.createPaymentLink(paymentrequest);
            console.log(payment);
            const check = await this.orderRepository.update(created._id.toString(), {
                paystackRef: payment.data.reference,
                authorization_url: payment.data.authorization_url,
                accessCode: payment.data.access_code,
            });
            return (0, service_1.serviceResponse)({
                data: payment.data.authorization_url,
                message: "Order plan created successfully",
                status: true,
            });
        }
        catch (error) {
            throw new common_1.NotAcceptableException(error.message);
        }
    }
    async findAll(query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const data = await this.orderRepository.find({
            take: limit,
            skip: skip,
            order: {
                createdAt: "DESC",
            },
            relations: [
                "user",
            ],
        });
        return (0, service_1.serviceResponse)({
            data,
            message: "Orders retrieved successfully",
            status: true,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.orderRepository,
                query,
            }),
        });
    }
    async findByAny(params, query) {
        const { key, value } = params;
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const data = await this.orderRepository.find({
            where: { [key]: value },
            take: limit,
            skip: skip,
            order: {
                createdAt: "DESC",
            },
            relations: ["user"],
        });
        return (0, service_1.serviceResponse)({
            data,
            message: "Orders retrieved successfully",
            status: true,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.orderRepository,
                query,
                querys: { [key]: value },
            }),
        });
    }
    async update(id, order) {
        const existingOrder = await this.orderRepository.findOne({
            where: { _id: id },
            relations: ["user"],
        });
        if (!existingOrder) {
            throw new common_1.NotFoundException("Order not found");
        }
        await this.orderRepository.update(id, order);
        if (order.status && order.status !== existingOrder.status) {
            const user = existingOrder.user;
            if (user && user.email) {
                let subject = `Order Status Update - ${existingOrder.tx_ref}`;
                let text = `Your order status has been updated to ${order.status}.`;
                let html = `<p>Hello ${user.fullname || "User"},</p><p>Your order status has been updated to <strong>${order.status}</strong>.</p>`;
                if (order.status === "cancelled") {
                    subject = `Order Cancelled - ${existingOrder.tx_ref}`;
                    text = `Your order with reference ${existingOrder.tx_ref} has been cancelled.`;
                    html = `<p>Hello ${user.fullname || "User"},</p><p>Your order with reference ${existingOrder.tx_ref} has been cancelled.</p>`;
                }
                await this.sendMailService.sendMail({
                    to: user.email,
                    subject,
                    html,
                });
            }
        }
        return this.orderRepository.findOne({ where: { _id: id } });
    }
    async remove(id) {
        await this.orderRepository.delete(id);
    }
    async verifyOrderPayment(id, userData) {
        try {
            const plan = await this.orderRepository.findOne({
                where: { _id: id },
                relations: ["user"],
            });
            if (!plan) {
                throw new common_1.NotFoundException("Order not found");
            }
            if (!plan.paystackRef) {
                throw new common_1.NotFoundException("No payment reference found for this order");
            }
            if (plan.isPaid) {
                return (0, service_1.serviceResponse)({
                    data: plan,
                    message: "Order already paid",
                    status: true,
                });
            }
            const v = await this.paystack.verifyPaymentLink(plan.paystackRef);
            if (v.data.status === "success") {
                const subject = "Order Confirmation";
                const html = `<p>Hello ${userData.firstname},</p><p>Your order has been placed successfully. We have received your payment and will process your order shortly. If you have any questions, please contact our customer support.</p><p>Thank you for your purchase!</p>`;
                await this.sendMailService.sendMail({
                    to: userData.email,
                    subject,
                    html,
                });
                await this.orderRepository.update(id, {
                    isPaid: true,
                    status: "success",
                });
                await this.cartRepository.delete({
                    userID: plan.user._id
                });
                for (let i = 0; i < plan.products.length; i++) {
                    const element = plan?.products[i];
                    const transaction = await this.transactionRepository.create({
                        amount: element?.price,
                        reference: v?.data?.reference,
                        status: "active",
                        productID: element?._id,
                        userID: plan?.userID,
                        metadata: element?.metadata,
                        transactionType: "order",
                        orderID: plan._id,
                    });
                    await this.transactionRepository.save(transaction);
                }
            }
            else if (["abandoned", "ongoing"].includes(v.data.status)) {
                plan.isPaid = false;
                plan.status = "abandoned";
                await this.orderRepository.update(id, {
                    isPaid: false,
                    status: "abandoned",
                });
                if (plan.user && plan.user.email) {
                    await this.sendMailService.sendMail({
                        to: plan.user.email,
                        subject: `Order Payment Abandoned - ${plan.tx_ref}`,
                        text: `Your order with reference ${plan.tx_ref} has been marked as abandoned due to incomplete payment.`,
                        html: `<p>Hello ${plan.user.fullname || "User"},</p><p>Your order with reference ${plan.tx_ref} has been marked as abandoned due to incomplete payment.</p>`,
                    });
                }
            }
            else {
                await this.orderRepository.update(id, {
                    isPaid: false,
                    status: "cancelled",
                });
                if (plan.user && plan.user.email) {
                    await this.sendMailService.sendMail({
                        to: plan.user.email,
                        subject: `Order Cancelled - ${plan.tx_ref}`,
                        text: `Your order with reference ${plan.tx_ref} has been cancelled due to payment failure.`,
                        html: `<p>Hello ${plan.user.fullname || "User"},</p><p>Your order with reference ${plan.tx_ref} has been cancelled due to payment failure.</p>`,
                    });
                }
            }
            return (0, service_1.serviceResponse)({
                data: plan,
                message: "Order plan retrieved successfully",
                status: true,
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async handlePaystackWebhook(req) {
        try {
            const payload = await this.paystack.handleWebhook(req);
            const { event, data } = payload;
            console.log("payload", payload);
            if (event !== "charge.success") {
                return { status: "success", message: "Event ignored" };
            }
            const reference = data.reference;
            const plan = await this.orderRepository.findOne({
                where: { paystackRef: reference },
                relations: ["user"],
            });
            if (!plan) {
                console.error(`Paystack Webhook: Order not found for reference ${reference}`);
                return { status: "success", message: "Order not found" };
            }
            if (plan.isPaid) {
                return { status: "success", message: "Order already paid" };
            }
            if (data.status === "success") {
                const subject = "Order Confirmation";
                const html = `<p>Hello ${plan.user?.firstname || plan.user?.fullname || "User"},</p><p>Your order has been placed successfully. We have received your payment and will process your order shortly. If you have any questions, please contact our customer support.</p><p>Thank you for your purchase!</p>`;
                if (plan.user && plan.user.email) {
                    await this.sendMailService.sendMail({
                        to: plan.user.email,
                        subject,
                        html,
                    });
                }
                await this.orderRepository.update(plan._id, {
                    isPaid: true,
                    status: "success",
                });
                await this.cartRepository.delete({
                    userID: plan.user._id
                });
                for (let i = 0; i < plan.products.length; i++) {
                    const element = plan?.products[i];
                    const transaction = await this.transactionRepository.create({
                        amount: element?.price,
                        reference: data?.reference,
                        status: "active",
                        productID: element?._id,
                        userID: plan?.userID,
                        metadata: element?.metadata,
                        transactionType: "order",
                        orderID: plan._id,
                    });
                    await this.transactionRepository.save(transaction);
                }
            }
            return { status: "success", message: "Webhook processed" };
        }
        catch (error) {
            console.error("Paystack Webhook Error:", error);
            throw new common_1.NotAcceptableException(error.message);
        }
    }
};
exports.OrderSqlService = OrderSqlService;
exports.OrderSqlService = OrderSqlService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_sql_schema_1.OrderSqlModel)),
    __param(1, (0, typeorm_1.InjectRepository)(sql_schema_1.PickupLocationSqlModel)),
    __param(2, (0, typeorm_1.InjectRepository)(sql_schema_1.CartSqlModel)),
    __param(3, (0, typeorm_1.InjectRepository)(sql_schema_1.DeliveryPriceSqlModel)),
    __param(6, (0, typeorm_1.InjectRepository)(sql_schema_1.TransactionSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof paystack_1.PaystackService !== "undefined" && paystack_1.PaystackService) === "function" ? _e : Object, typeof (_f = typeof service_1.SendMailService !== "undefined" && service_1.SendMailService) === "function" ? _f : Object, typeof (_g = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _g : Object])
], OrderSqlService);


/***/ }),
/* 141 */
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
exports.PaystackService = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(41);
const axios_1 = __webpack_require__(7);
const crypto = __webpack_require__(18);
let PaystackService = class PaystackService {
    constructor(configService) {
        this.configService = configService;
        this.baseUrl = "https://api.paystack.co";
        this.secretKey = this.configService.get("PAYSTACK_SECRET_KEY");
        this.secretHash = this.configService.get("PAYSTACK_ENCRYPTION_KEY");
        this.headers = {
            accept: "application/json",
            Authorization: `Bearer ${this.secretKey}`,
            "Content-Type": "application/json",
        };
    }
    async createPaymentLink(data) {
        try {
            const response = await axios_1.default.post(`${this.baseUrl}/transaction/initialize`, {
                amount: data.amount * 100,
                email: data.email,
                currency: data.currency || "NGN",
                callback_url: data.callback_url,
                metadata: data.metadata,
            }, { headers: this.headers });
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException(error?.response?.data || "Failed to create payment link", error?.response?.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async verifyPaymentLink(reference) {
        try {
            const response = await axios_1.default.get(`${this.baseUrl}/transaction/verify/${reference}`, { headers: this.headers });
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException(error?.response?.data || "Failed to verify payment", error?.response?.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async handleWebhook(req) {
        try {
            const hash = crypto
                .createHmac("sha512", this.secretKey)
                .update(JSON.stringify(req.body))
                .digest("hex");
            if (hash !== req.headers["x-paystack-signature"]) {
                throw new Error("Invalid signature");
            }
            return req.body;
        }
        catch (error) {
            console.error("Paystack webhook error", error);
            throw new common_1.HttpException("Invalid webhook signature", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getPaystackBanks() {
        const response = await axios_1.default.get('https://api.paystack.co/bank', {
            headers: {
                'Authorization': `Bearer ${this.secretKey}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }
    async verifyPaystackAccountNumber(accountNumber, bankCode) {
        const response = await axios_1.default.get(`https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`, {
            headers: {
                'Authorization': `Bearer ${this.secretKey}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }
};
exports.PaystackService = PaystackService;
exports.PaystackService = PaystackService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], PaystackService);


/***/ }),
/* 142 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DesignsModule = void 0;
const common_1 = __webpack_require__(3);
const designs_controller_1 = __webpack_require__(143);
const typeorm_1 = __webpack_require__(61);
const design_sql_schema_1 = __webpack_require__(51);
const design_sql_service_1 = __webpack_require__(144);
let DesignsModule = class DesignsModule {
};
exports.DesignsModule = DesignsModule;
exports.DesignsModule = DesignsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([design_sql_schema_1.DesignSqlModel])],
        controllers: [designs_controller_1.DesignController],
        providers: [design_sql_service_1.DesignSqlService],
        exports: [design_sql_service_1.DesignSqlService]
    })
], DesignsModule);


/***/ }),
/* 143 */
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
const common_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(69);
const guard_1 = __webpack_require__(96);
const swagger_1 = __webpack_require__(42);
const design_sql_service_1 = __webpack_require__(144);
let DesignController = class DesignController {
    constructor(designService) {
        this.designService = designService;
    }
    async create(design, req) {
        return this.designService.create(design, req.user);
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
    async delete(ids) {
        return this.designService.remove(ids);
    }
    async searchByTags(tag, query) {
        return this.designService.searchByTags(tag, query);
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
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Delete design by ID" }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DesignController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)("by-tags/:tag"),
    (0, swagger_1.ApiOperation)({ summary: "Find designs by tag" }),
    (0, swagger_1.ApiParam)({ name: "tag", description: "The tag to search by", type: String }),
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
    __param(0, (0, common_1.Param)("tag")),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DesignController.prototype, "searchByTags", null);
exports.DesignController = DesignController = __decorate([
    (0, swagger_1.ApiTags)("design"),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    (0, common_1.Controller)('designs'),
    __metadata("design:paramtypes", [typeof (_a = typeof design_sql_service_1.DesignSqlService !== "undefined" && design_sql_service_1.DesignSqlService) === "function" ? _a : Object])
], DesignController);


/***/ }),
/* 144 */
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
exports.DesignSqlService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const design_sql_schema_1 = __webpack_require__(51);
const service_1 = __webpack_require__(5);
let DesignSqlService = class DesignSqlService {
    constructor(designRepository) {
        this.designRepository = designRepository;
    }
    async create(design, userData) {
        const newDesign = this.designRepository.create({
            ...design,
            userID: userData._id.toString(),
        });
        const data = await this.designRepository.save(newDesign);
        return (0, service_1.serviceResponse)({
            data,
            message: "Design plan created successfully",
            status: true,
        });
    }
    async findByAny(param, query) {
        const { key, value } = param;
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const findall = await this.designRepository.find({
            where: { [key]: value },
            take: limit,
            skip: skip,
            relations: ["user"],
        });
        return (0, service_1.serviceResponse)({
            data: findall,
            message: "Design plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.designRepository,
                query,
                querys: { [key]: value },
            }),
        });
    }
    async findByMany(param, query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        console.log(param);
        const findall = await this.designRepository.find({
            where: param,
            take: limit,
            skip: skip,
            relations: ["user"],
        });
        return (0, service_1.serviceResponse)({
            data: findall,
            message: "Design plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.designRepository,
                query,
                querys: param,
            }),
        });
    }
    async findAll(query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const findall = await this.designRepository.find({
            take: limit,
            skip: skip,
            relations: ["user"],
        });
        return (0, service_1.serviceResponse)({
            data: findall,
            message: "Design plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.designRepository,
                query,
                querys: {},
            }),
        });
    }
    async findOne(id) {
        return this.designRepository.findOne({
            where: { id },
            relations: ["user"],
        });
    }
    async update(id, design, userData) {
        delete design._id;
        await this.designRepository.update(id, {
            ...design,
            userID: userData._id.toString(),
        });
        const designs = await this.designRepository.findOne({ where: { _id: id } });
        return (0, service_1.serviceResponse)({
            data: designs,
            message: "Design updated successfully",
            status: true,
        });
    }
    async remove(id) {
        return (0, service_1.serviceResponse)({
            data: await this.designRepository.delete({ _id: id }),
            message: "Design plan deleted successfully",
            status: true,
        });
    }
    async searchByTags(tag, query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const plans = await this.designRepository
            .createQueryBuilder("designs")
            .where("design.tags ILIKE :tag", { tag: `%${tag}%` })
            .orderBy("design.createdAt", "DESC")
            .skip(skip)
            .take(limit)
            .getMany();
        return (0, service_1.serviceResponse)({
            data: plans,
            message: "Design plans retrieved successfully",
            status: true,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.designRepository,
                query,
                querys: { tags: tag },
            }),
        });
    }
};
exports.DesignSqlService = DesignSqlService;
exports.DesignSqlService = DesignSqlService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(design_sql_schema_1.DesignSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], DesignSqlService);


/***/ }),
/* 145 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminModule = void 0;
const common_1 = __webpack_require__(3);
const admin_service_1 = __webpack_require__(146);
const admin_controller_1 = __webpack_require__(147);
const service_1 = __webpack_require__(5);
const sql_schema_1 = __webpack_require__(44);
const typeorm_1 = __webpack_require__(61);
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sql_schema_1.UserSqlModel, sql_schema_1.ProductSqlModel, sql_schema_1.OrderSqlModel, sql_schema_1.CategoriesSqlModel, sql_schema_1.CartSqlModel, sql_schema_1.DesignSqlModel, sql_schema_1.OtpSqlModel, sql_schema_1.WalletSqlModel, sql_schema_1.DeliveryPriceSqlModel, sql_schema_1.SiteSettingsSqlModel])],
        controllers: [admin_controller_1.AdminController],
        providers: [admin_service_1.AdminService, service_1.NotificationService, service_1.NotificationGateway, service_1.SendMailService,],
    })
], AdminModule);


/***/ }),
/* 146 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminService = void 0;
const service_1 = __webpack_require__(5);
const sql_schema_1 = __webpack_require__(44);
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const sql_schema_2 = __webpack_require__(44);
let AdminService = class AdminService {
    constructor(cartModel, categoriesModel, userModel, productModel, orderModel, designModel, deliveryPriceModel, siteSettingsModel, sendMailService) {
        this.cartModel = cartModel;
        this.categoriesModel = categoriesModel;
        this.userModel = userModel;
        this.productModel = productModel;
        this.orderModel = orderModel;
        this.designModel = designModel;
        this.deliveryPriceModel = deliveryPriceModel;
        this.siteSettingsModel = siteSettingsModel;
        this.sendMailService = sendMailService;
    }
    async getDashboardStats() {
        const totalUsers = await this.userModel.count();
        const totalProducts = await this.productModel.count();
        const totalDesigns = await this.designModel.count();
        const totalOrders = await this.orderModel.count();
        const totalCarts = await this.cartModel.count();
        const totalCategories = await this.categoriesModel.count();
        const totalCompletedOrders = await this.orderModel.countBy({
            status: "completed",
        });
        const totalPendingOrders = await this.orderModel.countBy({
            status: "pending",
        });
        const totalCancelledOrders = await this.orderModel.countBy({
            status: "cancelled",
        });
        const totalUsersWithOrders = await this.orderModel.countBy({
            status: "completed",
        });
        const totalResellers = await this.userModel.countBy({
            isReseller: true,
        });
        const productsByReseller = await this.productModel.countBy({
            isResell: true
        });
        const productPendingByReseller = await this.productModel.countBy({
            isResell: true,
            isApproved: false
        });
        return (0, service_1.serviceResponse)({
            message: "Dashboard stats retrieved",
            status: true,
            data: {
                totalUsers,
                totalProducts,
                totalDesigns,
                totalOrders,
                totalCarts,
                totalCategories,
                totalCompletedOrders,
                totalPendingOrders,
                totalCancelledOrders,
                totalUsersWithOrders: totalUsersWithOrders,
                totalResellers,
                productPendingByReseller,
                productsByReseller,
            },
        });
        return {};
    }
    async createDeliveryPrice(deliveryPriceDto) {
        try {
            const deliveryPrice = this.deliveryPriceModel.create({
                country: deliveryPriceDto.country,
                state: deliveryPriceDto.state,
                lga: deliveryPriceDto.lga,
                zone: deliveryPriceDto.zone,
                deliveryFee: deliveryPriceDto.deliveryFee,
                additionalFee: deliveryPriceDto.additionalFee,
            });
            const result = await this.deliveryPriceModel.upsert(deliveryPrice, ["country", "state", "lga", "zone"]);
            const updatedDeliveryPrice = result.generatedMaps[0];
            return (0, service_1.serviceResponse)({
                message: 'successfully',
                status: true,
                data: updatedDeliveryPrice,
            });
        }
        catch (error) {
            console.error('Error creating or updating delivery price:', error);
            return (0, service_1.serviceResponse)({
                message: 'Error occurred while processing delivery price',
                status: false,
                data: null,
            });
        }
    }
    async getDeliveryPrices(country, state, lga, zone) {
        const where = {};
        if (country)
            where.country = country;
        if (state)
            where.state = state;
        if (lga)
            where.lga = lga;
        if (zone)
            where.zone = zone;
        const deliveryPrices = await this.deliveryPriceModel.find({ where });
        return (0, service_1.serviceResponse)({
            message: "Delivery prices retrieved successfully",
            status: true,
            data: deliveryPrices,
        });
    }
    async deleteDeliveryPrice(id) {
        const result = await this.deliveryPriceModel.delete(id);
        if (result.affected === 0) {
            return (0, service_1.serviceResponse)({
                message: "Delivery price not found",
                status: false,
            });
        }
        return (0, service_1.serviceResponse)({
            message: "Delivery price deleted successfully",
            status: true,
        });
    }
    async getSiteSettings() {
        const settings = await this.siteSettingsModel.findOne({ where: { name: 'default' } });
        return (0, service_1.serviceResponse)({
            message: "Site settings retrieved",
            status: true,
            data: settings || {},
        });
    }
    async updateSiteSettings(dto) {
        const payload = this.siteSettingsModel.create({
            name: 'default',
            heroType: dto.heroType,
            heroImage: dto.heroImage,
            heroVideo: dto.heroVideo,
        });
        await this.siteSettingsModel.upsert(payload, ['name']);
        const settings = await this.siteSettingsModel.findOne({ where: { name: 'default' } });
        return (0, service_1.serviceResponse)({
            message: "Site settings updated successfully",
            status: true,
            data: settings,
        });
    }
    async getUsersByMany(param, query) {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        const findall = await this.userModel.find({
            where: param,
            take: limit,
            skip: skip,
        });
        return (0, service_1.serviceResponse)({
            data: findall,
            message: "Users retrieved successfully",
            status: true,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.userModel,
                query,
                querys: param,
            }),
        });
    }
    async editUser(id, dto) {
        const user = await this.userModel.findOne({ where: { _id: id } });
        if (!user) {
            return (0, service_1.serviceResponse)({
                message: "User not found",
                status: false,
            });
        }
        await this.userModel.update(id, dto);
        return (0, service_1.serviceResponse)({
            message: "User updated successfully",
            status: true,
        });
    }
    async sendEmail(dto, attachments) {
        try {
            const formattedAttachments = attachments?.map(file => ({
                filename: file.originalname,
                content: file.buffer,
                contentType: file.mimetype,
            }));
            await this.sendMailService.sendMail({
                to: dto.to,
                subject: dto.subject,
                text: dto.text,
                html: dto.html,
                attachments: formattedAttachments,
            });
            return (0, service_1.serviceResponse)({
                message: "Email sent successfully",
                status: true,
            });
        }
        catch (error) {
            console.error("Error sending admin email:", error);
            return (0, service_1.serviceResponse)({
                message: "Failed to send email",
                status: false,
            });
        }
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sql_schema_1.CartSqlModel)),
    __param(1, (0, typeorm_1.InjectRepository)(sql_schema_1.CategoriesSqlModel)),
    __param(2, (0, typeorm_1.InjectRepository)(sql_schema_1.UserSqlModel)),
    __param(3, (0, typeorm_1.InjectRepository)(sql_schema_1.ProductSqlModel)),
    __param(4, (0, typeorm_1.InjectRepository)(sql_schema_1.OrderSqlModel)),
    __param(5, (0, typeorm_1.InjectRepository)(sql_schema_1.DesignSqlModel)),
    __param(6, (0, typeorm_1.InjectRepository)(sql_schema_1.DeliveryPriceSqlModel)),
    __param(7, (0, typeorm_1.InjectRepository)(sql_schema_2.SiteSettingsSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object, typeof (_f = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _f : Object, typeof (_g = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _g : Object, typeof (_h = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _h : Object, typeof (_j = typeof service_1.SendMailService !== "undefined" && service_1.SendMailService) === "function" ? _j : Object])
], AdminService);


/***/ }),
/* 147 */
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
exports.AdminController = void 0;
const common_1 = __webpack_require__(3);
const admin_service_1 = __webpack_require__(146);
const guard_1 = __webpack_require__(96);
const decorator_1 = __webpack_require__(98);
const enum_1 = __webpack_require__(21);
const swagger_1 = __webpack_require__(42);
const dto_1 = __webpack_require__(69);
const sql_schema_1 = __webpack_require__(44);
const platform_express_1 = __webpack_require__(123);
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async getDashboardStats() {
        return this.adminService.getDashboardStats();
    }
    async createDeliveryPrice(deliveryPriceDto) {
        return this.adminService.createDeliveryPrice(deliveryPriceDto);
    }
    async getDeliveryPrices(country, state, lga, zone) {
        return this.adminService.getDeliveryPrices(country, state, lga, zone);
    }
    async deleteDeliveryPrice(id) {
        return this.adminService.deleteDeliveryPrice(id);
    }
    async getSiteSettings() {
        return this.adminService.getSiteSettings();
    }
    async updateSiteSettings(dto) {
        return this.adminService.updateSiteSettings(dto);
    }
    async getUsersByMany(query, userDto) {
        return this.adminService.getUsersByMany(userDto, query);
    }
    async editUser(id, dto) {
        return this.adminService.editUser(id, dto);
    }
    async sendEmail(dto, attachments) {
        return this.adminService.sendEmail(dto, attachments);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('dashboard-stats'),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, decorator_1.Roles)(enum_1.UserType.ADMIN, enum_1.UserType.SUPER_ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getDashboardStats", null);
__decorate([
    (0, common_1.Post)('delivery-price'),
    (0, swagger_1.ApiBody)({ type: dto_1.DeliveryPriceDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.DeliveryPriceDTO !== "undefined" && dto_1.DeliveryPriceDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createDeliveryPrice", null);
__decorate([
    (0, common_1.Get)('delivery-price'),
    (0, swagger_1.ApiQuery)({ name: 'country', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'state', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'lga', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'zone', required: false }),
    __param(0, (0, common_1.Query)('country')),
    __param(1, (0, common_1.Query)('state')),
    __param(2, (0, common_1.Query)('lga')),
    __param(3, (0, common_1.Query)('zone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getDeliveryPrices", null);
__decorate([
    (0, common_1.Delete)('delivery-price/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteDeliveryPrice", null);
__decorate([
    (0, common_1.Get)('site-settings'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getSiteSettings", null);
__decorate([
    (0, common_1.Patch)('site-settings'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.SiteSettingsDTO !== "undefined" && dto_1.SiteSettingsDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateSiteSettings", null);
__decorate([
    (0, common_1.Post)('users'),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false }),
    (0, swagger_1.ApiBody)({ type: dto_1.UserDTO }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_d = typeof dto_1.UserDTO !== "undefined" && dto_1.UserDTO) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getUsersByMany", null);
__decorate([
    (0, common_1.Patch)('users/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof sql_schema_1.UserSqlModel !== "undefined" && sql_schema_1.UserSqlModel) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "editUser", null);
__decorate([
    (0, common_1.Post)('send-email'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({ type: dto_1.AdminSendEmailDTO }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('attachments')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof dto_1.AdminSendEmailDTO !== "undefined" && dto_1.AdminSendEmailDTO) === "function" ? _f : Object, Array]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "sendEmail", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)(enum_1.UserType.ADMIN, enum_1.UserType.SUPER_ADMIN),
    __metadata("design:paramtypes", [typeof (_a = typeof admin_service_1.AdminService !== "undefined" && admin_service_1.AdminService) === "function" ? _a : Object])
], AdminController);


/***/ }),
/* 148 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OtpModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const otp_sql_schema_1 = __webpack_require__(52);
const otp_sql_service_1 = __webpack_require__(149);
const otp_controller_1 = __webpack_require__(150);
let OtpModule = class OtpModule {
};
exports.OtpModule = OtpModule;
exports.OtpModule = OtpModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([otp_sql_schema_1.OtpSqlModel])],
        providers: [otp_sql_service_1.OtpSqlService],
        controllers: [otp_controller_1.OtpController],
        exports: [otp_sql_service_1.OtpSqlService]
    })
], OtpModule);


/***/ }),
/* 149 */
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
exports.OtpSqlService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const otp_sql_schema_1 = __webpack_require__(52);
let OtpSqlService = class OtpSqlService {
    constructor(otpRepository) {
        this.otpRepository = otpRepository;
    }
    async create(otp) {
        const newOtp = this.otpRepository.create(otp);
        return this.otpRepository.save(newOtp);
    }
    async findAll() {
        return this.otpRepository.find();
    }
    async findOne(id) {
        return this.otpRepository.findOne({ where: { id } });
    }
    async update(id, otp) {
        await this.otpRepository.update(id, otp);
        return this.otpRepository.findOne({ where: { id } });
    }
    async remove(id) {
        await this.otpRepository.delete(id);
    }
};
exports.OtpSqlService = OtpSqlService;
exports.OtpSqlService = OtpSqlService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(otp_sql_schema_1.OtpSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], OtpSqlService);


/***/ }),
/* 150 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OtpController = void 0;
const common_1 = __webpack_require__(3);
let OtpController = class OtpController {
};
exports.OtpController = OtpController;
exports.OtpController = OtpController = __decorate([
    (0, common_1.Controller)('otp')
], OtpController);


/***/ }),
/* 151 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletModule = void 0;
const common_1 = __webpack_require__(3);
const wallet_service_1 = __webpack_require__(152);
const wallet_controller_1 = __webpack_require__(154);
const typeorm_1 = __webpack_require__(61);
const wallet_sql_schema_1 = __webpack_require__(53);
const sql_schema_1 = __webpack_require__(44);
const withdraw_sql_schema_1 = __webpack_require__(153);
const paystack_1 = __webpack_require__(141);
let WalletModule = class WalletModule {
};
exports.WalletModule = WalletModule;
exports.WalletModule = WalletModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([wallet_sql_schema_1.WalletSqlModel, sql_schema_1.TransactionSqlModel, withdraw_sql_schema_1.WithdrawSqlModel])],
        providers: [wallet_service_1.WalletService, paystack_1.PaystackService],
        controllers: [wallet_controller_1.WalletController],
        exports: [wallet_service_1.WalletService]
    })
], WalletModule);


/***/ }),
/* 152 */
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const wallet_sql_schema_1 = __webpack_require__(53);
const sql_schema_1 = __webpack_require__(44);
const enum_1 = __webpack_require__(21);
const service_1 = __webpack_require__(5);
const withdraw_sql_schema_1 = __webpack_require__(153);
const paystack_1 = __webpack_require__(141);
const schedule_1 = __webpack_require__(127);
let WalletService = class WalletService {
    constructor(walletRepository, transactionRepository, withdrawRepository, payStackService) {
        this.walletRepository = walletRepository;
        this.transactionRepository = transactionRepository;
        this.withdrawRepository = withdrawRepository;
        this.payStackService = payStackService;
    }
    async updateTransactionStatus() {
        const transactions = await this.transactionRepository.find({
            where: {
                status: enum_1.TransactionStatus.ACTIVE,
            },
        });
        for (const transaction of transactions) {
            if (transaction.createdAt < new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)) {
                transaction.status = enum_1.TransactionStatus.ACTIVE;
                await this.transactionRepository.save(transaction);
            }
        }
    }
    async requestWithdrawal(requestWithdrawalDto) {
        const transaction = await this.transactionRepository.sum('amount', {
            userID: requestWithdrawalDto.userID,
            status: enum_1.TransactionStatus.ACTIVE,
        });
        if (!transaction) {
            throw new common_1.BadRequestException('No active transactions found');
        }
        const isWithdrawExist = await this.withdrawRepository.findOne({
            where: {
                userID: requestWithdrawalDto.userID,
                status: "pending",
            },
        });
        if (isWithdrawExist) {
            throw new common_1.BadRequestException('Withdrawal request already submitted');
        }
        const withdraw = this.withdrawRepository.create({
            userID: requestWithdrawalDto.userID,
            amount: transaction,
            walletID: requestWithdrawalDto.walletID,
            status: "pending",
        });
        const isSaved = await this.withdrawRepository.save(withdraw);
        try {
            return (0, service_1.serviceResponse)({
                message: 'Withdrawal request submitted successfully',
                data: isSaved,
                status: true,
            });
        }
        catch (err) {
            throw err;
        }
        finally {
        }
    }
    async approveWithdrawal(withdrawID) {
        const withdraw = await this.withdrawRepository.findOne({ where: { id: withdrawID } });
        if (!withdraw) {
            throw new common_1.NotFoundException('Withdrawal request not found');
        }
        withdraw.status = 'approved';
        await this.withdrawRepository.save(withdraw);
        await this.transactionRepository.update({
            userID: withdraw.userID,
            status: enum_1.TransactionStatus.ACTIVE,
        }, {
            status: enum_1.TransactionStatus.SUCCESS,
        });
        return (0, service_1.serviceResponse)({
            message: 'Withdrawal request approved',
            data: withdraw,
            status: true,
        });
    }
    async getWallet(userID) {
        const wallet = await this.walletRepository.findOne({ where: { userID } });
        if (!wallet) {
            throw new common_1.NotFoundException('Wallet not found');
        }
        return (0, service_1.serviceResponse)({
            status: true,
            message: "Wallet retrieved",
            data: wallet
        });
    }
    async createWallet(data, userID) {
        const alreadyExist = await this.walletRepository.findOne({
            where: {
                userID: userID,
            },
        });
        let wallet;
        if (alreadyExist) {
            await this.walletRepository.update({
                userID,
            }, {
                ...data,
            });
            wallet = await this.walletRepository.findOne({ where: { userID } });
        }
        else {
            wallet = this.walletRepository.create({
                ...data,
                userID,
            });
        }
        return this.walletRepository.save(wallet);
    }
    async getWithdrawals(userID, query) {
        const { page = 1, limit = 10, } = query;
        const skip = (page - 1) * limit;
        const withdraws = await this.withdrawRepository.find({
            where: {
                userID,
            },
            skip,
            take: limit,
            order: {
                createdAt: 'DESC',
            }
        });
        if (!withdraws) {
            throw new common_1.NotFoundException('Withdrawals not found');
        }
        return (0, service_1.serviceResponse)({
            status: true,
            message: "Withdrawals retrieved",
            data: withdraws,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.withdrawRepository,
                query,
                querys: {
                    userID,
                }
            })
        });
    }
    async getAllWithdrawals(query) {
        const { page = 1, limit = 10, } = query;
        const skip = (page - 1) * limit;
        const withdraws = await this.withdrawRepository.find({
            skip,
            take: limit,
            order: {
                createdAt: 'DESC',
            },
            relations: ["user", "wallet"]
        });
        if (!withdraws) {
            throw new common_1.NotFoundException('Withdrawals not found');
        }
        return (0, service_1.serviceResponse)({
            status: true,
            message: "Withdrawals retrieved",
            data: withdraws,
            metadata: await (0, service_1.getSqlMetadata)({
                model: this.withdrawRepository,
                query,
                querys: {}
            })
        });
    }
    async getPaystackBanks() {
        const pay = await this.payStackService.getPaystackBanks();
        return (0, service_1.serviceResponse)({
            status: true,
            message: "Paystack banks retrieved",
            data: pay,
        });
    }
    async verifyPaystackAccountNumber(accountNumber, bankCode) {
        const pay = await this.payStackService.verifyPaystackAccountNumber(accountNumber, bankCode);
        return (0, service_1.serviceResponse)({
            status: true,
            message: "Paystack account number verified",
            data: pay,
        });
    }
};
exports.WalletService = WalletService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WalletService.prototype, "updateTransactionStatus", null);
exports.WalletService = WalletService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wallet_sql_schema_1.WalletSqlModel)),
    __param(1, (0, typeorm_1.InjectRepository)(sql_schema_1.TransactionSqlModel)),
    __param(2, (0, typeorm_1.InjectRepository)(withdraw_sql_schema_1.WithdrawSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof paystack_1.PaystackService !== "undefined" && paystack_1.PaystackService) === "function" ? _d : Object])
], WalletService);


/***/ }),
/* 153 */
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WithdrawSqlModel = void 0;
const typeorm_1 = __webpack_require__(46);
const user_sql_schema_1 = __webpack_require__(45);
const wallet_sql_schema_1 = __webpack_require__(53);
let WithdrawSqlModel = class WithdrawSqlModel {
};
exports.WithdrawSqlModel = WithdrawSqlModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WithdrawSqlModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WithdrawSqlModel.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true, }),
    __metadata("design:type", Number)
], WithdrawSqlModel.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_sql_schema_1.UserSqlModel, (user) => user._id),
    (0, typeorm_1.JoinColumn)({ name: "userID" }),
    __metadata("design:type", typeof (_a = typeof user_sql_schema_1.UserSqlModel !== "undefined" && user_sql_schema_1.UserSqlModel) === "function" ? _a : Object)
], WithdrawSqlModel.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WithdrawSqlModel.prototype, "walletID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => wallet_sql_schema_1.WalletSqlModel, (wallet) => wallet._id),
    (0, typeorm_1.JoinColumn)({ name: "walletID" }),
    __metadata("design:type", typeof (_b = typeof wallet_sql_schema_1.WalletSqlModel !== "undefined" && wallet_sql_schema_1.WalletSqlModel) === "function" ? _b : Object)
], WithdrawSqlModel.prototype, "wallet", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'pending' }),
    __metadata("design:type", String)
], WithdrawSqlModel.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], WithdrawSqlModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], WithdrawSqlModel.prototype, "updatedAt", void 0);
exports.WithdrawSqlModel = WithdrawSqlModel = __decorate([
    (0, typeorm_1.Entity)()
], WithdrawSqlModel);


/***/ }),
/* 154 */
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
exports.WalletController = void 0;
const common_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(42);
const wallet_service_1 = __webpack_require__(152);
const dto_1 = __webpack_require__(69);
const guard_1 = __webpack_require__(96);
const decorator_1 = __webpack_require__(98);
const enum_1 = __webpack_require__(21);
let WalletController = class WalletController {
    constructor(walletService) {
        this.walletService = walletService;
    }
    createWallet(walletDto, req) {
        return this.walletService.createWallet(walletDto, req.user._id.toString());
    }
    getMyWallet(req) {
        return this.walletService.getWallet(req.user._id);
    }
    requestWithdrawal(req, requestWithdrawalDto) {
        return this.walletService.requestWithdrawal(requestWithdrawalDto);
    }
    getWithdrawals(req, query) {
        return this.walletService.getWithdrawals(req.user._id, query);
    }
    getAllWithdrawals(req, query) {
        return this.walletService.getAllWithdrawals(query);
    }
    approveWithdrawal(req, params) {
        return this.walletService.approveWithdrawal(params.withdrawalId);
    }
    getPaystackBanks() {
        return this.walletService.getPaystackBanks();
    }
    verifyPaystackAccountNumber(query) {
        return this.walletService.verifyPaystackAccountNumber(query.accountNumber, query.bankCode);
    }
};
exports.WalletController = WalletController;
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a wallet' }),
    (0, swagger_1.ApiBody)({ type: dto_1.WalletDTO }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.WalletDTO !== "undefined" && dto_1.WalletDTO) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], WalletController.prototype, "createWallet", null);
__decorate([
    (0, common_1.Get)('my-wallet'),
    (0, swagger_1.ApiOperation)({ summary: 'Get my wallet details' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WalletController.prototype, "getMyWallet", null);
__decorate([
    (0, common_1.Post)('withdraw'),
    (0, swagger_1.ApiOperation)({ summary: 'Request a withdrawal' }),
    (0, swagger_1.ApiBody)({ type: dto_1.RequestWithdrawalDTO }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_c = typeof dto_1.RequestWithdrawalDTO !== "undefined" && dto_1.RequestWithdrawalDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], WalletController.prototype, "requestWithdrawal", null);
__decorate([
    (0, common_1.Get)('withdrawals'),
    (0, swagger_1.ApiOperation)({ summary: 'Get my withdrawal requests' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WalletController.prototype, "getWithdrawals", null);
__decorate([
    (0, common_1.Get)('withdrawals/all'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all withdrawal requests' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WalletController.prototype, "getAllWithdrawals", null);
__decorate([
    (0, common_1.Post)('withdrawals/approve/:withdrawalId'),
    (0, swagger_1.ApiParam)({ name: 'withdrawalId', required: true, type: String }),
    (0, swagger_1.ApiOperation)({ summary: 'Approve a withdrawal request' }),
    (0, decorator_1.Roles)(enum_1.UserType.ADMIN, enum_1.UserType.SUPER_ADMIN),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WalletController.prototype, "approveWithdrawal", null);
__decorate([
    (0, common_1.Get)('paystack/banks'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all paystack banks' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WalletController.prototype, "getPaystackBanks", null);
__decorate([
    (0, common_1.Get)('paystack/verify-account-number'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify paystack account number' }),
    (0, swagger_1.ApiQuery)({ name: 'accountNumber', required: true, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'bankCode', required: true, type: String }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WalletController.prototype, "verifyPaystackAccountNumber", null);
exports.WalletController = WalletController = __decorate([
    (0, swagger_1.ApiTags)('Wallet'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('wallet'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof wallet_service_1.WalletService !== "undefined" && wallet_service_1.WalletService) === "function" ? _a : Object])
], WalletController);


/***/ }),
/* 155 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseConfig = exports.DatabaseType = void 0;
const config_1 = __webpack_require__(41);
var DatabaseType;
(function (DatabaseType) {
    DatabaseType["MONGO"] = "mongo";
    DatabaseType["SQL"] = "sql";
})(DatabaseType || (exports.DatabaseType = DatabaseType = {}));
class DatabaseConfig {
}
exports.DatabaseConfig = DatabaseConfig;
exports["default"] = (0, config_1.registerAs)('database', () => {
    const config = new DatabaseConfig();
    config.type = process.env.DATABASE_TYPE || DatabaseType.MONGO;
    config.mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/smartprints';
    config.sqlUri = process.env.SQL_URI || 'postgresql://user:password@host:5432/database';
    return config;
});


/***/ }),
/* 156 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductColorsModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const sql_schema_1 = __webpack_require__(44);
const product_colors_controller_1 = __webpack_require__(157);
const product_colors_service_1 = __webpack_require__(158);
let ProductColorsModule = class ProductColorsModule {
};
exports.ProductColorsModule = ProductColorsModule;
exports.ProductColorsModule = ProductColorsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sql_schema_1.ProductColorSqlModel])],
        controllers: [product_colors_controller_1.ProductColorsController],
        providers: [product_colors_service_1.ProductColorsService],
    })
], ProductColorsModule);


/***/ }),
/* 157 */
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
exports.ProductColorsController = void 0;
const common_1 = __webpack_require__(3);
const product_colors_service_1 = __webpack_require__(158);
const dto_1 = __webpack_require__(69);
const swagger_1 = __webpack_require__(42);
let ProductColorsController = class ProductColorsController {
    constructor(productColorsService) {
        this.productColorsService = productColorsService;
    }
    create(createProductColorDto) {
        return this.productColorsService.create(createProductColorDto);
    }
    findAll() {
        return this.productColorsService.findAll();
    }
    findOne(id) {
        return this.productColorsService.findOne(id);
    }
    update(id, updateProductColorDto) {
        return this.productColorsService.update(id, updateProductColorDto);
    }
    remove(id) {
        return this.productColorsService.remove(id);
    }
};
exports.ProductColorsController = ProductColorsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new product color' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The product color has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.ProductColorDTO !== "undefined" && dto_1.ProductColorDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ProductColorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all product colors' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all product colors.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductColorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a product color by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the product color.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductColorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a product color' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The product color has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof dto_1.ProductColorDTO !== "undefined" && dto_1.ProductColorDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ProductColorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a product color' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The product color has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductColorsController.prototype, "remove", null);
exports.ProductColorsController = ProductColorsController = __decorate([
    (0, swagger_1.ApiTags)('Product Colors'),
    (0, common_1.Controller)('product-colors'),
    __metadata("design:paramtypes", [typeof (_a = typeof product_colors_service_1.ProductColorsService !== "undefined" && product_colors_service_1.ProductColorsService) === "function" ? _a : Object])
], ProductColorsController);


/***/ }),
/* 158 */
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
exports.ProductColorsService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const sql_schema_1 = __webpack_require__(44);
const service_1 = __webpack_require__(5);
let ProductColorsService = class ProductColorsService {
    constructor(productColorRepository) {
        this.productColorRepository = productColorRepository;
    }
    async create(createProductColorDto) {
        try {
            const productColor = this.productColorRepository.create(createProductColorDto);
            const savedColor = await this.productColorRepository.save(productColor);
            return (0, service_1.serviceResponse)({
                data: savedColor,
                message: 'Product color created successfully',
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: 'Failed to create product color',
                status: false,
                data: error.message,
            });
        }
    }
    async findAll() {
        try {
            const colors = await this.productColorRepository.find();
            return (0, service_1.serviceResponse)({
                data: colors,
                message: 'Product colors retrieved successfully',
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: 'Failed to retrieve product colors',
                status: false,
                data: error.message,
            });
        }
    }
    async findOne(id) {
        try {
            const color = await this.productColorRepository.findOne({ where: { _id: id } });
            if (!color) {
                return (0, service_1.serviceResponse)({
                    message: 'Product color not found',
                    status: false,
                });
            }
            return (0, service_1.serviceResponse)({
                data: color,
                message: 'Product color retrieved successfully',
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: 'Failed to retrieve product color',
                status: false,
                data: error.message,
            });
        }
    }
    async update(id, updateProductColorDto) {
        try {
            const updateResult = await this.productColorRepository.update(id, updateProductColorDto);
            if (updateResult.affected === 0) {
                return (0, service_1.serviceResponse)({
                    message: 'Product color not found',
                    status: false,
                });
            }
            const updatedColor = await this.productColorRepository.findOne({ where: { _id: id } });
            return (0, service_1.serviceResponse)({
                data: updatedColor,
                message: 'Product color updated successfully',
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: 'Failed to update product color',
                status: false,
                data: error.message,
            });
        }
    }
    async remove(id) {
        try {
            const deleteResult = await this.productColorRepository.delete(id);
            if (deleteResult.affected === 0) {
                return (0, service_1.serviceResponse)({
                    message: 'Product color not found',
                    status: false,
                });
            }
            return (0, service_1.serviceResponse)({
                message: 'Product color deleted successfully',
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: 'Failed to delete product color',
                status: false,
                data: error.message,
            });
        }
    }
};
exports.ProductColorsService = ProductColorsService;
exports.ProductColorsService = ProductColorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sql_schema_1.ProductColorSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ProductColorsService);


/***/ }),
/* 159 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PickupLocationsModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const sql_schema_1 = __webpack_require__(44);
const pickup_locations_controller_1 = __webpack_require__(160);
const pickup_locations_service_1 = __webpack_require__(161);
let PickupLocationsModule = class PickupLocationsModule {
};
exports.PickupLocationsModule = PickupLocationsModule;
exports.PickupLocationsModule = PickupLocationsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sql_schema_1.PickupLocationSqlModel])],
        controllers: [pickup_locations_controller_1.PickupLocationsController],
        providers: [pickup_locations_service_1.PickupLocationsService],
    })
], PickupLocationsModule);


/***/ }),
/* 160 */
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
exports.PickupLocationsController = void 0;
const common_1 = __webpack_require__(3);
const pickup_locations_service_1 = __webpack_require__(161);
const dto_1 = __webpack_require__(69);
const swagger_1 = __webpack_require__(42);
let PickupLocationsController = class PickupLocationsController {
    constructor(pickupLocationsService) {
        this.pickupLocationsService = pickupLocationsService;
    }
    create(createPickupLocationDto) {
        return this.pickupLocationsService.create(createPickupLocationDto);
    }
    findAll() {
        return this.pickupLocationsService.findAll();
    }
    findOne(id) {
        return this.pickupLocationsService.findOne(id);
    }
    update(id, updatePickupLocationDto) {
        return this.pickupLocationsService.update(id, updatePickupLocationDto);
    }
    remove(id) {
        return this.pickupLocationsService.remove(id);
    }
};
exports.PickupLocationsController = PickupLocationsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new pickup location' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The pickup location has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.PickupLocationDTO !== "undefined" && dto_1.PickupLocationDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], PickupLocationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all pickup locations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all pickup locations.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PickupLocationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a pickup location by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the pickup location.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PickupLocationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a pickup location' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The pickup location has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof dto_1.PickupLocationDTO !== "undefined" && dto_1.PickupLocationDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], PickupLocationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a pickup location' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The pickup location has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PickupLocationsController.prototype, "remove", null);
exports.PickupLocationsController = PickupLocationsController = __decorate([
    (0, swagger_1.ApiTags)('Pickup Locations'),
    (0, common_1.Controller)('pickup-locations'),
    __metadata("design:paramtypes", [typeof (_a = typeof pickup_locations_service_1.PickupLocationsService !== "undefined" && pickup_locations_service_1.PickupLocationsService) === "function" ? _a : Object])
], PickupLocationsController);


/***/ }),
/* 161 */
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
exports.PickupLocationsService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const sql_schema_1 = __webpack_require__(44);
const service_1 = __webpack_require__(5);
let PickupLocationsService = class PickupLocationsService {
    constructor(pickupLocationRepository) {
        this.pickupLocationRepository = pickupLocationRepository;
    }
    async create(createPickupLocationDto) {
        try {
            const location = this.pickupLocationRepository.create(createPickupLocationDto);
            const savedLocation = await this.pickupLocationRepository.save(location);
            return (0, service_1.serviceResponse)({
                data: savedLocation,
                message: 'Pickup location created successfully',
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: 'Failed to create pickup location',
                status: false,
                data: error.message,
            });
        }
    }
    async findAll() {
        try {
            const locations = await this.pickupLocationRepository.find();
            return (0, service_1.serviceResponse)({
                data: locations,
                message: 'Pickup locations retrieved successfully',
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: 'Failed to retrieve pickup locations',
                status: false,
                data: error.message,
            });
        }
    }
    async findOne(id) {
        try {
            const location = await this.pickupLocationRepository.findOne({ where: { _id: id } });
            if (!location) {
                return (0, service_1.serviceResponse)({
                    message: 'Pickup location not found',
                    status: false,
                });
            }
            return (0, service_1.serviceResponse)({
                data: location,
                message: 'Pickup location retrieved successfully',
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: 'Failed to retrieve pickup location',
                status: false,
                data: error.message,
            });
        }
    }
    async update(id, updatePickupLocationDto) {
        try {
            const updateResult = await this.pickupLocationRepository.update(id, updatePickupLocationDto);
            if (updateResult.affected === 0) {
                return (0, service_1.serviceResponse)({
                    message: 'Pickup location not found',
                    status: false,
                });
            }
            const updatedLocation = await this.pickupLocationRepository.findOne({ where: { _id: id } });
            return (0, service_1.serviceResponse)({
                data: updatedLocation,
                message: 'Pickup location updated successfully',
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: 'Failed to update pickup location',
                status: false,
                data: error.message,
            });
        }
    }
    async remove(id) {
        try {
            const deleteResult = await this.pickupLocationRepository.delete(id);
            if (deleteResult.affected === 0) {
                return (0, service_1.serviceResponse)({
                    message: 'Pickup location not found',
                    status: false,
                });
            }
            return (0, service_1.serviceResponse)({
                message: 'Pickup location deleted successfully',
                status: true,
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                message: 'Failed to delete pickup location',
                status: false,
                data: error.message,
            });
        }
    }
};
exports.PickupLocationsService = PickupLocationsService;
exports.PickupLocationsService = PickupLocationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sql_schema_1.PickupLocationSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PickupLocationsService);


/***/ }),
/* 162 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZonesModule = void 0;
const common_1 = __webpack_require__(3);
const zones_controller_1 = __webpack_require__(163);
const typeorm_1 = __webpack_require__(61);
const zone_sql_schema_1 = __webpack_require__(57);
const zone_sql_service_1 = __webpack_require__(164);
let ZonesModule = class ZonesModule {
};
exports.ZonesModule = ZonesModule;
exports.ZonesModule = ZonesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([zone_sql_schema_1.ZoneSqlModel])],
        controllers: [zones_controller_1.ZoneController],
        providers: [zone_sql_service_1.ZoneSqlService],
        exports: [zone_sql_service_1.ZoneSqlService]
    })
], ZonesModule);


/***/ }),
/* 163 */
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
exports.ZoneController = void 0;
const common_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(69);
const guard_1 = __webpack_require__(96);
const swagger_1 = __webpack_require__(42);
const decorator_1 = __webpack_require__(98);
const enum_1 = __webpack_require__(21);
const zone_sql_service_1 = __webpack_require__(164);
let ZoneController = class ZoneController {
    constructor(zoneService) {
        this.zoneService = zoneService;
    }
    async create(zone) {
        return this.zoneService.create(zone);
    }
    async findAll() {
        return this.zoneService.findAll();
    }
    async findOne(id) {
        return this.zoneService.findOne(id);
    }
    async update(id, zone) {
        return this.zoneService.update(id, zone);
    }
    async remove(id) {
        return this.zoneService.remove(id);
    }
};
exports.ZoneController = ZoneController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Create a new zone" }),
    (0, swagger_1.ApiBody)({
        type: dto_1.ZoneDto,
        description: "Creating a new zone Details",
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)(enum_1.UserType.ADMIN, enum_1.UserType.SUPER_ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.ZoneDto !== "undefined" && dto_1.ZoneDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ZoneController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all zones" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ZoneController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "Get a zone by ID" }),
    (0, swagger_1.ApiParam)({
        name: "id",
        description: "The zone ID",
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ZoneController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "Update a zone" }),
    (0, swagger_1.ApiParam)({
        name: "id",
        description: "The zone ID",
        type: String,
    }),
    (0, swagger_1.ApiBody)({
        type: dto_1.ZoneDto,
        description: "Updating zone details",
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)(enum_1.UserType.ADMIN, enum_1.UserType.SUPER_ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof dto_1.ZoneDto !== "undefined" && dto_1.ZoneDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ZoneController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "Delete a zone" }),
    (0, swagger_1.ApiParam)({
        name: "id",
        description: "The zone ID",
        type: String,
    }),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)(enum_1.UserType.ADMIN, enum_1.UserType.SUPER_ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ZoneController.prototype, "remove", null);
exports.ZoneController = ZoneController = __decorate([
    (0, swagger_1.ApiTags)("zone"),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    (0, common_1.Controller)('zones'),
    __metadata("design:paramtypes", [typeof (_a = typeof zone_sql_service_1.ZoneSqlService !== "undefined" && zone_sql_service_1.ZoneSqlService) === "function" ? _a : Object])
], ZoneController);


/***/ }),
/* 164 */
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
exports.ZoneSqlService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const zone_sql_schema_1 = __webpack_require__(57);
const service_1 = __webpack_require__(5);
let ZoneSqlService = class ZoneSqlService {
    constructor(zoneRepository) {
        this.zoneRepository = zoneRepository;
    }
    async create(zone) {
        try {
            const newZone = this.zoneRepository.create({
                ...zone,
            });
            const savedZone = await this.zoneRepository.save(newZone);
            return (0, service_1.serviceResponse)({ status: true, message: "Zone created successfully", data: savedZone });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({ status: false, message: error.message });
        }
    }
    async findAll() {
        try {
            const zones = await this.zoneRepository.find();
            return (0, service_1.serviceResponse)({ status: true, message: "Zones retrieved successfully", data: zones });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({ status: false, message: error.message });
        }
    }
    async findOne(id) {
        try {
            const zone = await this.zoneRepository.findOne({ where: { _id: id } });
            if (!zone) {
                throw new common_1.NotFoundException("Zone not found");
            }
            return (0, service_1.serviceResponse)({ status: true, message: "Zone retrieved successfully", data: zone });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({ status: false, message: error.message });
        }
    }
    async update(id, zone) {
        try {
            const existingZone = await this.zoneRepository.findOne({ where: { _id: id } });
            if (!existingZone) {
                throw new common_1.NotFoundException("Zone not found");
            }
            await this.zoneRepository.update(existingZone._id, zone);
            const updatedZone = await this.zoneRepository.findOne({ where: { _id: id } });
            return (0, service_1.serviceResponse)({ status: true, message: "Zone updated successfully", data: updatedZone });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({ status: false, message: error.message });
        }
    }
    async remove(id) {
        try {
            const existingZone = await this.zoneRepository.findOne({ where: { _id: id } });
            if (!existingZone) {
                throw new common_1.NotFoundException("Zone not found");
            }
            await this.zoneRepository.delete(existingZone._id);
            return (0, service_1.serviceResponse)({
                status: true, message: "Zone deleted successfully",
            });
        }
        catch (error) {
            return (0, service_1.serviceResponse)({
                status: false, message: error.message,
            });
        }
    }
};
exports.ZoneSqlService = ZoneSqlService;
exports.ZoneSqlService = ZoneSqlService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(zone_sql_schema_1.ZoneSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ZoneSqlService);


/***/ }),
/* 165 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionsModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const transactions_service_1 = __webpack_require__(166);
const transactions_controller_1 = __webpack_require__(167);
const sql_schema_1 = __webpack_require__(44);
let TransactionsModule = class TransactionsModule {
};
exports.TransactionsModule = TransactionsModule;
exports.TransactionsModule = TransactionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sql_schema_1.TransactionSqlModel, sql_schema_1.ProductSqlModel, sql_schema_1.UserSqlModel])],
        controllers: [transactions_controller_1.TransactionsController],
        providers: [transactions_service_1.TransactionsService],
        exports: [transactions_service_1.TransactionsService],
    })
], TransactionsModule);


/***/ }),
/* 166 */
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
exports.TransactionsService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const sql_schema_1 = __webpack_require__(44);
const service_1 = __webpack_require__(5);
const enum_1 = __webpack_require__(21);
let TransactionsService = class TransactionsService {
    constructor(transactionRepository, productRepository, userRepository) {
        this.transactionRepository = transactionRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }
    async create(createTransactionDto) {
        return (0, service_1.serviceResponse)({
            message: 'Transaction created successfully',
            data: { savedTransaction: "" },
            status: true,
        });
    }
    async findAll(params, query) {
        const { page = 1, limit = 10, } = query;
        const skip = (page - 1) * limit;
        const [transactions, total] = await this.transactionRepository.findAndCount({
            where: params,
            skip,
            take: limit,
            relations: ['user', 'order', 'product'],
            order: { createdAt: 'DESC' },
        });
        return (0, service_1.serviceResponse)({
            message: 'Transactions retrieved successfully',
            data: transactions,
            status: true,
            metadata: { total, page, limit },
        });
    }
    async findOne(id) {
        const transaction = await this.transactionRepository.findOne({ where: { id } });
        if (!transaction) {
            throw new common_1.NotFoundException(`Transaction with ID ${id} not found`);
        }
        return (0, service_1.serviceResponse)({
            message: 'Transaction retrieved successfully',
            data: transaction,
            status: true,
        });
    }
    async update(id, updateTransactionDto) {
        return (0, service_1.serviceResponse)({
            message: 'Transaction updated successfully',
            data: {},
            status: true,
        });
    }
    async remove(id) {
        const transaction = await this.transactionRepository.findOne({ where: { id } });
        if (!transaction) {
            throw new common_1.NotFoundException(`Transaction with ID ${id} not found`);
        }
        await this.transactionRepository.remove(transaction);
        return (0, service_1.serviceResponse)({
            message: 'Transaction deleted successfully',
            status: true,
        });
    }
    async getTopUsers(limit) {
        const take = limit ? Number(limit) : 10;
        const topTransactions = await this.transactionRepository
            .createQueryBuilder('transaction')
            .select('transaction.userID', 'userID')
            .addSelect('SUM(transaction.amount)', 'totalAmount')
            .addSelect('COUNT(transaction.id)', 'transactionCount')
            .where('transaction.status = :status', { status: enum_1.TransactionStatus.SUCCESS })
            .groupBy('transaction.userID')
            .orderBy('totalAmount', 'DESC')
            .limit(take)
            .getRawMany();
        if (!topTransactions.length) {
            return (0, service_1.serviceResponse)({
                message: 'No active transactions found',
                data: [],
                status: true,
            });
        }
        const userIDs = topTransactions.map((t) => t.userID);
        const users = await this.userRepository.find({
            where: { _id: (0, typeorm_2.In)(userIDs) },
            select: ['_id', 'fullname', 'email', 'profileImage', 'coverImage', 'username'],
        });
        const result = topTransactions.map((t) => {
            const user = users.find((u) => u._id === t.userID);
            return {
                user,
                totalAmount: t.totalAmount,
                transactionCount: t.transactionCount,
            };
        });
        return (0, service_1.serviceResponse)({
            message: 'Top users retrieved successfully',
            data: result,
            status: true,
        });
    }
    async stats(userID) {
        const pendingTransactions = await this.transactionRepository.count({ where: { userID, status: enum_1.TransactionStatus.PENDING } });
        const activeTransactions = await this.transactionRepository.count({ where: { userID, status: enum_1.TransactionStatus.ACTIVE } });
        const successTransactions = await this.transactionRepository.count({ where: { userID, status: enum_1.TransactionStatus.SUCCESS } });
        const productApproved = await this.productRepository.count({ where: { userID, isApproved: true } });
        const productPendingApproval = await this.productRepository.count({ where: { userID, isApproved: false } });
        const totalAmountEarned = await this.transactionRepository.sum('amount', { userID, status: enum_1.TransactionStatus.SUCCESS });
        const totalWithdrawable = await this.transactionRepository.sum('amount', { userID, status: enum_1.TransactionStatus.ACTIVE });
        const totalPending = await this.transactionRepository.sum('amount', { userID, status: enum_1.TransactionStatus.PENDING });
        return (0, service_1.serviceResponse)({
            message: 'Transactions stats retrieved successfully',
            data: {
                pendingTransactions,
                activeTransactions,
                successTransactions,
                productApproved,
                totalAmountEarned,
                totalWithdrawable,
                totalPending,
                totalTransactions: pendingTransactions + activeTransactions + successTransactions,
                productPendingApproval,
            },
            status: true,
        });
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sql_schema_1.TransactionSqlModel)),
    __param(1, (0, typeorm_1.InjectRepository)(sql_schema_1.ProductSqlModel)),
    __param(2, (0, typeorm_1.InjectRepository)(sql_schema_1.UserSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], TransactionsService);


/***/ }),
/* 167 */
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
exports.TransactionsController = void 0;
const common_1 = __webpack_require__(3);
const transactions_service_1 = __webpack_require__(166);
const dto_1 = __webpack_require__(69);
const swagger_1 = __webpack_require__(42);
const guard_1 = __webpack_require__(96);
const decorator_1 = __webpack_require__(98);
const enum_1 = __webpack_require__(21);
let TransactionsController = class TransactionsController {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    findAll(query, params) {
        return this.transactionsService.findAll(params, query);
    }
    getTopUsers(limit) {
        return this.transactionsService.getTopUsers(limit);
    }
    update(id, updateTransactionDto) {
        return this.transactionsService.update(id, updateTransactionDto);
    }
    remove(id) {
        return this.transactionsService.remove(id);
    }
    findStats(req, userID) {
        return this.transactionsService.stats(userID ?? req.user._id.toString());
    }
};
exports.TransactionsController = TransactionsController;
__decorate([
    (0, common_1.Post)("by-many"),
    (0, swagger_1.ApiOperation)({ summary: 'Get all transactions' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiBody)({ type: dto_1.CreateTransactionDTO }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof dto_1.CreateTransactionDTO !== "undefined" && dto_1.CreateTransactionDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('top-users'),
    (0, swagger_1.ApiOperation)({ summary: 'Get top N users based on transactions' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "getTopUsers", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a transaction' }),
    (0, swagger_1.ApiBody)({ type: dto_1.CreateTransactionDTO }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof Partial !== "undefined" && Partial) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, decorator_1.Roles)(enum_1.UserType.ADMIN, enum_1.UserType.SUPER_ADMIN),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a transaction' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard),
    (0, swagger_1.ApiQuery)({ name: 'userID', required: false }),
    (0, swagger_1.ApiOperation)({ summary: 'Get transactions stats' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "findStats", null);
exports.TransactionsController = TransactionsController = __decorate([
    (0, swagger_1.ApiTags)('Transactions'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('transactions'),
    __metadata("design:paramtypes", [typeof (_a = typeof transactions_service_1.TransactionsService !== "undefined" && transactions_service_1.TransactionsService) === "function" ? _a : Object])
], TransactionsController);


/***/ }),
/* 168 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContactModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const contact_controller_1 = __webpack_require__(169);
const contact_service_1 = __webpack_require__(170);
const sql_schema_1 = __webpack_require__(44);
let ContactModule = class ContactModule {
};
exports.ContactModule = ContactModule;
exports.ContactModule = ContactModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sql_schema_1.ContactUsSqlModel])],
        controllers: [contact_controller_1.ContactController],
        providers: [contact_service_1.ContactService],
    })
], ContactModule);


/***/ }),
/* 169 */
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
exports.ContactController = void 0;
const common_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(42);
const contact_service_1 = __webpack_require__(170);
const dto_1 = __webpack_require__(69);
const guard_1 = __webpack_require__(96);
const decorator_1 = __webpack_require__(98);
const enum_1 = __webpack_require__(21);
let ContactController = class ContactController {
    constructor(contactService) {
        this.contactService = contactService;
    }
    contactUs(contactUsDto) {
        return this.contactService.contactUs(contactUsDto);
    }
    findAll() {
        return this.contactService.findAll();
    }
};
exports.ContactController = ContactController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Send a contact us message' }),
    (0, swagger_1.ApiBody)({ type: dto_1.ContactUsDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.ContactUsDTO !== "undefined" && dto_1.ContactUsDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "contactUs", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, decorator_1.Roles)(enum_1.UserType.ADMIN, enum_1.UserType.SUPER_ADMIN),
    (0, common_1.UseGuards)(guard_1.JwtAuthGuard, guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get all contact messages (Admin only)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "findAll", null);
exports.ContactController = ContactController = __decorate([
    (0, swagger_1.ApiTags)('Contact'),
    (0, common_1.Controller)('contact'),
    __metadata("design:paramtypes", [typeof (_a = typeof contact_service_1.ContactService !== "undefined" && contact_service_1.ContactService) === "function" ? _a : Object])
], ContactController);


/***/ }),
/* 170 */
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
exports.ContactService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(46);
const mailer_1 = __webpack_require__(12);
const service_1 = __webpack_require__(5);
const sql_schema_1 = __webpack_require__(44);
let ContactService = class ContactService {
    constructor(mailerService, contactRepository) {
        this.mailerService = mailerService;
        this.contactRepository = contactRepository;
    }
    async contactUs(contactUsDto) {
        const { fullName, email, message } = contactUsDto;
        const contactMessage = this.contactRepository.create(contactUsDto);
        await this.contactRepository.save(contactMessage);
        try {
            await this.mailerService.sendMail({
                to: process.env.ADMIN_EMAIL || 'admin@smartprints.com',
                subject: `New Contact Us Message from ${fullName}`,
                html: `
          <h3>New Contact Us Message</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
            });
            await this.mailerService.sendMail({
                to: email,
                subject: `We received your message`,
                html: `
          <h3>Hello ${fullName},</h3>
          <p>We have received your message and will get back to you shortly.</p>
          <p>Best regards,<br/>Smart Prints Team</p>
        `,
            });
        }
        catch (error) {
            console.error('Error sending email:', error);
        }
        return (0, service_1.serviceResponse)({
            message: 'Message sent successfully',
            status: true,
            data: contactMessage,
        });
    }
    async findAll() {
        const messages = await this.contactRepository.find({
            order: { createdAt: 'DESC' },
        });
        return (0, service_1.serviceResponse)({
            message: 'Contact messages retrieved successfully',
            status: true,
            data: messages,
        });
    }
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(sql_schema_1.ContactUsSqlModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ContactService);


/***/ }),
/* 171 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 172 */
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),
/* 173 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileLogger = void 0;
const fs = __webpack_require__(62);
const path = __webpack_require__(63);
const LOG_DIR = path.join(process.cwd(), "logs");
const ERROR_LOG = path.join(LOG_DIR, "error.log");
if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
}
function timestamp() {
    return new Date().toISOString();
}
class FileLogger {
    log(message, context) {
        console.log(message, context ?? "");
    }
    error(message, trace, context) {
        const entry = `[${timestamp()}] ERROR${context ? " " + context : ""} - ${typeof message === "string" ? message : JSON.stringify(message)}${trace ? "\nTrace: " + trace : ""}\n`;
        fs.appendFile(ERROR_LOG, entry, (err) => {
            if (err)
                console.error("Failed to write to error log:", err);
        });
        console.error(message, trace ?? "", context ?? "");
    }
    warn(message, context) {
        console.warn(message, context ?? "");
    }
    debug(message, context) {
        if (process.env.NODE_ENV !== "production") {
            console.debug(message, context ?? "");
        }
    }
    verbose(message, context) {
        if (process.env.NODE_ENV !== "production") {
            console.log(message, context ?? "");
        }
    }
}
exports.FileLogger = FileLogger;
process.on("uncaughtException", (err) => {
    const entry = `[${timestamp()}] UNCAUGHT_EXCEPTION - ${err?.message ?? err}\n${err?.stack ?? ""}\n`;
    fs.appendFileSync(ERROR_LOG, entry);
    console.error("Uncaught Exception:", err);
});
process.on("unhandledRejection", (reason) => {
    const entry = `[${timestamp()}] UNHANDLED_REJECTION - ${typeof reason === "string" ? reason : JSON.stringify(reason)}\n`;
    fs.appendFileSync(ERROR_LOG, entry);
    console.error("Unhandled Rejection:", reason);
});


/***/ })
/******/ 	]);
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

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(41);
const express = __webpack_require__(171);
const swagger_1 = __webpack_require__(42);
const helmet_1 = __webpack_require__(172);
const file_logger_service_1 = __webpack_require__(173);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useLogger(new file_logger_service_1.FileLogger());
    app.use((0, helmet_1.default)());
    app.enableCors({
        credentials: true,
        origin: [
            'http://localhost:5173',
            'https://www.smartprints.ng',
            'https://smartprints.ng',
            'https://api.smartprints.ng'
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Origin',
            'Accept',
            'access-control-allow-origin',
            'referrer-policy',
            'X-Requested-With'
        ],
        exposedHeaders: ['Content-Disposition'],
        maxAge: 3600
    });
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