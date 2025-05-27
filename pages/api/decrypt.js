import { buffer } from 'micro';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Função de descriptografia falsa (simulação)
async function decryptAudio(bufferData) {
  // TODO: substitua isso pela sua lógica real
  return bufferData;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const rawBody = await buffer(req);
    const decrypted = await decryptAudio(rawBody);

    res.setHeader('Content-Type', 'audio/ogg');
    return res.status(200).send(decrypted);
  } catch (error) {
    console.error('Erro:', error);
    return res.status(500).json({ error: 'Erro ao processar o áudio' });
  }
}
