import es from "../content/es.json";
import en from "../content/en.json";
import it from "../content/it.json";

// Definir el tipo explícito de languages
export type Languages = {
    es: typeof es;
    en: typeof en;
    it: typeof it;
};

// Crear el objeto de idiomas con el tipo definido
export const languages: Languages = { es, en, it };

// Función para obtener contenido por idioma
export function getContent(locale: string) {
    // Si el idioma no existe, usar el predeterminado
    const validLocale = locale in languages ? locale : 'es';
    return languages[validLocale as keyof Languages];
}