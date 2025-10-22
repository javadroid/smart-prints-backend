
import { ROLES_KEY } from '@app/decorator';
import { Role } from '@app/enum';
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    // if (!requiredRoles) {
    //   return true;
    // }
    const { user } = context.switchToHttp().getRequest();
   
    const hasRole = () => (user.isAdmin||user.isSuperAdmin);

    if (!user || !hasRole()) {
      throw new ForbiddenException('You do not have permission to access this resource');
    }
    return (user.isAdmin||user.isSuperAdmin);
  }
}
