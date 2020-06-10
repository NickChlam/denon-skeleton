import { Router } from 'https://deno.land/x/oak/mod.ts';
import * as prod from '../controllers/products.ts'


const router = new Router();

router.get('/api/v1/products', prod.getProducts)
    .get('/api/v1/products/:id', prod.getProduct)
    .post('/api/v1/products', prod.addProduct)
    .delete('/api/v1/products/:id', prod.deleteProduct)

export default router;