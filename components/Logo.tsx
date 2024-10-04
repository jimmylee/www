import styles from '@components/Logo.module.scss';

export default function Logo(props) {
  return (
    <a className={styles.logo} href={props.href} aria-label="Int Dev">
      <svg viewBox="0 0 494.25 80.29" fill="currentColor" aria-hidden {...props}>
        <path d="m57.8,29.75h0c0,5.34,4.33,9.67,9.67,9.67h38.11c5.34,0,9.67,4.33,9.67,9.67v.54c0,5.34-4.33,9.67-9.67,9.67h-38.11c-5.34,0-9.67,4.33-9.67,9.67v.29c0,5.34-4.33,9.67-9.67,9.67H9.67c-5.34,0-9.67-4.33-9.67-9.67v-.54c0-5.34,4.33-9.67,9.67-9.67h38.11c5.34,0,9.67-4.33,9.67-9.67v-.02c0-5.34-4.33-9.67-9.67-9.67H9.67c-5.34,0-9.67-4.33-9.67-9.67v-.54c0-5.34,4.33-9.67,9.67-9.67h38.11c5.34,0,9.67-4.33,9.67-9.67v-.27c0-5.34,4.33-9.67,9.67-9.67h38.45c5.34,0,9.67,4.33,9.67,9.67v.55c0,5.34-4.33,9.67-9.67,9.67h-38.11c-5.34,0-9.67,4.33-9.67,9.67Z" />
        <g>
          <path d="m136.93,75.57l7.21-2.12V5.34l-7.21-2.02V0h26.69v3.32l-7,2.02v68.11l7,2.12v3.37h-26.69v-3.37Z" />
          <path d="m182.75,14.67v58.88l7.26,2.02v3.37h-19.54v-3.37l7.31-2.02V5.24l-7.31-1.92V0h20.63l31.88,51.37V5.24l-7.31-1.92V0h19.59v3.32l-7.36,1.92v75.06h-4.72L182.75,14.67Z" />
          <path d="m253.86,75.57l9.59-2.18V5.13h-14.25c-3.52,5.7-5.96,12.44-7.57,18.09h-2.8l2.95-23.22h55.57l3.01,23.22h-2.8c-1.66-5.65-3.89-12.39-7.41-18.09h-14.2v68.27l9.54,2.18v3.37h-31.62v-3.37Z" />
          <path d="m304.76,75.47l7.1-1.97V5.24l-7.1-1.92V0h21.87c13.94,0,21.98,1.92,28.35,7.46,7.77,6.74,12.7,18.14,12.7,31.98s-5.23,26.75-13.32,33.43c-5.29,4.35-11.04,6.06-20.01,6.06h-29.6v-3.47Zm42.97-8.92c3.89-5.8,5.75-15.08,5.75-27.47s-1.87-20.73-5.81-26.49c-3.52-5.13-8.6-7.41-16.22-7.41h-7.1v62.51c0,4.46,2.23,6.17,8.4,6.17,6.89,0,11.56-2.23,14.98-7.31Z" />
          <path d="m374.05,75.57l7.05-2.02V5.24l-7.05-1.92V0h48.93l1.5,22.55h-3.01c-1.4-5.55-3.42-11.77-6.22-17.31h-21.67v29.44h11.61c1.76-3.94,2.75-7.98,3.42-11.82h3.01v28.72h-3.01c-.62-3.89-1.76-7.93-3.42-11.77h-11.61v33.8h21.2c3.47-6.22,5.39-12.44,7.36-18.66h3.78l-3.37,24h-48.52v-3.37Z" />
          <path d="m436.92,9.59c-1.5-4.61-2.9-5.75-8.66-6.27V0h31.72v3.32c-8.03.73-9.12,1.71-7.67,6.79l12.75,44.89.78.05,11.77-40.48c2.07-7.36.36-9.8-8.09-11.25V0h24.73v3.32c-7.77,1.55-9.17,3.32-11.61,11.4l-19.85,65.31h-3.21l-22.65-70.44Z" />
        </g>
      </svg>
    </a>
  );
}
