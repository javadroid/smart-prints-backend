import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartSqlModel } from '@app/sql-schema/cart.sql-schema';
import { CartDto, UserDTO } from '@app/dto';
import { getSqlMetadata, ObjectReturnType, serviceResponse } from '@app/service';

@Injectable()
export class CartSqlService {
  constructor(
    @InjectRepository(CartSqlModel)
    private readonly cartRepository: Repository<CartSqlModel>,
  ) {}

  async create(cart: CartDto,userData:UserDTO): Promise<ObjectReturnType> {
    const newCart = this.cartRepository.create({...cart, userID: userData._id.toString() });
    const data=await this.cartRepository.save(newCart);
    return serviceResponse({ data, message: 'Cart created', status: true });
  
  }

   async findAll(query: any): Promise<ObjectReturnType> {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;

    const carts = await this.cartRepository.find({
        take:limit,
        skip,
        relations:['productID']
    })

    return serviceResponse({ data: carts, message: 'Carts retrieved', status: true, metadata: await getSqlMetadata({ model: this.cartRepository, query, querys: {} }) });
  }

  async findByUser(userID: string): Promise<ObjectReturnType> {
    const cart = await this.cartRepository.find({ where:{userID}, relations:['productID'] })
    return serviceResponse({ data: cart, message: 'Cart retrieved', status: true });
  }

  async update(id: string, updateCartDto: CartDto): Promise<ObjectReturnType> {
    const updated = await this.cartRepository.update(id, updateCartDto,);
    if (!updated) return serviceResponse({ message: 'Cart not found', status: false });
    return serviceResponse({ data: updated, message: 'Cart updated', status: true });
  }

  async delete(id: string): Promise<ObjectReturnType> {
    const result = await this.cartRepository.delete(id);
    if (!result) return serviceResponse({ message: 'No carts deleted', status: false });
    return serviceResponse({ message: `Cart deleted`,  status: true });
  }

  //clear user cart
  async clearUserCart(userID: string): Promise<ObjectReturnType> {
    const result = await this.cartRepository.delete({ userID:userID });
 
    return serviceResponse({ message: `${result.affected} cart(s) deleted`, status: true });
}
}