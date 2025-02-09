import { NextResponse } from 'next/server'
import {NextRequest} from "next/server";
import { getToken } from 'next-auth/jwt'

export async function middleware(req:NextRequest) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET })
    const { pathname } = req.nextUrl

    if (!token) {
        if (pathname.startsWith('/splash') || pathname.startsWith('/auth/signin') || pathname.startsWith('/auth/signup')) {
            return NextResponse.next()
        }

        // Redirect unauthenticated users to /splash
        return NextResponse.redirect(new URL('/splash', req.url))
    }

    if (pathname.startsWith('/splash') || pathname.startsWith('/auth/signin') || pathname.startsWith('/auth/signup')) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/auth/signin', '/auth/signup', '/splash', '/dashboard',]
}
