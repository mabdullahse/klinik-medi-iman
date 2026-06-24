import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
      <div className="text-center px-4">
        <p className="font-playfair text-8xl font-bold text-maroon/20 mb-4">404</p>
        <h1 className="font-playfair text-3xl font-bold text-maroon-dark mb-3">
          Halaman Tidak Dijumpai
        </h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Maaf, halaman yang anda cari tidak wujud atau telah dipindahkan.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/">
            <Button variant="default">Kembali ke Laman Utama</Button>
          </Link>
          <a href="https://wa.me/601169863974" target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp">WhatsApp Kami</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
