import Backendless from "@/lib/backendless"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, context: { params: Promise<{ contentID: string }> }) {
    try {
        const { contentID } = await context.params;

        if (!contentID) {
            return NextResponse.json({error: 'Content ID is required'}, {status: 400})
        }
        
        console.log("Fetching article with ID:", contentID);

        const articleData = await Backendless.Data.of('ign-content').findById(contentID)
        if (!articleData) {
            return NextResponse.json({error: 'Article not found'}, {status: 404})
        }
        console.log(articleData)
        
        return NextResponse.json(articleData,{status: 200})
    } catch (error) {
        console.error('Error fetching article:', error)
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500})
        
    }
}