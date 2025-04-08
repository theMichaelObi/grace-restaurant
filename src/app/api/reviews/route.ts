import { reviews } from "@/app/data/data";

export async function GET() {
    return Response.json(reviews);
}