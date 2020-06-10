import { Product } from '../models/product.ts';
import { v4 } from 'https://deno.land/std/uuid/mod.ts';


let products: Product[] = [
    {
        id : "1",
        name: "Product One",
        description: "desc prod 1",
        price: 19.99

    },
    {
        id : "2",
        name: "Product two",
        description: "desc prod 2",
        price: 29.99

    },
    {
        id : "3",
        name: "Product 3",
        description: "desc prod 3",
        price: 39.99

    }
]


// @desc    Get all products
// @route   GET /api/v1/products
export const getProducts =  (context:any) => {
    context.response.body = {
        success: true, 
        data: products
    }
}

// @desc    Get a product
// @route   GET /api/v1/products/:id
export const getProduct = ({params, response}: {params: {id: string}, response: any}) => {
    const product: Product | undefined = products.find(p => p.id === params.id);

    if(product){
        response.status = 200;
        response.body = {
            success: true,
            data: product
        }
    } else {
        response.status = 404;
        response.body = {
            
            success: false,
            message: "no product found"
        }

    }
}

// @desc    add a product
// @route   POST /api/v1/products 
export const addProduct = async (context:any) => {
    const body = await context.request.body();
  
    if(!context.request.hasBody) {
        context.response.status = 400;
        context.response.body = {
            success: false, 
            message: 'no Data in body'
        }
    } else {
        // add new prod 
        const prod: Product = body.value
        try{
            var id = parseInt(products[products.length -1].id) + 1
        }
        catch {
            id = 1;
        }
        
        console.log(id)
        prod.id = id.toString();
        products.push(prod)
        
        context.response.status = 201;
        context.response.body = {
            success: true,
            data: prod
        }

    }
}

export const deleteProduct = async (context:any) => {
    // check if exists
    const prod: Product | undefined = products.find(p => p.id === context.params.id)

    if(prod){
        const index = products.findIndex(p => p.id === context.params.id);
        products.splice(index, 1);
        context.response.status = 201;
        context.response.body = {
            success: true,
            data: prod
            }   
        } else {
            context.response.status = 404;
            context.response.body = {
                success: false,
                message: "not found"
        }
    }

    
}


