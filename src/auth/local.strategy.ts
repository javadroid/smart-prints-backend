
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Dependencies } from '@nestjs/common';

import { AuthSqlService } from './auth-sql.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService:AuthSqlService) {
    super();
    this.authService = authService;
  }

  async validate(username:string, password:string) {
   console.log("Token:", {username, password});
       
    const user = await this.authService.login(username, password);

    if (!user) {
      throw new UnauthorizedException("local strategy failed");
    }
    return user;
  }
}
