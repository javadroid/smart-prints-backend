import { Model } from "mongoose"
import { Repository } from "typeorm"

export interface ObjectReturnType{

    message?:string,
    data?:any[]|any
    status?:boolean
    metadata?:any
}

 interface GetMetadataType{

    model?:typeof Model |any ,
    query?:any,

    querys?:any

}
export function serviceResponse({ message, data, status,metadata }:ObjectReturnType) {
  return {
    message,
    data,
    status,
    metadata
  };
}

export async function getMetadata({ model, query, querys, }:GetMetadataType) {
 
  const { page = 1, limit = 10 } = query;
    const total= await model.countDocuments(querys)

  return {
      total,
      totalPage:Math.ceil(total / limit),
      currentPage:page,
      limit: limit,
    };
}
export async function getSqlMetadata({ model, query, querys, }:GetMetadataType) {
 
  const { page = 1, limit = 10 } = query;
      const total= await (model as Repository<any>).count(querys)

  return {
      total,
      totalPage:Math.ceil(total / limit),
      currentPage:page,
      limit: limit,
    };
}

