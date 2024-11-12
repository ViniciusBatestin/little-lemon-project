function Footer() {
  return (
    <div className="container">
      <footer className="App-footer">
        <h1> My footer </h1>
        <img src="./icons_assets/Logo.svg" alt="Logo" />
        <h2>Doormat navigation</h2>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="reservations.html">Reservations</a></li>
            <li><a href="order_online.html">Order Online</a></li>
            <li><a href="login.html">Login</a></li>
        </ul>

      <h2>Contact</h2>
        <ul>
          <p>Phone number: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
          <p>Addres: Las Ramblas/ Barcelona</p>
        </ul>

        <h2>Social Media</h2>
        <ul>
          <li><a href="instagram">Instagram</a></li>
          <li><a href="Facebook.html">Facebook</a></li>
          <li><a href="tiktok.html">TikTok</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;
