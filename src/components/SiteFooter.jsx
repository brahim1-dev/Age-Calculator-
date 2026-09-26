const GITHUB_URL = 'https://github.com/brahim1-dev'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <span className="footer-credit">
        <span className="code-mark" aria-hidden="true">&lt;/&gt;</span>
        <span>with <span className="heart" aria-label="love">♥</span> by</span>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer">
          Eng Brahim
        </a>
      </span>
      <a className="github-link" href={GITHUB_URL} target="_blank" rel="noreferrer">
        github.com/brahim1-dev
      </a>
    </footer>
  )
}

export default SiteFooter