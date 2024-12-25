import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// シークレットトークンを環境変数から取得
const SECRET_TOKEN = process.env.NEXT_PUBLICK_MICROCMS_SECRET;

export async function POST(req: NextRequest) {
  const token = req.headers.get("x-microcms-signature");
  if (!token || token !== SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    // 再検証対象のページを配列で管理
    const revalidatePaths = ["/gallery", "/"];

    // すべてのページを再検証
    for (const path of revalidatePaths) {
      revalidatePath(path); // キャッシュの再検証
      console.log(`Revalidated: ${path}`);
    }

    return NextResponse.json({
      message: `Revalidated paths: ${revalidatePaths.join(", ")}`,
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json(
      { message: "Error during revalidation" },
      { status: 500 }
    );
  }
}
