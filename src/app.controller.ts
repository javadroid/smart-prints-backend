import { serviceResponse } from "@app/service";
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  Req,
  UseGuards,
  NotFoundException,
  Query,
} from "@nestjs/common";

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiTags,
  PickType,
} from "@nestjs/swagger";
import { readFileSync } from "fs";
import { AppService } from "./app.service";

@Controller("")
@ApiBearerAuth("access-token")
export class AppController {
constructor(private readonly appService: AppService) {}

  private readonly logger = new Logger(AppController.name);



  @Get('states')
  @ApiQuery({ name: 'stateName', required: false })
  @ApiQuery({ name: 'lga', required: false })
  async getStates(@Query() query: any) {
const state = await this.appService.getStates(query);
   return serviceResponse({
        message: "Success",
        data: state,
      });
 
  }

   @Get('site-settings')
  async getSiteSettings() {
    return this.appService.getSiteSettings();
  }
}
