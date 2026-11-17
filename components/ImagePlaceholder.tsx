type Props = {
  caption: string;
  src: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/** A product or lifestyle photo that always fills its box (see .photo). */
export default function ImagePlaceholder({ caption, src, className, priority, sizes }: Props) {
  return (
    <div className={`photo ${className ?? ""}`}>
      <img src={src} alt={caption} sizes={sizes} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" />
    </div>
  );
}
