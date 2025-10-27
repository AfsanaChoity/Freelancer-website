import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// Only allow POST for file uploads
export function GET() {
  return new NextResponse(null, { status: 405 });
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    // Ant Design Upload sends the file field as 'file' by default
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: 'No file received' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    await fs.promises.mkdir(uploadsDir, { recursive: true });

    const filename = `${Date.now()}-${file.name}`;
    const filepath = path.join(uploadsDir, filename);

    await fs.promises.writeFile(filepath, buffer);

    // Return a JSON response with the public URL for preview
    return NextResponse.json({ url: `/uploads/${filename}` });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
