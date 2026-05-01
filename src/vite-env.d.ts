/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** EmailJS private key; omit or leave empty if not required */
  readonly VITE_EMAILJS_ACCESS_TOKEN?: string | undefined;
}
