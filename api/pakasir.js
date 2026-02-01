import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const signature = req.headers["x-pakasir-signature"];
  const body = req.body;

  const hash = crypto
    .createHmac("sha256", process.env.PAKASIR_SECRET)
    .update(JSON.stringify(body))
    .digest("hex");

  if (hash !== signature) {
    return res.status(403).json({ error: "Invalid signature" });
  }

  if (body.status === "PAID") {
    // update GitHub JSON
    // tambah saldo user
    // kirim notif Telegram
  }

  res.json({ success: true });
}