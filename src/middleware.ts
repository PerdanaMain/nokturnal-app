import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isAdminRoute = (pathname:string) => {
  return pathname.startsWith("/admin");
  
}

export const middleware = (req: NextRequest)=>{


}

export const config = {
  // halaman yg mau apply middleware
  matcher:["/admin","/admin/products","/admin/orders","/admin/users","/payments/:path*", "/transactions/:path*"]
}