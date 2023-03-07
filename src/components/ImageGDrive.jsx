export function ImageGDrive({ src, alt }) {
  return (
    <img
      alt={alt}
      src={src.replace(
        new RegExp('^https://drive.google.com/file/d/(.*?)/(.*)'),
        'https://drive.google.com/uc?export=view&id=$1'
      )}
    />
  )
}
