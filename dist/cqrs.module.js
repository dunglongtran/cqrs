"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const query_bus_1 = require("./query-bus");
const command_bus_1 = require("./command-bus");
const event_publisher_1 = require("./event-publisher");
const event_bus_1 = require("./event-bus");
let CQRSModule = class CQRSModule {
};
CQRSModule = __decorate([
    common_1.Module({
        providers: [query_bus_1.QueryBus, command_bus_1.CommandBus, event_bus_1.EventBus, event_publisher_1.EventPublisher],
        exports: [query_bus_1.QueryBus, command_bus_1.CommandBus, event_bus_1.EventBus, event_publisher_1.EventPublisher],
    })
], CQRSModule);
exports.CQRSModule = CQRSModule;
