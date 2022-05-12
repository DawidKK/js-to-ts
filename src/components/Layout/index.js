const Layout = ({ children }) => {
  return (
    <main>
      <header>
        <nav>navigation</nav>
      </header>
      {children}
    </main>
  );
};

export default Layout;
