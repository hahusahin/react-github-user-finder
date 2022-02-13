import React from "react"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="p-4 footer bg-base-300 text-base-content footer-center mt-12">
      <div>
        <p>Copyright © {year}</p>
      </div>
    </footer>
  )
}

export default Footer
