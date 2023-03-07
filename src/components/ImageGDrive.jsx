export function ImageGDrive({ src, alt }) {
  const regexUrl = new RegExp('^https://drive.google.com/file/d/(.*?)/(.*)')
  return (
    src.match(regexUrl) && (
      <img alt={alt} src={src.replace(regexUrl, 'https://drive.google.com/uc?export=view&id=$1')} />
    )
  )
}
