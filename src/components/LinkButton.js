export default function LinkButton({item}) {
  return (
    <p key={item.id}>
      <a href={item.link} target="_blank" rel="noreferrer" className="link d-flex align-items-center justify-content-center text-center">
        {item.content}
      </a>
    </p>
  )
}