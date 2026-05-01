export default function regionImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Normalise path: decode any existing %20 etc, then re-encode only unsafe chars
  const clean = encodeURIComponent(decodeURIComponent(src)).replace(/%2F/gi, "/");
  const rawUrl = `raw.githubusercontent.com/javadabdullaev97-coder/one/main/public${clean}`;
  return `https://images.weserv.nl/?url=${rawUrl}&w=${width}&q=${quality ?? 75}&output=webp&fit=cover`;
}
