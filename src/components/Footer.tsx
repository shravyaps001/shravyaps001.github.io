export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Shravya P S. All rights reserved.</p>
      </div>
    </footer>
  );
}
