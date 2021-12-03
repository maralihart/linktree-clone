export default function Footer({ information }) {
  const colors = information.colors
  return (
    <footer style={{
      background: colors.primary,
      color: colors.accent
    }}>
      <p class="tiny" style={{ fontSize: "6pt", color: "inherit"}}>website designed & coded by <a href="https://mara.fyi">mara hart</a></p>
    </footer>
  );
}