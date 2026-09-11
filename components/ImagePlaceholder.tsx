type Props = {
  caption: string;
  src?: string;
  aspectRatio?: string;
  minHeight?: number | string;
  className?: string;
};

/**
 * Stands in for real photography. Drop a `src` in once product / lifestyle
 * shots exist and this renders the image instead of the caption — no other
 * change needed at call sites.
 */
export default function ImagePlaceholder({ caption, src, aspectRatio, minHeight, className }: Props) {
  return (
    <div className={className} style={{ position: "relative", aspectRatio, minHeight, width: "100%", height: aspectRatio ? undefined : "100%" }}>
      <div className="img-slot">{src ? <img src={src} alt={caption} /> : <span>{caption}</span>}</div>
    </div>
  );
}
