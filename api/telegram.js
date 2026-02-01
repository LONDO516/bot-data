import axios from "axios";

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const msg = req.body.message;
  if (!msg?.text) return res.json({ ok: true });

  const chatId = msg.chat.id;
  const text = msg.text;

  if (text.startsWith("/start")) {
    await send(chatId, "🤖 Bot aktif\nGunakan /deposit <nominal>");
  }

  if (text.startsWith("/deposit")) {
    const amount = parseInt(text.split(" ")[1]);
    if (!amount) {
      return send(chatId, "Format salah\n/deposit 50000");
    }

    // di sini nanti create invoice Pakasir
    await send(chatId, `💳 Silakan bayar Rp${amount}`);
  }

  res.json({ ok: true });
}

async function send(chatId, text) {
  return axios.post(
    `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
    { chat_id: chatId, text }
  );
}