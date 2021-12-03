export default function LinkButton({item, information}) {
  const colors = information.colors
  return (
    <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="link"
      style={{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        display: "flex",
        background: colors.secondary,
        color: colors.primary,
        width: "100%",
        minHeight: "50px",
        marginTop: "10px",
        verticalAlign: "center",
        padding: "2%"
      }}>
      {item.content}
    </a>
  )
}