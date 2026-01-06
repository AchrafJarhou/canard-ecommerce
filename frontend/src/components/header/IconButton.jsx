/* On importe React */
import React from "react"; /* React */

/* Styles */
import styles from "./IconButton.module.scss"; /* Styles */

/* Composant IconButton */
export default function IconButton({ /* Props */
  label, /* Accessibilité */
  onClick, /* Click handler */
  children, /* Icône */
  className = "", /* Classe extra */
  type = "button", /* Type */
}) {
  /* Rendu */
  return (
    <button /* Bouton */
      type={type} /* Type */
      className={`${styles.iconBtn} ${className}`} /* Classes */
      aria-label={label} /* Label a11y */
      onClick={onClick} /* Click */
    >
      {children} {/* Icône */}
    </button>
  );
}
