
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
  import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
  
  import { Request } from 'express';
import { Model } from 'mongoose';
import { UserModel, UserDoc } from '@app/schema';
import { UserSqlModel } from '@app/sql-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(
        
          @InjectRepository(UserSqlModel)
    private readonly userRepository: Repository<UserSqlModel>,
        private jwtService: JwtService,
        private configService:ConfigService
    
    ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      
      if (!token) {
        throw new UnauthorizedException();
      }
      
      try {
        const payload = await this.jwtService.verifyAsync(
          token,
          { 
            secret: this.configService.get("JWT_SECRET")
          }
        );
       const user=await this.userRepository.findOneBy({_id:payload.sub})
     console.log(user)
        request['user'] = user;
        request['userID'] = user._id;
      } catch {
        throw new UnauthorizedException("auth");
      }
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }
  