export function ImageGDrive({ src, alt }) {
  const regexUrl = new RegExp('^https://drive.google.com/file/d/(.*?)/(.*)')
  return (
    src.match(regexUrl) && (
      <img
        className="max-h-[690px] mb-7"
        alt={alt}
        src={src.replace(regexUrl, 'https://drive.google.com/uc?export=view&id=$1')}
      />
    )
  )
}
