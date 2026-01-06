/* On importe React */
import React from "react"; /* React */

/* On importe les styles */
import styles from "./Button.module.scss"; /* Styles du bouton */

/* Composant Button */
export default function Button({ /* Props */
  children, /* Texte/Contenu */
  variant = "primary", /* Variante */
  size = "md", /* Taille */
  type = "button", /* Type HTML */
  onClick, /* Click handler */
  className = "", /* Classe extra */
  disabled = false, /* État disabled */
}) {
  /* On calcule les classes */
  const classes = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`; /* Class string */

  /* On retourne le bouton */
  return (
    <button /* Bouton HTML */
      type={type} /* Type */
      className={classes} /* Classes */
      onClick={onClick} /* Click */
      disabled={disabled} /* Disabled */
    >
      {children} {/* Contenu */}
    </button>
  );
}
