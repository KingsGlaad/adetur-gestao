import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  const playStoreUrl =
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
    "https://play.google.com/store/apps";
  const appStoreUrl =
    process.env.NEXT_PUBLIC_APP_STORE_URL ||
    "https://www.apple.com/app-store/";

  // Redireciona para iOS App Store
  if (isIOS) {
    return NextResponse.redirect(appStoreUrl, { status: 307 });
  }

  // Redireciona para Android Play Store
  if (isAndroid) {
    return NextResponse.redirect(playStoreUrl, { status: 307 });
  }

  // Caso seja desktop ou não identificado, redireciona para a página do aplicativo
  const host = request.headers.get("host") || "localhost:3000";
  const protocol = request.headers.get("x-forwarded-proto") || "http";
  const baseUrl = `${protocol}://${host}`;

  return NextResponse.redirect(new URL("/aplicativo", baseUrl), { status: 307 });
}
