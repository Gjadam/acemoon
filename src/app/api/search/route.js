import connectToDB from "@/configs/db"
import ProductModel from "@/models/Product"
import CollectionModel from "@/models/Collection"

export async function GET(req) {
    try {
        connectToDB()
        const url = new URL(req.url);
        const queryParams = Object.fromEntries(url.searchParams).q;

        if (!queryParams) {
            return Response.json(
                {message: "Search word not found !"},
                {status: 400}
            )  
        }  
        
        const products = await ProductModel.find({ name: {$regex:queryParams} }).limit(4)
        const collections = await CollectionModel.find({ name: {$regex:queryParams} }).limit(4)
 
        return Response.json(
            {products: products, collections: collections}
        )
    
    } catch(err) {
        return Response.json(
            {message: err},
            {status: 500}
        )
    }
}