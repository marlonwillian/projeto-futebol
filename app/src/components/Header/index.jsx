import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <i class="fa-solid fa-house" style={{fontSize: "25px"}}></i>
      <div className={styles.divInput}>
        <i class="fa-solid fa-magnifying-glass" style={{color: "#757575"}}></i>
        <input type="text" placeholder="Pesquisar"/>
      </div>
      <span>Times favoritos</span>
    </header>
  );
}

export default Header;