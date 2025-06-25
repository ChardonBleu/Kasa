import kasaBW from "/logoBW.png";

export default function Header() {
  return (
    <>
      <footer className="footer">
        <img src={kasaBW} alt="logo kasa" className="logo"></img>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}
