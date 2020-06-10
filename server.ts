
import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './routes/routes.ts'

const port = 8000;
const app = new Application();


app.use(router.routes());
app.use(router.allowedMethods());

router.get('/api/v1/products', ({response}: { response: any}) => {
    response.body = 'hello World'

})



console.log(`Now serving on port ${port} 🔥`);

await app.listen({ port })