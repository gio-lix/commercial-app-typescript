import {NextFetchEvent, NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    // const cookieData = req.cookies.appSession
    // if (cookieData) {
    //     return NextResponse.next()
    // }
    // return NextResponse.redirect('/api/auth/login')
}